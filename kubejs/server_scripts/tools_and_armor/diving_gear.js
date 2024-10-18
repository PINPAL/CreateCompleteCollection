ServerEvents.recipes((event) => {
	event.shaped("create:copper_diving_helmet", ["CCC", "CGC", " B "], {
		C: "#forge:ingots/copper",
		G: "#forge:glass",
		B: "cosmic_contraptions:copper_helmet",
	});

	event.shaped("create:copper_diving_boots", ["CBC", "C C", "A A"], {
		C: "#forge:ingots/copper",
		A: "#forge:ingots/andesite",
		B: "cosmic_contraptions:copper_boots",
	});

	event.shaped("create:copper_backtank", ["ASA", "CBC", " C "], {
		A: "#forge:ingots/andesite",
		S: "create:shaft",
		C: "#forge:ingots/copper",
		B: "cosmic_contraptions:copper_chestplate",
	});

	// Upgrading past copper
	event.smithing("minecraft:iron_helmet", "create:copper_diving_helmet", "cosmic_contraptions:iron_stitching");
	event.smithing("minecraft:iron_boots", "create:copper_diving_boots", "cosmic_contraptions:iron_stitching");
	event.smithing("minecraft:iron_chestplate", "create:copper_backtank", "cosmic_contraptions:iron_stitching");
});
