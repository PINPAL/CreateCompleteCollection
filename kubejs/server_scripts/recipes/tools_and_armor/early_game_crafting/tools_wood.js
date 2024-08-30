ServerEvents.recipes((event) => {
	// Wooden Tier Recipes
	event
		.shaped("kubejs:wooden_paxel", ["AAA", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:wooden_tools/paxel");
	event
		.shaped("minecraft:wooden_hoe", ["AA ", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:wooden_tools/hoe");
	event
		.shaped("minecraft:wooden_sword", [" A ", " A ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:wooden_tools/sword");
	event
		.shaped("moredelight:wooden_knife", ["A ", "B "], {
			A: "kubejs:wooden_blade",
			B: "#forge:rods/wooden",
		})
		.id("kubejs:wooden_tools/knife");

	// Wood Paxel Head
	event
		.shaped("kubejs:wooden_head", ["MMM", "MSM", "M M"], {
			M: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("kubejs:wooden_tools/paxel_head");
	// Wood Blade
	event
		.shapeless("kubejs:wooden_blade", ["#minecraft:planks", "minecraft:stick", "#minecraft:planks"])
		.id("kubejs:wooden_tools/blade");

	global.createToolBreakRecipe(event, "minecraft:wooden_sword", "kubejs:broken_wooden_sword");
	global.createToolBreakRecipe(event, "minecraft:wooden_hoe", "kubejs:broken_wooden_hoe");
	global.createToolBreakRecipe(event, "kubejs:wooden_paxel", "kubejs:broken_wooden_paxel");
});
