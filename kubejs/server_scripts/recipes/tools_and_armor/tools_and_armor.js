const armorPieces = ["helmet", "chestplate", "leggings", "boots"];

global.createToolBreakRecipe = (event, inputItem, outputItem) => {
	// Create a recipe id from the output item (everything after the colon)
	let recipeId = "kubejs:tools_and_armor/" + outputItem.split(":")[1];
	event
		.shapeless(outputItem, [inputItem, "kubejs:refined_stone"])
		.modifyResult((inventory, itemstack) => {
			let item = inventory.find(Item.of(inputItem));
			let nbt = item.nbt;
			if (nbt == null) {
				nbt = {};
			}
			return Item.of(outputItem).withNBT(nbt);
		})
		.id(recipeId);
};

ServerEvents.recipes((event) => {
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];

		let repairKit = `kubejs:${tierName}_repair_kit`;

		// Repair Kit
		if (!tier.cannotBeBroken) {
			// Edge case for Netherite
			if (tierName == "netherite") {
				event.smithing(repairKit, "kubejs:diamond_repair_kit", "minecraft:netherite_scrap");
				event.recipes.create
					.crushing(Item.of("minecraft:netherite_scrap", 1), repairKit)
					.id("kubejs:tools_and_armor/repair_kit_crushing/netherite");
			} else {
				event
					.shaped(repairKit, [" I ", "ISI", " I "], {
						I: tier.material,
						S: "minecraft:string",
					})
					.id(`kubejs:tools_and_armor/repair_kit/${tierName}`);
				event.recipes.create
					.crushing(Item.of(tier.material, 4), repairKit)
					.id(`kubejs:tools_and_armor/repair_kit_crushing/${tierName}`);
			}
		}

		// Skip tiers that don't need upgrading
		// We only store these tiers in the object so we can reference them as a previous tier
		if (tier.hasOwnProperty("doesntNeedUpgrading")) {
			continue;
		}

		let stitching = `kubejs:${tierName}_stitching`;
		let toolBlade = `kubejs:${tierName}_blade`;
		let paxelHead = `kubejs:${tierName}_head`;

		// Armor
		if (tier.hasArmor) {
			let previousTierName = tier.previousArmorTier;
			let previousTier = global.tiers[previousTierName];
			// Unfinished Stitching
			event.recipes
				.createDeploying(`kubejs:unfinished_${tierName}_stitching`, ["kubejs:leather_stitching", tier.material])
				.id("kubejs:tools_and_armor/unfinished_stitching/" + tierName);
			// Stitching
			event.recipes.create
				.sequenced_assembly([`kubejs:${tierName}_stitching`], `kubejs:unfinished_${tierName}_stitching`, [
					event.recipes.createDeploying(`kubejs:unfinished_${tierName}_stitching`, [
						`kubejs:unfinished_${tierName}_stitching`,
						tier.material,
					]),
				])
				.transitionalItem(`kubejs:unfinished_${tierName}_stitching`)
				.loops(Math.round(5 * tier.armorCostMultiplier))
				.id("kubejs:tools_and_armor/stitching/" + tierName);

			// Armor Pieces themeselves
			armorPieces.forEach((piece) => {
				let outputItem = `${tier.mod}:${tierName}_${piece}`;
				let inputItem = `${previousTier.mod}:${previousTierName}_${piece}`;
				if (!tier.hasOwnProperty("cannotBeBroken")) {
					global.createToolBreakRecipe(event, outputItem, `kubejs:broken_${tierName}_${piece}`);
				}
				event
					.smithing(outputItem, inputItem, stitching)
					.id(`kubejs:tools_and_armor/${piece}/${tierName}_from_${previousTierName}`);
			});
		}
		// Tools
		if (tier.hasTools) {
			// Create a recipe for breaking the tool into it's broken form
			// And a recipe for repairing the tool
			// Skip if the tool cannot be broken
			if (!tier.hasOwnProperty("cannotBeBroken")) {
				// Knife
				global.createToolBreakRecipe(
					event,
					`${tier.knifeMod}:${tierName}_knife`,
					`kubejs:broken_${tierName}_knife`
				);
				event
					.smithing(`${tier.knifeMod}:${tierName}_knife`, `kubejs:broken_${tierName}_knife`, repairKit)
					.id(`kubejs:tools_and_armor/knife/${tierName}_repair`);
				// Sword
				global.createToolBreakRecipe(event, `${tier.mod}:${tierName}_sword`, `kubejs:broken_${tierName}_sword`);
				event
					.smithing(`${tier.mod}:${tierName}_sword`, `kubejs:broken_${tierName}_sword`, repairKit)
					.id(`kubejs:tools_and_armor/sword/${tierName}_repair`);
				// Hoe
				global.createToolBreakRecipe(event, `${tier.mod}:${tierName}_hoe`, `kubejs:broken_${tierName}_hoe`);
				event
					.smithing(`${tier.mod}:${tierName}_hoe`, `kubejs:broken_${tierName}_hoe`, repairKit)
					.id(`kubejs:tools_and_armor/hoe/${tierName}_repair`);
				// Paxel
				global.createToolBreakRecipe(event, `kubejs:${tierName}_paxel`, `kubejs:broken_${tierName}_paxel`);
				event
					.smithing(`kubejs:${tierName}_paxel`, `kubejs:broken_${tierName}_paxel`, repairKit)
					.id(`kubejs:tools_and_armor/paxel/${tierName}_repair`);
			}

			let previousTierName = tier.previousToolTier;
			let previousTier = global.tiers[previousTierName];

			// Blade
			event.recipes.create
				.sequenced_assembly([`kubejs:${tierName}_blade`], "kubejs:wooden_blade", [
					event.recipes.createDeploying(`kubejs:incomplete_${tierName}_blade`, [
						`kubejs:incomplete_${tierName}_blade`,
						tier.material,
					]),
				])
				.transitionalItem(`kubejs:incomplete_${tierName}_blade`)
				.loops(Math.round(2 * tier.toolCostMultiplier))
				.id("kubejs:tools_and_armor/blade/" + tierName);
			// Paxel Head
			event.recipes.create
				.sequenced_assembly([`kubejs:${tierName}_head`], "kubejs:wooden_head", [
					event.recipes.createDeploying(`kubejs:incomplete_${tierName}_head`, [
						`kubejs:incomplete_${tierName}_head`,
						tier.material,
					]),
				])
				.transitionalItem(`kubejs:incomplete_${tierName}_head`)
				.loops(Math.round(7 * tier.toolCostMultiplier))
				.id("kubejs:tools_and_armor/paxel_head/" + tierName);

			// Knife
			event
				.smithing(
					`${tier.knifeMod}:${tierName}_knife`,
					`${previousTier.knifeMod}:${previousTierName}_knife`,
					toolBlade
				)
				.id(`kubejs:tools_and_armor/knife/${tierName}_from_${previousTierName}`);
			// Sword
			event
				.smithing(`${tier.mod}:${tierName}_sword`, `${previousTier.mod}:${previousTierName}_sword`, toolBlade)
				.id(`kubejs:tools_and_armor/sword/${tierName}_from_${previousTierName}`);
			// Hoe
			event
				.smithing(`${tier.mod}:${tierName}_hoe`, `${previousTier.mod}:${previousTierName}_hoe`, toolBlade)
				.id(`kubejs:tools_and_armor/hoe/${tierName}_from_${previousTierName}`);
			// Paxel
			event
				.smithing(`kubejs:${tierName}_paxel`, `kubejs:${previousTierName}_paxel`, paxelHead)
				.id(`kubejs:tools_and_armor/paxel/${tierName}_from_${previousTierName}`);
		}
		// Horse Armor
		if (tier.horseArmor) {
			let previousTierName = tier.previousHorseTier;
			let previousTier = global.tiers[previousTierName];

			event
				.smithing(
					tier.horseArmor,
					previousTier.horseArmor,
					Item.of(`kubejs:unfinished_${tierName}_stitching`).weakNBT()
				)
				.id(`kubejs:tools_and_armor/horse_armor/${tierName}_from_${previousTierName}`);
		}
	}
});
