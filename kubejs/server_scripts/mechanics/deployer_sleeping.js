BlockEvents.rightClicked((event) => {
	if (event.getPlayer().isFake() && event.getBlock().hasTag("minecraft:beds")) {
		let isDayTime = event.getLevel().day;
		if (!isDayTime) {
			// Calculate the time needed to get to 24000 from current time
			let worldTime = event.getServer().runCommandSilent("time query daytime");
			let timeToSleep = 24000 - worldTime;
			// Display a title to the player
			event
				.getServer()
				.runCommandSilent(
					`title @a actionbar [{"text":"Deployer","color":"#C39149"},{"text":" is sleeping through this night","color":"white"}]`
				);
			// Delay for 3 second
			event.getServer().scheduleInTicks(60, () => {
				// Add the time to result in day time
				event.getServer().runCommandSilent("time add " + timeToSleep);
			});
		}
	}
});
