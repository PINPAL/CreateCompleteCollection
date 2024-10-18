function createRecipes(event, output, color, formattedID) {
	event.remove({ output: output });
	event.remove({ output: output + "_pane" });
	// Glass Type from Stonecutting
	event.stonecutting(output, [`#forge:glass/${color}`]).id(formattedID + "_stonecutting");

	// 2x Pane Type from Stonecutting from Block
	event.stonecutting(Item.of(output + "_pane", 2), [`#forge:glass/${color}`]).id(formattedID + "/pane_stonecutting");
	// Pane Type from Stonecutting from Pane
	event.stonecutting(output + "_pane", [`#forge:glass_panes/${color}`]).id(formattedID + "/pane_recycle");
	// 2x Pane Type from Crafting
	event
		.shaped(Item.of(output + "_pane", 12), ["GGG", "GGG"], {
			G: output,
		})
		.id(formattedID + "/pane_crafting");
}

ServerEvents.recipes((event) => {
	// Create Framed
	let framedGlassTypes = [
		"$$_stained_framed_glass",
		"$$_stained_tiled_glass",
		"horizontal_$$_stained_framed_glass",
		"vertical_$$_stained_framed_glass",
	];

	let colors = [
		"white",
		"orange",
		"magenta",
		"light_blue",
		"yellow",
		"lime",
		"pink",
		"gray",
		"light_gray",
		"cyan",
		"purple",
		"blue",
		"brown",
		"green",
		"red",
		"black",
		"tinted",
	];

	framedGlassTypes.forEach((type) => {
		colors.forEach((color) => {
			let fluid = "cosmic_contraptions:" + color + "_dye_fluid";
			let output = "createframed:" + type.replace("$$", color);
			let createBaseGlass = "create:" + type.replace("$$_stained_", "");
			let formattedID =
				"cosmic_contraptions:framed/" + type.replace("$$_stained_", "").replace("_glass", "") + "/" + color;

			// Handle Tinted Glass
			if (color === "tinted") {
				fluid = "estrogen:molten_amethyst";
				output = output.replace("stained_", "");
			}

			// Glass Type from Mixing
			// Input: UNDIED Create Frame Glass + DYE Fluid
			event.recipes.create.mixing([output], [createBaseGlass, Fluid.of(fluid, 50)]).id(formattedID);
			// Pane Type from Mixing
			// Input: UNDIED Create Frame Glass + DYE Fluid
			event.recipes.create
				.mixing([output + "_pane"], [createBaseGlass + "_pane", Fluid.of(fluid, 25)])
				.id(formattedID + "/pane");

			createRecipes(event, output, color, formattedID);
		});

		// Handle Base Create Glass
		let output = "create:" + type.replace("$$_stained_", "");
		let formattedID = "cosmic_contraptions:framed/" + type.replace("$$_stained_", "");
		createRecipes(event, output, "colorless", formattedID);
	});

	// Nerf Vanilla Glass Panes Output
	event.remove({ id: "minecraft:glass_pane" });
	event
		.shaped("12x minecraft:glass_pane", ["GGG", "GGG"], { G: "#forge:glass/colorless" })
		.id("cosmic_contraptions:framed/glass_pane");

	// Base Create Trapdoors
	event
		.stonecutting(`2x create:framed_glass_trapdoor`, ["#forge:glass/colorless"])
		.id("cosmic_contraptions:framed/glass_trapdoor_stonecutting");
	event
		.shaped(`4x create:framed_glass_trapdoor`, ["GG ", "GG "], {
			G: "#forge:glass/colorless",
		})
		.id("cosmic_contraptions:framed/glass_trapdoor_crafting");
	// Base Create Door
	event
		.stonecutting(`create:framed_glass_door`, ["#forge:glass/colorless"])
		.id("cosmic_contraptions:framed/glass_door_stonecutting");
	event
		.shaped(`3x create:framed_glass_door`, ["GG", "GG", "GG"], {
			G: "#forge:glass/colorless",
		})
		.id("cosmic_contraptions:framed/glass_door_crafting");
});
