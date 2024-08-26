// priority: -100

const removedItems = [
	/quark:.*jasper.*/,
	/quark:.*limestone.*/,
	/quark:.*permafrost.*/,
	/quark:.*midori.*/,
	/quark:.*shale.*/,
	/quark:.*myalite.*/,
	/quark:.*soul_sandstone.*/,
	/quark:.*netherrack.*/,
	/quark:.*pipe.*/,
	"quark:iron_rod",

	/createcasing:.*oak_shaft/,
	/createcasing:.*spruce_shaft/,
	/createcasing:.*birch_shaft/,
	/createcasing:.*jungle_shaft/,
	/createcasing:.*acacia_shaft/,
	/createcasing:.*dark_oak_shaft/,
	/createcasing:.*mangrove_shaft/,
	/createcasing:.*crimson_shaft/,
	/createcasing:.*warped_shaft/,
	/createcasing:.*glass_shaft/,
	/createcasing:.*brass_shaft/,

	/quark:.*blossom.*/,
	/everycomp:.*\/q\/.*blossom.*/,
	/supplementaries:quark\/.*blossom.*/,

	/quark:.*ancient.*/,
	/everycomp:.*\/q\/.*ancient.*/,
	/everycomp:.*\/quark\/.*ancient.*/,
	/supplementaries:quark\/.*ancient.*/,

	/quark:.*azalea.*/,
	/everycomp:.*\/q\/.*azalea.*/,
	/everycomp:.*\/quark\/.*azalea.*/,
	/supplementaries:q\/.*azalea.*/,

	/quark:.*corundum.*/,
	/quark:.*crystal_lamp.*/,
	/quark:.*lantern.*/,
	/quark:.*shingles.*/,
	/quark:.*hollow.*log.*/,
	/quark:.*hollow.*stem.*/,
	/everycomp:.*hollow.*log.*/,
	/quark:.*polished.*/,
	/quark:.*egg.*/,
	/quark:.*raw.*/,
	/quark:.*diamond.*/,
	/quark:.*rang/,
	"quark:forgotten_hat",
	"quark:iron_button",

	/.*spawn_egg.*/,

	/minecraft:.*pickaxe.*/,
	/minecraft:.*shovel.*/,
	/minecraft:.*axe.*/,
	"minecraft:elytra",

	"minecraft:golden_sword",
	"minecraft:golden_hoe",
	"minecraft:golden_chestplate",
	"minecraft:golden_boots",
	"minecraft:golden_helmet",
	"minecraft:golden_leggings",

	"easy_villagers:iron_farm",

	/metalbarrels:.*_to_.*/,

	"farmersdelight:golden_knife",
	"farmersdelight:wheat_dough",
	"create_things_and_misc:zinc_knife",
	"create_things_and_misc:brass_knife",
	"create_things_and_misc:cherry_sail",
	"create_things_and_misc:chorus_sail",
	"create_things_and_misc:jaboticaba_sail",
	"create_things_and_misc:ramboutan_sail",

	"create_dd:condense_milk_bucket",
	"create_dd:cream_bucket",
	"create_dd:vanilla_bucket",
	"create_dd:vanilla_milkshake_bucket",
	"create_dd:strawberry_bucket",
	"create_dd:strawberry_milkshake_bucket",
	"create_dd:glowberry_bucket",
	"create_dd:glowberry_milkshake_bucket",
	"create_dd:caramel_bucket",
	"create_dd:caramel_milkshake_bucket",
	"create_dd:hot_chocolate_bucket",
	"create_dd:chocolate_milkshake_bucket",

	/supplementaries:.*present.*/,
	/supplementaries:.*lantern.*/,
	/supplementaries:.*lapis.*/,
	/supplementaries:.*bomb.*/,
	/supplementaries:.*bamboo_spikes.*/,
	"supplementaries:sconce_nether_brass",
	"supplementaries:wrench",

	"createaddition:electrum_ingot",
	"createaddition:electrum_nugget",
	"createaddition:electrum_sheet",
	"createaddition:electrum_wire",
	"createaddition:electrum_spool",
	"createaddition:electrum_rod",
	"createaddition:zinc_sheet",

	"create_dd:deforester_saw",

	"createdeco:zinc_sheet",

	/createindustry:.*concrete.*/,
	/v_slab_compat:createindustry\/.*concrete.*/,
	"createindustry:factory_floor",
	"createindustry:factory_floor_slab",
	/v_slab_compat:createindustry\/.*factory_floor.*/,

	/refinedstorage:.*disk_manipulator.*/,
	/refinedstorage:.*network.*/,
	/refinedstorage:.*security_manager.*/,
	/refinedstorage:.*relay.*/,
	/refinedstorage:.*crafter_manager.*/,
	/refinedstorage:.*storage_disk.*/,
	/refinedstorage:.*storage_part.*/,
	/refinedstorage:.*storage_block.*/,
	/refinedstorage:.*portable_grid.*/,
	/refinedstorage:.*interface.*/,
	"refinedstorage:raw_basic_processor",
	"refinedstorage:raw_improved_processor",
	"refinedstorage:creative_wireless_grid",
	"refinedstorage:machine_casing",
	"refinedstorage:security_card",
	"refinedstorage:wrench",
	"refinedstorage:regular_upgrade",
	"refinedstorage:fortune_1_upgrade",
	"refinedstorage:fortune_2_upgrade",
	"refinedstorage:fortune_3_upgrade",
	"refinedstorage:silk_touch_upgrade",
	"refinedstorage:destruction_core",
	"refinedstorage:range_upgrade",
	"refinedstorage:storage_housing",
	"refinedstorage:quartz_enriched_iron_block",
	"refinedstorage:grid",
	"refinedstorage:white_grid",
	"refinedstorage:orange_grid",
	"refinedstorage:magenta_grid",
	"refinedstorage:light_blue_grid",
	"refinedstorage:yellow_grid",
	"refinedstorage:lime_grid",
	"refinedstorage:pink_grid",
	"refinedstorage:gray_grid",
	"refinedstorage:light_gray_grid",
	"refinedstorage:cyan_grid",
	"refinedstorage:purple_grid",
	"refinedstorage:blue_grid",
	"refinedstorage:brown_grid",
	"refinedstorage:green_grid",
	"refinedstorage:red_grid",
	"refinedstorage:black_grid",

	"wands:stone_wand",
	"wands:iron_wand",
	"wands:diamond_wand",

	/sophisticatedstorage:.*iron.*/,
	/sophisticatedstorage:.*diamond.*/,
	/sophisticatedstorage:.*tier_upgrade.*/,
	/sophisticatedstorage:.*shulker_box.*/,

	/storagedrawers:.*half_drawer.*/,
	/storagedrawers:.*trim.*/,
	/everycomp:sd\/.*half_drawer.*/,
	/everycomp:sd\/.*trim.*/,

	"metalbarrels:copper_barrel",
	"create:copper_backtank_placeable",
	"create:netherite_backtank_placeable",
];

removedItems.forEach((item) => {
	ServerEvents.tags("item", (event) => {
		event.removeAllTagsFrom(item);
	});
	ServerEvents.tags("block", (event) => {
		event.removeAllTagsFrom(item);
	});
});
