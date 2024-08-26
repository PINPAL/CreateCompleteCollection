ServerEvents.recipes((event) => {
	// Fix Dryer Recipe;
	event.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
		S: "#minecraft:wooden_slabs",
	});

	// Wood Pulping
	event.recipes.create
		.mixing(
			[Fluid.of("create_paper_line:wood_pulp", 200)],
			[Fluid.of("minecraft:water", 250), "createindustry:sawdust", "farmersdelight:tree_bark"]
		)
		.id("kubejs:wood_pulp");

	// Replacing create_paper_line:wood_chips with farmsdelight:tree_bark
	event.replaceInput(
		{ input: "create_paper_line:wood_chips" },
		"create_paper_line:wood_chips",
		"farmersdelight:tree_bark"
	);
	event.replaceOutput(
		{ output: "create_paper_line:wood_chips" },
		"create_paper_line:wood_chips",
		"farmersdelight:tree_bark"
	);

	// Replace white dye with white dye liquid
	event.recipes.create
		.mixing(
			[Fluid.of("create_paper_line:whitened_wood_pulp", 250)],
			[Fluid.of("create_paper_line:wood_pulp", 100), Fluid.of("kubejs:white_dye_fluid", 250)]
		)
		.id("kubejs:whitened_wood_pulp");

	// Replace frame with canvas
	event.replaceInput({ input: "create_paper_line:frame" }, "create_paper_line:frame", "farmersdelight:canvas");

	// Bucket Recipes
	event.recipes.create.filling("create_paper_line:wood_pulp_bucket", [
		Fluid.of("create_paper_line:wood_pulp", 1000),
		"minecraft:bucket",
	]);
	event.recipes.create.filling("create_paper_line:whitened_wood_pulp_bucket", [
		Fluid.of("create_paper_line:whitened_wood_pulp", 1000),
		"minecraft:bucket",
	]);

	// Merging Saw Dust
	event.replaceInput({ input: "create_paper_line:saw_dust" }, "create_paper_line:saw_dust", "createindustry:sawdust");
	event.replaceOutput(
		{ output: "create_paper_line:saw_dust" },
		"create_paper_line:saw_dust",
		"createindustry:sawdust"
	);
});
