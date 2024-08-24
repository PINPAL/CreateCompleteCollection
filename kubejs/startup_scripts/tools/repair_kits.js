// Repair Kits
const repairKitMaterials = [
	"netherite",
	"diamond",
	"copper",
	"steel",
	"iron",
	"stone",
	"wooden",
	"leather",
	"chainmail",
];

StartupEvents.registry("item", (event) => {
	repairKitMaterials.forEach((material) => {
		event
			.create(material + "_repair_kit")
			.displayName(formatName(material) + " Repair Kit")
			.maxStackSize(4);
	});
});
