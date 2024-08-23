LootJS.modifiers((event) => {
	const removables = [
		"minecraft:enchanted_book",
		"#forge:tools",
		"#forge:armors",
		"minecraft:book",
		/sophisticatedbackpacks/,
	];
	removables.forEach((item) => {
		event.addLootTypeModifier(LootType.CHEST).removeLoot(item);
	});
	// TODO: fix this
	/* const replacedItems = [
		{ original: "minecraft:iron_ingot", replace: "create_cosmic_contraptions:iron_ingot" },
		{ original: "minecraft:gold_ingot", replace: "create_cosmic_contraptions:gold_ingot" },
		{ original: "minecraft:copper_ingot", replace: "create_cosmic_contraptions:copper_ingot" },
		{ original: "minecraft:iron_nugget", replace: "create_cosmic_contraptions:iron_nugget" },
		{ original: "minecraft:gold_nugget", replace: "create_cosmic_contraptions:gold_nugget" },
		{ original: "minecraft:iron_block", replace: "create_cosmic_contraptions:iron_block" },
		{ original: "minecraft:gold_block", replace: "create_cosmic_contraptions:gold_block" },
		{ original: "minecraft:copper_block", replace: "create_cosmic_contraptions:copper_block" },
	];
	replacedItems.forEach((item) => {
		event.addLootTableModifier(LootType.CHEST).replaceLoot(item.original, item.replace, true);
		event.addEntityLootModifier(LootType.ENTITY).replaceLoot(item.original, item.replace, true);
	}); */
});

// Disable armor and tool drops from mobs
EntityEvents.spawned((event) => {
	const { entity } = event;
	if (!entity.alive) return;
	let nbt = entity.getNbt();
	nbt.ArmorDropChances = [NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)];
	nbt.HandDropChances = [NBT.f(0), NBT.f(0)];
	entity.setNbt(nbt);
});
