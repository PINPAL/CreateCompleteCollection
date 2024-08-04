global.lootboxes = {
	basic: {
		name: "Stone",
		rolls: 16,
		items: [
			{
				item: "create_cc:refined_stone",
				weight: 3,
			},
			{
				item: "minecraft:oak_log",
				weight: 2,
			},
			{
				item: "minecraft:andesite",
				weight: 2,
			},
			{
				item: "minecraft:stick",
				weight: 2,
			},
			{
				item: "minecraft:cobblestone",
				weight: 1,
			},
		],
	},
	andesite: {
		name: "Andesite",
		rolls: 10,
		items: [
			{
				item: "#forge:ingots/andesite",
				weight: 6,
			},
			{
				item: "create:andesite_casing",
				weight: 5,
			},
			{
				item: "create:cogwheel",
				weight: 4,
			},
			{
				item: "create:shaft",
				weight: 4,
			},
			{
				item: "create:large_cogwheel",
				weight: 3,
			},
			{
				item: "create_cc:t1_andesite_machine",
				weight: 2,
			},
			{
				item: "create:mechanical_saw",
				weight: 1,
			},
			{
				item: "create:andesite_funnel",
				weight: 1,
			},
			{
				item: "create:andesite_tunnel",
				weight: 1,
			},
			{
				item: "sliceanddice:slicer",
				weight: 1,
			},
		],
	},
	developer: {
		name: "Developer",
		rolls: 1,
		items: [
			{
				item: Item.of("create_cc:lootbox", '{BlockEntityTag:{data:{lootboxId:"andesite"}}}'),
				weight: 1,
			},
		],
	},
	creative: {
		name: "Creative",
		rolls: 1,
		items: [
			{
				item: "createcasing:creative_casing",
				weight: 250,
			},
			{
				item: "melter:creative_heat_source",
				weight: 1,
			},
			{
				item: "creativecrafter:creative_crafter",
				weight: 1,
			},
			{
				item: "create_connected:creative_fluid_vessel",
				weight: 1,
			},
			{
				item: "create:handheld_worldshaper",
				weight: 1,
			},
			{
				item: "create:creative_motor",
				weight: 1,
			},
			{
				item: "create:creative_fluid_tank",
				weight: 1,
			},
			{
				item: "create:creative_crate",
				weight: 1,
			},
			{
				item: "create:creative_blaze_cake",
				weight: 1,
			},
			{
				item: "createcasing:creative_cogwheel",
				weight: 1,
			},
			{
				item: "balancedflight:ascended_flight_ring",
				weight: 1,
			},
			{
				item: "createaddition:creative_energy",
				weight: 1,
			},
			{
				item: "createaddition:diamond_grit_sandpaper",
				weight: 1,
			},
			{
				item: "artifacts:eternal_steak",
				weight: 1,
			},
			{
				item: "toimmortality:totem_of_immortality",
				weight: 1,
			},
		],
	},
	enchantments: {
		name: "Random Enchantment",
		rolls: 1,
		items: [
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:protection", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:fire_protection", 1),
				weight: 1,
			},
		],
	},
};

StartupEvents.registry("block", (event) => {
	/* 	for (const key in global.lootboxes) {
		let lootbox = global.lootboxes[key];

		event
			.create(`create_cc:lootbox_${key}`)
			.displayName(`${lootbox.name} Lootbox`)
			.soundType("wood")
			.hardness(2)
			.tagBlock("minecraft:mineable/pickaxe")
			.tagBlock("create_cc:lootbox")
			.tagItem("create_cc:lootbox")
			.model("create_cc:block/lootbox")
			.noValidSpawns(true)
			.suffocating(false);
	} */

	event
		.create("create_cc:lootbox")
		.displayName("Lootbox")
		.model("create_cc:block/lootbox")
		.noValidSpawns(true)
		.suffocating(false)
		.tagBlock("minecraft:mineable/pickaxe")
		.tagBlock("create_cc:lootbox")
		.tagItem("create_cc:lootbox")
		.soundType("wood")
		.hardness(2)
		.blockEntity((entityInfo) => {});
});
