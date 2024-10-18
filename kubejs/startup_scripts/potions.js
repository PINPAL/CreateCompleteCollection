StartupEvents.registry("item", (event) => {
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
