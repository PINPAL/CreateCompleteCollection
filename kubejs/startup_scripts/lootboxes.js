global.lootboxes = {
	basic: {
		name: "Stone",
		rolls: 16,
		items: [
			{
				item: "create_cosmic_contraptions:refined_stone",
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
				item: "create_cosmic_contraptions:t1_andesite_machine",
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
				item: Item.of("create_cosmic_contraptions:lootbox", '{BlockEntityTag:{data:{lootboxId:"andesite"}}}'),
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
			{
				item: "refinedstorage:creative_storage_block",
				weight: 1,
			},
		],
	},
	enchantments_weapon: {
		name: "Weapon Enchants",
		rolls: 1,
		items: [
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:sharpness", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:smite", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:bane_of_arthropods", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:knockback", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:fire_aspect", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:looting", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:sweeping", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:power", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:punch", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:flame", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:infinity", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:multishot", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:quick_charge", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:piercing", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:loyalty", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:impaling", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:riptide", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:channeling", 1),
				weight: 1,
			},
			{
				item: Item.of(
					"minecraft:enchanted_book",
					1,
					'{StoredEnchantments:[{id:"modification_of_critical_hit:criteffect",lvl:1s}]}'
				),
				weight: 1,
			},
			{
				item: Item.of(
					"minecraft:enchanted_book",
					1,
					'{StoredEnchantments:[{id:"modification_of_critical_hit:critchance",lvl:1s}]}'
				),
				weight: 1,
			},
		],
	},
	enchantments_generic: {
		name: "Random Enchants",
		rolls: 1,
		items: [
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:luck_of_the_sea", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:lure", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:mending", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:vanishing_curse", 1),
				weight: 1,
			},
			{
				item: Item.of(
					"minecraft:enchanted_book",
					1,
					'{StoredEnchantments:[{id:"create:potato_recovery",lvl:1s}]}'
				),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book", 1, '{StoredEnchantments:[{id:"create:capacity",lvl:1s}]}'),
				weight: 1,
			},
			{
				item: Item.of(
					"minecraft:enchanted_book",
					1,
					'{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'
				),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:efficiency", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:silk_touch", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:unbreaking", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:fortune", 1),
				weight: 1,
			},
		],
	},
	enchantments_armor: {
		name: "Armor Enchants",
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
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:feather_falling", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:blast_protection", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:projectile_protection", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:respiration", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:aqua_affinity", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:thorns", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:depth_strider", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:frost_walker", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:binding_curse", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:swift_sneak", 1),
				weight: 1,
			},
			{
				item: Item.of("minecraft:enchanted_book").enchant("minecraft:soul_speed", 1),
				weight: 1,
			},
			{
				item: Item.of(
					"minecraft:enchanted_book",
					1,
					'{StoredEnchantments:[{id:"ensorcellation:air_affinity",lvl:1s}]}'
				),
				weight: 1,
			},
		],
	},
};

StartupEvents.registry("block", (event) => {
	for (const key in global.lootboxes) {
		let lootbox = global.lootboxes[key];

		event
			.create(`create_cosmic_contraptions:lootbox_${key}`)
			.displayName(`${lootbox.name} Lootbox`)
			.soundType("wood")
			.hardness(2)
			.tagBlock("minecraft:mineable/pickaxe")
			.tagBlock("create_cosmic_contraptions:lootbox")
			.tagItem("create_cosmic_contraptions:lootbox")
			.model("create_cosmic_contraptions:block/lootbox")
			.noValidSpawns(true)
			.suffocating(false);
	}
});
