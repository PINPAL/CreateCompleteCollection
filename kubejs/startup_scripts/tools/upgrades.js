StartupEvents.registry("item", (event) => {
	toolMaterials.forEach((material) => {
		event
			.create("cosmic_contraptions:" + material + "_blade")
			.displayName(formatName(material) + " Blade")
			.unstackable();
		event
			.create("cosmic_contraptions:" + "incomplete_" + material + "_blade")
			.displayName("Incomplete " + formatName(material) + " Blade")
			.unstackable();
		event
			.create("cosmic_contraptions:" + material + "_head")
			.displayName(formatName(material) + " Tool Head")
			.unstackable();
		event
			.create("cosmic_contraptions:" + "incomplete_" + material + "_head")
			.displayName("Incomplete " + formatName(material) + " Tool Head")
			.unstackable();
	});
	armorMaterials.forEach((material) => {
		event
			.create("cosmic_contraptions:" + material + "_stitching")
			.displayName(formatName(material) + " Stitching")
			.unstackable();
		event
			.create("cosmic_contraptions:" + "unfinished_" + material + "_stitching")
			.displayName("Incomplete " + formatName(material) + " Stitching")
			.unstackable();
	});
});
