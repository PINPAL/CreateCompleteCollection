//priority: 0

ServerEvents.tags("item", (event) => {
	let leather_armor = [
		"minecraft:leather_chestplate",
		"minecraft:leather_leggings",
		"minecraft:leather_boots",
		"minecraft:leather_helmet",
	];

	leather_armor.forEach((item) => {
		event.add("create_cc:leather_armor", item);
	});

	let chainmail_armor = [
		"minecraft:chainmail_chestplate",
		"minecraft:chainmail_leggings",
		"minecraft:chainmail_boots",
		"minecraft:chainmail_helmet",
	];
	chainmail_armor.forEach((item) => {
		event.add("create_cc:chainmail_armor", item);
	});

	let copper_armor = [
		"create_cc:copper_chestplate",
		"create_cc:copper_leggings",
		"create_cc:copper_boots",
		"create_cc:copper_helmet",
	];
	copper_armor.forEach((item) => {
		event.add("create_cc:copper_armor", item);
	});

	let item_vaults = ["create_cc:item_vault", "create_connected:item_silo"];
	item_vaults.forEach((item) => {
		event.add("create_cc:item_vaults", item);
	});

	let forge_armors = [
		"create:netherite_diving_boots",
		"create:netherite_diving_helmet",
		"create:copper_diving_boots",
		"create:copper_diving_helmet",
		"create_cc:copper_boots",
		"create_cc:copper_helmet",
		"create_cc:copper_chestplate",
		"create_cc:copper_leggings",
	];
	forge_armors.forEach((item) => {
		event.add("forge:armors", item);
	});

	let forge_boots = [
		"create_cc:steel_boots",
		"create_cc:copper_boots",
		"create:netherite_diving_boots",
		"create:copper_diving_boots",
	];
	forge_boots.forEach((item) => {
		event.add("forge:armors/boots", item);
		event.add("forge:boots", item);
	});

	let forge_helmets = [
		"create:netherite_diving_helmet",
		"create:copper_diving_helmet",
		"create_cc:steel_helmet",
		"create_cc:copper_helmet",
	];
	forge_helmets.forEach((item) => {
		event.add("forge:armors/helmets", item);
		event.add("forge:helmets", item);
	});

	let iron_armor = [
		"minecraft:iron_chestplate",
		"minecraft:iron_leggings",
		"minecraft:iron_boots",
		"minecraft:iron_helmet",
	];
	iron_armor.forEach((item) => {
		event.add("create_cc:iron_armor", item);
	});

	let steel_armor = [
		"create_cc:steel_chestplate",
		"create_cc:steel_leggings",
		"create_cc:steel_boots",
		"create_cc:steel_helmet",
	];
	steel_armor.forEach((item) => {
		event.add("forge:armors", item);
		event.add("create_cc:steel_armor", item);
	});

	event.add("forge:nuggets/bronze", "#forge:nuggets/strong_bronze");

	let forge_hoes = ["create_cc:steel_hoe", "create_cc:copper_hoe"];
	forge_hoes.forEach((item) => {
		event.add("forge:tools/hoes", item);
		event.add("forge:hoes", item);
	});

	let forge_swords = ["create_cc:steel_sword", "create_cc:copper_sword"];
	forge_swords.forEach((item) => {
		event.add("forge:tools/swords", item);
		event.add("forge:swords", item);
	});

	let forge_chestplates = ["create_cc:steel_chestplate", "create_cc:copper_chestplate"];
	forge_chestplates.forEach((item) => {
		event.add("forge:chestplates", item);
		event.add("forge:armors/chestplates", item);
	});

	let forge_leggings = ["create_cc:steel_leggings", "create_cc:copper_leggings"];
	forge_leggings.forEach((item) => {
		event.add("forge:leggings", item);
		event.add("forge:armors/leggings", item);
	});

	let diamond_armor = [
		"minecraft:diamond_chestplate",
		"minecraft:diamond_leggings",
		"minecraft:diamond_boots",
		"minecraft:diamond_helmet",
	];
	diamond_armor.forEach((item) => {
		event.add("create_cc:diamond_armor", item);
	});

	let netherite_armor = [
		"minecraft:netherite_chestplate",
		"minecraft:netherite_leggings",
		"minecraft:netherite_boots",
		"minecraft:netherite_helmet",
	];
	netherite_armor.forEach((item) => {
		event.add("create_cc:netherite_armor", item);
	});

	let createTrainTracks = ["create:track", /railways:track_.*/];
	createTrainTracks.forEach((item) => {
		event.add("create_cc:train_tracks", item);
	});
	event.remove("create_cc:train_tracks", /railways:track_switch.*/);
	event.remove("create_cc:train_tracks", "railways:track_coupler");
	event.remove("create_cc:train_tracks", /railways:track_incomplete_.*/);

	let brass_sorters = ["create:brass_funnel", "create:brass_tunnel", "create:smart_chute"];
	brass_sorters.forEach((item) => {
		event.add("quests:brass_sorter", item);
	});

	let windmill_sails = [/create:.*sail/, /create_things_and_misc:.*_sail/];
	windmill_sails.forEach((item) => {
		event.add("create_cc:windmill_sails", item);
	});

	let electric_connectors = ["createaddition:connector", "createaddition:large_connector"];
	electric_connectors.forEach((item) => {
		event.add("create_cc:electric_connector", item);
	});

	let forge_nutrients_carbs = ["minecraft:bread"];
	forge_nutrients_carbs.forEach((item) => {
		event.add("forge:nutrients/carbs", item);
	});

	let andesite_storage = ["sophisticatedstorage:gold_barrel", "sophisticatedstorage:gold_chest"];
	andesite_storage.forEach((item) => {
		event.add("quests:andesite_storage", item);
	});

	event.add("quests:storage_blocks", "#forge:barrels");
	event.add("quests:storage_blocks", "#forge:chests");
	event.add("quests:storage_blocks", "#storagedrawers:drawers");
	let quests_storage_blocks = ["metalbarrels:iron_barrel", "metalbarrels:gold_barrel", "metalbarrels:diamond_barrel"];
	quests_storage_blocks.forEach((item) => {
		event.add("quests:storage_blocks", item);
	});

	let newGems = ["coal", "redstone"];
	newGems.forEach((gem) => {
		event.add(`forge:gems/${gem}`, `minecraft:${gem}`);
	});

	let brickTypes = ["blue", "scarlet", "dean", "dusk", "pearl"];
	let bricks = event.get("forge:ingots/brick").getObjectIds();
	brickTypes.forEach((type) => {
		let blacklist = Ingredient.of(`createdeco:${type}_brick`);
		bricks.forEach((item) => {
			if (!blacklist.test(item)) event.add(`create_cc:bricks_not_${type}`, item);
		});
	});

	event.add("forge:storage_blocks/bronze", "create_dd:bronze_block");

	let notAllowedtoSlice = [
		"minecraft:wooden_axe",
		"minecraft:stone_axe",
		"minecraft:iron_axe",
		"minecraft:golden_axe",
		"minecraft:diamond_axe",
		"minecraft:netherite_axe",
		"create_cc:steel_axe",
		"minecraft:wooden_shovel",
		"minecraft:stone_shovel",
		"minecraft:iron_shovel",
		"minecraft:golden_shovel",
		"minecraft:diamond_shovel",
		"minecraft:netherite_shovel",
		"create_cc:steel_shovel",
	];
	notAllowedtoSlice.forEach((item) => {
		event.remove("sliceanddice:allowed_tools", item);
	});

	let paxels = [
		"create_cc:wooden_paxel",
		"create_cc:stone_paxel",
		"create_cc:iron_paxel",
		"create_cc:copper_paxel",
		"create_cc:steel_paxel",
		"create_cc:diamond_paxel",
		"create_cc:netherite_paxel",
	];
	paxels.forEach((item) => {
		event.add("forge:axes", item);
		event.add("forge:tools/axes", item);
		event.add("minecraft:axes", item);
		event.add("minecraft:tools/axes", item);
	});

	event.add("create_cc:oak_drawers", /storagedrawers:oak_full_drawers_.*/);
	event.add("create_cc:spruce_drawers", /storagedrawers:spruce_full_drawers_.*/);
	event.add("create_cc:birch_drawers", /storagedrawers:birch_full_drawers_.*/);
	event.add("create_cc:jungle_drawers", /storagedrawers:jungle_full_drawers_.*/);
	event.add("create_cc:acacia_drawers", /storagedrawers:acacia_full_drawers_.*/);
	event.add("create_cc:dark_oak_drawers", /storagedrawers:dark_oak_full_drawers_.*/);
	event.add("create_cc:crimson_drawers", /storagedrawers:crimson_full_drawers_.*/);
	event.add("create_cc:warped_drawers", /storagedrawers:warped_full_drawers_.*/);
	event.add("create_cc:azalea_drawers", /everycomp:sd\/ecologics\/azalea_full_drawers_.*/);
	event.add("create_cc:flowering_azalea_drawers", /everycomp:sd\/ecologics\/flowering_azalea_full_drawers_.*/);
	event.add("create_cc:coconut_drawers", /everycomp:sd\/ecologics\/coconut_full_drawers_.*/);
	event.add("create_cc:walnut_drawers", /everycomp:sd\/ecologics\/walnut_full_drawers_.*/);

	event.add("forge:tools/knives", "create_cc:steel_knife");
});
