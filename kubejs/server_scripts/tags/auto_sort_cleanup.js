// priority: -1

// fix incorrect items in sorting categories
ServerEvents.tags("item", (event) => {
	event.remove("as:iron", /storagedrawers:.*_storage_upgrade/);
	event.remove("as:gold", /storagedrawers:.*_storage_upgrade/);
	event.remove("as:diamond", /storagedrawers:.*_storage_upgrade/);
	event.remove("as:netherite", /storagedrawers:.*_storage_upgrade/);
	event.remove("as:emerald", /storagedrawers:.*_storage_upgrade/);

	event.remove("as:azalea", /flowering_azalea($|_)/);
	event.add("as:flowering_azalea", /flowering_azalea($|_)/);

	event.remove("as:diamond", "metalbarrels:diamond_barrel");
	event.add("as:brass", "metalbarrels:diamond_barrel");

	event.remove("as:oak", /dark_oak($|_)/);
	event.add("as:dark_oak", /dark_oak($|_)/);

	let copperStuffs = ["minecraft:golden_horse_armor"];
	copperStuffs.forEach((item) => {
		event.remove("minecraft:piglin_loved", item);
		event.remove("as:gold", item);
		event.add("as:copper", item);
	});

	let notReallyPolished = [
		"createdeco:polished_iron_bars",
		"createdeco:polished_iron_bars_overlay",
		"create_dd:polished_spectral_ruby",
		"create:polished_rose_quartz",
		"minecraft:polished_blackstone_button",
		"minecraft:polished_blackstone_pressure_plate",
	];
	notReallyPolished.forEach((item) => {
		event.remove("as:polished", item);
		event.remove("as:polished_metal", item);
	});

	// Create Deco Brick Variants
	const brickTypes = ["worn", "pearl", "red", "dusk", "scarlet", "dean", "blue"];
	brickTypes.forEach((brickType) => {
		let tag = "as:brick_types/" + brickType;
		// Edge case for red bricks
		if (brickType == "red") {
			tag = "as/brick_types/default";
		}
		event.remove(tag, /_slab.*/);
	});
});
