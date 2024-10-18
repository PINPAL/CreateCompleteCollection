StartupEvents.registry("block", (event) => {
	event
		.create("cosmic_contraptions:cornflower_bush")
		.displayName("Cornflower Bush")
		.defaultCutout()
		.soundType("grass")
		.hardness(0)
		.resistance(0)
		.noCollision()
		.notSolid()
		.tagBlock("minecraft:flowers")
		.tagBlock("minecraft:tall_flowers")
		.tagBlock("minecraft:replaceable_plants")
		.property(BlockProperties.HALF)
		.noItem();
	event.create("cosmic_contraptions:belt_scroll").displayName("DEV ITEM");
	event
		.create("cosmic_contraptions:anvil", "cardinal")
		.displayName("Anvil")
		.soundType("anvil")
		.hardness(5.0)
		.resistance(1200.0)
		.defaultCutout()
		.model("minecraft:block/anvil")
		// base of anvil is 2 pixels off a full block on all sides and 4 pixel tall
		.box(2, 0, 2, 14, 4, 14)
		// small lip above base is 1 pixel tall and 2 pixels smaller on X axis, 1 pixel smaller on Z axis
		.box(4, 4, 3, 12, 5, 13)
		// same again but 5 pixels high - makes the main "stand" of the anvil that seperates top and base
		.box(6, 5, 4, 10, 10, 12)
		// top of the anvil (16x6x10)
		.box(3, 10, 0, 13, 16, 16);
	event
		.create("cosmic_contraptions:brewing_stand")
		.displayName("Brewing Stand")
		.soundType("stone")
		.hardness(5.0)
		.resistance(5.0)
		.defaultCutout()
		// bounding box is 1 pixel off a full block on all sides and 2 pixel tall
		.box(1, 0, 1, 15, 2, 15)
		// second bounding  a 2x2 column in the center that stops 2 pixels short of the top
		.box(7, 2, 7, 9, 14, 9);

	// Rainbow Blocks
	event
		.create("cosmic_contraptions:rainbow_placard")
		.displayName("Rainbow Placard")
		.soundType("metal")
		.tagBlock("minecraft:mineable/paxel")
		.defaultCutout()
		// collision box is 2 pixels of a full block on all sides and 3 pixels tall
		.box(2, 0, 2, 14, 3, 14);

	event
		.create("cosmic_contraptions:rainbow_candle")
		.displayName("Rainbow Candle")
		.soundType("wool")
		.tagBlock("minecraft:mineable/paxel")
		.defaultCutout()
		// collision box is 7 pixels of a full block on all sides and 6 pixels tall
		.box(7, 0, 7, 9, 6, 9);

	event
		.create("cosmic_contraptions:rainbow_canvas_sign")
		.displayName("Rainbow Canvas Sign")
		.soundType("wood")
		.tagBlock("minecraft:mineable/paxel")
		.opaque(false)
		.fullBlock(false)
		.noCollision()
		// collision box is 4 pixels of a full block on all sides and 16 pixels tall
		.box(4, 0, 4, 12, 16, 12);

	event
		.create("cosmic_contraptions:rainbow_wool")
		.displayName("Rainbow Wool")
		.soundType("wool")
		.tagBlock("minecraft:mineable/paxel");

	event
		.create("cosmic_contraptions:rainbow_concrete")
		.displayName("Rainbow Concrete")
		.soundType("stone")
		.tagBlock("minecraft:mineable/pickaxe");

	event
		.create("cosmic_contraptions:rainbow_valve_handle")
		.displayName("Rainbow Valve Handle")
		.soundType("stone")
		.tagBlock("minecraft:mineable/pickaxe")
		.defaultCutout()
		// collision box is 1 pixels of a full block on all sides and 8 pixels tall
		.box(1, 0, 1, 15, 8, 15);

	// Decorative Casing
	const createCasings = ["vault", "steel", "industrial"];
	createCasings.forEach((casing) => {
		event
			.create(`cosmic_contraptions:${casing}_casing`)
			.displayName(global.formatName(casing) + " Casing")
			.soundType("metal")
			.hardness(1.5)
			.resistance(6.0);
	});
});
