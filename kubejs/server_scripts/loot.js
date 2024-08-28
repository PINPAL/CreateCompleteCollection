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
});

EntityEvents.spawned((event) => {
	const { entity } = event;
	if (!entity.alive) return;
	// Fetch entity NBT
	let nbt = entity.getNbt();
	// Disable armor and tool drops from mobs
	nbt.ArmorDropChances = [NBT.f(0), NBT.f(0), NBT.f(0), NBT.f(0)];
	nbt.HandDropChances = [NBT.f(0), NBT.f(0)];
	// Horse swim_speed buff
	if (entity.type == "minecraft:horse") {
		nbt.Attributes.push({ Base: 2.5, Name: "forge:swim_speed" });
	}
	// Apply NBT
	entity.setNbt(nbt);
});
