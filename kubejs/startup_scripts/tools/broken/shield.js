StartupEvents.registry("item", (event) => {
	// Broken Shield
	event
		.create("create_cosmic_contraptions:" + `broken_shield`)
		.displayName(`Broken Shield`)
		.unstackable();
});
