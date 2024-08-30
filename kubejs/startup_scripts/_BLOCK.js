StartupEvents.registry("block", (event) => {
	// Cornflower Bush
	event
		.create("cornflower_bush")
		.displayName("Cornflower Bush")
		.defaultCutout()
		.material("plant")
		.hardness(0)
		.resistance(0)
		.noCollision()
		.notSolid()
		.tagBlock("minecraft:flowers")
		.tagBlock("minecraft:tall_flowers")
		.tagBlock("minecraft:replaceable_plants")
		.property(BlockProperties.HALF)
		.noItem();

	// Developer Item
	event.create("belt_scroll").displayName("DEV ITEM");

	// Fake Anvil
	event
		.create("anvil", "cardinal")
		.displayName("Anvil")
		.material("heavy_metal")
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

	// Fake Brewing Stand
	event
		.create("brewing_stand")
		.displayName("Brewing Stand")
		.material("stone")
		.hardness(0.5)
		.defaultCutout()
		// bounding box is 1 pixel off a full block on all sides and 2 pixel tall
		.box(1, 0, 1, 15, 2, 15)
		// second bounding  a 2x2 column in the center that stops 2 pixels short of the top
		.box(7, 2, 7, 9, 14, 9);

	// Steel Casing
	event.create("steel_casing").hardness(1.0).displayName("Steel Casing").material("wood");

	// Wareproof Planks
	event.create("waterproof_planks").displayName("Waterproof Planks").material("wood");

	// Rainbow Placard
	event
		.create("rainbow_placard")
		.displayName("Rainbow Placard")
		.material("metal")
		.tagBlock("minecraft:mineable/pickaxe")
		.defaultCutout()
		// collision box is 2 pixels of a full block on all sides and 3 pixels tall
		.box(2, 0, 2, 14, 3, 14);

	// Rainbow Candle
	event
		.create("rainbow_candle")
		.displayName("Rainbow Candle")
		.material("wool")
		.tagBlock("minecraft:mineable/pickaxe")
		.defaultCutout()
		// collision box is 7 pixels of a full block on all sides and 6 pixels tall
		.box(7, 0, 7, 9, 6, 9);

	// Rainbow Canvas Sign
	event
		.create("rainbow_canvas_sign")
		.displayName("Rainbow Canvas Sign")
		.material("wood")
		.tagBlock("minecraft:mineable/pickaxe")
		.opaque(false)
		.fullBlock(false)
		.noCollision()
		// collision box is 4 pixels of a full block on all sides and 16 pixels tall
		.box(4, 0, 4, 12, 16, 12);

	// Rainbow Wool
	event.create("rainbow_wool").displayName("Rainbow Wool").material("wool").tagBlock("minecraft:mineable/pickaxe");

	// Rainbow Concrete
	event
		.create("rainbow_concrete")
		.displayName("Rainbow Concrete")
		.material("stone")
		.tagBlock("minecraft:mineable/pickaxe");

	// Rainbow Valve Handle
	event
		.create("rainbow_valve_handle")
		.displayName("Rainbow Valve Handle")
		.material("stone")
		.tagBlock("minecraft:mineable/pickaxe")
		.defaultCutout()
		// collision box is 1 pixels of a full block on all sides and 8 pixels tall
		.box(1, 0, 1, 15, 8, 15);
});
