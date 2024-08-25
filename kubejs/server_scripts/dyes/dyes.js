const colors = [
	{
		color: "white",
		ingredients: ["minecraft:bone_meal", "minecraft:lily_of_the_valley"],
	},
	{
		color: "orange",
		ingredients: ["minecraft:orange_tulip"],
	},
	{
		color: "magenta",
		ingredients: ["minecraft:allium", "minecraft:lilac"],
	},
	{
		color: "light_blue",
		ingredients: ["minecraft:blue_orchid"],
	},
	{
		color: "yellow",
		ingredients: ["minecraft:dandelion", "minecraft:sunflower"],
	},
	{
		color: "lime",
		ingredients: [],
	},
	{
		color: "pink",
		ingredients: ["minecraft:pink_tulip", "minecraft:peony"],
	},
	{
		color: "gray",
		ingredients: [],
	},
	{
		color: "light_gray",
		ingredients: ["minecraft:oxeye_daisy", "minecraft:azure_bluet", "minecraft:white_tulip"],
	},
	{
		color: "cyan",
		ingredients: [],
	},
	{
		color: "purple",
		ingredients: [],
	},
	{
		color: "blue",
		ingredients: ["minecraft:cornflower", "minecraft:lapis_lazuli", "kubejs:cornflower_bush_item"],
	},
	{
		color: "brown",
		ingredients: ["minecraft:cocoa_beans"],
	},
	{
		color: "green",
		ingredients: ["minecraft:cactus"],
	},
	{
		color: "red",
		ingredients: ["minecraft:poppy", "minecraft:beetroot", "minecraft:rose_bush", "minecraft:red_tulip"],
	},
	{
		color: "black",
		ingredients: ["minecraft:ink_sac", "minecraft:wither_rose", "minecraft:charcoal"],
	},
];

