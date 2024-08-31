ServerEvents.recipes((event) => {
	// Cheaper Everything else
	const lampColors = ["yellow", "red", "green", "blue"];
	const decorativeMats = [
		{
			materialName: "gold",
			bars: "createdeco:gold_bars",
			hasNativeLadder: false,
			trapdoor: "supplementaries:gold_trapdoor",
		},
		{
			materialName: "netherite",
			bars: "createdeco:netherite_bars",
			hasNativeLadder: false,
			trapdoor: "supplementaries:netherite_trapdoor",
		},
		{
			materialName: "andesite",
			bars: "createdeco:andesite_bars",
			hasNativeLadder: true,
			trapdoor: "createdeco:andesite_trapdoor",
		},
		{
			materialName: "brass",
			bars: "createdeco:brass_bars",
			hasNativeLadder: true,
			trapdoor: "createdeco:brass_trapdoor",
		},
		{
			materialName: "cast_iron",
			bars: "createdeco:cast_iron_bars",
			hasNativeLadder: false,
			trapdoor: "createdeco:cast_iron_trapdoor",
		},
		{
			materialName: "iron",
			bars: "minecraft:iron_bars",
			hasNativeLadder: false,
			trapdoor: "minecraft:iron_trapdoor",
		},
		{
			materialName: "copper",
			bars: "createdeco:copper_bars",
			hasNativeLadder: true,
			trapdoor: "createdeco:copper_trapdoor",
		},
		{
			materialName: "zinc",
			bars: "createdeco:zinc_bars",
			hasNativeLadder: false,
			trapdoor: "createdeco:zinc_trapdoor",
		},
	];
	decorativeMats.forEach((decorativeMat) => {
		// Mesh Fence
		event.remove({
			output: "createdeco" + ":" + decorativeMat.materialName + "_mesh_fence",
		});
		event.stonecutting(
			Item.of("createdeco" + ":" + decorativeMat.materialName + "_mesh_fence", 12),
			"#forge:ingots/" + decorativeMat.materialName
		);
		// Catwalk
		event.remove({
			output: "createdeco" + ":" + decorativeMat.materialName + "_catwalk",
		});
		event.shaped(Item.of("createdeco" + ":" + decorativeMat.materialName + "_catwalk", 24), [" S ", "SBS", " S "], {
			S: "#forge:plates/" + decorativeMat.materialName,
			B: decorativeMat.bars,
		});
		// Catwalk Stairs
		event.remove({
			output: "createdeco" + ":" + decorativeMat.materialName + "_catwalk_stairs",
		});
		event.shaped(Item.of("createdeco" + ":" + decorativeMat.materialName + "_catwalk_stairs", 3), [" S ", "SB "], {
			S: "#forge:plates/" + decorativeMat.materialName,
			B: decorativeMat.bars,
		});
		// Sheet Metal
		event.remove({
			output: "createdeco" + ":" + decorativeMat.materialName + "_sheet_metal",
		});
		event.stonecutting(
			Item.of("createdeco" + ":" + decorativeMat.materialName + "_sheet_metal", 12),
			"#forge:plates/" + decorativeMat.materialName
		);
		// Ladder
		event.remove({
			output:
				(decorativeMat.hasNativeLadder ? "create" : "createdeco") +
				":" +
				decorativeMat.materialName +
				"_ladder",
		});
		event.shaped(
			Item.of(
				(decorativeMat.hasNativeLadder ? "create" : "createdeco") +
					":" +
					decorativeMat.materialName +
					"_ladder",
				16
			),
			[" N ", " L ", " N "],
			{
				N: "#forge:nuggets/" + decorativeMat.materialName,
				L: "#quark:ladders",
			}
		);
		// Trapdoor
		event.remove({
			output: decorativeMat.trapdoor,
		});
		event.stonecutting(Item.of(decorativeMat.trapdoor, 4), "#forge:ingots/" + decorativeMat.materialName);

		// Support
		event.remove({
			output: "createdeco" + ":" + decorativeMat.materialName + "_support",
		});
		event.shaped(Item.of("createdeco" + ":" + decorativeMat.materialName + "_support", 24), [" B ", "B B", " B "], {
			B: decorativeMat.bars,
		});
		// Train Hull
		event.remove({
			output: "createdeco" + ":" + decorativeMat.materialName + "_hull",
		});
		event.stonecutting(
			Item.of("createdeco" + ":" + decorativeMat.materialName + "_hull", 16),
			"#forge:plates/" + decorativeMat.materialName
		);
		// Lamp
		lampColors.forEach((lampColor) => {
			event.remove({
				output: "createdeco" + ":" + lampColor + "_" + decorativeMat.materialName + "_lamp",
			});
			// If the lamp color is yellow, make it the default recipe with NO dye
			if (lampColor == "yellow") {
				event.shaped(
					Item.of("createdeco" + ":" + lampColor + "_" + decorativeMat.materialName + "_lamp", 8),
					[" N ", " L ", " S "],
					{
						S: "#forge:plates/" + decorativeMat.materialName,
						L: "minecraft:torch",
						N: "#forge:nuggets/" + decorativeMat.materialName,
					}
				);
			}
			// If the lamp is not yellow
			// Create a mixing recipe using the yellow (base) lamp and dye liquid
			else {
				event.recipes.create.mixing(
					"createdeco" + ":" + lampColor + "_" + decorativeMat.materialName + "_lamp",
					[
						`createdeco:yellow_${decorativeMat.materialName}_lamp`,
						Fluid.of(`kubejs:${lampColor}_dye_fluid`, 125),
					]
				);
			}
		});
	});
});
