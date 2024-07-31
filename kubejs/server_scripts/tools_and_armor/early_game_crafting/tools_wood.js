ServerEvents.recipes((event) => {
	// Wooden Tier Recipes
	event
		.shaped("create_cc:wooden_paxel", ["AAA", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("create_cc:wooden_paxel_crafting");
	event
		.shaped("minecraft:wooden_hoe", ["AA ", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("create_cc:wooden_hoe_crafting");
	event
		.shaped("minecraft:wooden_sword", [" A ", " A ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("create_cc:wooden_sword_crafting");
	event
		.shaped("moredelight:wooden_knife", ["   ", " A ", " B "], {
			A: "create_cc:wooden_blade",
			B: "#forge:rods/wooden",
		})
		.id("create_cc:wooden_knife_crafting");

	// Wood Paxel Head
	event
		.shaped("create_cc:wooden_head", ["MMM", "MSM", "M M"], {
			M: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("create_cc:wooden_head_crafting");
	// Wood Blade
	event
		.shapeless("create_cc:wooden_blade", ["#minecraft:planks", "minecraft:stick", "#minecraft:planks"])
		.id("create_cc:wooden_blade_crafting");
});
