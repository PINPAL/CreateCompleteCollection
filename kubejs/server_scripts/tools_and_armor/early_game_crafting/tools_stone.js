ServerEvents.recipes((event) => {
	// Stone Paxel Head
	event
		.shaped("create_cc:stone_head", ["MMM", "MSM", "M M"], {
			M: "create_cc:refined_stone",
			S: "minecraft:stick",
		})
		.id("create_cc:stone_head_crafting");
	// Stone Blade
	event
		.shapeless("create_cc:stone_blade", ["create_cc:refined_stone", "minecraft:stick", "create_cc:refined_stone"])
		.id("create_cc:stone_blade_crafting");

	// Stone Pickaxe Upgrade (no smithing - no iron)
	event
		.shapeless("create_cc:stone_paxel", ["create_cc:stone_head", "create_cc:wooden_paxel"])
		.id("create_cc:stone_paxel_crafting");
});
