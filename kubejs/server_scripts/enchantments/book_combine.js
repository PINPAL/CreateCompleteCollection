BlockEvents.rightClicked((event) => {
	let block = event.getBlock();
	let item = event.getItem();
	// Check if the block is a book pile and the item is an enchanted book
	if (block.getId() == "supplementaries:book_pile" && item.getId() == "minecraft:enchanted_book") {
		let blockData = block.getEntityData();
		let enchantedBooks = blockData.Items;
		// Ensure we are placing a single enchanted book on a book pile of a single book
		if (enchantedBooks.length == 1) {
			let storedEnchantments = enchantedBooks[0].tag.StoredEnchantments;
			let newEnchantments = item.getNbt().StoredEnchantments;
			// Ensure we have a single enchantment on both the book & book pile
			if (storedEnchantments.length == 1 && newEnchantments.length == 1) {
				let storedEnchantmentId = storedEnchantments[0].id;
				let newEnchantmentId = newEnchantments[0].id;
				// Ensure the enchantments are the same
				if (storedEnchantmentId == newEnchantmentId) {
					let maxLevel = EnchantmentInstance(storedEnchantmentId, 1).enchantment.getMaxLevel();
					// Get the level of the enchantment
					let storedEnchantmentLevel = storedEnchantments[0].lvl;
					let newEnchantmentLevel = newEnchantments[0].lvl;
					// Ensure the levels are the same
					if (storedEnchantmentLevel == newEnchantmentLevel) {
						// Ensure the level is less than the max level
						if (storedEnchantmentLevel < maxLevel) {
							// Increase the level of the enchantment
							blockData.Items[0].tag.StoredEnchantments[0].lvl = storedEnchantmentLevel + 1;
							block.setEntityData(blockData);

							let blockPosition = `${block.getX()} ${block.getY() + 0.5} ${block.getZ()}`;
							// Play a sound
							event.server.runCommandSilent(
								`playsound minecraft:block.enchantment_table.use block @a ${blockPosition}`
							);
							// Particle effect
							event.server.runCommandSilent(
								`particle minecraft:totem_of_undying ${blockPosition} 0.05 0.05 0.05 0.25 12 force`
							);

							// Remove the item from the player's inventory
							if (!event.getPlayer().isCreative()) {
								event.player.setHeldItem(event.getHand(), "minecraft:air");
							}
							// Cancel the event
							event.success();
						}
					}
				}
			}
		}
	}
});