ServerEvents.recipes((event) => {
	// Dark Prismarine
	event.recipes.create.mixing("minecraft:dark_prismarine", [
		"minecraft:prismarine",
		Fluid.of("kubejs:black_dye_fluid", 125),
	]);
	// Hazard Block
	event.recipes.create.mixing(
		["create_dd:hazard_block"],
		["create_dd:asphalt_block", Fluid.of("kubejs:yellow_dye_fluid", 125)]
	);
	// Slime
	event.recipes.create.mixing(
		[Fluid.of("create_things_and_misc:slime", 100)],
		["create:dough", Fluid.of("kubejs:lime_dye_fluid", 250)]
	);
	event.recipes.create.mixing(
		["minecraft:slime_ball"],
		["createindustry:sawdust", Fluid.of("create_things_and_misc:slime", 100)]
	);

	colors.forEach((colorObject) => {
		event.remove({ output: "minecraft:" + colorObject.color + "_dye" });
		event.remove({
			output: "minecraft:" + colorObject.color + "_concrete_powder",
		});
		event.remove({
			output: "minecraft:" + colorObject.color + "_stained_glass",
		});
		event.remove({
			output: "minecraft:" + colorObject.color + "_stained_glass_pane",
		});
		event.remove({ output: "quark:" + colorObject.color + "_framed_glass" });
		event.remove({
			output: "quark:" + colorObject.color + "_framed_glass_pane",
		});
		event.remove({
			output: "farmersdelight:" + colorObject.color + "_canvas_sign",
		});
		event.remove({ output: "minecraft:" + colorObject.color + "_wool" });
		event.remove({ output: "minecraft:" + colorObject.color + "_carpet" });
		event.remove({ output: "minecraft:" + colorObject.color + "_terracotta" });
		event.remove({ output: "minecraft:" + colorObject.color + "_bed" });
		event.remove({ output: "minecraft:" + colorObject.color + "_shulker_box" });
		event.remove({ output: "minecraft:" + colorObject.color + "_candle" });
		event.remove({ output: "quark:" + colorObject.color + "_rune" });
		if (colorObject.color != "brown") {
			event.remove({ output: "create:" + colorObject.color + "_toolbox" });
		}
		event.remove({
			output: "supplementaries:candle_holder_" + colorObject.color,
		});
		event.remove({ output: "createdeco:" + colorObject.color + "_placard" });
		event.remove({ output: "minecraft:" + colorObject.color + "_banner" });
		event.remove({ output: "create:" + colorObject.color + "_valve_handle" });

		// Dye Fluid
		if (colorObject.ingredients.length > 0) {
			event.recipes.create.mixing(
				[Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 1000)],
				["#kubejs:makes_" + colorObject.color + "_dye", Fluid.of("water", 1000)]
			);
		}

		// Dye
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_dye"],
			["createindustry:sawdust", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 500)]
		);
		// Concrete Powder
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_concrete"],
			["createindustry:concrete", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		event.recipes.create.crushing(
			["minecraft:" + colorObject.color + "_concrete_powder"],
			["minecraft:" + colorObject.color + "_concrete"]
		);
		// Stained Glass
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_stained_glass"],
			["minecraft:glass", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Stained Glass Pane
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_stained_glass_pane"],
			["minecraft:glass_pane", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		event.recipes.shapeless("16x minecraft:" + colorObject.color + "_stained_glass_pane", [
			"6x minecraft:" + colorObject.color + "_stained_glass",
		]);
		// Framed Glass
		event.recipes.create.mixing(
			["quark:" + colorObject.color + "_framed_glass"],
			["quark:framed_glass", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Framed Glass Pane
		event.recipes.create.mixing(
			["quark:" + colorObject.color + "_framed_glass_pane"],
			["quark:framed_glass_pane", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		event.recipes.shapeless("16x quark:" + colorObject.color + "_framed_glass_pane", [
			"6x quark:" + colorObject.color + "_framed_glass",
		]);
		// Toolbox
		event.recipes.create.mixing(
			["create:" + colorObject.color + "_toolbox"],
			["create:brown_toolbox", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Canvas Sign
		event.recipes.create.mixing(
			["farmersdelight:" + colorObject.color + "_canvas_sign"],
			["farmersdelight:canvas_sign", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Wool
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_wool"],
			["minecraft:white_wool", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Carpet
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_carpet"],
			["minecraft:white_carpet", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		event.recipes.shapeless("3x minecraft:" + colorObject.color + "_carpet", [
			"2x minecraft:" + colorObject.color + "_wool",
		]);
		// Terracotta
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_terracotta"],
			["minecraft:terracotta", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Bed
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_bed"],
			["minecraft:white_bed", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		event.recipes.shapeless("minecraft:" + colorObject.color + "_bed", [
			"3x minecraft:" + colorObject.color + "_wool",
			"3x #minecraft:planks",
		]);
		// Shulker Box
		event.remove({ output: `minecraft:${colorObject.color}_shulker_box` });
		event.recipes.create.mixing(
			[`minecraft:${colorObject.color}_shulker_box`],
			["minecraft:shulker_box", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Banner
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_banner"],
			["minecraft:white_banner", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		event.shaped("minecraft:" + colorObject.color + "_banner", ["WWW", "WWW", " S "], {
			W: "minecraft:" + colorObject.color + "_wool",
			S: "minecraft:stick",
		});
		// Candle
		event.recipes.create.mixing(
			["minecraft:" + colorObject.color + "_candle"],
			["minecraft:candle", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Supplementaries Candle Holder
		event.recipes.create.mixing(
			["supplementaries:candle_holder_" + colorObject.color],
			["supplementaries:candle_holder", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		event.recipes.shapeless("supplementaries:candle_holder_" + colorObject.color, [
			"1x minecraft:" + colorObject.color + "_candle",
			"1x #forge:ingots/iron",
		]);
		// Quark Runes
		event.recipes.create.mixing(
			["quark:" + colorObject.color + "_rune"],
			["quark:blank_rune", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Create Placard
		if (colorObject.color != "white") {
			event.recipes.create.mixing(
				["createdeco:" + colorObject.color + "_placard"],
				["create:placard", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
			);
		}
		// Create Valve Handle
		event.recipes.create.mixing(
			["create:" + colorObject.color + "_valve_handle"],
			["create:copper_valve_handle", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
		// Supplementaries Present
		event.remove({
			output: `supplementaries:present_${colorObject.color}`,
		});
		event.recipes.create.mixing(
			[`supplementaries:present_${colorObject.color}`],
			["supplementaries:present", Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 500)]
		);
	});

	// Create Deco Bricks
	const decoBrickColors = [
		{ color: "light_gray", output: "pearl" },
		{ color: "blue", output: "blue" },
		{ color: "red", output: "scarlet" },
		{ color: "yellow", output: "dean" },
		{ color: "black", output: "dusk" },
	].forEach((colorObject) => {
		event.remove({ output: "createdeco:" + colorObject.output + "_brick" });
		event.recipes.create.mixing(
			["createdeco:" + colorObject.output + "_brick"],
			[`#kubejs:bricks_not_${colorObject.output}`, Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 125)]
		);
	});
});

// Color Handler Tags
ServerEvents.tags("item", (event) => {
	colors.forEach((colorObject) => {
		colorObject.ingredients.forEach((ingredient) => {
			event.add("kubejs:makes_" + colorObject.color + "_dye", ingredient);
		});
	});
});
