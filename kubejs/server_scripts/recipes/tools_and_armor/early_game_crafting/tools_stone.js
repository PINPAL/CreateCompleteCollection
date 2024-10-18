ServerEvents.recipes((event) => {
	// Stone Paxel Head
	event
		.shaped("cosmic_contraptions:stone_head", ["MMM", "MSM", "M M"], {
			M: "cosmic_contraptions:refined_stone",
			S: "minecraft:stick",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/tools_stone/stone_head");
	// Stone Blade
	event
		.shapeless("cosmic_contraptions:stone_blade", [
			"cosmic_contraptions:refined_stone",
			"minecraft:stick",
			"cosmic_contraptions:refined_stone",
		])
		.id("cosmic_contraptions:tools_and_armor/early_game/tools_stone/stone_blade");
});
