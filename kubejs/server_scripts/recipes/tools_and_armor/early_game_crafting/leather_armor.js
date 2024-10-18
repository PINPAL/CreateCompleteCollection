// Leather Armor
event
	.shaped("minecraft:leather_helmet", ["SAS", "A A"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	})
	.id("cosmic_contraptions:tools_and_armor/early_game/leather_armor/leather_helmet");
event
	.shaped("minecraft:leather_chestplate", ["A A", "ASA", "SAS"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	})
	.id("cosmic_contraptions:tools_and_armor/early_game/leather_armor/leather_chestplate");
event
	.shaped("minecraft:leather_leggings", ["ASA", "S S", "A A"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	})
	.id("cosmic_contraptions:tools_and_armor/early_game/leather_armor/leather_leggings");
event
	.shaped("minecraft:leather_boots", ["S S", "A A"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	})
	.id("cosmic_contraptions:tools_and_armor/early_game/leather_armor/leather_boots");

global.createToolBreakRecipe(event, "minecraft:leather_helmet", "cosmic_contraptions:broken_leather_helmet");
global.createToolBreakRecipe(event, "minecraft:leather_chestplate", "cosmic_contraptions:broken_leather_chestplate");
global.createToolBreakRecipe(event, "minecraft:leather_leggings", "cosmic_contraptions:broken_leather_leggings");
global.createToolBreakRecipe(event, "minecraft:leather_boots", "cosmic_contraptions:broken_leather_boots");
