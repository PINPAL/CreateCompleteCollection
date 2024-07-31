ServerEvents.recipes((event) => {
	// Color Mixing
	event.recipes.create.mixing(
		[Fluid.of("create_cc:light_gray_dye_fluid", 1000)],
		[Fluid.of("create_cc:black_dye_fluid", 250), Fluid.of("create_cc:white_dye_fluid", 750)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:light_gray_dye_fluid", 1000)],
		[Fluid.of("create_cc:gray_dye_fluid", 500), Fluid.of("create_cc:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:green_dye_fluid", 1000)],
		[Fluid.of("create_cc:blue_dye_fluid", 500), Fluid.of("create_cc:yellow_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:gray_dye_fluid", 1000)],
		[Fluid.of("create_cc:black_dye_fluid", 500), Fluid.of("create_cc:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:purple_dye_fluid", 1000)],
		[Fluid.of("create_cc:red_dye_fluid", 500), Fluid.of("create_cc:blue_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:cyan_dye_fluid", 1000)],
		[Fluid.of("create_cc:green_dye_fluid", 500), Fluid.of("create_cc:blue_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:lime_dye_fluid", 1000)],
		[Fluid.of("create_cc:green_dye_fluid", 500), Fluid.of("create_cc:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:light_blue_dye_fluid", 1000)],
		[Fluid.of("create_cc:white_dye_fluid", 500), Fluid.of("create_cc:blue_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:orange_dye_fluid", 1000)],
		[Fluid.of("create_cc:red_dye_fluid", 500), Fluid.of("create_cc:yellow_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:black_dye_fluid", 1000)],
		[
			Fluid.of("create_cc:red_dye_fluid", 333),
			Fluid.of("create_cc:blue_dye_fluid", 333),
			Fluid.of("create_cc:green_dye_fluid", 333),
		]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:brown_dye_fluid", 1000)],
		[Fluid.of("create_cc:red_dye_fluid", 500), Fluid.of("create_cc:green_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:pink_dye_fluid", 1000)],
		[Fluid.of("create_cc:red_dye_fluid", 500), Fluid.of("create_cc:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:pink_dye_fluid", 1000)],
		[Fluid.of("create_cc:purple_dye_fluid", 750), Fluid.of("create_cc:white_dye_fluid", 250)]
	);
	event.recipes.create.mixing(
		[Fluid.of("create_cc:magenta_dye_fluid", 1000)],
		[Fluid.of("create_cc:pink_dye_fluid", 500), Fluid.of("create_cc:purple_dye_fluid", 500)]
	);
});
