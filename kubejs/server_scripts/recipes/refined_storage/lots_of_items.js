ServerEvents.recipes((event) => {
	// Filter
	event.shapeless(Item.of("refinedstorage:filter", 2), ["create:filter", "refinedstorage:silicon"]);

	// Crafting Grid
	event.shaped("refinedstorage:crafting_grid", ["BAB", "DCD", "BTB"], {
		B: "create:brass_casing",
		A: "tfmg:plastic_block",
		D: "create:display_board",
		C: "refinedstorage:controller",
		T: "minecraft:crafting_table",
	});

	// Crafting Monitor
	event.shapeless("refinedstorage:crafting_monitor", [
		"refinedstorage:crafting_grid",
		"minecraft:crafting_table",
		"create:display_board",
	]);

	// Detector
	event.shapeless("refinedstorage:detector", ["refinedstorage:silicon", "create:stockpile_switch"]);

	// Pattern Grid
	event.shapeless("refinedstorage:pattern_grid", [
		"refinedstorage:crafting_grid",
		"minecraft:crafting_table",
		"refinedstorage:pattern",
		"3x refinedstorage:advanced_processor",
	]);

	// Fluid Grid
	event.shapeless("refinedstorage:fluid_grid", [
		"refinedstorage:crafting_grid",
		"minecraft:bucket",
		"create:copper_casing",
	]);

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
		.loops(1);

	// Cable
	event.shaped("refinedstorage:cable", ["BBB", "KGK", "BBB"], {
		B: "create:brass_sheet",
		K: "minecraft:dried_kelp",
		G: { tag: "forge:glass" },
	});

	// Importer
	event.shapeless("refinedstorage:importer", ["refinedstorage:cable", "create:smart_chute"]);

	// Exporter
	event.shapeless("refinedstorage:exporter", ["refinedstorage:cable", "create:chute"]);

	// External Storage
	event.shapeless("refinedstorage:external_storage", [
		"refinedstorage:cable",
		"refinedstorage:advanced_processor",
		"create:precision_mechanism",
	]);

	// Controller
	event.recipes.createMechanicalCrafting("refinedstorage:controller", [" BBB ", "BAEAB", "BTMTB", "BAEAB", " BBB "], {
		B: "create:brass_block",
		A: "refinedstorage:advanced_processor",
		E: "createaddition:electric_motor",
		T: "create:electron_tube",
		M: "tfmg:steel_mechanism",
	});

	// Crafter
	event.recipes.createMechanicalCrafting("refinedstorage:crafter", [" BBB ", "BACAB", "BCPCB", "BACAB", " BBB "], {
		B: "create:brass_casing",
		C: "minecraft:crafting_table",
		A: "refinedstorage:advanced_processor",
		P: "create_dd:inductive_mechanism",
	});
});
