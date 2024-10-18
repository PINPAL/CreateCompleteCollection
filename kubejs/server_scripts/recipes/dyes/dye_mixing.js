ServerEvents.recipes((event) => {
	// Color Mixing
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:light_gray_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:black_dye_fluid", 250), Fluid.of("cosmic_contraptions:white_dye_fluid", 750)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/light_gray_from_black_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:light_gray_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:gray_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/light_gray_from_gray_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:green_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:blue_dye_fluid", 500), Fluid.of("cosmic_contraptions:yellow_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/green_from_blue_and_yellow");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:gray_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:black_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/gray_from_black_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:purple_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:blue_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/purple_from_red_and_blue");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:cyan_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:green_dye_fluid", 500), Fluid.of("cosmic_contraptions:blue_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/cyan_from_green_and_blue");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:lime_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:green_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/lime_from_green_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:light_blue_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:white_dye_fluid", 500), Fluid.of("cosmic_contraptions:blue_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/light_blue_from_white_and_blue");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:orange_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:yellow_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/orange_from_red_and_yellow");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:black_dye_fluid", 1000)],
			[
				Fluid.of("cosmic_contraptions:red_dye_fluid", 333),
				Fluid.of("cosmic_contraptions:blue_dye_fluid", 333),
				Fluid.of("cosmic_contraptions:green_dye_fluid", 333),
			]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/black_from_red_blue_and_green");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:brown_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:green_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/brown_from_red_and_green");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:pink_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:red_dye_fluid", 500), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/pink_from_red_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:pink_dye_fluid", 1000)],
			[
				Fluid.of("cosmic_contraptions:purple_dye_fluid", 750),
				Fluid.of("cosmic_contraptions:white_dye_fluid", 250),
			]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/pink_from_purple_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:magenta_dye_fluid", 1000)],
			[Fluid.of("cosmic_contraptions:pink_dye_fluid", 500), Fluid.of("cosmic_contraptions:purple_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:dyes/dye_mixing/magenta_from_pink_and_purple");
});
