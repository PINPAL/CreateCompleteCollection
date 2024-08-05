ServerEvents.recipes((event) => {
	// Cheap Create Design n' Decor Lamps
	const designDecoLamps = ["copper", "zinc", "brass"];
	designDecoLamps.forEach((designDecoLamp) => {
		event.remove({ output: `design_decor:${designDecoLamp}_lamp` });
		event
			.shaped(`4x design_decor:${designDecoLamp}_lamp`, [" M ", "MGM", " M "], {
				M: "#forge:nuggets/" + designDecoLamp,
				G: "minecraft:glowstone_dust",
			})
			.id("create_cosmic_contraptions:deco/" + designDecoLamp + "_lamp");
	});
	// Cheap Cast Iron
	event.recipes.create
		.compacting("#forge:ingots/industrial_iron", "#forge:ingots/iron")
		.id("create_cosmic_contraptions:deco/industrial_iron_ingot");
	// Cheap Asphalt
	event.recipes.create
		.mixing("16x tfmg:asphalt_block", ["2x create:scoria", "minecraft:slime_ball"])
		.heated()
		.id("create_cosmic_contraptions:deco/asphalt_block");
	// Cheaper Everything else
	const lampColors = ["yellow", "red", "green", "blue"];
	const decorativeMats = [
		{
			outputMat: "andesite",
			bars: "createdeco:andesite_bars",
			ladder: "create:andesite_ladder",
			trapdoor: "createdeco:andesite_trapdoor",
			hasDecoSupport: true,
		},
		{
			outputMat: "brass",
			bars: "createdeco:brass_bars",
			ladder: "create:brass_ladder",
			trapdoor: "createdeco:brass_trapdoor",
			hasDecoSupport: true,
			door: "createdeco:brass_door",
		},
		{
			outputMat: "industrial_iron",
			bars: "createdeco:industrial_iron_bars",
			ladder: "createdeco:industrial_iron_ladder",
			trapdoor: "createdeco:industrial_iron_trapdoor",
			hasDecoSupport: true,
		},
		{
			outputMat: "iron",
			bars: "minecraft:iron_bars",
			ladder: "createdeco:iron_ladder",
			trapdoor: "minecraft:iron_trapdoor",
			hasDecoSupport: true,
			door: "minecraft:iron_door",
		},
		{
			outputMat: "copper",
			bars: "createdeco:copper_bars",
			ladder: "create:copper_ladder",
			trapdoor: "copperandtuffbackport:copper_trapdoor",
			hasDecoSupport: true,
			door: "copperandtuffbackport:copper_door",
		},
		{
			outputMat: "zinc",
			bars: "createdeco:zinc_bars",
			ladder: "createdeco:zinc_ladder",
			trapdoor: "createdeco:zinc_trapdoor",
			hasDecoSupport: true,
		},
		{
			outputMat: "netherite",
			trapdoor: "supplementaries:netherite_trapdoor",
			door: "supplementaries:netherite_door",
			outputMultiplier: 4,
		},
		{
			outputMat: "gold",
			trapdoor: "supplementaries:gold_trapdoor",
			door: "supplementaries:gold_door",
		},
		{
			outputMat: "steel",
			trapdoor: "ad_astra:steel_trapdoor",
			door: "tfmg:steel_door",
			outputMultiplier: 2,
		},
	];
	decorativeMats.forEach((decorativeMat) => {
		// Make expensive materials even cheaper
		let outputMultiplier = 1;
		if (decorativeMat.hasOwnProperty("outputMultiplier")) {
			outputMultiplier = decorativeMat.outputMultiplier;
		}

		if (decorativeMat.hasOwnProperty("hasDecoSupport")) {
			// Support
			event.remove({
				output: "createdeco:" + decorativeMat.outputMat + "_support",
			});
			event
				.shaped(
					Item.of("createdeco:" + decorativeMat.outputMat + "_support", 12 * outputMultiplier),
					[" B ", "B B", " B "],
					{
						B: decorativeMat.bars,
					}
				)
				.id("create_cosmic_contraptions:deco/crafting/" + decorativeMat.outputMat + "_support");

			// Hull
			event.remove({
				output: "createdeco:" + decorativeMat.outputMat + "_hull",
			});
			event
				.stonecutting(
					Item.of("createdeco:" + decorativeMat.outputMat + "_hull", 6 * outputMultiplier),
					`#forge:plates/${decorativeMat.outputMat}`
				)
				.id("create_cosmic_contraptions:deco/sonecutting/" + decorativeMat.outputMat + "_hull");

			// Lamp
			lampColors.forEach((lampColor) => {
				event.remove({
					output: "createdeco:" + lampColor + "_" + decorativeMat.outputMat + "_lamp",
				});
				event
					.shaped(
						Item.of(
							"createdeco:" + lampColor + "_" + decorativeMat.outputMat + "_lamp",
							3 * outputMultiplier
						),
						[" N ", " L ", "DS "],
						{
							S: `#forge:plates/${decorativeMat.outputMat}`,
							L: "minecraft:lantern",
							N: `#forge:nuggets/${decorativeMat.outputMat}`,
							D: "minecraft:" + lampColor + "_dye",
						}
					)
					.id(
						"create_cosmic_contraptions:deco/crafting/" +
							lampColor +
							"_" +
							decorativeMat.outputMat +
							"_lamp"
					);
			});
			// Catwalk
			event.remove({
				output: "createdeco:" + decorativeMat.outputMat + "_catwalk",
			});
			event
				.shaped(
					Item.of("createdeco:" + decorativeMat.outputMat + "_catwalk", 12 * outputMultiplier),
					[" S ", "SBS", " S "],
					{
						S: `#forge:plates/${decorativeMat.outputMat}`,
						B: decorativeMat.bars,
					}
				)
				.id("create_cosmic_contraptions:deco/crafting/" + decorativeMat.outputMat + "_catwalk");

			// Catwalk Stairs
			event.remove({
				output: "createdeco:" + decorativeMat.outputMat + "_catwalk_stairs",
			});
			event
				.shaped(
					Item.of("createdeco:" + decorativeMat.outputMat + "_catwalk_stairs", 6 * outputMultiplier),
					[" S ", "SB "],
					{
						S: `#forge:plates/${decorativeMat.outputMat}`,
						B: decorativeMat.bars,
					}
				)
				.id("create_cosmic_contraptions:deco/crafting/" + decorativeMat.outputMat + "_catwalk_stairs");

			// Catwalk Railing
			event.remove({
				output: "createdeco:" + decorativeMat.outputMat + "_catwalk_railing",
			});
			event
				.shaped(
					Item.of("createdeco:" + decorativeMat.outputMat + "_catwalk_railing", 12 * outputMultiplier),
					["SSS", "B B", "B B"],
					{
						S: `#forge:plates/${decorativeMat.outputMat}`,
						B: decorativeMat.bars,
					}
				)
				.id("create_cosmic_contraptions:deco/crafting/" + decorativeMat.outputMat + "_catwalk_railing");

			// Sheet Metal
			event.remove({
				output: "createdeco:" + decorativeMat.outputMat + "_sheet_metal",
			});
			event
				.stonecutting(
					Item.of("createdeco:" + decorativeMat.outputMat + "_sheet_metal", 6 * outputMultiplier),
					`#forge:plates/${decorativeMat.outputMat}`
				)
				.id("create_cosmic_contraptions:deco/sonecutting/" + decorativeMat.outputMat + "_sheet_metal");
		}
		// Ladder
		if (decorativeMat.hasOwnProperty("ladder")) {
			event.remove({
				output: decorativeMat.ladder,
			});
			event
				.stonecutting(
					Item.of(decorativeMat.ladder, 4 * outputMultiplier),
					`#forge:ingots/${decorativeMat.outputMat}`
				)
				.id("create_cosmic_contraptions:deco/stonecutting/" + decorativeMat.outputMat + "_ladder");
		}
		// Trapdoor
		if (decorativeMat.hasOwnProperty("trapdoor")) {
			event.remove({
				output: decorativeMat.trapdoor,
			});
			event
				.stonecutting(
					Item.of(decorativeMat.trapdoor, 4 * outputMultiplier),
					`#forge:ingots/${decorativeMat.outputMat}`
				)
				.id("create_cosmic_contraptions:deco/stonecutting/" + decorativeMat.outputMat + "_trapdoor");
		}
		// Door
		if (decorativeMat.hasOwnProperty("door")) {
			event.remove({
				output: decorativeMat.door,
			});
			event
				.stonecutting(
					Item.of(decorativeMat.door, 2 * outputMultiplier),
					`#forge:ingots/${decorativeMat.outputMat}`
				)
				.id("create_cosmic_contraptions:deco/stonecutting/" + decorativeMat.outputMat + "_door");
		}
	});
});
