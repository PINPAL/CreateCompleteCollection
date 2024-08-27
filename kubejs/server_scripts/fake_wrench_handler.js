// Workaround to make the wrench work as an axe
PlayerEvents.tick((event) => {
	let player = event.player;
	let block = player.rayTrace(8, false).block;
	// Check if the block is null
	if (block == null) {
		// If the player is holding the wrench_axe, change it to the wrench
		if (player.getMainHandItem().getId() == "kubejs:wrench_axe") {
			player.setMainHandItem(Item.of("create:wrench"));
		}
		return;
	}
	// Check if the block has the decorative_blocks:supports tag and if the player is holding the create:wrench
	if (block.hasTag("decorative_blocks:supports") && player.getMainHandItem().getId() == "create:wrench") {
		player.setMainHandItem(Item.of("kubejs:wrench_axe").withNBT({ Unbreakable: true, HideFlags: 255 }));
	} else if (!block.hasTag("decorative_blocks:supports") && player.getMainHandItem().getId() == "kubejs:wrench_axe") {
		player.setMainHandItem(Item.of("create:wrench"));
	}
});
