global.unifiedIngots = [
	{ name: "steel", type: "ingot", modsUsing: ["tfmg", "create_dd", "createmetallurgy"] },
	{ name: "industrial_iron", type: "ingot", modsUsing: ["create", "createdeco"] },
	{ name: "zinc", type: "ingot", modsUsing: ["create", "create_dd", "createaddition", "destroy"] },
	{ name: "brass", type: "ingot", modsUsing: ["create"] },
	{ name: "copper", type: "ingot", modsUsing: ["create", "minecraft"] },
	{ name: "netherite", type: "ingot", modsUsing: ["minecraft", "createdeco"] },
	{ name: "iron", type: "ingot", modsUsing: ["minecraft", "create"] },
	{ name: "gold", type: "ingot", modsUsing: ["minecraft", "create"] },
	{ name: "aluminum", type: "ingot", modsUsing: ["tfmg"] },

	{ name: "nickel", type: "ingot", modsUsing: ["destroy", "tfmg"] },
	{ name: "lead", type: "ingot", modsUsing: ["tfmg"] },

	{ name: "andesite", type: "alloy", modsUsing: ["create", "createdeco", "vintageimprovements"] },
	{ name: "refined_radiance", type: "null", rarity: "uncommon", glow: true, modsUsing: ["create"] },
	{ name: "shadow_steel", type: "null", rarity: "uncommon", modsUsing: ["create"] },
	{ name: "lapis", type: "alloy", modsUsing: [] },
];

global.unifiedIngots.forEach((ingotObject) => {
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
			.create("cosmic_contraptions:" + ingot + "_ingot")
			.displayName(formatName(ingot) + " " + type)
			.rarity(rarity)
			.glow(glow);
		event
			.create("cosmic_contraptions:" + ingot + "_nugget")
			.displayName(formatName(ingot) + " Nugget")
			.rarity(rarity)
			.glow(glow);
		event
			.create("cosmic_contraptions:" + ingot + "_sheet")
			.displayName(formatName(ingot) + " Sheet")
			.rarity(rarity)
			.glow(glow);
	});

	StartupEvents.registry("block", (event) => {
		event
			.create("cosmic_contraptions:" + ingotObject.name + "_block")
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
