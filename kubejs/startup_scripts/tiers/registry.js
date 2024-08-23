StartupEvents.registry("block", (event) => {
	for (var key of Object.keys(global.tierMachines)) {
		let tierName = key;
		let tierIndex = global.tierMachines[key].tier;
		event
			.create(`create_cosmic_contraptions:t${tierIndex}_${tierName}_machine`)
			.displayName(`${formatName(tierName)} Machine`)
			.soundType("metal")
			.tagBlock("minecraft:mineable/paxel")
			.defaultCutout()
			// collision box is 1 pixel of a full block
			.box(1, 1, 1, 15, 15, 15);
	}
});
StartupEvents.registry("item", (event) => {
	for (var key of Object.keys(global.tierMachines)) {
		let tierName = key;
		let tierIndex = global.tierMachines[key].tier;
		event
			.create(`create_cosmic_contraptions:incomplete_t${tierIndex}_${tierName}_machine`)
			.displayName(`${formatName(tierName)} Machine`)
			.unstackable();
	}

	// Register items used to upgrade "base tier machines" into their actual form
	for (var key of Object.keys(global.machineItems)) {
		// Check if the item is from the cosmic_contraptions
		let requiresRegistry = global.machineItems[key].id.contains("cosmic_contraptions:");
		// If the item isn't native, we need to create it
		if (requiresRegistry) {
			let itemId = global.machineItems[key].id;
			let itemName = itemId;
			// Remove the modid from the item name
			itemName = itemName.split(":")[1];
			itemName = global.formatName(itemName);
			// Register the item
			event.create(itemId).displayName(itemName);
		}
	}
});
