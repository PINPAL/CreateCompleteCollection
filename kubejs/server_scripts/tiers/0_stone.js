ServerEvents.recipes((event) => {
	// Stone Machine
	event.recipes.create
		.item_application("create_cc:t0_stone_machine", ["#forge:stripped_logs", "create_cc:refined_stone"])
		.id("create_cc:tiers/0_stone/stone_machine");
});
