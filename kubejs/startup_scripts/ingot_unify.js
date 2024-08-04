const unifiedIngots = [
	{ name: "steel", type: "ingot" },
	{ name: "industrial_iron", type: "ingot" },
	{ name: "zinc", type: "ingot" },
	{ name: "brass", type: "ingot" },
	{ name: "copper", type: "ingot" },
	{ name: "netherite", type: "ingot" },
	{ name: "iron", type: "ingot" },
	{ name: "gold", type: "ingot" },
	{ name: "aluminum", type: "ingot" },

	{ name: "nickel", type: "ingot" },
	{ name: "lead", type: "ingot" },

	{ name: "desh", type: "ingot" },
	{ name: "ostrum", type: "ingot" },
	{ name: "calorite", type: "ingot" },

	{ name: "andesite", type: "alloy" },
	{ name: "refined_radiance", type: "null" },
	{ name: "shadow_steel", type: "null" },
	{ name: "lapis", type: "alloy" },
];

StartupEvents.registry("item", (event) => {
	unifiedIngots.forEach((ingotObject) => {
		let ingot = ingotObject.name;
		let type = formatName(ingotObject.type);
		if (ingotObject.type === "null") {
			type = "";
		}
		event.create("create_cc:" + ingot + "_ingot").displayName(formatName(ingot) + " " + type);
		event.create("create_cc:" + ingot + "_nugget").displayName(formatName(ingot) + " Nugget");
		event.create("create_cc:" + ingot + "_sheet").displayName(formatName(ingot) + " Sheet");
	});
});

StartupEvents.registry("block", (event) => {
	unifiedIngots.forEach((ingotObject) => {
		// Generate a formatted name for the ingot
		// eg: "industrial_iron" becomes "Block of Industrial Iron"
		// eg: "andesite" becomes "Block of Andesite Alloy"
		let formattedName = "Block of " + formatName(ingotObject.name);
		if (ingotObject.type === "alloy") {
			formattedName += " Alloy";
		}
		event
			.create("create_cc:" + ingotObject.name + "_block")
			.displayName(formattedName)
			.hardness(50)
			.tagBlock("minecraft:mineable/pickaxe")
			.mapColor("metal")
			.soundType("metal");
	});
});
