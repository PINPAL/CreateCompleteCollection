ServerEvents.tags("block", (event) => {
	const glitchedBlocks = [
		"create_things_and_misc:acacia_sail",
		"create_things_and_misc:birch_sail",
		"create_things_and_misc:dark_oak_sail",
		"create_things_and_misc:jungle_sail",
		"create_things_and_misc:oak_sail",
		"create_things_and_misc:spruce_sail",
		"create_things_and_misc:mangrove_sail",
		"create_things_and_misc:crimson_sail",
		"create_things_and_misc:warped_sail",
		"create_things_and_misc:bamboo_sail",
		"create_things_and_misc:sprinkler",
		"create_things_and_misc:powdered_obsidian_block",
		"create_things_and_misc:brass_casing_trapdoor",
		"create_things_and_misc:copper_casing_trapdoor",
		"create_things_and_misc:andesite_casing_trapdoor",
	];
	glitchedBlocks.forEach((item) => {
		event.add("create_things_and_misc:glitched_blocks", item);
	});
});

BlockEvents.broken((event) => {
	let block = event.getBlock();
	let blockID = block.getId();
	let blockMod = blockID.substring(0, blockID.indexOf(":"));
	// Ignore if block is not from create_things_and_misc
	if (blockMod != "create_things_and_misc") return;
	// Ignore the block if it's not glitched and we don't need this janky workaround
	if (!block.hasTag("create_things_and_misc:glitched_blocks")) return;

	let summonItem = block.createEntity("minecraft:item");
	summonItem.setNbt("{Item:{id:'" + block.getDrops()[0].getId() + "',Count:1b}}");
	summonItem.setPosition(block.getX() + 0.5, block.getY() + 0.5, block.getZ() + 0.5);
	// Generate a random motion between -0.1 and 0.1
	let randomMotions = [];
	for (let i = 0; i < 3; i++) {
		let randomMotion = Math.random() * 0.2 - 0.1;
		randomMotions.push(randomMotion);
	}
	summonItem.setMotion(randomMotions[0], randomMotions[1], randomMotions[2]);
	summonItem.spawn();
});
