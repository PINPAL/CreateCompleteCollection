const moltenMetals = [
	/* 	"iron",
	"copper",
	"gold",
	"zinc",
	"brass",
	"bronze",
	"steel",
	"cast_iron",
	"diamond",
	"emerald",
	"powdered_obsidian",
	"redstone", */
];

StartupEvents.registry("item", (event) => {
	moltenMetals.forEach((metal) => {
		event
			.create("cosmic_contraptions:molten_" + metal + "_ingot")
			.displayName("Molten " + formatName(metal) + " Ingot")
			.unstackable();
	});
});

StartupEvents.registry("block", (event) => {
	moltenMetals.forEach((metal) => {
		event
			.create("cosmic_contraptions:molten_" + metal + "_block")
			.displayName("Molten " + formatName(metal) + " Block")
			.soundType("metal")
			.tagBlock("minecraft:mineable/pickaxe")
			.hardness(50);
	});

	event
		.create("cosmic_contraptions:metal_alloy_block")
		.displayName("Metal Alloy Block")
		.soundType("metal")
		.tagBlock("minecraft:mineable/pickaxe")
		.hardness(80);
});

StartupEvents.registry("fluid", (event) => {
	moltenMetals.forEach((metal) => {
		event
			.create("cosmic_contraptions:molten_" + metal)
			.displayName("Molten " + formatName(metal))
			.stillTexture("cosmic_contraptions:block/fluid/molten_" + metal)
			.flowingTexture("cosmic_contraptions:block/fluid/molten_" + metal)
			.noBlock()
			.bucketItem.texture("cosmic_contraptions:item/bucket/molten_" + metal + "_bucket");
	});
});
