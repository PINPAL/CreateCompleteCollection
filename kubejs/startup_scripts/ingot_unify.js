const unifiedIngots = [
	"steel",
	"industrial_iron",
	"zinc",
	"brass",
	"copper",
	"netherite",
	"iron",
	"gold",
	"aluminum",

	// 1.20+ Additions
	// "bronze",
	// "tin"
	"nickel",
	"lead",

	// Ad Astra
	"desh",
	"ostrum",
	"calorite",
];

StartupEvents.registry("item", (event) => {
	unifiedIngots.forEach((ingot) => {
		event.create("create_cc:" + ingot + "_ingot").displayName(formatName(ingot) + " Ingot");
		event.create("create_cc:" + ingot + "_nugget").displayName(formatName(ingot) + " Nugget");
		event.create("create_cc:" + ingot + "_sheet").displayName(formatName(ingot) + " Sheet");
	});

	// Andesite Alloy
	event.create("create_cc:andesite_ingot").displayName("Andesite Alloy");
	event.create("create_cc:andesite_nugget").displayName("Andesite Alloy Nugget");
	event.create("create_cc:andesite_sheet").displayName("Andesite Alloy Sheet");

	// Refined Radiance
	event.create("create_cc:refined_radiance_ingot").displayName("Refined Radiance");
	event.create("create_cc:refined_radiance_nugget").displayName("Refined Radiance Nugget");
	event.create("create_cc:refined_radiance_sheet").displayName("Refined Radiance Sheet");

	// Shadow Steel
	event.create("create_cc:shadow_steel_ingot").displayName("Shadow Steel");
	event.create("create_cc:shadow_steel_nugget").displayName("Shadow Steel Nugget");
	event.create("create_cc:shadow_steel_sheet").displayName("Shadow Steel Sheet");
});

StartupEvents.registry("block", (event) => {
	unifiedIngots.forEach((ingot) => {
		event
			.create("create_cc:" + ingot + "_block")
			.displayName("Block of " + formatName(ingot))
			.hardness(50)
			.tagBlock("minecraft:mineable/pickaxe")
			.mapColor("metal")
			.soundType("metal");
	});

	// Andesite Alloy
	event
		.create("create_cc:andesite_block")
		.displayName("Andesite Alloy Block")
		.hardness(50)
		.tagBlock("minecraft:mineable/pickaxe")
		.mapColor("metal")
		.soundType("metal");
});
