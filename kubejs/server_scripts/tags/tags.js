//priority: 0

ServerEvents.tags("item", (event) => {
	// Replace createdeco:internal tags with unified tags
	const decoInternalIngots = ["andesite", "copper", "iron", "industrial_iron", "brass", "zinc"];
	decoInternalIngots.forEach((ingot) => {
		event.add(`createdeco:internal/ingots/${ingot}_ingots`, `cosmic_contraptions:${ingot}_ingot`);
		event.add(`createdeco:internal/plates/${ingot}_plates`, `cosmic_contraptions:${ingot}_sheet`);
		event.add(`createdeco:internal/nuggets/${ingot}_nuggets`, `create:cosmic_contraptions/${ingot}_nugget`);
		event.add(`createdeco:internal/blocks/${ingot}_blocks`, `cosmic_contraptions:${ingot}_block`);
	});

	let leather_armor = [
		"minecraft:leather_chestplate",
		"minecraft:leather_leggings",
		"minecraft:leather_boots",
		"minecraft:leather_helmet",
	];

	leather_armor.forEach((item) => {
		event.add("cosmic_contraptions:leather_armor", item);
	});

	let chainmail_armor = [
		"minecraft:chainmail_chestplate",
		"minecraft:chainmail_leggings",
		"minecraft:chainmail_boots",
		"minecraft:chainmail_helmet",
	];
	chainmail_armor.forEach((item) => {
		event.add("cosmic_contraptions:chainmail_armor", item);
	});

	let copper_armor = [
		"cosmic_contraptions:copper_chestplate",
		"cosmic_contraptions:copper_leggings",
		"cosmic_contraptions:copper_boots",
		"cosmic_contraptions:copper_helmet",
	];
	copper_armor.forEach((item) => {
		event.add("cosmic_contraptions:copper_armor", item);
	});

	let item_vaults = ["cosmic_contraptions:item_vault", "create_connected:item_silo"];
	item_vaults.forEach((item) => {
		event.add("cosmic_contraptions:item_vaults", item);
	});

	let radiant_armor = [
		"cosmic_contraptions:radiant_chestplate",
		"cosmic_contraptions:radiant_leggings",
		"cosmic_contraptions:radiant_boots",
		"cosmic_contraptions:radiant_helmet",
	];
	radiant_armor.forEach((item) => {
		event.add("cosmic_contraptions:radiant_armor", item);
	});

	let forge_armors = [
		"create:netherite_diving_boots",
		"create:netherite_diving_helmet",
		"create:copper_diving_boots",
		"create:copper_diving_helmet",
		"cosmic_contraptions:copper_boots",
		"cosmic_contraptions:copper_helmet",
		"cosmic_contraptions:copper_chestplate",
		"cosmic_contraptions:copper_leggings",
	];
	forge_armors.forEach((item) => {
		event.add("forge:armors", item);
	});

	let forge_boots = [
		"cosmic_contraptions:steel_boots",
		"cosmic_contraptions:copper_boots",
		"create:netherite_diving_boots",
		"create:copper_diving_boots",
	];
	forge_boots.forEach((item) => {
		event.add("forge:armors/boots", item);
		event.add("forge:boots", item);
	});

	let papers = ["minecraft:paper", "cosmic_contraptions:sugar_paper"];
	papers.forEach((item) => {
		event.add("cosmic_contraptions:cheap_papers", item);
		event.add("exposure:photo_papers", item);
	});

	let forge_helmets = [
		"create:netherite_diving_helmet",
		"create:copper_diving_helmet",
		"cosmic_contraptions:steel_helmet",
		"cosmic_contraptions:copper_helmet",
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
		event.add("cosmic_contraptions:iron_armor", item);
	});

	let steel_armor = [
		"cosmic_contraptions:steel_chestplate",
		"cosmic_contraptions:steel_leggings",
		"cosmic_contraptions:steel_boots",
		"cosmic_contraptions:steel_helmet",
	];
	steel_armor.forEach((item) => {
		event.add("forge:armors", item);
		event.add("cosmic_contraptions:steel_armor", item);
	});

	event.add("forge:nuggets/bronze", "#forge:nuggets/strong_bronze");

	let forge_hoes = [
		"cosmic_contraptions:steel_hoe",
		"cosmic_contraptions:copper_hoe",
		"cosmic_contraptions:radiant_hoe",
	];
	forge_hoes.forEach((item) => {
		event.add("forge:tools/hoes", item);
		event.add("forge:hoes", item);
	});

	let forge_swords = [
		"cosmic_contraptions:steel_sword",
		"cosmic_contraptions:copper_sword",
		"cosmic_contraptions:radiant_sword",
	];
	forge_swords.forEach((item) => {
		event.add("forge:tools/swords", item);
		event.add("forge:swords", item);
	});

	let forge_chestplates = [
		"cosmic_contraptions:steel_chestplate",
		"cosmic_contraptions:copper_chestplate",
		"cosmic_contraptions:radiant_chestplate",
	];
	forge_chestplates.forEach((item) => {
		event.add("forge:chestplates", item);
		event.add("forge:armors/chestplates", item);
	});

	let forge_leggings = [
		"cosmic_contraptions:steel_leggings",
		"cosmic_contraptions:copper_leggings",
		"cosmic_contraptions:radiant_leggings",
	];
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
		event.add("cosmic_contraptions:diamond_armor", item);
	});

	let netherite_armor = [
		"minecraft:netherite_chestplate",
		"minecraft:netherite_leggings",
		"minecraft:netherite_boots",
		"minecraft:netherite_helmet",
	];
	netherite_armor.forEach((item) => {
		event.add("cosmic_contraptions:netherite_armor", item);
	});

	let createTrainTracks = ["create:track", /railways:track_.*/];
	createTrainTracks.forEach((item) => {
		event.add("cosmic_contraptions:train_tracks", item);
	});
	event.remove("cosmic_contraptions:train_tracks", /railways:track_switch.*/);
	event.remove("cosmic_contraptions:train_tracks", "railways:track_coupler");
	event.remove("cosmic_contraptions:train_tracks", /railways:track_incomplete_.*/);

	let brass_sorters = ["create:brass_funnel", "create:brass_tunnel", "create:smart_chute"];
	brass_sorters.forEach((item) => {
		event.add("quests:brass_sorter", item);
	});

	let windmill_sails = [/create:.*sail/, /create_things_and_misc:.*_sail/];
	windmill_sails.forEach((item) => {
		event.add("cosmic_contraptions:windmill_sails", item);
	});

	let electric_connectors = ["createaddition:connector", "createaddition:large_connector"];
	electric_connectors.forEach((item) => {
		event.add("cosmic_contraptions:electric_connector", item);
	});

	let forge_nutrients_carbs = ["minecraft:bread"];
	forge_nutrients_carbs.forEach((item) => {
		event.add("forge:nutrients/carbs", item);
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

	let notAllowedtoSlice = [
		"minecraft:wooden_axe",
		"minecraft:stone_axe",
		"minecraft:iron_axe",
		"minecraft:golden_axe",
		"minecraft:diamond_axe",
		"minecraft:netherite_axe",
		"minecraft:wooden_shovel",
		"minecraft:stone_shovel",
		"minecraft:iron_shovel",
		"minecraft:golden_shovel",
		"minecraft:diamond_shovel",
		"minecraft:netherite_shovel",
	];
	notAllowedtoSlice.forEach((item) => {
		event.remove("sliceanddice:allowed_tools", item);
	});

	let paxels = [
		"cosmic_contraptions:wooden_paxel",
		"cosmic_contraptions:stone_paxel",
		"cosmic_contraptions:iron_paxel",
		"cosmic_contraptions:copper_paxel",
		"cosmic_contraptions:steel_paxel",
		"cosmic_contraptions:diamond_paxel",
		"cosmic_contraptions:netherite_paxel",
	];
	paxels.forEach((item) => {
		event.add("forge:axes", item);
		event.add("forge:tools/axes", item);
		event.add("minecraft:axes", item);
		event.add("minecraft:tools/axes", item);
	});

	event.add("cosmic_contraptions:oak_drawers", /storagedrawers:oak_full_drawers_.*/);
	event.add("cosmic_contraptions:spruce_drawers", /storagedrawers:spruce_full_drawers_.*/);
	event.add("cosmic_contraptions:birch_drawers", /storagedrawers:birch_full_drawers_.*/);
	event.add("cosmic_contraptions:jungle_drawers", /storagedrawers:jungle_full_drawers_.*/);
	event.add("cosmic_contraptions:acacia_drawers", /storagedrawers:acacia_full_drawers_.*/);
	event.add("cosmic_contraptions:dark_oak_drawers", /storagedrawers:dark_oak_full_drawers_.*/);
	event.add("cosmic_contraptions:crimson_drawers", /storagedrawers:crimson_full_drawers_.*/);
	event.add("cosmic_contraptions:warped_drawers", /storagedrawers:warped_full_drawers_.*/);
	event.add("cosmic_contraptions:azalea_drawers", /everycomp:sd\/ecologics\/azalea_full_drawers_.*/);
	event.add(
		"cosmic_contraptions:flowering_azalea_drawers",
		/everycomp:sd\/ecologics\/flowering_azalea_full_drawers_.*/
	);
	event.add("cosmic_contraptions:coconut_drawers", /everycomp:sd\/ecologics\/coconut_full_drawers_.*/);
	event.add("cosmic_contraptions:walnut_drawers", /everycomp:sd\/ecologics\/walnut_full_drawers_.*/);

	event.add("forge:tools/knives", "cosmic_contraptions:steel_knife");
});
