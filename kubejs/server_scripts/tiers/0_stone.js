ServerEvents.recipes((event) => {
	// Stone Machine
	event.recipes.create
		.item_application("create_cosmic_contraptions:t0_stone_machine", [
			"#forge:stripped_logs",
			"create_cosmic_contraptions:refined_stone",
		])
		.id("create_cosmic_contraptions:tiers/0_stone/stone_machine");
});
