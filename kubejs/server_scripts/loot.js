LootJS.modifiers((event) => {
	const removables = [
		"minecraft:enchanted_book",
		"#forge:tools",
		"#forge:armors",
		"minecraft:book",
		/sophisticatedbackpacks/,
	].forEach((item) => {
		event.addLootTypeModifier(LootType.CHEST).removeLoot(item);
	});
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
