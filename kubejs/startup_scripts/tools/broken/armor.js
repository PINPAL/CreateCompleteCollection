const armors = ["helmet", "chestplate", "leggings", "boots"];
const armorMaterials = ["leather", "copper", "chainmail", "iron", "steel", "diamond", "netherite", "radiant"];
const divingGear = ["netherite_diving_helmet", "netherite_diving_boots", "copper_diving_helmet", "copper_diving_boots"];

StartupEvents.registry("item", (event) => {
	// Broken Armor
	armorMaterials.forEach((material) => {
		armors.forEach((armor) => {
			event
				.create("create_cosmic_contraptions:" + `broken_${material}_${armor}`)
				.displayName(`Broken ${formatName(material)} ${formatName(armor)}`)
				.unstackable();
		});
	});

	// Broken Diving Gear
	divingGear.forEach((item) => {
		event
			.create("create_cosmic_contraptions:" + `broken_${item}`)
			.displayName("Broken " + formatName(item))
			.unstackable();
	});
});
