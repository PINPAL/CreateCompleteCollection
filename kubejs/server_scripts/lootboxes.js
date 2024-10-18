BlockEvents.placed((event) => {
	let block = event.getBlock();
	if (block.hasTag("cosmic_contraptions:lootbox")) {
		// Play a sound
		event.server.runCommandSilent(
			`playsound cosmic_contraptions:lootbox_place block @a ${block.getX()} ${block.getY()} ${block.getZ()}`
		);
	}
});

BlockEvents.broken((event) => {
	let block = event.getBlock();
	if (block.hasTag("cosmic_contraptions:lootbox")) {
		// Play a sound
		event.server.runCommandSilent(
			`playsound cosmic_contraptions:lootbox_break block @a ${block.getX()} ${block.getY()} ${block.getZ()}`
		);
	}
});

let pickWeightedElement = (items) => {
	let totalWeight = 0;
	items.forEach((item) => {
		totalWeight += item.weight;
	});
	let random = Math.random() * totalWeight;
	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		if (random < item.weight) {
			return item;
		}
		random -= item.weight;
	}
};

BlockEvents.rightClicked((event) => {
	let block = event.getBlock();
	if (block.hasTag("cosmic_contraptions:lootbox")) {
		// If player is crouching and holding nothing
		if (event.getPlayer().isCrouching() && event.getItem().getId() == "minecraft:air") {
			// Play a sound
			event.server.runCommandSilent(
				`playsound cosmic_contraptions:lootbox_open block @a ${block.getX()} ${block.getY()} ${block.getZ()}`
			);
			// Spawn particles
			event.server.runCommandSilent(
				`particle supplementaries:confetti ${block.getX()} ${block.getY()} ${block.getZ()} 0.5 0.5 0.5 0.5 1000 force`
			);
			event.server.runCommandSilent(
				`particle minecraft:scrape ${block.getX()} ${block.getY()} ${block.getZ()} 0.5 0.5 0.5 1 10 force`
			);
			// Get the lootbox type
			let lootboxType = block.getId().replace("cosmic_contraptions:lootbox_", "");
			// Get the lootbox data
			let lootboxData = global.lootboxes[lootboxType];
			// Get the lootbox items
			let lootboxItems = lootboxData.items;
			// Get the lootbox rolls
			let lootboxRolls = lootboxData.rolls;
			// Roll the lootbox
			for (let i = 0; i < lootboxRolls; i++) {
				let lootboxResult = pickWeightedElement(lootboxItems);
				// ensure the item is a ItemStackJS object
				let itemStack = global.getItemStack(lootboxResult.item);
				// Spawn the item
				// run a command to summon the item
				let command = `execute in ${block.getDimension()} run summon item `;
				// at the block's position (y + 0.5 to make it float)
				command += `${block.getX()} ${block.getY() + 0.5} ${block.getZ()} `;
				// with a random motion
				command += `{Motion:[${getRandomArbitrary(-0.1, 0.1)}, ${getRandomArbitrary(
					0.1,
					0.3
				)}, ${getRandomArbitrary(-0.1, 0.1)}]`;
				// with the correct item ID
				command += `, Item:{id:"${itemStack.getId()}",Count:1b`;
				// attack item NBT data if it exists
				if (itemStack.hasNBT()) {
					command += `,tag:${itemStack.getNbt()}`;
				}
				command += `}}`;

				// run the command
				event.server.runCommandSilent(command);
			}

			// Replace the lootbox with air
			block.set("minecraft:air");

			event.success(true);
		}
	}
});
