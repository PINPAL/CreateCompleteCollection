global.createCasings.forEach((casing) => {
	for (const key in global.encasedBlockTypes) {
		let encasedBlockType = global.encasedBlockTypes[key];
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

		// Modify loot table so that they drop the original Create item
		LootJS.modifiers((event) => {
			event.addBlockLootModifier(encasedBlockName).replaceLoot(encasedBlockName, encasedBlockType.originalItem);
		});
	}
});
