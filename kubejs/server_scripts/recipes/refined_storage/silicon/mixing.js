ServerEvents.recipes((event) => {
	// Brine
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:brine", 1000)],
			[
				"salt:salt",
				"salt:salt",
				"salt:salt",
				"salt:salt",
				"salt:salt",
				"salt:salt",
				"salt:salt",
				"salt:salt",
				Fluid.of("minecraft:water", 1000),
			]
		)
		.heated();
	// Biomethane
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:biomethane", 500)],
		[
			"minecraft:rotten_flesh",
			"minecraft:rotten_flesh",
			"minecraft:rotten_flesh",
			"minecraft:rotten_flesh",
			"minecraft:rotten_flesh",
			"minecraft:rotten_flesh",
			"minecraft:rotten_flesh",
			"minecraft:rotten_flesh",
			"createaddition:biomass_pellet",
			"createaddition:biomass_pellet",
			"createaddition:biomass_pellet",
			"createaddition:biomass_pellet",
			Fluid.of("createaddition:bioethanol", 1000),
		]
	);
	// Methyl Chloride
	event.recipes.create.mixing(
		[Fluid.of("cosmic_contraptions:methyl_chloride", 500)],
		[Fluid.of("cosmic_contraptions:chlorine", 500), Fluid.of("cosmic_contraptions:biomethane", 500)]
	);
	// Silicon Quartz
	event.recipes.create
		.mixing(
			[Item.of("refinedstorage:quartz_enriched_iron").withChance(0.015)],
			[
				"minecraft:quartz",
				"minecraft:sand",
				"minecraft:sand",
				"minecraft:sand",
				"minecraft:sand",
				Fluid.of("minecraft:water", 1000),
			]
		)
		.heated();
	// Silicon
	event.recipes.create
		.mixing(
			[Item.of("refinedstorage:silicon").withChance(0.25)],
			["refinedstorage:quartz_enriched_iron", Fluid.of("cosmic_contraptions:methyl_chloride", 1000)]
		)
		.superheated();
});
