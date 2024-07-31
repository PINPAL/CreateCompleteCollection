StartupEvents.registry("item", (event) => {
	toolMaterials.forEach((material) => {
		event
			.create("create_cc:" + material + "_blade")
			.displayName(formatName(material) + " Blade")
			.unstackable();
		event
			.create("create_cc:" + "incomplete_" + material + "_blade")
			.displayName("Incomplete " + formatName(material) + " Blade")
			.unstackable();
		event
			.create("create_cc:" + material + "_head")
			.displayName(formatName(material) + " Tool Head")
			.unstackable();
		event
			.create("create_cc:" + "incomplete_" + material + "_head")
			.displayName("Incomplete " + formatName(material) + " Tool Head")
			.unstackable();
	});
	armorMaterials.forEach((material) => {
		event
			.create("create_cc:" + material + "_stitching")
			.displayName(formatName(material) + " Stitching")
			.unstackable();
		event
			.create("create_cc:" + "unfinished_" + material + "_stitching")
			.displayName("Incomplete " + formatName(material) + " Stitching")
			.unstackable();
	});
});
