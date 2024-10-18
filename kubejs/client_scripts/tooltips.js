ItemEvents.tooltip((tooltip) => {
	tooltip.addAdvanced("chunkloaders:ultimate_chunk_loader", (item, advanced, text) => {
		text.add(1, [Text.of("Does ").gray(), Text.of("NOT ").red(), Text.of("work on moving contraptions.").gray()]);
	});
	tooltip.addAdvanced("createchunkloading:chunk_loader", (item, advanced, text) => {
		text.add(1, [Text.of("Can ").gray(), Text.of("ONLY ").red(), Text.of("work on moving contraptions.").gray()]);
	});
	const customItems = [
		"cosmic_contraptions:rainbow_valve_handle",
		"cosmic_contraptions:rainbow_wool",
		"cosmic_contraptions:rainbow_concrete",
		"cosmic_contraptions:metal_alloy_block",
		"cosmic_contraptions:rainbow_toolbox",
		"cosmic_contraptions:rainbow_canvas_sign",
		"cosmic_contraptions:rainbow_placard",
		"cosmic_contraptions:rainbow_dye",
		"cosmic_contraptions:rainbow_candle",
		"cosmic_contraptions:creative_potion",
		"cosmic_contraptions:creative_splash_potion",
		"cosmic_contraptions:creative_lingering_potion",
	];
	customItems.forEach((customItem) => {
		tooltip.addAdvanced(customItem, (item, advanced, text) => {
			text.add(1, [Text.of("End Game Crafting Ingredient").gray()]);
			text.add(2, [Text().of("Functionally Useless").color(0xc7954b)]);
		});
	});

	const decalSigns = [
		"create_things_and_misc:train_sing",
		"create_things_and_misc:train_sing_2",
		"create_things_and_misc:train_sing_3",
		"create_things_and_misc:train_sing_4",
		"create_things_and_misc:train_sing_5",
		"create_things_and_misc:train_sing_yellow_1",
		"create_things_and_misc:train_sing_yellow_2",
		"create_things_and_misc:train_sing_yellow_3",
		"create_things_and_misc:train_sing_yellow_4",
		"create_things_and_misc:train_sing_yellow_5",
		"create_things_and_misc:redsing",
		"create_things_and_misc:redsing_1",
		"create_things_and_misc:redsing_2",
		"create_things_and_misc:green_sing",
		"create_things_and_misc:green_sing_1",
		"create_things_and_misc:green_sing_2",
		"create_things_and_misc:green_sing_3",
		"create_things_and_misc:green_sing_4",
		"create_things_and_misc:green_sing_5",
		"create_things_and_misc:green_sing_6",
		"create_things_and_misc:speed_25",
		"create_things_and_misc:speed_50",
		"create_things_and_misc:speed_75",
		"create_things_and_misc:speed_100",
	];
	decalSigns.forEach((decalSign) => {
		tooltip.addAdvanced(decalSign, (item, advanced, text) => {
			text.remove(1);
		});
	});

	const decorativeItems = [];
	decorativeItems.forEach((decorativeItem) => {
		tooltip.addAdvanced(decorativeItem, (item, advanced, text) => {
			text.add(1, [Text.of("Decorative Only").gray()]);
		});
	});

	const moltenMetals = [
		{ name: "iron", type: "ingot" },
		{ name: "copper", type: "ingot" },
		{ name: "gold", type: "ingot" },
		{ name: "zinc", type: "ingot" },
		{ name: "brass", type: "ingot" },
		{ name: "bronze", type: "ingot" },
		{ name: "steel", type: "ingot" },
		{ name: "industrial_iron", type: "ingot" },
		{ name: "diamond", type: "plural" },
		{ name: "emerald", type: "plural" },
		{ name: "powdered_obsidian", type: "gem" },
		{ name: "redstone", type: "gem" },
	];
	moltenMetals.forEach((moltenMetal) => {
		tooltip.addAdvanced(`cosmic_contraptions:molten_${moltenMetal.name}_block`, (item, advanced, text) => {
			text.add(1, [
				Text.of("Consists of ").gray(),
				Text.of("1080").aqua(),
				Text.of("x ").gray(),
				Text.of(formatName(moltenMetal.name)).darkAqua(),
				Text.of(moltenMetal.type == "ingot" ? " Ingots" : "").gray(),
				Text.of(moltenMetal.type == "plural" ? "s" : "").gray(),
			]);
		});
	});

	const endGameIngredients = ["cosmic_contraptions:creative_omega_potion"];
	endGameIngredients.forEach((customItem) => {
		tooltip.addAdvanced(customItem, (item, advanced, text) => {
			text.add(1, [Text.of("End Game Crafting Ingredient").aqua()]);
		});
	});

	const disabledItems = [
		"minecraft:enchanting_table",
		"minecraft:anvil",
		"minecraft:brewing_stand",
		"cosmic_contraptions:anvil",
		"cosmic_contraptions:brewing_stand",
	];
	disabledItems.forEach((disabledItem) => {
		tooltip.addAdvanced(disabledItem, (item, advanced, text) => {
			text.add(1, [Text.of("Decorative Only").gray()]);
			text.add(2, [Text().of("Functionally Useless").color(0xc7954b)]);
		});
	});

	tooltip.addAdvanced(/cosmic_contraptions:broken_.*/, (item, advanced, text) => {
		text.add(1, [Text.of("Item is Broken").darkRed()]);
		text.add(2, [Text.of("Requires Repair").red()]);
	});
});
