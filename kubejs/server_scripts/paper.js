ServerEvents.recipes((event) => {
	// Fix Dryer Recipe;
	// FIXME: REPLACE THIS WITH VALID ITEM
	/* event.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
		S: "#minecraft:wooden_slabs",
	}); */

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
