ServerEvents.recipes((event) => {
	// Wooden Tier Recipes
	event
		.shaped("kubejs:wooden_paxel", ["AAA", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:wooden_paxel_crafting");
	event
		.shaped("minecraft:wooden_hoe", ["AA ", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:wooden_hoe_crafting");
	event
		.shaped("minecraft:wooden_sword", [" A ", " A ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:wooden_sword_crafting");
	event
		.shaped("farmersdelight:flint_knife", [" A ", " A ", " B "], {
			A: "minecraft:flint",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:flint_knife_crafting");

	// Wood Paxel Head
	event
		.shaped("kubejs:wooden_head", ["MMM", "MSM", "M M"], {
			M: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("kubejs:wooden_head_crafting");
	// Wood Blade
	event
		.shapeless("kubejs:wooden_blade", ["#minecraft:planks", "minecraft:stick", "#minecraft:planks"])
		.id("kubejs:wooden_blade_crafting");
});
