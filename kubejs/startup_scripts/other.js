StartupEvents.registry("block", (event) => {
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
	event.create("belt_scroll").displayName("DEV ITEM");
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
	event
		.create("brewing_stand")
		.displayName("Brewing Stand")
		.material("stone")
		.defaultCutout()
		// bounding box is 1 pixel off a full block on all sides and 2 pixel tall
		.box(1, 0, 1, 15, 2, 15)
		// second bounding  a 2x2 column in the center that stops 2 pixels short of the top
		.box(7, 2, 7, 9, 14, 9);
	event.create("steel_casing").displayName("Steel Casing").material("wood");
});

StartupEvents.registry("item", (event) => {
	// Refined Rock
	event.create("refined_stone").displayName("Refined Rock");
	event
		.create("cornflower_bush_item")
		.displayName("Cornflower Bush")
		.tag("minecraft:flowers")
		.tag("minecraft:tall_flowers");
	// Sugar Paper
	event.create("kubejs:sugar_paper").displayName("Sugar Paper");
});
