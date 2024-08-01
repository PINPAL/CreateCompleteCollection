Ponder.tags((event) => {
	event.createTag(
		"create_cc:digital_storage",
		"refinedstorage:crafting_grid",
		"Digital Storage",
		"Storing Items Digitally",
		[
			"refinedstorage:cable",
			"refinedstorage:crafting_grid",
			"refinedstorage:fluid_grid",
			"refinedstorage:pattern_grid",
			"refinedstorage:crafting_monitor",
			"refinedstorage:controller",
			"refinedstorage:external_storage",
			"refinedstorage:detector",
			"refinedstorage:importer",
			"refinedstorage:exporter",
			"refinedstorage:wireless_transmitter",
			"refinedstorage:crafter",
		]
	);

	event.createTag("create_cc:melting", "melter:melter", "Melter", "Melting Blocks into Fluids", ["melter:melter"]);

	event.createTag(
		"create_cc:coin_stacks",
		"createdeco:gold_coinstack",
		"Coin Stacking",
		"Display Your Wealth in Style",
		[
			"createdeco:zinc_coinstack",
			"createdeco:copper_coinstack",
			"createdeco:brass_coinstack",
			"createdeco:iron_coinstack",
			"createdeco:gold_coinstack",
			"createdeco:netherite_coinstack",
			"createdeco:industrial_iron_coinstack",
		]
	);
});
