ServerEvents.recipes((event) => {
	// Wooden Tier Recipes
	event
		.shaped("cosmic_contraptions:wooden_paxel", ["AAA", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/wood/paxel");
	event
		.shaped("minecraft:wooden_hoe", ["AA ", " B ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/wood/hoe");
	event
		.shaped("minecraft:wooden_sword", [" A ", " A ", " B "], {
			A: "#minecraft:planks",
			B: "#forge:rods/wooden",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/wood/sword");
	event
		.shaped("moredelight:wooden_knife", ["A ", "B "], {
			A: "cosmic_contraptions:wooden_blade",
			B: "#forge:rods/wooden",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/wood/knife");

	// Wood Paxel Head
	event
		.shaped("cosmic_contraptions:wooden_head", ["MMM", "MSM", "M M"], {
			M: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/wood/paxel_head");
	// Wood Blade
	event
		.shapeless("cosmic_contraptions:wooden_blade", ["#minecraft:planks", "minecraft:stick", "#minecraft:planks"])
		.id("cosmic_contraptions:tools_and_armor/early_game/wood/blade");

	global.createToolBreakRecipe(event, "minecraft:wooden_sword", "cosmic_contraptions:broken_wooden_sword");
	global.createToolBreakRecipe(event, "minecraft:wooden_hoe", "cosmic_contraptions:broken_wooden_hoe");
	global.createToolBreakRecipe(event, "cosmic_contraptions:wooden_paxel", "cosmic_contraptions:broken_wooden_paxel");
});
