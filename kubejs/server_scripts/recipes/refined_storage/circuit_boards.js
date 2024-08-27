ServerEvents.recipes((event) => {
	event.shaped(
		// output
		"refinedstorage:processor_binding",
		["AAA", "ABA", "AAA"],
		{
			A: "refinedstorage:silicon",
			B: "minecraft:green_dye",
		}
	);
	event.recipes
		.createSequencedAssembly(
			[
				// this is the item that will appear in JEI as the result
				Item.of("refinedstorage:basic_processor").withChance(80.0),
				// the rest of these items will part of the scrap
				Item.of("refinedstorage:silicon").withChance(20.0),
			],
			// the input
			"refinedstorage:processor_binding",
			[
				event.recipes.createDeploying("refinedstorage:processor_binding", [
					"refinedstorage:processor_binding",
					"refinedstorage:silicon",
				]),
				event.recipes.createDeploying("refinedstorage:processor_binding", [
					"refinedstorage:processor_binding",
					"#forge:plates/bronze",
				]),
				event.recipes.create.pressing(["refinedstorage:processor_binding"], "refinedstorage:processor_binding"),
				event.recipes.createDeploying("refinedstorage:processor_binding", [
					"refinedstorage:processor_binding",
					"create:precision_mechanism",
				]),
			]
		)
		.transitionalItem("refinedstorage:processor_binding")
		.loops(5);
	event.recipes
		.createSequencedAssembly(
			[
				// this is the item that will appear in JEI as the result
				Item.of("refinedstorage:improved_processor").withChance(80.0),
				// the rest of these items will part of the scrap
				Item.of("refinedstorage:silicon").withChance(20.0),
			],
			// the input
			"refinedstorage:basic_processor",
			[
				event.recipes.createDeploying("refinedstorage:basic_processor", [
					"refinedstorage:basic_processor",
					"createaddition:capacitor",
				]),
				event.recipes.createDeploying("refinedstorage:basic_processor", [
					"refinedstorage:basic_processor",
					"createaddition:copper_wire",
				]),
				event.recipes.createDeploying("refinedstorage:basic_processor", [
					"refinedstorage:basic_processor",
					"createdeco:gold_coin",
				]),
			]
		)
		.transitionalItem("refinedstorage:basic_processor")
		.loops(15);
	event.recipes
		.createSequencedAssembly(
			[
				// this is the item that will appear in JEI as the result
				Item.of("refinedstorage:advanced_processor").withChance(80.0),
				// the rest of these items will part of the scrap
				Item.of("refinedstorage:silicon").withChance(20.0),
			],
			// the input
			"refinedstorage:improved_processor",
			[
				event.recipes.createDeploying("refinedstorage:advanced_processor", [
					"refinedstorage:advanced_processor",
					"createaddition:capacitor",
				]),
				event.recipes.createDeploying("refinedstorage:advanced_processor", [
					"refinedstorage:advanced_processor",
					"createaddition:connector",
				]),
				event.recipes.createDeploying("refinedstorage:advanced_processor", [
					"refinedstorage:advanced_processor",
					"#forge:plates/steel",
				]),
			]
		)
		.transitionalItem("refinedstorage:advanced_processor")
		.loops(10);
});
