ServerEvents.recipes((event) => {
	// Stone Machine
	event.recipes.create
		.item_application("cosmic_contraptions:t0_stone_machine", [
			"#forge:stripped_logs",
			"cosmic_contraptions:refined_stone",
		])
		.id("cosmic_contraptions:tiers/0_stone/stone_machine");
});
