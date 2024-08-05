MoreJSEvents.structureLoad((event) => {
	event.forEachPalettes((palette) => {
		palette.forEach((blockData) => {
			if (blockData.id == "minecraft:brewing_stand") {
				blockData.setBlock("create_cosmic_contraptions:brewing_stand");
			}
			if (blockData.id == "minecraft:anvil") {
				blockData.setBlock("create_cosmic_contraptions:anvil");
			}
		});
	});
});
