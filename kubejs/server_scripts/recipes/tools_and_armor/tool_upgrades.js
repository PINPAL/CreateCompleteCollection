const toolUpgradingTiers = [
	{
		tier: "stone",
		properties: {
			prefix: "minecraft:stone",
			hasArmor: false,
			hasHorseArmor: false,
			hasTools: true,
			hasKnife: false,
			hasBackpack: false,
		},
		previousTier: {
			name: "wooden",
			prefix: "minecraft:wooden",
		},
	},
	{
		tier: "chainmail",
		properties: {
			prefix: "minecraft:chainmail",
			hasArmor: true,
			hasHorseArmor: false,
			hasTools: false,
			hasKnife: false,
			hasBackpack: false,
		},
		previousTier: {
			armorPrefix: "minecraft:leather",
		},
	},
	{
		tier: "copper",
		properties: {
			prefix: "kubejs:copper",
			hasArmor: true,
			hasHorseArmor: true,
			hasTools: true,
			hasKnife: true,
			hasBackpack: false,
			horseArmor: "minecraft:golden_horse_armor",
			knife: "create_things_and_misc:copper_knife",
		},
		previousTier: {
			name: "stone",
			prefix: "minecraft:stone",
			horseArmor: "minecraft:leather_horse_armor",
			armorPrefix: "minecraft:chainmail",
			knife: "farmersdelight:flint_knife",
		},
	},
	{
		tier: "iron",
		properties: {
			prefix: "minecraft:iron",
			hasArmor: true,
			hasHorseArmor: true,
			hasTools: true,
			hasKnife: true,
			hasBackpack: true,
			horseArmor: "minecraft:iron_horse_armor",
			knife: "farmersdelight:iron_knife",
		},
		previousTier: {
			name: "copper",
			prefix: "kubejs:copper",
			horseArmor: "minecraft:golden_horse_armor",
			armorPrefix: "kubejs:copper",
			knife: "create_things_and_misc:copper_knife",
		},
	},
	{
		tier: "steel",
		properties: {
			prefix: "kubejs:steel",
			hasArmor: true,
			hasHorseArmor: false,
			hasTools: true,
			hasKnife: false,
			hasBackpack: true,
		},
		previousTier: {
			name: "iron",
			prefix: "minecraft:iron",
			armorPrefix: "minecraft:iron",
		},
	},
	{
		tier: "diamond",
		properties: {
			prefix: "minecraft:diamond",
			hasArmor: true,
			hasHorseArmor: true,
			hasTools: true,
			hasKnife: true,
			hasBackpack: true,
			horseArmor: "minecraft:diamond_horse_armor",
			knife: "farmersdelight:diamond_knife",
		},
		previousTier: {
			name: "steel",
			prefix: "kubejs:steel",
			horseArmor: "minecraft:iron_horse_armor",
			armorPrefix: "kubejs:steel",
			knife: "farmersdelight:iron_knife",
		},
	},
	{
		tier: "netherite",
		properties: {
			prefix: "minecraft:netherite",
			hasArmor: true,
			hasHorseArmor: true,
			hasTools: true,
			hasKnife: true,
			hasBackpack: true,
			horseArmor: "netherite_horse_armor:netherite_horse_armor",
			knife: "farmersdelight:netherite_knife",
		},
		previousTier: {
			name: "diamond",
			prefix: "minecraft:diamond",
			horseArmor: "minecraft:diamond_horse_armor",
			armorPrefix: "minecraft:diamond",
			knife: "farmersdelight:diamond_knife",
		},
	},
];

global.createToolBreakRecipe = (event, inputItem, outputItem) => {
	// Create a recipe id from the output item (everything after the colon)
	let recipeId = "kubejs:tools_and_armor/breaking_" + outputItem.split(":")[1];
	event
		.shapeless(outputItem, [inputItem, "kubejs:refined_stone"])
		.modifyResult((inventory, itemstack) => {
			let item = inventory.find(Item.of(inputItem).ignoreNBT());
			let nbt = item.nbt;
			if (nbt == null) {
				nbt = {};
			}
			return Item.of(outputItem).withNBT(nbt);
		})
		.id(recipeId);
};

