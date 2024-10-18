StartupEvents.registry("block", (event) => {
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
});

StartupEvents.registry("item", (event) => {
	event.create("cosmic_contraptions:rainbow_core").displayName("Rainbow Core").unstackable();
	event.create("cosmic_contraptions:rainbow_dye").displayName("Rainbow Dye");
	event.create("cosmic_contraptions:rainbow_toolbox").displayName("Rainbow Toolbox").unstackable();
});
