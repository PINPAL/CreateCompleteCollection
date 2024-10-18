// Add Fluids
StartupEvents.registry("fluid", (event) => {
	event.create("cosmic_contraptions:biomethane").displayName("Biomethane Gas").thinTexture(0x29382c).noBucket();
	event.create("cosmic_contraptions:brine").displayName("Brine").thickTexture(0xe6d1ae);
	event.create("cosmic_contraptions:chlorine").displayName("Chlorine Gas").thinTexture(0xfaf48c).noBucket();
	event
		.create("cosmic_contraptions:methyl_chloride")
		.displayName("Methyl Chloride Gas")
		.thinTexture(0xf25d3f)
		.noBucket();

	event.create("cosmic_contraptions:wood_pulp").displayName("Wood Pulp").thinTexture(0xad9b89);
	event.create("cosmic_contraptions:whitened_wood_pulp").displayName("Whitened Wood Pulp").thinTexture(0xfaefe3);
});
