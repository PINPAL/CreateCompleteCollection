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

// ============================================================================
// Wandering Trader Trades
// ============================================================================
MoreJSEvents.wandererTrades((event) => {
	// Remove the default trades (for level 2).
	event.removeVanillaTrades(2);
	event.removeModdedTrades(2);
	// Add the lootbox trades.
	for (const key in global.lootboxes) {
		// Add the trade to the wandering trader.
		const trade = event.addTrade(
			2,
			VillagerUtils.createSimpleTrade(TradeItem.of("minecraft:emerald", 1, 9), Item.of(`kubejs:lootbox_${key}`))
		);
		trade.maxUses(1);
	}
});
MoreJSEvents.updateWandererOffers((event) => {
	let newTrades = event.getWandererTrades(2);
	// Add 2 more lootbox trades to garantee that the wandering trades provides 3 lootboxes.
	for (let i = 0; i < 2; i++) {
		event.addRandomOffer(newTrades);
	}
});
