ServerEvents.recipes((event) => {
	// Drawer Key
	event.shaped("storagedrawers:drawer_key", ["  R", " R ", "C  "], {
		C: "createdeco:gold_coin",
		R: "#forge:rods/gold",
	});
	// Concealment Key
	event.shapeless("storagedrawers:shroud_key", ["storagedrawers:drawer_key"]);
	// Quantify Key
	event.shapeless("storagedrawers:quantify_key", ["storagedrawers:shroud_key"]);
	// Back to Drawer Key
	event.shapeless("storagedrawers:drawer_key", ["storagedrawers:quantify_key"]);

	// Void Upgrade
	event.recipes.create.deploying("storagedrawers:void_upgrade", [
		"sophisticatedbackpacks:upgrade_base",
		"#kubejs:void_items",
	]);

	// Redstone Upgrade
	event.shapeless("storagedrawers:redstone_upgrade", ["sophisticatedbackpacks:upgrade_base", "minecraft:comparator"]);

	// Min Redstone Upgrade
	event.shapeless("storagedrawers:min_redstone_upgrade", [
		"sophisticatedbackpacks:upgrade_base",
		"minecraft:comparator",
		"minecraft:redstone",
	]);

	// Max Redstone Upgrade
	event.shapeless("storagedrawers:max_redstone_upgrade", [
		"sophisticatedbackpacks:upgrade_base",
		"minecraft:comparator",
		"2x minecraft:redstone",
	]);

	// Illumination Upgrade
	event.shapeless("3x storagedrawers:illumination_upgrade", [
		"sophisticatedbackpacks:upgrade_base",
		"minecraft:glow_ink_sac",
	]);

	// Fill Level Upgrade
	event.shapeless("3x storagedrawers:fill_level_upgrade", [
		"sophisticatedbackpacks:upgrade_base",
		"#minecraft:signs",
	]);

	const drawerWoodTypes = [
		{ name: "oak", type: "logs", mod: "storagedrawers:" },
		{ name: "spruce", type: "logs", mod: "storagedrawers:" },
		{ name: "birch", type: "logs", mod: "storagedrawers:" },
		{ name: "jungle", type: "logs", mod: "storagedrawers:" },
		{ name: "acacia", type: "logs", mod: "storagedrawers:" },
		{ name: "dark_oak", type: "logs", mod: "storagedrawers:" },
		{ name: "crimson", type: "stems", mod: "storagedrawers:" },
		{ name: "warped", type: "stems", mod: "storagedrawers:" },
		{
			name: "bamboo",
			type: "custom",
			mod: "everycomp:sd/quark/",
			customIngredient: "quark:bamboo_planks",
		},
		{
			name: "spirit",
			type: "custom",
			mod: "everycomp:sd/create_dd/",
			customIngredient: "#create_dd:spirit_logs",
		},
		{
			name: "rose",
			type: "custom",
			mod: "everycomp:sd/create_dd/",
			customIngredient: "#create_dd:rose_logs",
		},
		{
			name: "smoked",
			type: "custom",
			mod: "everycomp:sd/create_dd/",
			customIngredient: "#create_dd:smoked_logs",
		},
		{
			name: "walnut",
			type: "custom",
			customIngredient: "#ecologics:walnut_logs",
			mod: "everycomp:sd/ecologics/",
		},
		{
			name: "azalea",
			type: "custom",
			customIngredient: "#ecologics:azalea_logs",
			mod: "everycomp:sd/ecologics/",
		},
		{
			name: "coconut",
			type: "custom",
			customIngredient: "#ecologics:coconut_logs",
			mod: "everycomp:sd/ecologics/",
		},
		{
			name: "flowering_azalea",
			type: "custom",
			customIngredient: "#ecologics:flowering_azalea_logs",
			mod: "everycomp:sd/ecologics/",
		},
	];
	drawerWoodTypes.forEach((wood) => {
		// Recipe for Drawers
		event.shaped(`${wood.mod}${wood.name}_full_drawers_1`, ["V V", " W ", "V V"], {
			W: getDrawerLogTag(wood),
			V: "create:item_vault",
		});
		// Stone Cutting 1x1 Drawers into 2x2 & 2x1 Drawers
		event.stonecutting(`${wood.mod}${wood.name}_full_drawers_2`, `#kubejs:${wood.name}_drawers`);
		event.stonecutting(`${wood.mod}${wood.name}_full_drawers_4`, `#kubejs:${wood.name}_drawers`);
		// Converting Drawer Wood Type
		event.shapeless(`${wood.mod}${wood.name}_full_drawers_1`, [getDrawerLogTag(wood), "#storagedrawers:drawers"]);
	});
	function getDrawerLogTag(wood) {
		if (wood.type === "custom") {
			return wood.customIngredient;
		} else {
			return `#minecraft:${wood.name}_${wood.type}`;
		}
	}

	// Stack Upgrades
	// =================
	// Tier 1
	event.recipes.create.deploying("storagedrawers:obsidian_storage_upgrade", [
		"sophisticatedbackpacks:upgrade_base",
		"create_dd:andesite_sheet",
	]);
	// Tier 2
	event.recipes.create.deploying("storagedrawers:iron_storage_upgrade", [
		"storagedrawers:obsidian_storage_upgrade",
		"create:copper_sheet",
	]);
	// Tier 3
	event.recipes.create.deploying("storagedrawers:gold_storage_upgrade", [
		"storagedrawers:iron_storage_upgrade",
		"create:brass_sheet",
	]);
	// Tier 4
	event.recipes.create.deploying("storagedrawers:diamond_storage_upgrade", [
		"storagedrawers:gold_storage_upgrade",
		"create:sturdy_sheet",
	]);
	// Tier 5
	event.recipes.create.deploying("storagedrawers:emerald_storage_upgrade", [
		"storagedrawers:diamond_storage_upgrade",
		"createdeco:netherite_sheet",
	]);
	// Tier 6
	event.recipes.create.deploying("storagedrawers:creative_storage_upgrade", [
		"storagedrawers:emerald_storage_upgrade",
		"create_dd:refined_radiance_sheet",
	]);
});
