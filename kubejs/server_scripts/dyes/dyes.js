let colors = [
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
		ingredients: ["minecraft:cornflower", "minecraft:lapis_lazuli", "create_cc:cornflower_bush_item"],
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
	event.recipes.create
		.mixing("minecraft:dark_prismarine", ["minecraft:prismarine", Fluid.of("create_cc:black_dye_fluid", 50)])
		.id("create_cc:dyes/dark_prismarine");
	// Hazard Block
	event.recipes.create
		.mixing(["create_dd:hazard_block"], ["#forge:stones", Fluid.of("create_cc:yellow_dye_fluid", 50)])
		.id("create_cc:dyes/hazard_block");
	// Slime Fluid
	event.recipes.create
		.mixing(
			[Fluid.of("create_things_and_misc:slime", 100)],
			["#forge:dough", Fluid.of("create_cc:lime_dye_fluid", 250)]
		)
		.id("create_cc:dyes/slime_fluid");
	// Slime
	event.recipes.create
		.mixing(["minecraft:slime_ball"], ["create_cc:saw_dust", Fluid.of("create_things_and_misc:slime", 100)])
		.id("create_cc:dyes/slime_ball");

	// COLOURED STUFF
	// =================
	colors.forEach((colorObject) => {
		let color = colorObject.color;
		let ingredients = colorObject.ingredients;

		event.remove({ output: "minecraft:" + color + "_dye" });
		event.remove({
			output: "minecraft:" + color + "_concrete_powder",
		});
		event.remove({
			output: "minecraft:" + color + "_stained_glass",
		});
		event.remove({
			output: "minecraft:" + color + "_stained_glass_pane",
		});
		event.remove({
			output: "farmersdelight:" + color + "_canvas_sign",
		});
		event.remove({ output: "minecraft:" + color + "_wool" });
		event.remove({ output: "minecraft:" + color + "_carpet" });
		event.remove({ output: "minecraft:" + color + "_terracotta" });
		event.remove({ output: "minecraft:" + color + "_bed" });
		event.remove({ output: "minecraft:" + color + "_shulker_box" });
		event.remove({ output: "minecraft:" + color + "_candle" });
		if (color != "brown") {
			event.remove({ output: "create:" + color + "_toolbox" });
		}
		event.remove({
			output: "supplementaries:candle_holder_" + color,
		});
		event.remove({ output: "createdeco:" + color + "_placard" });
		event.remove({ output: "minecraft:" + color + "_banner" });
		event.remove({ output: "create:" + color + "_valve_handle" });

		// Dye Fluid
		if (ingredients.length > 0) {
			event.recipes.create
				.mixing(
					[Fluid.of("create_cc:" + color + "_dye_fluid", 1000)],
					["#create_cc:makes_" + color + "_dye", Fluid.of("water", 1000)]
				)
				.id("create_cc:dyes/dye_fluid/" + color);
		}

		// Dye
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_dye"],
				["create_cc:saw_dust", Fluid.of("create_cc:" + color + "_dye_fluid", 250)]
			)
			.id("create_cc:dyes/dye/" + color);
		// Concrete
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_concrete"],
				["tfmg:concrete", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/concrete/" + color);
		// Concrete Powder
		event.recipes.create
			.crushing(["minecraft:" + color + "_concrete_powder"], ["minecraft:" + color + "_concrete"])
			.id("create_cc:dyes/concrete_powder/" + color);
		// Stained Glass
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_stained_glass"],
				["#forge:glass/colorless", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/stained_glass/" + color);
		// Stained Glass Pane
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_stained_glass_pane"],
				["#forge:glass_panes/colorless", Fluid.of("create_cc:" + color + "_dye_fluid", 25)]
			)
			.id("create_cc:dyes/stained_glass_pane/" + color);
		event.recipes
			.shapeless("12x minecraft:" + color + "_stained_glass_pane", ["#forge:glass/" + color])
			.id("create_cc:dyes/stained_glass_pane/" + color + "_crafting");
		// Toolbox
		event.recipes.create
			.mixing(
				["create:" + color + "_toolbox"],
				["create:brown_toolbox", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/toolbox/" + color);
		// Canvas Sign
		event.recipes.create
			.mixing(
				["farmersdelight:" + color + "_canvas_sign"],
				["farmersdelight:canvas_sign", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/canvas_sign/" + color);
		// Wool
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_wool"],
				["minecraft:white_wool", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/wool/" + color);
		// Carpet
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_carpet"],
				["minecraft:white_carpet", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/carpet/" + color);
		event.recipes
			.shapeless("3x minecraft:" + color + "_carpet", ["2x minecraft:" + color + "_wool"])
			.id("create_cc:dyes/carpet/" + color + "_crafting");
		// Terracotta
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_terracotta"],
				["minecraft:terracotta", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/terracotta/" + color);
		// Bed
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_bed"],
				["minecraft:white_bed", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/bed/" + color);
		event.recipes
			.shapeless("minecraft:" + color + "_bed", ["3x minecraft:" + color + "_wool", "3x #minecraft:planks"])
			.id("create_cc:dyes/bed/" + color + "_crafting");
		// Shulker Box
		event.remove({ output: `minecraft:${color}_shulker_box` });
		event.recipes.create
			.mixing(
				[`minecraft:${color}_shulker_box`],
				["minecraft:shulker_box", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id(`create_cc:dyes/shulker_box/${color}`);
		// Banner
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_banner"],
				["minecraft:white_banner", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/banner/" + color);
		event
			.shaped("minecraft:" + color + "_banner", ["WWW", "WWW", " S "], {
				W: "minecraft:" + color + "_wool",
				S: "minecraft:stick",
			})
			.id("create_cc:dyes/banner/" + color + "_crafting");
		// Candle
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_candle"],
				["minecraft:candle", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/candle/" + color);
		// Supplementaries Candle Holder
		event.recipes.create
			.mixing(
				["supplementaries:candle_holder_" + color],
				["supplementaries:candle_holder", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/candle_holder/" + color);
		event.recipes
			.shapeless("supplementaries:candle_holder_" + color, [
				"1x minecraft:" + color + "_candle",
				"1x #forge:ingots/iron",
			])
			.id("create_cc:dyes/candle_holder/" + color + "_crafting");
		// Create Placard
		if (color != "white") {
			event.recipes.create
				.mixing(
					["createdeco:" + color + "_placard"],
					["create:placard", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
				)
				.id("create_cc:dyes/placard/" + color);
		}
		// Create Valve Handle
		event.recipes.create
			.mixing(
				["create:" + color + "_valve_handle"],
				["create:copper_valve_handle", Fluid.of("create_cc:" + color + "_dye_fluid", 50)]
			)
			.id("create_cc:dyes/valve_handle/" + color);
		// Supplementaries Present
		event.remove({
			output: `supplementaries:present_${color}`,
		});
		event.recipes.create
			.mixing(
				[`supplementaries:present_${color}`],
				["supplementaries:present", Fluid.of("create_cc:" + color + "_dye_fluid", 250)]
			)
			.id("create_cc:dyes/present/" + color);
		// Framed Door
		event.recipes.create
			.mixing(
				[`createframed:${color}_stained_framed_glass_door`],
				[`create:framed_glass_door`, Fluid.of(`create_cc:${color}_dye_fluid`, 50)]
			)
			.id("create_cc:dyes/frame_doors/" + color);
		event
			.stonecutting(`createframed:${color}_stained_framed_glass_door`, [`#forge:glass/${color}`])
			.id("create_cc:dyes/frame_doors/" + color + "_stonecutting");
		event
			.shaped(`3x createframed:${color}_stained_framed_glass_door`, ["GG", "GG", "GG"], {
				G: `#forge:glass/${color}`,
			})
			.id("create_cc:dyes/frame_doors/" + color + "_crafting");

		// Framed Trapdoor
		event.recipes.create
			.mixing(
				[`createframed:${color}_stained_framed_glass_trapdoor`],
				[`create:framed_glass_trapdoor`, Fluid.of(`create_cc:${color}_dye_fluid`, 50)]
			)
			.id("create_cc:dyes/frame_trapdoors/" + color);
		event
			.stonecutting(`2x createframed:${color}_stained_framed_glass_trapdoor`, [`#forge:glass/${color}`])
			.id("create_cc:dyes/frame_trapdoors/" + color + "_stonecutting");
		event
			.shaped(`4x createframed:${color}_stained_framed_glass_trapdoor`, ["GG ", "GG "], {
				G: `#forge:glass/${color}`,
			})
			.id("create_cc:dyes/frame_trapdoors/" + color + "_crafting");
	});

	// Create Deco Bricks
	const decoBrickColors = [
		{ color: "light_gray", output: "pearl" },
		{ color: "blue", output: "blue" },
		{ color: "red", output: "scarlet" },
		{ color: "yellow", output: "dean" },
		{ color: "black", output: "dusk" },
	];
	decoBrickColors.forEach((brickObject) => {
		let brick = "createdeco:" + brickObject.output + "_brick";
		let fluid = Fluid.of("create_cc:" + brickObject.color + "_dye_fluid", 50);

		event.remove({ output: brick });
		// Mix Color with (any other brick that's not the same color)
		event.recipes.create
			.mixing(brick, [`#create_cc:bricks_not_${brickObject.output}`, fluid])
			.id("create_cc:dyes/bricks/" + brickObject.color);
	});
});

// Color Handler Tags
ServerEvents.tags("item", (event) => {
	colors.forEach((colorObject) => {
		colorObject.ingredients.forEach((ingredient) => {
			event.add("create_cc:makes_" + colorObject.color + "_dye", ingredient);
		});
	});
});
