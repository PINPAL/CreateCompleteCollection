ItemEvents.modification((event) => {
	// Neon Torch
	event.modify("create_things_and_misc:neon_tube", (item) => {
		item.maxDamage = 16;
	});
});
