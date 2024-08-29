ServerEvents.recipes((event) => {
	// Color Mixing
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:light_gray_dye_fluid", 1000)],
			[Fluid.of("kubejs:black_dye_fluid", 250), Fluid.of("kubejs:white_dye_fluid", 750)]
		)
		.id("kubejs:dye_mixing/light_gray_from_black_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:light_gray_dye_fluid", 1000)],
			[Fluid.of("kubejs:gray_dye_fluid", 500), Fluid.of("kubejs:white_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/light_gray_from_gray_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:green_dye_fluid", 1000)],
			[Fluid.of("kubejs:blue_dye_fluid", 500), Fluid.of("kubejs:yellow_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/green_from_blue_and_yellow");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:gray_dye_fluid", 1000)],
			[Fluid.of("kubejs:black_dye_fluid", 500), Fluid.of("kubejs:white_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/gray_from_black_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:purple_dye_fluid", 1000)],
			[Fluid.of("kubejs:red_dye_fluid", 500), Fluid.of("kubejs:blue_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/purple_from_red_and_blue");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:cyan_dye_fluid", 1000)],
			[Fluid.of("kubejs:green_dye_fluid", 500), Fluid.of("kubejs:blue_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/cyan_from_green_and_blue");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:lime_dye_fluid", 1000)],
			[Fluid.of("kubejs:green_dye_fluid", 500), Fluid.of("kubejs:white_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/lime_from_green_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:light_blue_dye_fluid", 1000)],
			[Fluid.of("kubejs:white_dye_fluid", 500), Fluid.of("kubejs:blue_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/light_blue_from_white_and_blue");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:orange_dye_fluid", 1000)],
			[Fluid.of("kubejs:red_dye_fluid", 500), Fluid.of("kubejs:yellow_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/orange_from_red_and_yellow");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:black_dye_fluid", 1000)],
			[
				Fluid.of("kubejs:red_dye_fluid", 333),
				Fluid.of("kubejs:blue_dye_fluid", 333),
				Fluid.of("kubejs:green_dye_fluid", 333),
			]
		)
		.id("kubejs:dye_mixing/black_from_red_blue_and_green");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:brown_dye_fluid", 1000)],
			[Fluid.of("kubejs:red_dye_fluid", 500), Fluid.of("kubejs:green_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/brown_from_red_and_green");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:pink_dye_fluid", 1000)],
			[Fluid.of("kubejs:red_dye_fluid", 500), Fluid.of("kubejs:white_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/pink_from_red_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:pink_dye_fluid", 1000)],
			[Fluid.of("kubejs:purple_dye_fluid", 750), Fluid.of("kubejs:white_dye_fluid", 250)]
		)
		.id("kubejs:dye_mixing/pink_from_purple_and_white");
	event.recipes.create
		.mixing(
			[Fluid.of("kubejs:magenta_dye_fluid", 1000)],
			[Fluid.of("kubejs:pink_dye_fluid", 500), Fluid.of("kubejs:purple_dye_fluid", 500)]
		)
		.id("kubejs:dye_mixing/magenta_from_pink_and_purple");
});