ServerEvents.recipes((event) => {
	// Smithing upgrade recipes
	toolUpgradingTiers.forEach((tier) => {
		// ARMOR
		// ============================
		if (tier.properties.hasArmor) {
			// Helmet
			global.createToolBreakRecipe(
				event,
				`${tier.properties.prefix}_helmet`,
				`kubejs:broken_${tier.tier}_helmet`
			);
			event.smithing(
				`${tier.properties.prefix}_helmet`,
				`${tier.previousTier.armorPrefix}_helmet`,
				`kubejs:${tier.tier}_stitching`
			);
			// Chestplate
			global.createToolBreakRecipe(
				event,
				`${tier.properties.prefix}_chestplate`,
				`kubejs:broken_${tier.tier}_chestplate`
			);
			event.smithing(
				`${tier.properties.prefix}_chestplate`,
				`${tier.previousTier.armorPrefix}_chestplate`,
				`kubejs:${tier.tier}_stitching`
			);
			// Leggings
			global.createToolBreakRecipe(
				event,
				`${tier.properties.prefix}_leggings`,
				`kubejs:broken_${tier.tier}_leggings`
			);
			event.smithing(
				`${tier.properties.prefix}_leggings`,
				`${tier.previousTier.armorPrefix}_leggings`,
				`kubejs:${tier.tier}_stitching`
			);
			// Boots
			global.createToolBreakRecipe(event, `${tier.properties.prefix}_boots`, `kubejs:broken_${tier.tier}_boots`);
			event.smithing(
				`${tier.properties.prefix}_boots`,
				`${tier.previousTier.armorPrefix}_boots`,
				`kubejs:${tier.tier}_stitching`
			);
		}
		// KNIFE
		// ============================
		if (tier.properties.hasKnife) {
			global.createToolBreakRecipe(event, tier.properties.knife, `kubejs:broken_${tier.tier}_knife`);
			event.smithing(
				// Unbreakable IF netherite
				tier.tier == "netherite"
					? Item.of("farmersdelight:netherite_knife").withNBT("{Unbreakable:1b}")
					: tier.properties.knife,
				tier.previousTier.knife,
				`kubejs:${tier.tier}_blade`
			);
		}
		// HOE, SWORD, PAXEL
		// ============================
		if (tier.properties.hasTools) {
			// Sword
			global.createToolBreakRecipe(event, `${tier.properties.prefix}_sword`, `kubejs:broken_${tier.tier}_sword`);
			event.smithing(
				`${tier.properties.prefix}_sword`,
				`${tier.previousTier.prefix}_sword`,
				`kubejs:${tier.tier}_blade`
			);
			// Hoe
			global.createToolBreakRecipe(event, `${tier.properties.prefix}_hoe`, `kubejs:broken_${tier.tier}_hoe`);
			event.smithing(
				`${tier.properties.prefix}_hoe`,
				`${tier.previousTier.prefix}_hoe`,
				`kubejs:${tier.tier}_blade`
			);
			// Paxel
			global.createToolBreakRecipe(event, `kubejs:${tier.tier}_paxel`, `kubejs:broken_${tier.tier}_paxel`);
			event.smithing(
				`kubejs:${tier.tier}_paxel`,
				`kubejs:${tier.previousTier.name}_paxel`,
				`kubejs:${tier.tier}_head`
			);
		}
		// HORSE ARMOR
		// ============================
		if (tier.properties.hasHorseArmor) {
			event.smithing(
				tier.properties.horseArmor,
				tier.previousTier.horseArmor,
				Item.of(`kubejs:unfinished_${tier.tier}_stitching`).weakNBT()
			);
		}
	});
});
