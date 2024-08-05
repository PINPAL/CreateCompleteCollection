ServerEvents.recipes((event) => {
	event.remove({ id: "tfmg:mixing/liquid_concrete_from_slag" });
	event.recipes.create
		.mixing(Fluid.of("tfmg:liquid_concrete", 1500), ["tfmg:slag", Fluid.of("minecraft:water", 500), "tfmg:cement"])
		.id("create_cosmic_contraptions:tfmg/liquid_concrete_from_slag");

	event.remove({ id: "tfmg:industrial_blasting/steel" });
	event
		.custom({
			type: "tfmg:industrial_blasting",
			ingredients: [
				{
					count: 1,
					item: "tfmg:blasting_mixture",
				},
			],
			processingTime: 100,
			results: [
				{
					fluid: "tfmg:molten_steel",
					amount: 90,
				},
				{
					fluid: "tfmg:molten_slag",
					amount: 50,
				},
			],
		})
		.id("create_cosmic_contraptions:tfmg/steel_industrial_blasting");
});
