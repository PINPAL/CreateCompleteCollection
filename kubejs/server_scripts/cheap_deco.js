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
	// Polished dd materials
	const polishedMats = ["bronze", "zinc", "andesite_alloy", "steel"];
	polishedMats.forEach((polishedMat) => {
		event.remove({ output: `create_dd:${polishedMat}_polished_block` });
		event.shaped(`48x create_dd:${polishedMat}_polished_block`, ["xx", "xx"], {
			x: `4x #forge:storage_blocks/${polishedMat}`,
		});
	});

	// Trapdoor
	const misc_casings = ["andesite", "brass", "copper"];
	misc_casings.forEach((casing) => {
		event.remove({ output: `create_things_and_misc:${casing}_casing_trapdoor` });
		event.stonecutting(`4x create_things_and_misc:${casing}_casing_trapdoor`, `create:${casing}_casing`);
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
	// Cheap Steel Trapdoor
	event.remove({ output: "createindustry:steel_trapdoor" });
	event.stonecutting("4x createindustry:steel_trapdoor", "#forge:ingots/steel");
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
			event.shaped(
				Item.of("createdeco" + ":" + lampColor + "_" + decorativeMat.materialName + "_lamp", 8),
				[" N ", " L ", "DS "],
				{
					S: "#forge:plates/" + decorativeMat.materialName,
					L: "minecraft:lantern",
					N: "#forge:nuggets/" + decorativeMat.materialName,
					D: "minecraft:" + lampColor + "_dye",
				}
			);
		});
	});
});
