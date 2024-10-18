ItemEvents.foodEaten((event) => {
	if (event.item.id == "cosmic_contraptions:chlorine_canister") {
		event.server.runCommandSilent(
			`summon potion ${event.getPlayer().getX()} ${event.getPlayer().getY()} ${event
				.getPlayer()
				.getZ()} {Silent:1b,Item:{id:"minecraft:lingering_potion",Count:1b,tag:{Potion:"minecraft:harming",CustomPotionColor:6487839}}}`
		);
		event.getPlayer().setMainHandItem(Item.of("cosmic_contraptions:empty_canister"));
	}
});
