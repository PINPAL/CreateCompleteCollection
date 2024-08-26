ServerEvents.recipes((event) => {
	// Hyper Experience
	event.remove({ output: Fluid.of("create_enchantment_industry:hyper_experience") });
	event.recipes.create
		.mixing(
			[
				Fluid.of("create_enchantment_industry:hyper_experience", 100),
				"create_enchantment_industry:experience_rotor",
			],
			[
				Fluid.of("create_enchantment_industry:experience", 1000),
				"minecraft:lapis_lazuli",
				"minecraft:glow_ink_sac",
				"create_enchantment_industry:experience_rotor",
			]
		)
		.id("kubejs:hyper_experience");

	// Experience Rotor
	event.remove({ output: "create_enchantment_industry:experience_rotor" });
	event.recipes.create.mechanical_crafting(
		"create_enchantment_industry:experience_rotor",
		[" ZZ  ", "  A Z", "ZAQAZ", "Z A  ", "  ZZ "],
		{
			A: "create:experience_block",
			Q: "create_things_and_misc:vibration_mechanism",
			Z: "#forge:ingots/zinc",
		}
	);
});
