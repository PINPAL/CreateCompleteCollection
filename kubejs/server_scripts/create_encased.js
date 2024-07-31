const createCasings = [
	{
		name: "brass",
		casingId: "create:brass_casing",
		hasNativeShaft: true,
		noMachines: false,
	},
	{
		name: "copper",
		casingId: "create:copper_casing",
		hasNativeShaft: false,
		noMachines: false,
	},
	{
		name: "railway",
		casingId: "create:railway_casing",
		hasNativeShaft: false,
		noMachines: false,
	},
	{
		name: "industrial_iron",
		casingId: "create:industrial_iron_block",
		hasNativeShaft: false,
		noMachines: false,
	},
	{
		name: "refined_radiance",
		casingId: "create:refined_radiance_casing",
		hasNativeShaft: false,
		noMachines: true,
	},
	{
		name: "shadow_steel",
		casingId: "create:shadow_steel_casing",
		hasNativeShaft: false,
		noMachines: true,
	},
];
const encasedBlocks = [
	{ name: "$$_gearbox", originalItem: "create:gearbox", isMachine: true },
	{
		name: "vertical_$$_gearbox",
		originalItem: "create:vertical_gearbox",
		isMachine: true,
	},
	{
		name: "$$_mixer",
		originalItem: "create:mechanical_mixer",
		isMachine: true,
	},
	{
		name: "$$_press",
		originalItem: "create:mechanical_press",
		isMachine: true,
	},
	{ name: "$$_depot", originalItem: "create:depot", isMachine: true },
	{ name: "$$_encased_shaft", originalItem: "create:shaft", isMachine: false },
	{
		name: "$$_encased_cogwheel",
		originalItem: "create:cogwheel",
		isMachine: false,
	},
	{
		name: "$$_encased_large_cogwheel",
		originalItem: "create:large_cogwheel",
		isMachine: false,
	},
];

createCasings.forEach((casing) => {
	encasedBlocks.forEach((encasedBlock) => {
		// Don't create encased blocks for machines if the casing doesn't support it
		if (encasedBlock.isMachine && casing.noMachines) {
			return;
		}
		// Don't encase shafts, cogwheels, or large cogwheels for blocks that already have native Create encased versions
		if (casing.hasNativeShaft && !encasedBlock.isMachine) {
			return;
		}
		// Generate encased block name
		let encasedBlockName = "createcasing:" + encasedBlock.name.replace("$$", casing.name);
		// Create manual application recipe
		ServerEvents.recipes((event) => {
			event.recipes.create
				.item_application(encasedBlockName, [encasedBlock.originalItem, casing.casingId])
				.keepHeldItem()
				.id("create_cc:encased/" + casing.name + "/" + encasedBlock.name.replace("$$_", ""));
		});

		// Modify loot table so that they drop the original Create item
		LootJS.modifiers((event) => {
			event.addBlockLootModifier(encasedBlockName).replaceLoot(encasedBlockName, encasedBlock.originalItem);
		});
	});
});
