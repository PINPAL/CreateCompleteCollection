// priority: 0

// Add Items
StartupEvents.registry("item", (event) => {
	event.create("cosmic_contraptions:empty_canister").displayName("Empty Canister");
	event
		.create("cosmic_contraptions:chlorine_canister")
		.displayName("Chlorine Gas Canister")
		.tooltip("Chlorine Gas: 1000/1000 mB")
		.unstackable()
		.food((food) => {
			food.alwaysEdible().effect("minecraft:poison", 300, 1, 1);
		});
	event
		.create("cosmic_contraptions:brine_canister")
		.displayName("Brine Canister")
		.tooltip("Brine: 1000/1000 mB")
		.unstackable();
});

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
});
