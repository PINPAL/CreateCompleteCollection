ServerEvents.recipes((event) => {
	// Stone Paxel Head
	event
		.shaped("create_cosmic_contraptions:stone_head", ["MMM", "MSM", "M M"], {
			M: "create_cosmic_contraptions:refined_stone",
			S: "minecraft:stick",
		})
		.id("create_cosmic_contraptions:stone_head_crafting");
	// Stone Blade
	event
		.shapeless("create_cosmic_contraptions:stone_blade", [
			"create_cosmic_contraptions:refined_stone",
			"minecraft:stick",
			"create_cosmic_contraptions:refined_stone",
		])
		.id("create_cosmic_contraptions:stone_blade_crafting");

	// Stone Pickaxe Upgrade (no smithing - no iron)
	event
		.shapeless("create_cosmic_contraptions:stone_paxel", [
			"create_cosmic_contraptions:stone_head",
			"create_cosmic_contraptions:wooden_paxel",
		])
		.id("create_cosmic_contraptions:stone_paxel_crafting");
});
