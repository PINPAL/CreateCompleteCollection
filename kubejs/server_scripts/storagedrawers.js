ServerEvents.recipes((event) => {
	// Drawer Key
	event
		.shaped("storagedrawers:drawer_key", ["  R", " R ", "C  "], {
			C: "createdeco:gold_coin",
			R: "#forge:rods/gold",
		})
		.id("create_cc:drawers/drawer_key");
	// Quantify Key
	event
		.shapeless("storagedrawers:quantify_key", ["storagedrawers:drawer_key", "#minecraft:signs"])
		.id("create_cc:drawers/quantify_key");
	// Concealment Key
	event
		.shapeless("storagedrawers:shroud_key", ["storagedrawers:drawer_key", "#forge:nuggets/gold"])
		.id("create_cc:drawers/concealment_key");

	// Void Upgrade
	event
		.shaped("storagedrawers:void_upgrade", ["EOE", "OUO", "EOE"], {
			U: "sophisticatedbackpacks:upgrade_base",
			E: "#forge:ender_pearls",
			O: "#forge:obsidian",
		})
		.id("create_cc:drawers/void_upgrade");

	// Redstone Upgrade
	event
		.shapeless("storagedrawers:redstone_upgrade", ["sophisticatedbackpacks:upgrade_base", "minecraft:comparator"])
		.id("create_cc:drawers/redstone_upgrade");

	// Min Redstone Upgrade
	event
		.shapeless("storagedrawers:min_redstone_upgrade", [
			"sophisticatedbackpacks:upgrade_base",
			"minecraft:comparator",
			"minecraft:redstone",
		])
		.id("create_cc:drawers/min_redstone_upgrade");

	// Max Redstone Upgrade
	event
		.shapeless("storagedrawers:max_redstone_upgrade", [
			"sophisticatedbackpacks:upgrade_base",
			"minecraft:comparator",
			"2x minecraft:redstone",
		])
		.id("create_cc:drawers/max_redstone_upgrade");

	// Illumination Upgrade
	event
		.shapeless("3x storagedrawers:illumination_upgrade", [
			"sophisticatedbackpacks:upgrade_base",
			"minecraft:glow_ink_sac",
		])
		.id("create_cc:drawers/illumination_upgrade");

	// Fill Level Upgrade
	event
		.shapeless("3x storagedrawers:fill_level_upgrade", ["sophisticatedbackpacks:upgrade_base", "#minecraft:signs"])
		.id("create_cc:drawers/fill_level_upgrade");

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
		event
			.shaped(`${wood.mod}${wood.name}_full_drawers_1`, ["V V", " W ", "V V"], {
				W: getDrawerLogTag(wood),
				V: "#create_cc:item_vaults",
			})
			.id(`create_cc:drawers/${wood.name}_crafting_1x1`);
		event
			.shaped(`${wood.mod}${wood.name}_full_drawers_4`, [" V ", "VWV", " V "], {
				W: getDrawerLogTag(wood),
				V: "#create_cc:item_vaults",
			})
			.id(`create_cc:drawers/${wood.name}_crafting_2x2`);
		event
			.shaped(`${wood.mod}${wood.name}_full_drawers_2`, ["VV ", " W ", " VV"], {
				W: getDrawerLogTag(wood),
				V: "#create_cc:item_vaults",
			})
			.id(`create_cc:drawers/${wood.name}_crafting_1x2`);
		// Stone Cutting 1x1 Drawers into 2x2 & 2x1 Drawers
		event
			.stonecutting(`${wood.mod}${wood.name}_full_drawers_2`, `#create_cc:${wood.name}_drawers`)
			.id(`create_cc:drawers/${wood.name}_stonecutting_2x1`); // 2x1 Drawers
		event
			.stonecutting(`${wood.mod}${wood.name}_full_drawers_4`, `#create_cc:${wood.name}_drawers`)
			.id(`create_cc:drawers/${wood.name}_stonecutting_2x2`); // 2x2 Drawers
		// Converting Drawer Wood Type
		event
			.shapeless(`${wood.mod}${wood.name}_full_drawers_1`, [getDrawerLogTag(wood), "#storagedrawers:drawers"])
			.id(`create_cc:drawers/${wood.name}_recycle`);
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
	event.recipes.create
		.deploying("storagedrawers:obsidian_storage_upgrade", [
			"sophisticatedbackpacks:upgrade_base",
			"#forge:plates/andesite",
		])
		.id("create_cc:drawers/upgrade/tier1");
	// Tier 2
	event.recipes.create
		.deploying("storagedrawers:iron_storage_upgrade", [
			"storagedrawers:obsidian_storage_upgrade",
			"#forge:plates/copper",
		])
		.id("create_cc:drawers/upgrade/tier2");
	// Tier 3
	event.recipes.create
		.deploying("storagedrawers:gold_storage_upgrade", [
			"storagedrawers:iron_storage_upgrade",
			"#forge:plates/brass",
		])
		.id("create_cc:drawers/upgrade/tier3");
	// Tier 4
	event.recipes.create
		.deploying("storagedrawers:diamond_storage_upgrade", [
			"storagedrawers:gold_storage_upgrade",
			"#forge:plates/sturdy_steel",
		])
		.id("create_cc:drawers/upgrade/tier4");
	// Tier 5
	event.recipes.create
		.deploying("storagedrawers:emerald_storage_upgrade", [
			"storagedrawers:diamond_storage_upgrade",
			"#forge:plates/netherite",
		])
		.id("create_cc:drawers/upgrade/tier5");
	// Tier 6
	event.recipes.create
		.deploying("storagedrawers:creative_storage_upgrade", [
			"storagedrawers:emerald_storage_upgrade",
			"#forge:plates/refined_radiance",
		])
		.id("create_cc:drawers/upgrade/tier6");
});
