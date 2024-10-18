ServerEvents.recipes((event) => {
	// Fix Dryer Recipe;
	// FIXME: REPLACE THIS WITH VALID ITEM
	/* event.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
		S: "#minecraft:wooden_slabs",
	}); */

	// Cheap Paper Fixes
	event.replaceInput({ output: "create:sand_paper" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");
	event.replaceInput({ output: "create:red_sand_paper" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");
	event.replaceInput(
		{ output: "minecraft:cartography_table" },
		"minecraft:paper",
		"#cosmic_contraptions:cheap_papers"
	);
	event.replaceInput({ output: "minecraft:nametag" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");
	event.replaceInput({ output: "minecraft:map" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");

	// Sugar Paper
	event
		.shapeless("cosmic_contraptions:sugar_paper", ["3x minecraft:sugar_cane"])
		.id("cosmic_contraptions:paper/sugar_paper");

	// Wood Pulping
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:wood_pulp", 200)],
			[Fluid.of("minecraft:water", 250), "cosmic_contraptions:saw_dust", "farmersdelight:tree_bark"]
		)
		.id("cosmic_contraptions:paper/wood_pulping");

	// Wood Pulp Bleaching
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:whitened_wood_pulp", 100)],
			[Fluid.of("cosmic_contraptions:wood_pulp", 100), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:paper/whitened_wood_pulp");
});
