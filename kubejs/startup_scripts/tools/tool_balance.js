ItemEvents.modification((event) => {
	// Neon Torch
	event.modify("create_things_and_misc:neon_tube", (item) => {
		item.maxDamage = 16;
	});

	// Diamond Grit Sandpaper
	event.modify("createaddition:diamond_grit_sandpaper", (item) => {
		// set to integer limit
		// basically unbreakable
		item.maxDamage = 2147483647;
	});
});
