ServerEvents.recipes((event) => {
	// Cheap Create Design n' Decor Lamps
	const designDecoLamps = ["copper", "zinc", "brass"];
	designDecoLamps.forEach((designDecoLamp) => {
		event.remove({ output: `design_decor:${designDecoLamp}_lamp` });
		event.shaped(`4x design_decor:${designDecoLamp}_lamp`, [" M ", "MGM", " M "], {
			M: "#forge:nuggets/" + designDecoLamp,
			G: "minecraft:glowstone_dust",
		});
	});
	// Cheap Steel Casing
	event.recipes.create
		.deploying("kubejs:steel_casing", ["#forge:stripped_logs", "#forge:nuggets/steel"])
		.keepHeldItem();
	event.recipes.create
		.deploying("kubejs:steel_casing", ["#forge:stripped_wood", "#forge:nuggets/steel"])
		.keepHeldItem();
	event.recipes
		.createItemApplication("kubejs:steel_casing", ["#forge:stripped_logs", "#forge:nuggets/steel"])
		.keepHeldItem();
	event.recipes
		.createItemApplication("kubejs:steel_casing", ["#forge:stripped_wood", "#forge:nuggets/steel"])
		.keepHeldItem();
	// Cheap Netherite Building Blocks
	event.stonecutting("16x createdeco:netherite_bars", "#forge:ingots/netherite");
	event.shaped("64x createdeco:netherite_bars", ["SSS", "SSS"], {
		S: "#forge:ingots/netherite",
	});
	// Cheap Cast Iron
	event.recipes.create.compacting("createdeco:cast_iron_ingot", "minecraft:iron_ingot");
	event.recipes.create.compacting("createdeco:cast_iron_block", "minecraft:iron_block");
	// Cheap Asphalt
	event.replaceOutput({ input: "create_dd:asphalt_block" }, "create_dd:asphalt_block", "16x create_dd:asphalt_block");
	event.recipes.create.mixing("16x create_dd:asphalt_block", ["2x create:scoria", "minecraft:slime_ball"]).heated();
	// Cheaper Everything else
	const lampColors = ["yellow", "red", "green", "blue"];
	const decorativeMats = [
		{
			outputMod: "createdeco",
			outputMat: "gold",
			bars: "createdeco:gold_bars",
			sheets: "create:golden_sheet",
			nuggets: "minecraft:gold_nugget",
			hasNativeLadder: false,
		},
		{
			outputMod: "createdeco",
			outputMat: "netherite",
			bars: "createdeco:netherite_bars",
			sheets: "createdeco:netherite_sheet",
			nuggets: "createdeco:netherite_nugget",
			hasNativeLadder: false,
		},
		{
			outputMod: "createdeco",
			outputMat: "andesite",
			bars: "createdeco:andesite_bars",
			sheets: "create_dd:andesite_sheet",
			nuggets: "create:andesite_alloy",
			hasNativeLadder: true,
		},
		{
			outputMod: "createdeco",
			outputMat: "brass",
			bars: "createdeco:brass_bars",
			sheets: "create:brass_sheet",
			nuggets: "create:brass_nugget",
			hasNativeLadder: true,
		},
		{
			outputMod: "createdeco",
			outputMat: "cast_iron",
			bars: "createdeco:cast_iron_bars",
			sheets: "createdeco:cast_iron_sheet",
			nuggets: "createdeco:cast_iron_nugget",
			hasNativeLadder: false,
		},
		{
			outputMod: "createdeco",
			outputMat: "iron",
			bars: "minecraft:iron_bars",
			sheets: "create:iron_sheet",
			nuggets: "minecraft:iron_nugget",
			hasNativeLadder: false,
		},
		{
			outputMod: "createdeco",
			outputMat: "copper",
			bars: "createdeco:copper_bars",
			sheets: "create:copper_sheet",
			nuggets: "create:copper_nugget",
			hasNativeLadder: true,
		},
		{
			outputMod: "createdeco",
			outputMat: "zinc",
			bars: "createdeco:zinc_bars",
			sheets: "createdeco:zinc_sheet",
			nuggets: "create:zinc_nugget",
			hasNativeLadder: false,
		},
	].forEach((decorativeMat) => {
		// Catwalk
		event.remove({
			output: decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_catwalk",
		});
		event.shaped(
			Item.of(decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_catwalk", 24),
			[" S ", "SBS", " S "],
			{
				S: decorativeMat.sheets,
				B: decorativeMat.bars,
			}
		);
		// Catwalk Stairs
		event.remove({
			output: decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_catwalk_stairs",
		});
		event.shaped(
			Item.of(decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_catwalk_stairs", 3),
			[" S ", "SB "],
			{
				S: decorativeMat.sheets,
				B: decorativeMat.bars,
			}
		);
		// Sheet Metal
		event.remove({
			output: decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_sheet_metal",
		});
		event.stonecutting(
			Item.of(decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_sheet_metal", 12),
			decorativeMat.sheets
		);
		// Ladder
		event.remove({
			output:
				(decorativeMat.hasNativeLadder ? "create" : decorativeMat.outputMod) +
				":" +
				decorativeMat.outputMat +
				"_ladder",
		});

		event.shaped(
			Item.of(
				(decorativeMat.hasNativeLadder ? "create" : decorativeMat.outputMod) +
					":" +
					decorativeMat.outputMat +
					"_ladder",
				16
			),
			[" N ", " L ", " N "],
			{
				N: decorativeMat.nuggets,
				L: "#quark:ladders",
			}
		);
		// if mod is createdeco
		if (decorativeMat.outputMod == "createdeco") {
			// Support
			event.remove({
				output: decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_support",
			});
			event.shaped(
				Item.of(decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_support", 24),
				[" B ", "B B", " B "],
				{
					B: decorativeMat.bars,
				}
			);
			// Train Hull
			event.remove({
				output: decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_hull",
			});
			event.stonecutting(
				Item.of(decorativeMat.outputMod + ":" + decorativeMat.outputMat + "_hull", 16),
				decorativeMat.sheets
			);
			// Lamp
			lampColors.forEach((lampColor) => {
				event.remove({
					output: decorativeMat.outputMod + ":" + lampColor + "_" + decorativeMat.outputMat + "_lamp",
				});
				event.shaped(
					Item.of(decorativeMat.outputMod + ":" + lampColor + "_" + decorativeMat.outputMat + "_lamp", 8),
					[" N ", " L ", "DS "],
					{
						S: decorativeMat.sheets,
						L: "minecraft:lantern",
						N: decorativeMat.nuggets,
						D: "minecraft:" + lampColor + "_dye",
					}
				);
			});
		}
	});
});
