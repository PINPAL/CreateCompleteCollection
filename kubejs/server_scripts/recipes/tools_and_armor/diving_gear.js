function createDivingGearShapedRecipes(event, input, output) {
	let id = output.split(":")[1];
	event
		.shaped(output + "_helmet", ["CCC", "CGC", " O "], {
			C: "#forge:ingots/copper",
			G: "#forge:glass",
			O: input + "_helmet",
		})
		.id(`kubejs:tools_and_armor/diving_gear/${id}_helmet_crafting`)
		.modifyResult((inventory, itemstack) => {
			let item = inventory.find(Item.of(input + "_helmet"));
			let nbt = item.nbt;
			if (nbt == null) {
				nbt = {};
			}
			return Item.of(output + "_helmet").withNBT(nbt);
		});

	event
		.shaped(output + "_boots", ["CBC", "C C", "A A"], {
			C: "#forge:ingots/copper",
			A: "create:andesite_alloy",
			B: input + "_boots",
		})
		.id(`kubejs:tools_and_armor/diving_gear/${id}_boots_crafting`)
		.modifyResult((inventory, itemstack) => {
			let item = inventory.find(Item.of(input + "_boots"));
			let nbt = item.nbt;
			if (nbt == null) {
				nbt = {};
			}
			return Item.of(output + "_boots").withNBT(nbt);
		});
}

ServerEvents.recipes((event) => {
	/*
	// Upgrading Past Copper (to Iron Armor)
	event.smithing("minecraft:iron_helmet", "create:copper_diving_helmet", "kubejs:iron_stitching");
	event.smithing("minecraft:iron_boots", "create:copper_diving_boots", "kubejs:iron_stitching");
	event.smithing("minecraft:iron_chestplate", "create:copper_backtank", "kubejs:iron_stitching");

	// Diving Gear from Netherite Armor
	event.smithing("create:netherite_diving_helmet", "minecraft:netherite_helmet", "create:copper_diving_helmet");
	event.smithing("create:netherite_diving_boots", "minecraft:netherite_boots", "create:copper_diving_boots");
	event.smithing("create:netherite_backtank", "minecraft:netherite_chestplate", "create:copper_backtank");
    */

	// Loop through global tiers
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];

		// Skip tiers that don't need diving gear
		// (eg: doesn't have either a needsDivingGear or hasNativeDivingGear property)
		if (!tier.needsDivingGear && !tier.hasNativeDivingGear) {
			continue;
		}

		let divingGearId = `${tier.hasNativeDivingGear ? "create" : "kubejs"}:${tierName}_diving`;
		let originalItemId = `${tier.mod}:${tierName}`;

		// Create diving helmet and boots crafting recipes
		createDivingGearShapedRecipes(event, originalItemId, divingGearId);

		// Create backtank recipe (only for native diving gear)
		if (tier.hasNativeDivingGear) {
			event.shaped(`create:${tierName}_backtank`, ["ASA", "CBC", " C "], {
				A: "create:andesite_alloy",
				S: "create:shaft",
				C: "#forge:ingots/copper",
				B: `${tier.mod}:${tierName}_chestplate`,
			});
		}

		// Skip tiers that cannot be broken
		if (tier.cannotBeBroken) {
			continue;
		}

		// Create broken diving gear recipes
		global.createToolBreakRecipe(event, divingGearId + "_helmet", `kubejs:broken_${tierName}_diving_helmet`);
		global.createToolBreakRecipe(event, divingGearId + "_boots", `kubejs:broken_${tierName}_diving_boots`);

		// Create repairing recipes
		event
			.smithing(
				divingGearId + "_helmet",
				`kubejs:broken_${tierName}_diving_helmet`,
				`kubejs:${tierName}_repair_kit`
			)
			.id(`kubejs:tools_and_armor/diving_gear/${tierName}_helmet_repairing`);
		event
			.smithing(
				divingGearId + "_boots",
				`kubejs:broken_${tierName}_diving_boots`,
				`kubejs:${tierName}_repair_kit`
			)
			.id(`kubejs:tools_and_armor/diving_gear/${tierName}_boots_repairing`);
	}
});
