ServerEvents.recipes((event) => {
	const colors = [
		"red",
		"orange",
		"yellow",
		"lime",
		"green",
		"cyan",
		"light_blue",
		"blue",
		"purple",
		"magenta",
		"pink",
		"white",
		"light_gray",
		"gray",
		"black",
		"brown",
	];
	const chars = ["R", "O", "Y", "L", "G", "C", "0", "B", "P", "M", "1", "W", "2", "3", "4", "5"];
	const toolbox = {};
	const valve_handle = {};
	const wool = {};
	const concrete = {};
	const dye = {};
	const candle = {};
	const canvas_sign = {};
	const placard = {};
	for (let i = 0; i < colors.length; i++) {
		toolbox[chars[i]] = `create:${colors[i]}_toolbox`;
		valve_handle[chars[i]] = `create:${colors[i]}_valve_handle`;
		wool[chars[i]] = `minecraft:${colors[i]}_wool`;
		concrete[chars[i]] = `minecraft:${colors[i]}_concrete`;
		dye[chars[i]] = `minecraft:${colors[i]}_dye`;
		candle[chars[i]] = `minecraft:${colors[i]}_candle`;
		canvas_sign[chars[i]] = `farmersdelight:${colors[i]}_canvas_sign`;
		placard[chars[i]] = `createdeco:${colors[i]}_placard`;
	}
	// Workaround for the fact that the create:placard is not part of createdeco
	placard[chars[11]] = `create:placard`;

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_toolbox",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		toolbox
	);

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_valve_handle",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		valve_handle
	);

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_wool",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		wool
	);

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_concrete",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		concrete
	);

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_dye",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		dye
	);

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_candle",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		candle
	);

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_canvas_sign",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		canvas_sign
	);

	event.recipes.create.mechanical_crafting(
		"create_cosmic_contraptions:rainbow_placard",
		[" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
		placard
	);

	// Rainbow Core
	event.recipes.create.mechanical_crafting("create_cosmic_contraptions:rainbow_core", ["123", "4M5", "678"], {
		1: "create_cosmic_contraptions:rainbow_toolbox",
		2: "create_cosmic_contraptions:rainbow_valve_handle",
		3: "create_cosmic_contraptions:rainbow_wool",
		4: "create_cosmic_contraptions:rainbow_concrete",
		5: "create_cosmic_contraptions:rainbow_dye",
		6: "create_cosmic_contraptions:rainbow_candle",
		7: "create_cosmic_contraptions:rainbow_canvas_sign",
		8: "create_cosmic_contraptions:rainbow_placard",
		M: "create_things_and_misc:vibration_mechanism",
	});
});
