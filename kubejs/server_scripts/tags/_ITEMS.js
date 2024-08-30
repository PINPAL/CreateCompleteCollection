//priority: 0

ServerEvents.tags("item", (event) => {
	[
		"minecraft:leather_chestplate",
		"minecraft:leather_leggings",
		"minecraft:leather_boots",
		"minecraft:leather_helmet",
	].forEach((item) => {
		event.add("kubejs:leather_armor", item);
	});

	["minecraft:paper", "kubejs:sugar_paper"].forEach((item) => {
		event.add("kubejs:low_quality_paper", item);
	});

	event.add("forge:storage_blocks/aluminum", "createindustry:aluminum_block");

	[
		"minecraft:chainmail_chestplate",
		"minecraft:chainmail_leggings",
		"minecraft:chainmail_boots",
		"minecraft:chainmail_helmet",
	].forEach((item) => {
		event.add("kubejs:chainmail_armor", item);
	});

	[
		"kubejs:radiant_helmet",
		"kubejs:radiant_chestplate",
		"kubejs:radiant_leggings",
		"kubejs:radiant_boots",
		"kubejs:radiant_sword",
		"kubejs:radiant_hoe",
		"kubejs:radiant_paxel",
		"kubejs:radiant_knife",
	].forEach((item) => {
		event.add("kubejs:unbreakable", item);
	});

	["kubejs:radiant_helmet", "kubejs:radiant_chestplate", "kubejs:radiant_leggings", "kubejs:radiant_boots"].forEach(
		(item) => {
			event.add("kubejs:radiant_armor", item);
		}
	);

	["kubejs:copper_chestplate", "kubejs:copper_leggings", "kubejs:copper_boots", "kubejs:copper_helmet"].forEach(
		(item) => {
			event.add("kubejs:copper_armor", item);
		}
	);

	[
		"create:netherite_diving_boots",
		"create:netherite_diving_helmet",
		"create:copper_diving_boots",
		"create:copper_diving_helmet",
		"kubejs:copper_boots",
		"kubejs:copper_helmet",
		"kubejs:copper_chestplate",
		"kubejs:copper_leggings",
	].forEach((item) => {
		event.add("forge:armors", item);
	});

	["create:netherite_diving_boots", "create:copper_diving_boots"].forEach((item) => {
		event.add("forge:armors/boots", item);
		event.add("forge:boots", item);
	});

	["create:netherite_diving_helmet", "create:copper_diving_helmet"].forEach((item) => {
		event.add("forge:armors/helmets", item);
		event.add("forge:helmets", item);
	});

	["minecraft:iron_chestplate", "minecraft:iron_leggings", "minecraft:iron_boots", "minecraft:iron_helmet"].forEach(
		(item) => {
			event.add("kubejs:iron_armor", item);
		}
	);

	["kubejs:steel_chestplate", "kubejs:steel_leggings", "kubejs:steel_boots", "kubejs:steel_helmet"].forEach(
		(item) => {
			event.add("forge:armors", item);
			event.add("kubejs:steel_armor", item);
		}
	);

	[
		"createdeco:gold_sheet_slab_vert",
		"createdeco:netherite_sheet_slab_vert",
		"createdeco:andesite_sheet_slab_vert",
		"createdeco:brass_sheet_slab_vert",
		"createdeco:cast_iron_sheet_slab_vert",
		"createdeco:iron_sheet_slab_vert",
		"createdeco:copper_sheet_slab_vert",
		"createdeco:zinc_sheet_slab_vert",
	].forEach((item) => {
		event.add("quark:vertical_slabs", item);
	});

	event.add("forge:nuggets/bronze", "#forge:nuggets/strong_bronze");

	["kubejs:steel_hoe", "kubejs:copper_hoe"].forEach((item) => {
		event.add("forge:tools/hoes", item);
		event.add("forge:hoes", item);
	});

	["kubejs:steel_sword", "kubejs:copper_sword"].forEach((item) => {
		event.add("forge:tools/swords", item);
		event.add("forge:swords", item);
	});

	["kubejs:steel_helmet", "kubejs:copper_helmet"].forEach((item) => {
		event.add("forge:helmets", item);
		event.add("forge:armors/helmets", item);
	});

	["kubejs:steel_chestplate", "kubejs:copper_chestplate"].forEach((item) => {
		event.add("forge:chestplates", item);
		event.add("forge:armors/chestplates", item);
	});

	["kubejs:steel_leggings", "kubejs:copper_leggings"].forEach((item) => {
		event.add("forge:leggings", item);
		event.add("forge:armors/leggings", item);
	});

	["kubejs:steel_boots", "kubejs:copper_boots"].forEach((item) => {
		event.add("forge:boots", item);
		event.add("forge:armors/boots", item);
	});

	[
		"minecraft:diamond_chestplate",
		"minecraft:diamond_leggings",
		"minecraft:diamond_boots",
		"minecraft:diamond_helmet",
	].forEach((item) => {
		event.add("kubejs:diamond_armor", item);
	});

	[
		"minecraft:netherite_chestplate",
		"minecraft:netherite_leggings",
		"minecraft:netherite_boots",
		"minecraft:netherite_helmet",
	].forEach((item) => {
		event.add("kubejs:netherite_armor", item);
	});

	const createTrainTracks = ["create:track", /railways:track_.*/];
	createTrainTracks.forEach((item) => {
		event.add("kubejs:train_tracks", item);
	});
	event.remove("kubejs:train_tracks", /railways:track_switch.*/);
	event.remove("kubejs:train_tracks", "railways:track_coupler");
	event.remove("kubejs:train_tracks", /railways:track_incomplete_.*/);

	["create:brass_funnel", "create:brass_tunnel", "create:smart_chute"].forEach((item) => {
		event.add("quests:brass_sorter", item);
	});

	[
		"minecraft:iron_nugget",
		"minecraft:gold_nugget",
		"create:zinc_nugget",
		"create:brass_nugget",
		"create_dd:tin_nugget",
	].forEach((item) => {
		event.add("kubejs:simple_nuggets", item);
	});

	[/create:.*sail/, /create_things_and_misc:.*_sail/].forEach((item) => {
		event.add("kubejs:windmill_sails", item);
	});

	["createaddition:connector", "createaddition:large_connector"].forEach((item) => {
		event.add("kubejs:electric_connector", item);
	});

	["minecraft:bread"].forEach((item) => {
		event.add("forge:nutrients/carbs", item);
	});

	[
		"minecraft:iron_ingot",
		"minecraft:gold_ingot",
		"create:zinc_ingot",
		"create:brass_ingot",
		"create_dd:tin_ingot",
	].forEach((item) => {
		event.add("kubejs:simple_ingots", item);
	});

	[
		"minecraft:iron_block",
		"minecraft:gold_block",
		"create:zinc_block",
		"create:brass_block",
		"create_dd:tin_block",
	].forEach((item) => {
		event.add("kubejs:simple_blocks", item);
	});

	event.add("quests:storage_blocks", "#forge:barrels");
	event.add("quests:storage_blocks", "#forge:chests");
	event.add("quests:storage_blocks", "#storagedrawers:drawers");
	["metalbarrels:iron_barrel", "metalbarrels:gold_barrel", "metalbarrels:diamond_barrel"].forEach((item) => {
		event.add("quests:storage_blocks", item);
	});

	const newGems = ["coal", "redstone"];
	newGems.forEach((gem) => {
		event.add(`forge:gems/${gem}`, `minecraft:${gem}`);
	});

	const deepslate = [
		"minecraft:cobbled_deepslate",
		"minecraft:polished_deepslate",
		"minecraft:deepslate_bricks",
		"minecraft:cracked_deepslate_bricks",
		"minecraft:deepslate_tiles",
		"minecraft:cracked_deepslate_tiles",
		"minecraft:chiseled_deepslate",
		"minecraft:cobbled_deepslate_wall",
		"minecraft:polished_deepslate_wall",
		"minecraft:deepslate_brick_wall",
		"minecraft:deepslate_tile_wall",
		"minecraft:cobbled_deepslate_stairs",
		"minecraft:polished_deepslate_stairs",
		"minecraft:deepslate_brick_stairs",
		"minecraft:deepslate_tile_stairs",
		"minecraft:cobbled_deepslate_slab",
		"minecraft:polished_deepslate_slab",
		"minecraft:deepslate_brick_slab",
		"minecraft:deepslate_tile_slab",
	];
	deepslate.forEach((item) => {
		event.add("create:stone_types/deepslate", item);
	});

	// Andesite Alloy
	event.add("forge:ingots/andesite", "create:andesite_alloy");
	event.add("forge:plates/andesite", "create_dd:andesite_sheet");
	event.add("forge:nuggets/andesite", "kubejs:andesite_nugget");

	// Bronze
	event.add("forge:storage_blocks/bronze", "create_dd:bronze_block");

	// Remove axes and paxels from knife tag
	event.remove("sliceanddice:allowed_tools", "#forge:tools/axes");

	const casings = ["kubejs:steel_casing"];
	casings.forEach((item) => {
		event.add("create:casing", item);
	});

	const airSources = ["create:copper_backtank", "create:netherite_backtank"];
	airSources.forEach((item) => {
		event.add("create:pressurized_air_sources", item);
	});

	const void_items = ["minecraft:lava_bucket", "minecraft:cactus"];
	void_items.forEach((item) => {
		event.add("kubejs:void_items", item);
	});

	const paper_like = ["minecraft:paper", "create_paper_line:cardboard_sheet"];
	paper_like.forEach((item) => {
		event.add("kubejs:paper_like", item);
	});

	const paxels = [
		"kubejs:wooden_paxel",
		"kubejs:stone_paxel",
		"kubejs:copper_paxel",
		"kubejs:iron_paxel",
		"kubejs:steel_paxel",
		"kubejs:diamond_paxel",
		"kubejs:netherite_paxel",
		"kubejs:radiant_paxel",
	];
	paxels.forEach((item) => {
		event.add("forge:axes", item);
		event.add("forge:tools/axes", item);
		event.add("minecraft:axes", item);
		event.add("minecraft:tools/axes", item);
		event.add("kubejs:paxels", item);
	});

	const wirelessGrids = [
		"refinedstorage:wireless_grid",
		"refinedstorageaddons:wireless_crafting_grid",
		"refinedstorage:wireless_fluid_grid",
		"refinedstorage:wireless_crafting_monitor",
	];
	wirelessGrids.forEach((grid) => {
		event.remove("curios:curio", grid);
		event.add("curios:grid", grid);
	});

	const allItemsInTheGame = Item.getTypeList();
	event.add("kubejs:all_items", allItemsInTheGame);
	global.removedItems.forEach((item) => {
		event.remove("kubejs:all_items", item);
	});
	global.hiddenItems.forEach((item) => {
		event.remove("kubejs:all_items", item);
	});

	// Magnet Curios Tag
	event.remove("curios:charm", "simplemagnets:advancedmagnet");
	event.add("curios:magnet", "simplemagnets:advancedmagnet");

	// Extendo Grip Curios Tag
	event.add("curios:hands", "create:extendo_grip");

	// Totem of Undying Curios Tag
	event.remove("curios:charm", "minecraft:totem_of_undying");
	event.add("curios:totem", "minecraft:totem_of_undying");

	const decals = [
		"create_things_and_misc:train_sing",
		"create_things_and_misc:train_sing_2",
		"create_things_and_misc:train_sing_3",
		"create_things_and_misc:train_sing_4",
		"create_things_and_misc:train_sing_5",
		"create_things_and_misc:train_sing_yellow_1",
		"create_things_and_misc:train_sing_yellow_2",
		"create_things_and_misc:train_sing_yellow_3",
		"create_things_and_misc:train_sing_yellow_4",
		"create_things_and_misc:train_sing_yellow_5",
		"create_things_and_misc:redsing",
		"create_things_and_misc:redsing_1",
		"create_things_and_misc:redsing_2",
		"create_things_and_misc:green_sing",
		"create_things_and_misc:green_sing_1",
		"create_things_and_misc:green_sing_2",
		"create_things_and_misc:green_sing_3",
		"create_things_and_misc:green_sing_4",
		"create_things_and_misc:green_sing_5",
		"create_things_and_misc:green_sing_6",
		"create_things_and_misc:speed_25",
		"create_things_and_misc:speed_50",
		"create_things_and_misc:speed_75",
		"create_things_and_misc:speed_100",
		"createdeco:white_decal",
		"createdeco:orange_decal",
		"createdeco:magenta_decal",
		"createdeco:light_blue_decal",
		"createdeco:yellow_decal",
		"createdeco:lime_decal",
		"createdeco:pink_decal",
		"createdeco:gray_decal",
		"createdeco:light_gray_decal",
		"createdeco:cyan_decal",
		"createdeco:purple_decal",
		"createdeco:blue_decal",
		"createdeco:brown_decal",
		"createdeco:green_decal",
		"createdeco:red_decal",
		"createdeco:black_decal",
		"design_decor:moyai_sign",
		"design_decor:warning_sign",
		"design_decor:arrow_up_sign",
		"design_decor:tap_sign",
		"design_decor:stop_sign",
		"design_decor:arrow_right_sign",
		"design_decor:arrow_left_sign",
		"design_decor:glitch_warning_sign",
		"design_decor:broken_wrench_sign",
		"design_decor:biohazard_sign",
		"design_decor:capitalism_warning_sign",
		"design_decor:arrow_down_sign",
		"design_decor:gear_sign",
		"design_decor:creeper_sign",
		"design_decor:bun_sign",
		"design_decor:silly_sign",
		"design_decor:american_sign",
		"design_decor:magnet_sign",
		"design_decor:blank_sign",
	];
	decals.forEach((decal) => {
		event.add("kubejs:create_decals", decal);
	});

	// Yeet Salting from the game
	event.removeAll("salt:can_be_salted");

	event.add("kubejs:oak_drawers", /storagedrawers:oak_full_drawers_.*/);
	event.add("kubejs:spruce_drawers", /storagedrawers:spruce_full_drawers_.*/);
	event.add("kubejs:birch_drawers", /storagedrawers:birch_full_drawers_.*/);
	event.add("kubejs:jungle_drawers", /storagedrawers:jungle_full_drawers_.*/);
	event.add("kubejs:acacia_drawers", /storagedrawers:acacia_full_drawers_.*/);
	event.add("kubejs:dark_oak_drawers", /storagedrawers:dark_oak_full_drawers_.*/);
	event.add("kubejs:crimson_drawers", /storagedrawers:crimson_full_drawers_.*/);
	event.add("kubejs:warped_drawers", /storagedrawers:warped_full_drawers_.*/);
	event.add("kubejs:bamboo_drawers", /everycomp:sd\/quark\/bamboo_full_drawers_.*/);
	event.add("kubejs:spirit_drawers", /everycomp:sd\/create_dd\/spirit_full_drawers_.*/);
	event.add("kubejs:smoked_drawers", /everycomp:sd\/create_dd\/smoked_full_drawers_.*/);
	event.add("kubejs:spirit_drawers", /everycomp:sd\/create_dd\/spirit_full_drawers_.*/);
	event.add("kubejs:rose_drawers", /everycomp:sd\/create_dd\/rose_full_drawers_.*/);
	event.add("kubejs:azalea_drawers", /everycomp:sd\/ecologics\/azalea_full_drawers_.*/);
	event.add("kubejs:flowering_azalea_drawers", /everycomp:sd\/ecologics\/flowering_azalea_full_drawers_.*/);
	event.add("kubejs:coconut_drawers", /everycomp:sd\/ecologics\/coconut_full_drawers_.*/);
	event.add("kubejs:walnut_drawers", /everycomp:sd\/ecologics\/walnut_full_drawers_.*/);
});
