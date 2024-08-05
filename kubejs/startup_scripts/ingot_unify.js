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
	{ name: "refined_radiance", type: "null", rarity: "uncommon", glow: true },
	{ name: "shadow_steel", type: "null", rarity: "uncommon" },
	{ name: "lapis", type: "alloy" },
];

unifiedIngots.forEach((ingotObject) => {
	let ingot = ingotObject.name;
	let type = formatName(ingotObject.type);
	if (ingotObject.type === "null") {
		type = "";
	}
	let rarity = "common";
	if (ingotObject.hasOwnProperty("rarity")) {
		rarity = ingotObject.rarity;
	}
	let glow = false;
	if (ingotObject.hasOwnProperty("glow")) {
		glow = true;
	}
	// Generate a formatted name for the ingot
	// eg: "industrial_iron" becomes "Block of Industrial Iron"
	// eg: "andesite" becomes "Block of Andesite Alloy"
	let blockName = "Block of " + formatName(ingotObject.name);
	if (ingotObject.type === "alloy") {
		blockName += " Alloy";
	}
	StartupEvents.registry("item", (event) => {
		event
			.create("create_cosmic_contraptions:" + ingot + "_ingot")
			.displayName(formatName(ingot) + " " + type)
			.rarity(rarity)
			.glow(glow);
		event
			.create("create_cosmic_contraptions:" + ingot + "_nugget")
			.displayName(formatName(ingot) + " Nugget")
			.rarity(rarity)
			.glow(glow);
		event
			.create("create_cosmic_contraptions:" + ingot + "_sheet")
			.displayName(formatName(ingot) + " Sheet")
			.rarity(rarity)
			.glow(glow);
	});

	StartupEvents.registry("block", (event) => {
		event
			.create("create_cosmic_contraptions:" + ingotObject.name + "_block")
			.displayName(blockName)
			.hardness(50)
			.tagBlock("minecraft:mineable/pickaxe")
			.mapColor("metal")
			.soundType("metal")
			.item((item) => {
				item.rarity(rarity);
				item.glow(glow);
			});
	});
});
