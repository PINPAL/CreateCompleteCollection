ServerEvents.recipes((event) => {
	event.shaped("create:copper_diving_helmet", ["CCC", "CGC", " B "], {
		C: "#forge:ingots/copper",
		G: "#forge:glass",
		B: "create_cc:copper_helmet",
	});

	event.shaped("create:copper_diving_boots", ["CBC", "C C", "A A"], {
		C: "#forge:ingots/copper",
		A: "#forge:ingots/andesite",
		B: "create_cc:copper_boots",
	});

	event.shaped("create:copper_backtank", ["ASA", "CBC", " C "], {
		A: "#forge:ingots/andesite",
		S: "create:shaft",
		C: "#forge:ingots/copper",
		B: "create_cc:copper_chestplate",
	});

	// Upgrading past copper
	event.smithing("minecraft:iron_helmet", "create:copper_diving_helmet", "create_cc:iron_stitching");
	event.smithing("minecraft:iron_boots", "create:copper_diving_boots", "create_cc:iron_stitching");
	event.smithing("minecraft:iron_chestplate", "create:copper_backtank", "create_cc:iron_stitching");
});
