ServerEvents.recipes((event) => {
	// Leather Armor
	event.shaped("minecraft:leather_helmet", ["SAS", "A A"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	});
	event.shaped("minecraft:leather_chestplate", ["A A", "ASA", "SAS"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	});
	event.shaped("minecraft:leather_leggings", ["ASA", "S S", "A A"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	});
	event.shaped("minecraft:leather_boots", ["S S", "A A"], {
		A: "#forge:leather",
		S: "#forge:rods/wooden",
	});

	global.createToolBreakRecipe(event, "minecraft:leather_helmet", "kubejs:broken_leather_helmet");
	global.createToolBreakRecipe(event, "minecraft:leather_chestplate", "kubejs:broken_leather_chestplate");
	global.createToolBreakRecipe(event, "minecraft:leather_leggings", "kubejs:broken_leather_leggings");
	global.createToolBreakRecipe(event, "minecraft:leather_boots", "kubejs:broken_leather_boots");
});
