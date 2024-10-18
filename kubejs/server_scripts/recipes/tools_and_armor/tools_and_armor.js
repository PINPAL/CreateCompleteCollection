const armorPieces = ["helmet", "chestplate", "leggings", "boots"];

global.createToolBreakRecipe = (event, inputItem, outputItem) => {
	// Create a recipe id from the output item (everything after the colon)
	let recipeId = "cosmic_contraptions:tools_and_armor/" + outputItem.split(":")[1];
	event
		.shapeless(outputItem, [inputItem, "cosmic_contraptions:refined_stone"])
		.modifyResult((inventory, itemstack) => {
			let item = inventory.find(Item.of(inputItem));
			let nbt = item.nbt;
			if (nbt == null) {
				nbt = {};
			}
			nbt.Damage = 0;
			return Item.of(outputItem).withNBT(nbt);
		})
		.id(recipeId);
};

ServerEvents.recipes((event) => {
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];

		let repairKit = `cosmic_contraptions:${tierName}_repair_kit`;

		// Repair Kit
		if (!tier.cannotBeBroken) {
			// Edge case for Netherite
			if (tierName == "netherite") {
				event.smithing(repairKit, "cosmic_contraptions:diamond_repair_kit", "minecraft:netherite_scrap");
				event.recipes.create
					.crushing(Item.of("minecraft:netherite_scrap", 1), repairKit)
					.id("cosmic_contraptions:tools_and_armor/repair_kit_crushing/netherite");
			} else {
				event
					.shaped(repairKit, [" I ", "ISI", " I "], {
						I: tier.material,
						S: "minecraft:string",
					})
					.id(`cosmic_contraptions:tools_and_armor/repair_kit/${tierName}`);
				event.recipes.create
					.crushing(Item.of(tier.material, 4), repairKit)
					.id(`cosmic_contraptions:tools_and_armor/repair_kit_crushing/${tierName}`);
			}
		}

		// Skip tiers that don't need upgrading
		// We only store these tiers in the object so we can reference them as a previous tier
		if (tier.hasOwnProperty("doesntNeedUpgrading")) {
			continue;
		}

		let stitching = `cosmic_contraptions:${tierName}_stitching`;
		let toolBlade = `cosmic_contraptions:${tierName}_blade`;
		let paxelHead = `cosmic_contraptions:${tierName}_head`;

		// Armor
		if (tier.hasArmor) {
			let previousTierName = tier.previousArmorTier;
			let previousTier = global.tiers[previousTierName];
			// Unfinished Stitching
			event.recipes
				.createDeploying(`cosmic_contraptions:unfinished_${tierName}_stitching`, [
					"cosmic_contraptions:leather_stitching",
					tier.material,
				])
				.id("cosmic_contraptions:tools_and_armor/unfinished_stitching/" + tierName);
			// Stitching
			event.recipes.create
				.sequenced_assembly(
					[`cosmic_contraptions:${tierName}_stitching`],
					`cosmic_contraptions:unfinished_${tierName}_stitching`,
					[
						event.recipes.createDeploying(`cosmic_contraptions:unfinished_${tierName}_stitching`, [
							`cosmic_contraptions:unfinished_${tierName}_stitching`,
							tier.material,
						]),
					]
				)
				.transitionalItem(`cosmic_contraptions:unfinished_${tierName}_stitching`)
				.loops(Math.round(5 * tier.armorCostMultiplier))
				.id("cosmic_contraptions:tools_and_armor/stitching/" + tierName);

			// Armor Pieces themeselves
			armorPieces.forEach((piece) => {
				let outputItem = `${tier.mod}:${tierName}_${piece}`;
				let inputItem = `${previousTier.mod}:${previousTierName}_${piece}`;
				if (!tier.hasOwnProperty("cannotBeBroken")) {
					global.createToolBreakRecipe(event, outputItem, `cosmic_contraptions:broken_${tierName}_${piece}`);
				}
				event
					.smithing(outputItem, inputItem, stitching)
					.id(`cosmic_contraptions:tools_and_armor/${piece}/${tierName}_from_${previousTierName}`);
				// Repair kit repair
				if (!tier.hasOwnProperty("cannotBeBroken")) {
					event
						.smithing(
							`${tier.mod}:${tierName}_${piece}`,
							`cosmic_contraptions:broken_${tierName}_${piece}`,
							repairKit
						)
						.id(`cosmic_contraptions:tools_and_armor/armor/${piece}/${tierName}_repair`);
				}
			});
			// Diving Gear
			// Skip tiers that don't need diving gear
			// (eg: doesn't have either a needsDivingGear or hasNativeDivingGear property)
			if (tier.needsDivingGear || tier.hasNativeDivingGear) {
				// let divingGearMod = tier.hasNativeDivingGear ? "create" : "cosmic_contraptions";
				let previousTierDivingMod = previousTier.hasNativeDivingGear ? "create" : "cosmic_contraptions";
				let divingPieces = [
					{ diving: "diving_helmet", piece: "helmet" },
					{ diving: "diving_boots", piece: "boots" },
					{ diving: "backtank", piece: "chestplate" },
				];
				divingPieces.forEach((piece) => {
					// Check if native diving gear (to upgrade from backtank of the previous tier)
					// TODO: Implement other tiers of backtank as right now this will only create recipes for:
					//       copper_backtank -> iron_chestplate
					//       netherite_backtank -> radiant_chestplate
					if (piece.diving === "backtank") {
						if (previousTier.hasNativeDivingGear) {
							event
								.smithing(
									`${tier.mod}:${tierName}_chestplate`,
									`create:${previousTierName}_backtank`,
									stitching
								)
								.id(
									`cosmic_contraptions:tools_and_armor/${tierName}_from_${previousTierName}_backtank`
								);
						}
						return;
					}
					// FIXME: Implement the diving gear items
					// Handle the other diving gear pieces (helmet, boots)
					/* event
						.smithing(
							`${tier.mod}:${tierName}_${piece.piece}`,
							`${previousTierDivingMod}:${previousTierName}_${piece.diving}`,
							stitching
						)
						.id(`cosmic_contraptions:tools_and_armor/${tierName}_from_${previousTierName}_${piece.diving}`); */
				});
			}
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
					`cosmic_contraptions:broken_${tierName}_knife`
				);
				event
					.smithing(
						`${tier.knifeMod}:${tierName}_knife`,
						`cosmic_contraptions:broken_${tierName}_knife`,
						repairKit
					)
					.id(`cosmic_contraptions:tools_and_armor/knife/${tierName}_repair`);
				// Sword
				global.createToolBreakRecipe(
					event,
					`${tier.mod}:${tierName}_sword`,
					`cosmic_contraptions:broken_${tierName}_sword`
				);
				event
					.smithing(
						`${tier.mod}:${tierName}_sword`,
						`cosmic_contraptions:broken_${tierName}_sword`,
						repairKit
					)
					.id(`cosmic_contraptions:tools_and_armor/sword/${tierName}_repair`);
				// Hoe
				global.createToolBreakRecipe(
					event,
					`${tier.mod}:${tierName}_hoe`,
					`cosmic_contraptions:broken_${tierName}_hoe`
				);
				event
					.smithing(`${tier.mod}:${tierName}_hoe`, `cosmic_contraptions:broken_${tierName}_hoe`, repairKit)
					.id(`cosmic_contraptions:tools_and_armor/hoe/${tierName}_repair`);
				// Paxel
				global.createToolBreakRecipe(
					event,
					`cosmic_contraptions:${tierName}_paxel`,
					`cosmic_contraptions:broken_${tierName}_paxel`
				);
				event
					.smithing(
						`cosmic_contraptions:${tierName}_paxel`,
						`cosmic_contraptions:broken_${tierName}_paxel`,
						repairKit
					)
					.id(`cosmic_contraptions:tools_and_armor/paxel/${tierName}_repair`);
			}

			let previousTierName = tier.previousToolTier;
			let previousTier = global.tiers[previousTierName];

			// Blade
			event.recipes.create
				.sequenced_assembly([`cosmic_contraptions:${tierName}_blade`], "cosmic_contraptions:wooden_blade", [
					event.recipes.createDeploying(`cosmic_contraptions:incomplete_${tierName}_blade`, [
						`cosmic_contraptions:incomplete_${tierName}_blade`,
						tier.material,
					]),
				])
				.transitionalItem(`cosmic_contraptions:incomplete_${tierName}_blade`)
				.loops(Math.round(2 * tier.toolCostMultiplier))
				.id("cosmic_contraptions:tools_and_armor/blade/" + tierName);
			// Paxel Head
			event.recipes.create
				.sequenced_assembly([`cosmic_contraptions:${tierName}_head`], "cosmic_contraptions:wooden_head", [
					event.recipes.createDeploying(`cosmic_contraptions:incomplete_${tierName}_head`, [
						`cosmic_contraptions:incomplete_${tierName}_head`,
						tier.material,
					]),
				])
				.transitionalItem(`cosmic_contraptions:incomplete_${tierName}_head`)
				.loops(Math.round(7 * tier.toolCostMultiplier))
				.id("cosmic_contraptions:tools_and_armor/paxel_head/" + tierName);

			// Knife
			event
				.smithing(
					`${tier.knifeMod}:${tierName}_knife`,
					`${previousTier.knifeMod}:${previousTierName}_knife`,
					toolBlade
				)
				.id(`cosmic_contraptions:tools_and_armor/knife/${tierName}_from_${previousTierName}`);
			// Sword
			event
				.smithing(`${tier.mod}:${tierName}_sword`, `${previousTier.mod}:${previousTierName}_sword`, toolBlade)
				.id(`cosmic_contraptions:tools_and_armor/sword/${tierName}_from_${previousTierName}`);
			// Hoe
			event
				.smithing(`${tier.mod}:${tierName}_hoe`, `${previousTier.mod}:${previousTierName}_hoe`, toolBlade)
				.id(`cosmic_contraptions:tools_and_armor/hoe/${tierName}_from_${previousTierName}`);
			// Paxel
			event
				.smithing(
					`cosmic_contraptions:${tierName}_paxel`,
					`cosmic_contraptions:${previousTierName}_paxel`,
					paxelHead
				)
				.id(`cosmic_contraptions:tools_and_armor/paxel/${tierName}_from_${previousTierName}`);
		}
		// Horse Armor
		if (tier.horseArmor) {
			let previousTierName = tier.previousHorseTier;
			let previousTier = global.tiers[previousTierName];

			event
				.smithing(
					tier.horseArmor,
					previousTier.horseArmor,
					Item.of(`cosmic_contraptions:unfinished_${tierName}_stitching`).weakNBT()
				)
				.id(`cosmic_contraptions:tools_and_armor/horse_armor/${tierName}_from_${previousTierName}`);
		}
	}
});
