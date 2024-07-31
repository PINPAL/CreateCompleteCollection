StartupEvents.registry("item", (event) => {
	// Broken Shield
	event
		.create("create_cc:" + `broken_shield`)
		.displayName(`Broken Shield`)
		.unstackable();
});
