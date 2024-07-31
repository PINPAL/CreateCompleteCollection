// Placement
BlockEvents.rightClicked((event) => {
	// If the block clicked on is farmland,
	// the face clicked on is the top
	// and the item is a cornflower bush
	if (
		event.getBlock().hasTag("minecraft:azalea_grows_on") &&
		event.getFacing() == "up" &&
		event.getItem().getId() == "create_cc:cornflower_bush_item"
	) {
		// Get the block above the block clicked on
		let blockAbove = event.getBlock().getUp();
		// Get the block above the block above the block clicked on
		let blockAbove2 = blockAbove.getUp();
		// Check if the block above and the block above the block above are air
		if (blockAbove.getId() == "minecraft:air" && blockAbove2.getId() == "minecraft:air") {
			// Set the block above to a cornflower bush (bottom half)
			blockAbove.set("create_cc:cornflower_bush", { half: "bottom" });
			// Set the block above the block above to a cornflower bush (top half)
			blockAbove2.set("create_cc:cornflower_bush", { half: "top" });
			// Play a sound
			event.server.runCommandSilent(
				`playsound minecraft:block.grass.place block @a ${blockAbove.getX()} ${blockAbove.getY()} ${blockAbove.getZ()}`
			);
		}
	}
});

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

// Bonemeal
BlockEvents.rightClicked((event) => {
	let block = event.getBlock();
	if (block.getId() == "create_cc:cornflower_bush" && event.getItem().getId() == "minecraft:bone_meal") {
		event.server.runCommandSilent(
			`particle minecraft:composter ${block.getX()} ${block.getY()} ${block.getZ()} .25 .25 .25 1 20 normal`
		);
		event.server.runCommandSilent(
			`summon item ${block.getX()} ${block.getY()} ${block.getZ()} 
      {Motion:[${getRandomArbitrary(-0.1, 0.1)}, ${getRandomArbitrary(0.1, 0.3)}, ${getRandomArbitrary(
				-0.1,
				0.1
			)}],Item:{id:"create_cc:cornflower_bush_item",Count:1b}}`
		);
		event.player.setHeldItem(event.getHand(), `${event.getItem().getCount() - 1}x minecraft:bone_meal`);
	}
});

// Breaking
BlockEvents.broken((event) => {
	if (event.getBlock().getId() == "create_cc:cornflower_bush") {
		let half = event.getBlock().getBlockState().getValue(BlockProperties.HALF);
		if (half == "top") {
			let blockBelow = event.getBlock().getDown();
			if (blockBelow.getId() == "create_cc:cornflower_bush") {
				blockBelow.set("minecraft:air");
			}
		} else if (half == "bottom") {
			let blockAbove = event.getBlock().getUp();
			if (blockAbove.getId() == "create_cc:cornflower_bush") {
				blockAbove.set("minecraft:air");
			}
		}
	}
});

// Recipe
ServerEvents.recipes((event) => {
	event.recipes.create.compacting("create_cc:cornflower_bush_item", ["9x minecraft:cornflower"]);
});
