// Broken Tools
const toolMaterials = ["netherite", "diamond", "copper", "steel", "iron", "stone", "wooden"];

StartupEvents.registry("item", (event) => {
	toolMaterials.forEach((material) => {
		event
			.create("create_cosmic_contraptions:" + `broken_${material}_paxel`)
			.displayName("Broken " + formatName(material) + " Paxel")
			.unstackable();
		event
			.create("create_cosmic_contraptions:" + `broken_${material}_sword`)
			.displayName("Broken " + formatName(material) + " Sword")
			.unstackable();
		event
			.create("create_cosmic_contraptions:" + `broken_${material}_hoe`)
			.displayName("Broken " + formatName(material) + " Hoe")
			.unstackable();
	});
});
