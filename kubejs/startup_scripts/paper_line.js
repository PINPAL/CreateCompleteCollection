StartupEvents.registry("fluid", (event) => {
	event.create("create_cosmic_contraptions:wood_pulp").displayName("Wood Pulp").thinTexture(0xad9b89);
	event
		.create("create_cosmic_contraptions:whitened_wood_pulp")
		.displayName("Whitened Wood Pulp")
		.thinTexture(0xfaefe3);
});

StartupEvents.registry("item", (event) => {
	event.create("create_cosmic_contraptions:saw_dust").displayName("Saw Dust");
});
