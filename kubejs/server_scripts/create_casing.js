const createCasings = [
	{
		name: "andesite",
		casingId: "create:andesite_casing",
		isNativelyCased: true,
		cogShaftOnly: true,
	},
	{
		name: "brass",
		casingId: "create:brass_casing",
		isNativelyCased: true,
		cogShaftOnly: false,
	},
	{
		name: "copper",
		casingId: "create:copper_casing",
		isNativelyCased: false,
		cogShaftOnly: false,
	},
	{
		name: "railway",
		casingId: "create:railway_casing",
		isNativelyCased: false,
		cogShaftOnly: false,
	},
	{
		name: "industrial_iron",
		casingId: "create:industrial_iron_block",
		isNativelyCased: false,
		cogShaftOnly: false,
	},
	{
		name: "refined_radiance",
		casingId: "create:refined_radiance_casing",
		isNativelyCased: false,
		cogShaftOnly: true,
	},
	{
		name: "shadow_steel",
		casingId: "create:shadow_steel_casing",
		isNativelyCased: false,
		cogShaftOnly: true,
	},
	{
		name: "creative",
		casingId: "createcasing:creative_casing",
		isNativelyCased: false,
		cogShaftOnly: false,
	},
];
const encasedBlockTypes = {
	gearbox: {
		name: "$$_gearbox",
		originalItem: "create:gearbox",
		isNativelyEncased: false,
	},
	vertical_gearbox: {
		name: "vertical_$$_gearbox",
		originalItem: "create:vertical_gearbox",
		isNativelyEncased: false,
	},
	mixer: {
		name: "$$_mixer",
		originalItem: "create:mechanical_mixer",
		isNativelyEncased: false,
	},
	press: {
		name: "$$_press",
		originalItem: "create:mechanical_press",
		isNativelyEncased: false,
	},
	depot: {
		name: "$$_depot",
		originalItem: "create:depot",
		isNativelyEncased: false,
	},
	shaft: {
		name: "$$_encased_shaft",
		originalItem: "create:shaft",
		isNativelyEncased: true,
	},
	cogwheel: {
		name: "$$_encased_cogwheel",
		originalItem: "create:cogwheel",
		isNativelyEncased: true,
	},
	large_cogwheel: {
		name: "$$_encased_large_cogwheel",
		originalItem: "create:large_cogwheel",
		isNativelyEncased: true,
	},
	drive: {
		name: "$$_encased_chain_drive",
		originalItem: "create:encased_chain_drive",
		isNativelyEncased: false,
	},
	gearshift: {
		name: "$$_adjustable_chain_gearshift",
		originalItem: "create:adjustable_chain_gearshift",
		isNativelyEncased: false,
	},
};

createCasings.forEach((casing) => {
	for (const key in encasedBlockTypes) {
		let encasedBlockType = encasedBlockTypes[key];
		// Don't create encased blocks for machines if the casing doesn't support it
		// Natively encased blocks only have cog/shaft encasings
		if (casing.cogShaftOnly && !encasedBlockType.isNativelyEncased) {
			continue;
		}
		// Don't encase shafts, cogwheels, or large cogwheels for blocks that already have native Create encased versions
		let modName = "createcasing";
		if (casing.isNativelyCased && encasedBlockType.isNativelyEncased) {
			modName = "create";
		}
		// Generate encased block name
		let encasedBlockName = modName + ":" + encasedBlockType.name.replace("$$", casing.name);

		// Create manual application recipe
		// TODO: Replace this with item event
		/* ServerEvents.recipes((event) => {
			event.recipes.create
				.item_application(encasedBlockName, [encasedBlockType.originalItem, casing.casingId])
				.keepHeldItem();
		}); */

		// Modify loot table so that they drop the original Create item
		LootJS.modifiers((event) => {
			event.addBlockLootModifier(encasedBlockName).replaceLoot(encasedBlockName, encasedBlockType.originalItem);
		});
	}
});
