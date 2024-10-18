ServerEvents.recipes((event) => {
	// Color Mixing
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:light_gray_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:black_dye_fluid", 250), Fluid.of("cosmic_contraptions:white_dye_fluid", 750)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:light_gray_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:gray_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:green_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:blue_dye_fluid", 500), Fluid.of("cosmic_contraptions:yellow_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:gray_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:black_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:purple_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:blue_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:cyan_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:green_dye_fluid", 500), Fluid.of("cosmic_contraptions:blue_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:lime_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:green_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:light_blue_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:white_dye_fluid", 500), Fluid.of("cosmic_contraptions:blue_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:orange_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:yellow_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:black_dye_fluid", 1000)],
		[
			Fluid.of("cosmic_contraptions:red_dye_fluid", 333),
			Fluid.of("cosmic_contraptions:blue_dye_fluid", 333),
			Fluid.of("cosmic_contraptions:green_dye_fluid", 333),
		]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:brown_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:green_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:pink_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:pink_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:purple_dye_fluid", 750), Fluid.of("cosmic_contraptions:white_dye_fluid", 250)]
	);
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:magenta_dye_fluid", 1000)],
		[Fluid.of("cosmic_contraptions:pink_dye_fluid", 500), Fluid.of("cosmic_contraptions:purple_dye_fluid", 500)]
	);
});
