JEIEvents.information((event) => {
	const itemsToDescriptionate = [
		{
			id: "tfmg:concrete",
			desc: ["Concrete is made when it dries out in the world after being placed using a bucket."],
		},
		{
			id: "tfmg:oil_deposit",
			desc: ["Rarely spawns at bedrock at the bottom of the world."],
		},
		{
			id: "minecraft:granite",
			desc: ["Spawns in massive veins underground."],
		},
		{
			id: "minecraft:diorite",
			desc: ["Spawns most commonly in Mediterranean Islands and Thermal Taigas Biomes."],
		},
		{
			id: "minecraft:andesite",
			desc: ["Spawns most commonly in Andesite Crags Biomes."],
		},
		{
			id: "supplementaries:ash",
			desc: ["Spawns in veins around the nether, most commonly in Basalt Deltas."],
		},
		{
			id: "minecraft:sugar_cane",
			desc: ["Sugar Cane is most commonly found within tropical and swamp biome types."],
		},
	];
	itemsToDescriptionate.forEach((item) => event.addItem(item.id, item.desc));

	const undergroundStoneTypes = [
		"minecraft:tuff",
		"tfmg:bauxite",
		"create:crimsite",
		"create:limestone",
		"create:asurine",
		"create:ochrum",
		"create:veridium",
		"create_dd:dolomite",
		"create_dd:gabbro",
	];
	undergroundStoneTypes.forEach((item) => event.addItem(item, ["Spawns in veins underground."]));

	const netherStoneTypes = ["create:scoria", "create:scorchia", "tfmg:sulfur"];
	netherStoneTypes.forEach((item) => event.addItem(item, ["Spawns in veins around The Nether."]));
});
