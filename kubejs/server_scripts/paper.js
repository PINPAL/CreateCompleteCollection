ServerEvents.recipes((event) => {
	// Fix Dryer Recipe;
	// FIXME: REPLACE THIS WITH VALID ITEM
	/* event.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
		S: "#minecraft:wooden_slabs",
	}); */

	// Cheap Paper Fixes
	event.replaceInput({ output: "create:sand_paper" }, "minecraft:paper", "#create_cc:cheap_papers");
	event.replaceInput({ output: "create:red_sand_paper" }, "minecraft:paper", "#create_cc:cheap_papers");
	event.replaceInput({ output: "minecraft:cartography_table" }, "minecraft:paper", "#create_cc:cheap_papers");
	event.replaceInput({ output: "minecraft:nametag" }, "minecraft:paper", "#create_cc:cheap_papers");
	event.replaceInput({ output: "minecraft:map" }, "minecraft:paper", "#create_cc:cheap_papers");

	// Sugar Paper
	event.shapeless("create_cc:sugar_paper", ["3x minecraft:sugar_cane"]).id("create_cc:paper/sugar_paper");

	// Wood Pulping
	event.recipes.create
		.mixing(
			[Fluid.of("create_cc:wood_pulp", 200)],
			[Fluid.of("minecraft:water", 250), "create_cc:saw_dust", "farmersdelight:tree_bark"]
		)
		.id("create_cc:paper/wood_pulping");

	// Wood Pulp Bleaching
	event.recipes.create
		.mixing(
			[Fluid.of("create_cc:whitened_wood_pulp", 100)],
			[Fluid.of("create_cc:wood_pulp", 100), Fluid.of("create_cc:white_dye_fluid", 500)]
		)
		.id("create_cc:paper/whitened_wood_pulp");
});
