ItemEvents.tooltip((tooltip) => {
	const customItems = [
		"kubejs:rainbow_valve_handle",
		"kubejs:rainbow_wool",
		"kubejs:rainbow_concrete",
		"kubejs:metal_alloy_block",
		"kubejs:rainbow_toolbox",
		"kubejs:rainbow_canvas_sign",
		"kubejs:rainbow_placard",
		"kubejs:rainbow_dye",
		"kubejs:rainbow_candle",
		"kubejs:creative_potion",
		"kubejs:creative_splash_potion",
		"kubejs:creative_lingering_potion",
	];
	customItems.forEach((customItem) => {
		tooltip.addAdvanced(customItem, (item, advanced, text) => {
			text.add(1, [Text.of("End Game Crafting Ingredient").gray()]);
			text.add(1, [Text.of("Functionally Useless").gold()]);
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

	const moltenMetals = [
		{ name: "iron", type: "ingot" },
		{ name: "copper", type: "ingot" },
		{ name: "gold", type: "ingot" },
		{ name: "zinc", type: "ingot" },
		{ name: "brass", type: "ingot" },
		{ name: "tin", type: "ingot" },
		{ name: "bronze", type: "ingot" },
		{ name: "steel", type: "ingot" },
		{ name: "cast_iron", type: "ingot" },
		{ name: "diamond", type: "plural" },
		{ name: "emerald", type: "plural" },
		{ name: "powdered_obsidian", type: "gem" },
		{ name: "redstone", type: "gem" },
	];
	moltenMetals.forEach((moltenMetal) => {
		tooltip.addAdvanced(`kubejs:molten_${moltenMetal.name}_block`, (item, advanced, text) => {
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

	const endGameIngredients = ["kubejs:creative_omega_potion"];
	endGameIngredients.forEach((customItem) => {
		tooltip.addAdvanced(customItem, (item, advanced, text) => {
			text.add(1, [Text.of("End Game Crafting Ingredient").aqua()]);
		});
	});

	const disabledItems = [
		"minecraft:enchanting_table",
		"minecraft:anvil",
		"minecraft:brewing_stand",
		"kubejs:anvil",
		"kubejs:brewing_stand",
	];
	disabledItems.forEach((disabledItem) => {
		tooltip.addAdvanced(disabledItem, (item, advanced, text) => {
			text.add(1, [Text.of("Decorative Only").gray()]);
			text.add(1, [Text.of("Functionally Useless").gold()]);
		});
	});

	tooltip.addAdvanced(/kubejs:broken_.*/, (item, advanced, text) => {
		text.add(1, [Text.of("Item is Broken").darkRed()]);
		text.add(2, [Text.of("Requires Repair").red()]);
	});
});
