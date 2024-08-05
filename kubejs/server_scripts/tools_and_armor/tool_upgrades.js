const toolUpgradingTiers = [
	{
		tier: "stone",
		properties: {
			prefix: "minecraft:stone",
			hasArmor: false,
			hasHorseArmor: false,
			hasTools: true,
			hasKnife: true,
			hasBackpack: false,
			knife: "moredelight:stone_knife",
		},
		previousTier: {
			name: "wooden",
			prefix: "minecraft:wooden",
			knife: "moredelight:wooden_knife",
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
			prefix: "create_cosmic_contraptions:copper",
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
			knife: "moredelight:stone_knife",
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
			prefix: "create_cosmic_contraptions:copper",
			horseArmor: "minecraft:golden_horse_armor",
			armorPrefix: "create_cosmic_contraptions:copper",
			knife: "create_things_and_misc:copper_knife",
		},
	},
	{
		tier: "steel",
		properties: {
			prefix: "create_cosmic_contraptions:steel",
			hasArmor: true,
			hasHorseArmor: false,
			hasTools: true,
			hasBackpack: true,
			hasKnife: true,
			knife: "create_cosmic_contraptions:steel_knife",
		},
		previousTier: {
			name: "iron",
			prefix: "minecraft:iron",
			armorPrefix: "minecraft:iron",
			knife: "farmersdelight:iron_knife",
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
			prefix: "create_cosmic_contraptions:steel",
			horseArmor: "minecraft:iron_horse_armor",
			armorPrefix: "create_cosmic_contraptions:steel",
			knife: "create_cosmic_contraptions:steel_knife",
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

ServerEvents.recipes((event) => {
	// Create Netherite Armor Upgrades
	event.smithing("create:netherite_diving_helmet", "minecraft:netherite_helmet", "create:copper_diving_helmet");
	event.smithing("create:netherite_diving_boots", "minecraft:netherite_boots", "create:copper_diving_boots");
	event.smithing("create:netherite_backtank", "minecraft:netherite_chestplate", "create:copper_backtank");
	// Smithing upgrade recipes
	toolUpgradingTiers.forEach((tier) => {
		// ARMOR
		// ============================
		if (tier.properties.hasArmor) {
			// Helmet
			event.recipes.create
				.crushing(`create_cosmic_contraptions:broken_${tier.tier}_helmet`, `${tier.properties.prefix}_helmet`)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_helmet`);
			event
				.smithing(
					`${tier.properties.prefix}_helmet`,
					`${tier.previousTier.armorPrefix}_helmet`,
					`create_cosmic_contraptions:${tier.tier}_stitching`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_helmet`);
			// Chestplate
			event.recipes.create
				.crushing(
					`create_cosmic_contraptions:broken_${tier.tier}_chestplate`,
					`${tier.properties.prefix}_chestplate`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_chestplate`);
			event
				.smithing(
					`${tier.properties.prefix}_chestplate`,
					`${tier.previousTier.armorPrefix}_chestplate`,
					`create_cosmic_contraptions:${tier.tier}_stitching`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_chestplate`);
			// Leggings
			event.recipes.create
				.crushing(
					`create_cosmic_contraptions:broken_${tier.tier}_leggings`,
					`${tier.properties.prefix}_leggings`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_leggings`);
			event
				.smithing(
					`${tier.properties.prefix}_leggings`,
					`${tier.previousTier.armorPrefix}_leggings`,
					`create_cosmic_contraptions:${tier.tier}_stitching`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_leggings`);
			// Boots
			event.recipes.create
				.crushing(`create_cosmic_contraptions:broken_${tier.tier}_boots`, `${tier.properties.prefix}_boots`)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_boots`);
			event
				.smithing(
					`${tier.properties.prefix}_boots`,
					`${tier.previousTier.armorPrefix}_boots`,
					`create_cosmic_contraptions:${tier.tier}_stitching`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_boots`);
		}
		// KNIFE
		// ============================
		if (tier.properties.hasKnife) {
			event.recipes.create
				.crushing(`create_cosmic_contraptions:broken_${tier.tier}_knife`, tier.properties.knife)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_knife`);

			event
				.smithing(
					// Unbreakable IF netherite
					tier.tier == "netherite"
						? Item.of("farmersdelight:netherite_knife").withNBT("{Unbreakable:1b}")
						: tier.properties.knife,
					tier.previousTier.knife,
					`create_cosmic_contraptions:${tier.tier}_blade`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_knife`);
		}
		// HOE, SWORD, PAXEL
		// ============================
		if (tier.properties.hasTools) {
			// Sword
			event.recipes.create
				.crushing(`create_cosmic_contraptions:broken_${tier.tier}_sword`, `${tier.properties.prefix}_sword`)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_sword`);
			event
				.smithing(
					`${tier.properties.prefix}_sword`,
					`${tier.previousTier.prefix}_sword`,
					`create_cosmic_contraptions:${tier.tier}_blade`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_sword`);
			// Hoe
			event.recipes.create
				.crushing(`create_cosmic_contraptions:broken_${tier.tier}_hoe`, `${tier.properties.prefix}_hoe`)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_hoe`);
			event
				.smithing(
					`${tier.properties.prefix}_hoe`,
					`${tier.previousTier.prefix}_hoe`,
					`create_cosmic_contraptions:${tier.tier}_blade`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_hoe`);
			// Paxel
			event.recipes.create
				.crushing(
					`create_cosmic_contraptions:broken_${tier.tier}_paxel`,
					`create_cosmic_contraptions:${tier.tier}_paxel`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/crushing/broken_${tier.tier}_paxel`);
			event
				.smithing(
					`create_cosmic_contraptions:${tier.tier}_paxel`,
					`create_cosmic_contraptions:${tier.previousTier.name}_paxel`,
					`create_cosmic_contraptions:${tier.tier}_head`
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_paxel`);
		}
		// HORSE ARMOR
		// ============================
		if (tier.properties.hasHorseArmor) {
			event
				.smithing(
					tier.properties.horseArmor,
					tier.previousTier.horseArmor,
					Item.of(`create_cosmic_contraptions:unfinished_${tier.tier}_stitching`).weakNBT()
				)
				.id(`create_cosmic_contraptions:tool_upgrading/${tier.tier}_horse_armor`);
		}
	});
});
