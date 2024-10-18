// ============================================================================
// Remove villager trades for tools, armor, and enchantments.
// ============================================================================
// FIXME: THIS IS THE WORKAROUND IMPLEMENTATION:
MoreJSEvents.updateVillagerOffers((event) => {
	// Returns the offers that were added to the villager.
	const newTrades = event.getAddedOffers();
	// Loop each trade
	newTrades.forEach((trade) => {
		// If trade is a tool or armor or enchantment, disable it.
		if (
			trade
				.getOutput()
				.getId()
				.match(/_boots|_leggings|_chestplate|_helmet|_sword|_axe|_shovel|_pickaxe|_hoe|enchanted_book|cake/g)
		) {
			trade.setDisabled(true);
			trade.setOutput("minecraft:air");
			trade.setFirstInput("minecraft:air");
			trade.setSecondInput("minecraft:air");
		}
	});
});
