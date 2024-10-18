ServerEvents.recipes((event) => {
	// Stone Paxel Head
	event
		.shaped("cosmic_contraptions:stone_head", ["MMM", "MSM", "M M"], {
			M: "cosmic_contraptions:refined_stone",
			S: "minecraft:stick",
		})
		.id("cosmic_contraptions:stone_head_crafting");
	// Stone Blade
	event
		.shapeless("cosmic_contraptions:stone_blade", [
			"cosmic_contraptions:refined_stone",
			"minecraft:stick",
			"cosmic_contraptions:refined_stone",
		])
		.id("cosmic_contraptions:stone_blade_crafting");

	// Stone Pickaxe Upgrade (no smithing - no iron)
	event
		.shapeless("cosmic_contraptions:stone_paxel", [
			"cosmic_contraptions:stone_head",
			"cosmic_contraptions:wooden_paxel",
		])
		.id("cosmic_contraptions:stone_paxel_crafting");
});
