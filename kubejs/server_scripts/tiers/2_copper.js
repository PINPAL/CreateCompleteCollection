ServerEvents.recipes((event) => {
	// Kinetic Mechanism
	event.remove({ output: "create_dd:kinetic_mechanism" });
	event.recipes
		.createSequencedAssembly(
			[
				Item.of("create_dd:kinetic_mechanism").withChance(0.9),
				Item.of("#forge:ingots/andesite").withChance(0.05),
				Item.of("#forge:nuggets/zinc").withChance(0.05),
			],
			"#minecraft:wooden_buttons",
			[
				event.recipes.createDeploying("create_dd:incomplete_kinetic_mechanism", [
					"create_dd:incomplete_kinetic_mechanism",
					"#forge:ingots/andesite",
				]),
				event.recipes.createDeploying("create_dd:incomplete_kinetic_mechanism", [
					"create_dd:incomplete_kinetic_mechanism",
					"create:cogwheel",
				]),
				event.recipes.createDeploying("create_dd:incomplete_kinetic_mechanism", [
					"create_dd:incomplete_kinetic_mechanism",
					"#forge:nuggets/zinc",
				]),
			]
		)
		.transitionalItem("create_dd:incomplete_kinetic_mechanism")
		.loops(1)
		.id("create_cc:tiers/2_copper/kinetic_mechanism");

	// Insulaton Brush
	event
		.shaped("create_cc:insulation_brush", ["HP", "NH"], {
			H: "minecraft:honeycomb",
			P: "#forge:plates/zinc",
			N: "#forge:nuggets/zinc",
		})
		.id("create_cc:tiers/2_copper/insulation_brush");
	// Glue Packing

	// Copper Machine
	event.recipes
		.shaped("create_cc:t2_copper_machine", ["AMA", " C ", "ATA"], {
			A: "createdeco:copper_coin",
			C: "create:copper_casing",
			T: "create_cc:t1_andesite_machine",
			M: "create_dd:kinetic_mechanism",
		})
		.id("create_cc:tiers/2_copper/copper_machine_crafting");
	event.recipes
		.createSequencedAssembly(["create_cc:t2_copper_machine"], "create_cc:t1_andesite_machine", [
			event.recipes.createDeploying("create_cc:incomplete_t2_copper_machine", [
				"create_cc:incomplete_t2_copper_machine",
				"createdeco:copper_coinstack",
			]),
			event.recipes.createDeploying("create_cc:incomplete_t2_copper_machine", [
				"create_cc:incomplete_t2_copper_machine",
				"create:copper_casing",
			]),
			event.recipes.createDeploying("create_cc:incomplete_t2_copper_machine", [
				"create_cc:incomplete_t2_copper_machine",
				"create_dd:kinetic_mechanism",
			]),
		])
		.transitionalItem("create_cc:incomplete_t2_copper_machine")
		.loops(1)
		.id("create_cc:tiers/2_copper/copper_machine");
});
