StartupEvents.registry("item", (event) => {
	// Refined Rock
	event.create("refined_stone").displayName("Refined Rock");
	// Cornflower Bush
	event
		.create("cornflower_bush_item")
		.displayName("Cornflower Bush")
		.tag("minecraft:flowers")
		.tag("minecraft:tall_flowers");
	// Sugar Paper
	event.create("kubejs:sugar_paper").displayName("Sugar Paper");
	// Andesite Nugget
	event.create("kubejs:andesite_nugget").displayName("Andesite Alloy Nugget");
	// Crushed Bonemeal
	event.create("kubejs:crushed_bonemeal").displayName("Crushed Bone Meal");
	// Insulation Tube
	event.create("kubejs:insulation_brush").displayName("Insulating Glue").maxDamage(99);
	// Creative Alloy
	event.create("creative_alloy").displayName("Creative Alloy");
	event.create("incomplete_creative_alloy").displayName("Incomplete Creative Alloy");

	// Broken Shield
	event.create(`broken_shield`).displayName(`Broken Shield`).unstackable();

	// Creative Potions
	event.create("creative_potion").displayName("Creative Potion").unstackable();
	event
		.create("creative_splash_potion")
		.displayName("Creative Splash Potion")
		.unstackable()
		.tag("create:upright_on_belt");
	event
		.create("creative_lingering_potion")
		.displayName("Creative Lingering Potion")
		.unstackable()
		.tag("create:upright_on_belt");
	event
		.create("creative_omega_potion")
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

	// Empty Canister
	event.create("empty_canister").displayName("Empty Canister").maxStackSize(16);
	// Chlorine Gas Canister
	event
		.create("chlorine_canister")
		.displayName("Chlorine Gas Canister")
		.tooltip("Chlorine Gas: 1000/1000 mB")
		.unstackable()
		.food((food) => {
			food.alwaysEdible().effect("minecraft:poison", 300, 1, 1);
		});
	// Brine Fluid Canister
	event.create("brine_canister").displayName("Brine Canister").tooltip("Brine: 1000/1000 mB").unstackable();

	// Rainbow Items
	event.create("rainbow_core").displayName("Rainbow Core").unstackable();
	event.create("rainbow_dye").displayName("Rainbow Dye");
	event.create("rainbow_toolbox").displayName("Rainbow Toolbox").unstackable();
});
