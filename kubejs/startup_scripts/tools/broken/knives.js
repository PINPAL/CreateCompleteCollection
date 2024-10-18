const knifeMaterials = ["copper", "iron", "steel", "diamond", "netherite"];

StartupEvents.registry("item", (event) => {
	knifeMaterials.forEach((material) => {
		event
			.create("cosmic_contraptions:" + `broken_${material}_knife`)
			.displayName("Broken " + formatName(material) + " Knife")
			.unstackable();
	});
});
