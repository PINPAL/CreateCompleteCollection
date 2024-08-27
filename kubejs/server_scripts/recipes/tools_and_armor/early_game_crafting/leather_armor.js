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
});
