ItemEvents.rightClicked((event) => {
	// Check if the block is air
	if (event.getTarget().block !== null) {
		return;
	}
	// Check if the player is sneaking
	if (!event.getPlayer().isCrouching()) {
		return;
	}
	// Cycle through the keys
	if (event.getItem().getId() == "storagedrawers:drawer_key") {
		event.getPlayer().setItemInHand(event.getHand(), Item.of("storagedrawers:shroud_key"));
		event.success();
	}
	if (event.getItem().getId() == "storagedrawers:shroud_key") {
		event.getPlayer().setItemInHand(event.getHand(), Item.of("storagedrawers:quantify_key"));
		event.success();
	}
	if (event.getItem().getId() == "storagedrawers:quantify_key") {
		event.getPlayer().setItemInHand(event.getHand(), Item.of("storagedrawers:drawer_key"));
		event.success();
	}
});
