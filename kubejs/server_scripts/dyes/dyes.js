//priority: 0

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
		ingredients: [
			"minecraft:cornflower",
			"minecraft:lapis_lazuli",
			"create_cosmic_contraptions:cornflower_bush_item",
		],
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
		.mixing("minecraft:dark_prismarine", [
			"minecraft:prismarine",
			Fluid.of("create_cosmic_contraptions:black_dye_fluid", 50),
		])
		.id("create_cosmic_contraptions:dyes/dark_prismarine");
	// Hazard Block
	event.recipes.create
		.mixing(
			["create_dd:hazard_block"],
			["#forge:stones", Fluid.of("create_cosmic_contraptions:yellow_dye_fluid", 50)]
		)
		.id("create_cosmic_contraptions:dyes/hazard_block");
	// Slime Fluid
	event.recipes.create
		.mixing(
			[Fluid.of("create_things_and_misc:slime", 100)],
			["#forge:dough", Fluid.of("create_cosmic_contraptions:lime_dye_fluid", 250)]
		)
		.id("create_cosmic_contraptions:dyes/slime_fluid");
	// Slime
	event.recipes.create
		.mixing(
			["minecraft:slime_ball"],
			["create_cosmic_contraptions:saw_dust", Fluid.of("create_things_and_misc:slime", 100)]
		)
		.id("create_cosmic_contraptions:dyes/slime_ball");

	// COLOURED STUFF
	// =================
	colors.forEach((colorObject) => {
		let color = colorObject.color;
		let ingredients = colorObject.ingredients;

		// Dye Fluid
		if (ingredients.length > 0) {
			event.recipes.create
				.mixing(
					[Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 1000)],
					["#create_cosmic_contraptions:makes_" + color + "_dye", Fluid.of("water", 1000)]
				)
				.id("create_cosmic_contraptions:dyes/dye_fluid/" + color);
		}

		// Dye
		event.remove({ output: "minecraft:" + color + "_dye" });
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_dye"],
				[
					"create_cosmic_contraptions:saw_dust",
					Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 250),
				]
			)
			.id("create_cosmic_contraptions:dyes/dye/" + color);
		// Concrete
		event.remove({
			output: "minecraft:" + color + "_concrete_powder",
		});
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_concrete"],
				["tfmg:concrete", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/concrete/" + color);
		// Concrete Powder
		event.recipes.create
			.crushing(["minecraft:" + color + "_concrete_powder"], ["minecraft:" + color + "_concrete"])
			.id("create_cosmic_contraptions:dyes/concrete_powder/" + color);
		// Stained Glass
		event.remove({
			output: "minecraft:" + color + "_stained_glass",
		});
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_stained_glass"],
				["#forge:glass/colorless", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/stained_glass/" + color);
		// Stained Glass Pane
		event.remove({
			output: "minecraft:" + color + "_stained_glass_pane",
		});
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_stained_glass_pane"],
				["#forge:glass_panes/colorless", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 25)]
			)
			.id("create_cosmic_contraptions:dyes/stained_glass_pane/" + color);
		event.recipes
			.shapeless("12x minecraft:" + color + "_stained_glass_pane", ["#forge:glass/" + color])
			.id("create_cosmic_contraptions:dyes/stained_glass_pane/" + color + "_crafting");
		// Toolbox
		if (color != "brown") {
			event.remove({ output: "create:" + color + "_toolbox" });
		}
		event.recipes.create
			.mixing(
				["create:" + color + "_toolbox"],
				["create:brown_toolbox", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/toolbox/" + color);
		// Canvas Sign
		event.remove({
			output: "farmersdelight:" + color + "_canvas_sign",
		});
		event.recipes.create
			.mixing(
				["farmersdelight:" + color + "_canvas_sign"],
				["farmersdelight:canvas_sign", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/canvas_sign/" + color);
		// Wool
		event.remove({ output: "minecraft:" + color + "_wool" });
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_wool"],
				["minecraft:white_wool", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/wool/" + color);
		// Carpet
		event.remove({ output: "minecraft:" + color + "_carpet" });
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_carpet"],
				["minecraft:white_carpet", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/carpet/" + color);
		event.recipes
			.shapeless("3x minecraft:" + color + "_carpet", ["2x minecraft:" + color + "_wool"])
			.id("create_cosmic_contraptions:dyes/carpet/" + color + "_crafting");
		// Terracotta
		event.remove({ output: "minecraft:" + color + "_terracotta" });
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_terracotta"],
				["minecraft:terracotta", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/terracotta/" + color);
		// Bed
		event.remove({ output: "minecraft:" + color + "_bed" });
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_bed"],
				["minecraft:white_bed", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/bed/" + color);
		event.recipes
			.shapeless("minecraft:" + color + "_bed", ["3x minecraft:" + color + "_wool", "3x #minecraft:planks"])
			.id("create_cosmic_contraptions:dyes/bed/" + color + "_crafting");
		// Shulker Box
		event.remove({ output: `minecraft:${color}_shulker_box` });
		event.recipes.create
			.mixing(
				[`minecraft:${color}_shulker_box`],
				["minecraft:shulker_box", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id(`create_cosmic_contraptions:dyes/shulker_box/${color}`);
		// Banner
		event.remove({ output: "minecraft:" + color + "_banner" });
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_banner"],
				["minecraft:white_banner", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/banner/" + color);
		event
			.shaped("minecraft:" + color + "_banner", ["WWW", "WWW", " S "], {
				W: "minecraft:" + color + "_wool",
				S: "minecraft:stick",
			})
			.id("create_cosmic_contraptions:dyes/banner/" + color + "_crafting");
		// Candle
		event.remove({ output: "minecraft:" + color + "_candle" });
		event.recipes.create
			.mixing(
				["minecraft:" + color + "_candle"],
				["minecraft:candle", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/candle/" + color);
		// Supplementaries Candle Holder
		event.remove({
			output: "supplementaries:candle_holder_" + color,
		});
		event.recipes.create
			.mixing(
				["supplementaries:candle_holder_" + color],
				["supplementaries:candle_holder", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/candle_holder/" + color);
		event.recipes
			.shapeless("supplementaries:candle_holder_" + color, [
				"1x minecraft:" + color + "_candle",
				"1x #forge:ingots/iron",
			])
			.id("create_cosmic_contraptions:dyes/candle_holder/" + color + "_crafting");
		// Create Placard
		event.remove({ output: "createdeco:" + color + "_placard" });
		if (color != "white") {
			event.recipes.create
				.mixing(
					["createdeco:" + color + "_placard"],
					["create:placard", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
				)
				.id("create_cosmic_contraptions:dyes/placard/" + color);
		}
		// Create Valve Handle
		event.remove({ output: "create:" + color + "_valve_handle" });
		event.recipes.create
			.mixing(
				["create:" + color + "_valve_handle"],
				["create:copper_valve_handle", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 50)]
			)
			.id("create_cosmic_contraptions:dyes/valve_handle/" + color);
		// Supplementaries Present
		event.remove({
			output: `supplementaries:present_${color}`,
		});
		event.recipes.create
			.mixing(
				[`supplementaries:present_${color}`],
				["supplementaries:present", Fluid.of("create_cosmic_contraptions:" + color + "_dye_fluid", 250)]
			)
			.id("create_cosmic_contraptions:dyes/present/" + color);
		// Framed Door
		event.recipes.create
			.mixing(
				[`createframed:${color}_stained_framed_glass_door`],
				[`create:framed_glass_door`, Fluid.of(`create_cosmic_contraptions:${color}_dye_fluid`, 50)]
			)
			.id("create_cosmic_contraptions:dyes/frame_doors/" + color);
		event
			.stonecutting(`createframed:${color}_stained_framed_glass_door`, [`#forge:glass/${color}`])
			.id("create_cosmic_contraptions:dyes/frame_doors/" + color + "_stonecutting");
		event
			.shaped(`3x createframed:${color}_stained_framed_glass_door`, ["GG", "GG", "GG"], {
				G: `#forge:glass/${color}`,
			})
			.id("create_cosmic_contraptions:dyes/frame_doors/" + color + "_crafting");

		// Framed Trapdoor
		event.recipes.create
			.mixing(
				[`createframed:${color}_stained_framed_glass_trapdoor`],
				[`create:framed_glass_trapdoor`, Fluid.of(`create_cosmic_contraptions:${color}_dye_fluid`, 50)]
			)
			.id("create_cosmic_contraptions:dyes/frame_trapdoors/" + color);
		event
			.stonecutting(`2x createframed:${color}_stained_framed_glass_trapdoor`, [`#forge:glass/${color}`])
			.id("create_cosmic_contraptions:dyes/frame_trapdoors/" + color + "_stonecutting");
		event
			.shaped(`4x createframed:${color}_stained_framed_glass_trapdoor`, ["GG ", "GG "], {
				G: `#forge:glass/${color}`,
			})
			.id("create_cosmic_contraptions:dyes/frame_trapdoors/" + color + "_crafting");

		// Shipping Container
		event.remove({ output: `createdeco:${color}_shipping_container` });
		event.remove({ id: `create_cosmic_contraptions:unified/createdeco/${color}_shipping_container` });
		event.recipes.create
			.mixing(
				[`createdeco:${color}_shipping_container`],
				[
					"#create_cosmic_contraptions:item_vaults",
					Fluid.of(`create_cosmic_contraptions:${color}_dye_fluid`, 50),
				]
			)
			.id(`create_cosmic_contraptions:dyes/shipping_container/${color}`);
	});
});

// Color Handler Tags
ServerEvents.tags("item", (event) => {
	colors.forEach((colorObject) => {
		colorObject.ingredients.forEach((ingredient) => {
			event.add("create_cosmic_contraptions:makes_" + colorObject.color + "_dye", ingredient);
		});
	});
});
