StartupEvents.registry("item", (event) => {
	// Refined Rock
	event.create("cosmic_contraptions:refined_stone").displayName("Refined Rock");
	// Cornflower Bush Item
	event
		.create("cosmic_contraptions:cornflower_bush_item")
		.displayName("Cornflower Bush")
		.tag("minecraft:flowers")
		.tag("minecraft:tall_flowers");
	// Insulation Tube
	event.create("cosmic_contraptions:insulation_brush").displayName("Insulating Glue").maxDamage(99);
	// Sugar Paper
	event.create("cosmic_contraptions:sugar_paper").displayName("Sugar Paper");
	// Saw Dust
	event.create("cosmic_contraptions:saw_dust").displayName("Saw Dust");
	// Crushed Bonemeal
	event.create("kubejs:crushed_bonemeal").displayName("Crushed Bone Meal");

	// Empty Canister
	event.create("cosmic_contraptions:empty_canister").displayName("Empty Canister");
	// Chlorine Canister
	event
		.create("cosmic_contraptions:chlorine_canister")
		.displayName("Chlorine Gas Canister")
		.tooltip("Chlorine Gas: 1000/1000 mB")
		.unstackable()
		.food((food) => {
			food.alwaysEdible().effect("minecraft:poison", 300, 1, 1);
		});
	// Brine Canister
	event
		.create("cosmic_contraptions:brine_canister")
		.displayName("Brine Canister")
		.tooltip("Brine: 1000/1000 mB")
		.unstackable();

	// Incomplete Assemblies
	const incompleteAssemblies = ["saddle", "totem_of_undying", "creative_omega_potion", "name_tag"];
	incompleteAssemblies.forEach((assembly) => {
		event
			.create("cosmic_contraptions:incomplete_" + assembly)
			.displayName("Incomplete " + formatName(assembly))
			.unstackable();
	});

	// Diving Gear Upgrade Items
	event.create("cosmic_contraptions:diving_tank").displayName("Air Tank").unstackable();
	event.create("cosmic_contraptions:diving_faceplate").displayName("Helmet Faceplate").unstackable();
	event.create("cosmic_contraptions:diving_flippers").displayName("Heavy Weighted Flippers").unstackable();

	// Rainbow Items
	event.create("cosmic_contraptions:rainbow_core").displayName("Rainbow Core").unstackable();
	event.create("cosmic_contraptions:rainbow_dye").displayName("Rainbow Dye");
	event.create("cosmic_contraptions:rainbow_toolbox").displayName("Rainbow Toolbox").unstackable();

	// Creative Potions
	event.create("cosmic_contraptions:creative_potion").displayName("Creative Potion").unstackable();
	event
		.create("cosmic_contraptions:creative_splash_potion")
		.displayName("Creative Splash Potion")
		.unstackable()
		.tag("create:upright_on_belt");
	event
		.create("cosmic_contraptions:creative_lingering_potion")
		.displayName("Creative Lingering Potion")
		.unstackable()
		.tag("create:upright_on_belt");
	event
		.create("cosmic_contraptions:creative_omega_potion")
		.displayName("Creative Divine Potion")
		.unstackable()
		.tag("create:upright_on_belt")
		.food((food) => {
			food.fastToEat()
				.alwaysEdible()
				.effect("minecraft:regeneration", 1200, 4, 1)
				.effect("minecraft:strength", 1200, 4, 1)
				.effect("minecraft:resistance", 1200, 4, 1)
				.effect("minecraft:fire_resistance", 1200, 4, 1)
				.effect("minecraft:water_breathing", 1200, 4, 1)
				.effect("minecraft:absorption", 1200, 4, 1)
				.effect("minecraft:health_boost", 1200, 4, 1)
				.effect("minecraft:luck", 1200, 4, 1)
				.effect("minecraft:glowing", 1200, 4, 1)
				.effect("minecraft:jump_boost", 1200, 4, 1)
				.effect("minecraft:speed", 1200, 4, 1)
				.effect("minecraft:saturation", 1200, 4, 1)
				.effect("minecraft:dolphins_grace", 1200, 4, 1)
				.effect("minecraft:haste", 1200, 4, 1)
				.effect("minecraft:slow_falling", 1200, 4, 1);
		});
});
