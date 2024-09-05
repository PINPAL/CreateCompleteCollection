ServerEvents.recipes((event) => {
	// Rock Salt
	event.recipes.create.compacting("salt:raw_rock_salt", ["4x salt:salt"]).id("kubejs:refined_storage/rock_salt");

	// Filter
	event
		.shapeless(Item.of("refinedstorage:filter", 2), ["create:filter", "refinedstorage:silicon"])
		.id("kubejs:refined_storage/filter");

	// Crafting Grid
	event
		.shaped("refinedstorage:crafting_grid", ["BAB", "DCD", "BTB"], {
			B: "create:brass_casing",
			A: "createindustry:plastic_block",
			D: "create:display_board",
			C: "refinedstorage:controller",
			T: "minecraft:crafting_table",
		})
		.id("kubejs:refined_storage/crafting_grid");

	// Crafting Monitor
	event
		.shapeless("refinedstorage:crafting_monitor", [
			"refinedstorage:crafting_grid",
			"minecraft:crafting_table",
			"create:display_board",
		])
		.id("kubejs:refined_storage/crafting_monitor");

	// Detector
	event
		.shapeless("refinedstorage:detector", ["refinedstorage:silicon", "create:stockpile_switch"])
		.id("kubejs:refined_storage/detector");

	// Pattern Grid
	event
		.shapeless("refinedstorage:pattern_grid", [
			"refinedstorage:crafting_grid",
			"minecraft:crafting_table",
			"refinedstorage:pattern",
			"3x refinedstorage:advanced_processor",
		])
		.id("kubejs:refined_storage/pattern_grid");

	// Fluid Grid
	event
		.shapeless("refinedstorage:fluid_grid", [
			"refinedstorage:crafting_grid",
			"minecraft:bucket",
			"create:copper_casing",
		])
		.id("kubejs:refined_storage/fluid_grid");

	// Pattern
	event.recipes
		.createSequencedAssembly(
			[
				// output
				Item.of("refinedstorage:pattern", 4),
			],
			// input
			"refinedstorage:upgrade",
			[
				event.recipes.createDeploying("refinedstorage:upgrade", [
					"refinedstorage:upgrade",
					"refinedstorage:silicon",
				]),
				event.recipes.createDeploying("refinedstorage:upgrade", [
					"refinedstorage:upgrade",
					"minecraft:crafting_table",
				]),
			]
		)
		.transitionalItem("refinedstorage:upgrade")
		.loops(1)
		.id("kubejs:refined_storage/pattern");

	// Cable
	event
		.shaped("8x refinedstorage:cable", ["BBB", "KGK", "BBB"], {
			B: "create:brass_sheet",
			K: "minecraft:dried_kelp",
			G: { tag: "forge:glass" },
		})
		.id("kubejs:refined_storage/cable");

	// Importer
	event
		.shapeless("refinedstorage:importer", ["refinedstorage:cable", "create:smart_chute"])
		.id("kubejs:refined_storage/importer");

	// Exporter
	event
		.shapeless("refinedstorage:exporter", ["refinedstorage:cable", "create:chute"])
		.id("kubejs:refined_storage/exporter");

	// External Storage
	event
		.shapeless("refinedstorage:external_storage", [
			"refinedstorage:cable",
			"refinedstorage:advanced_processor",
			"create:precision_mechanism",
		])
		.id("kubejs:refined_storage/external_storage");

	// Controller
	event.recipes
		.createMechanicalCrafting("refinedstorage:controller", [" BBB ", "BAEAB", "BTMTB", "BAEAB", " BBB "], {
			B: "create:brass_block",
			A: "refinedstorage:advanced_processor",
			E: "createaddition:electric_motor",
			T: "create:electron_tube",
			M: "createindustry:steel_mechanism",
		})
		.id("kubejs:refined_storage/controller");

	// Crafter
	event.recipes
		.createMechanicalCrafting("refinedstorage:crafter", [" BBB ", "BACAB", "BCPCB", "BACAB", " BBB "], {
			B: "create:brass_casing",
			C: "minecraft:crafting_table",
			A: "refinedstorage:advanced_processor",
			P: "create_dd:inductive_mechanism",
		})
		.id("kubejs:refined_storage/crafter");

	// Upgrade
	event.recipes
		.createSequencedAssembly(
			[
				// output
				Item.of("refinedstorage:upgrade"),
			],
			// input
			"#forge:plates/steel",
			[
				event.recipes.createDeploying("#forge:plates/steel", ["#forge:plates/steel", "refinedstorage:silicon"]),
				event.recipes.createDeploying("#forge:plates/steel", [
					"#forge:plates/steel",
					"createaddition:copper_wire",
				]),
				event.recipes.createDeploying("#forge:plates/steel", [
					"#forge:plates/steel",
					"createaddition:capacitor",
				]),
			]
		)
		.transitionalItem("#forge:plates/steel")
		.loops(3)
		.id("kubejs:refined_storage/base_upgrade");

	// Crafting Upgrade
	event
		.shapeless("refinedstorage:crafting_upgrade", ["refinedstorage:upgrade", "minecraft:crafting_table"])
		.id("kubejs:refined_storage/crafting_upgrade");

	// Stack Upgrade
	event
		.shapeless("refinedstorage:stack_upgrade", ["3x refinedstorage:speed_upgrade"])
		.id("kubejs:refined_storage/stack_upgrade");

	// Speed Upgrade
	event.recipes.create
		.mixing(
			[Item.of("refinedstorage:speed_upgrade")],
			["refinedstorage:upgrade", Fluid.of("create_enchantment_industry:hyper_experience", 50)]
		)
		.id("kubejs:refined_storage/speed_upgrade");

	// Wireless Transmitter
	event.recipes
		.createSequencedAssembly(
			[
				// output
				Item.of("refinedstorage:wireless_transmitter"),
			],
			// input
			"createaddition:brass_rod",
			[
				event.recipes.createDeploying("createaddition:brass_rod", [
					"createaddition:brass_rod",
					"refinedstorage:silicon",
				]),
				event.recipes.createDeploying("createaddition:brass_rod", [
					"createaddition:brass_rod",
					"refinedstorage:advanced_processor",
				]),
				event.recipes.createDeploying("createaddition:brass_rod", [
					"createaddition:brass_rod",
					"create_things_and_misc:vibration_mechanism",
				]),
				event.recipes.createDeploying("createaddition:brass_rod", [
					"createaddition:brass_rod",
					"createaddition:tesla_coil",
				]),
				event.recipes.createDeploying("createaddition:brass_rod", [
					"createaddition:brass_rod",
					"createindustry:lpg_engine",
				]),
			]
		)
		.transitionalItem("createaddition:brass_rod")
		.loops(10)
		.id("kubejs:refined_storage/wireless_transmitter");

	// Wireless Crafting Grid
	event.recipes.create
		.mixing(
			[Item.of("refinedstorageaddons:wireless_crafting_grid")],
			[
				"refinedstorage:wireless_transmitter",
				"refinedstorage:crafting_grid",
				Fluid.of("create_enchantment_industry:hyper_experience", 1000),
			]
		)
		.id("kubejs:refined_storage/wireless_crafting_grid");
	// Wireless Fluid Grid
	event.recipes.create
		.mixing(
			[Item.of("refinedstorage:wireless_fluid_grid")],
			["refinedstorage:fluid_grid", Fluid.of("create_enchantment_industry:hyper_experience", 500)]
		)
		.id("kubejs:refined_storage/wireless_fluid_grid");
	// Wireless Crafting Monitor
	event.recipes.create
		.mixing(
			[Item.of("refinedstorage:wireless_crafting_monitor")],
			["refinedstorage:crafting_monitor", Fluid.of("create_enchantment_industry:hyper_experience", 500)]
		)
		.id("kubejs:refined_storage/wireless_crafting_monitor");

	// Infinity Range Upgrade
	event.remove({ id: "rsinfinitybooster:infinity_card" });
	event.recipes
		.createSequencedAssembly(
			[
				// output
				Item.of("rsinfinitybooster:infinity_card"),
			],
			// input
			"refinedstorage:upgrade",
			[
				event.recipes.createDeploying("refinedstorage:upgrade", [
					"refinedstorage:upgrade",
					"refinedstorage:silicon",
				]),
				event.recipes.createDeploying("refinedstorage:upgrade", [
					"refinedstorage:upgrade",
					"refinedstorage:advanced_processor",
				]),
				event.recipes.createDeploying("refinedstorage:upgrade", [
					"refinedstorage:upgrade",
					"create_things_and_misc:vibration_mechanism",
				]),
				event.recipes.createDeploying("refinedstorage:upgrade", [
					"refinedstorage:upgrade",
					"create_dd:shadow_steel",
				]),
				event.recipes.createDeploying("refinedstorage:upgrade", [
					"refinedstorage:upgrade",
					"create_dd:chromatic_compound",
				]),
				event.recipes.create.pressing("refinedstorage:upgrade", "refinedstorage:upgrade"),
			]
		)
		.id("kubejs:refined_storage/infinity_card")
		.transitionalItem("refinedstorage:upgrade")
		.loops(12);

	// Dimension Range Upgrade
	event.remove({ id: "rsinfinitybooster:dimension_card" });
	event.recipes
		.createSequencedAssembly(
			[
				// output
				Item.of("rsinfinitybooster:dimension_card"),
			],
			// input
			"rsinfinitybooster:infinity_card",
			[
				event.recipes.createDeploying("rsinfinitybooster:infinity_card", [
					"rsinfinitybooster:infinity_card",
					"refinedstorage:advanced_processor",
				]),
				event.recipes.createDeploying("rsinfinitybooster:infinity_card", [
					"rsinfinitybooster:infinity_card",
					"create_things_and_misc:vibration_mechanism",
				]),
			]
		)
		.id("kubejs:refined_storage/dimension_card")
		.transitionalItem("rsinfinitybooster:infinity_card")
		.loops(3);
});
