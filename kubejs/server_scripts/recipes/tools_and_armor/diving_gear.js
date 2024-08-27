ServerEvents.recipes((event) => {
	event.shaped("create:copper_diving_helmet", ["CCC", "CGC", " B "], {
		C: "#forge:ingots/copper",
		G: "#forge:glass",
		B: "kubejs:copper_helmet",
	});

	event.shaped("create:copper_diving_boots", ["CBC", "C C", "A A"], {
		C: "#forge:ingots/copper",
		A: "create:andesite_alloy",
		B: "kubejs:copper_boots",
	});

	event.shaped("create:copper_backtank", ["ASA", "CBC", " C "], {
		A: "create:andesite_alloy",
		S: "create:shaft",
		C: "#forge:ingots/copper",
		B: "kubejs:copper_chestplate",
	});

	// Upgrading Past Copper
	event.smithing("minecraft:iron_helmet", "create:copper_diving_helmet", "kubejs:iron_stitching");
	event.smithing("minecraft:iron_boots", "create:copper_diving_boots", "kubejs:iron_stitching");
	event.smithing("minecraft:iron_chestplate", "create:copper_backtank", "kubejs:iron_stitching");

	// Diving Gear Repair Kits
	const divingGear = [
		{ id: "netherite_diving_helmet", material: "netherite" },
		{ id: "netherite_diving_boots", material: "netherite" },
		{ id: "copper_diving_helmet", material: "copper" },
		{ id: "copper_diving_boots", material: "copper" },
	];
	divingGear.forEach((item) => {
		event.smithing(`create:${item.id}`, `kubejs:broken_${item.id}`, `kubejs:${item.material}_repair_kit`);
	});
});
