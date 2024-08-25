ServerEvents.recipes((event) => {
	const automatedPacking = [
		{ mod: "minecraft", item: "coal", type: "gems" },
		{ mod: "minecraft", item: "gold", type: "ingots" },
		{ mod: "minecraft", item: "iron", type: "ingots" },
		{ mod: "minecraft", item: "copper", type: "ingots" },
		{ mod: "minecraft", item: "redstone", type: "gems" },
		{ mod: "minecraft", item: "diamond", type: "gems" },
		{ mod: "minecraft", item: "netherite", type: "ingots" },
		{ mod: "minecraft", item: "emerald", type: "gems" },
		{ mod: "minecraft", item: "lapis", type: "gems" },
		{ mod: "create_dd", item: "tin", type: "ingots" },
		{ mod: "create", item: "zinc", type: "ingots" },
		{ mod: "create", item: "brass", type: "ingots" },
		{ mod: "create_dd", item: "bronze", type: "ingots" },
		{ mod: "create_dd", item: "steel", type: "ingots" },
		{ mod: "create_dd", item: "mithril", type: "ingots" },
		{ mod: "createdeco", item: "cast_iron", type: "ingots" },
	].forEach((block) => {
		// Block from Ingots
		event.remove({
			type: "minecraft:crafting_shaped",
			output: `#forge:storage_blocks/${block.item}`,
			input: `#forge:${block.type}/${block.item}`,
		});
		// Ingots from Nuggets
		if (block.type == "ingots") {
			event.remove({
				type: "minecraft:crafting_shaped",
				output: `#forge:ingots/${block.item}`,
				input: `#forge:nuggets/${block.item}`,
			});
		}

		// Block from ingots
		event.recipes.create
			.compacting(`${block.mod}:${block.item}_block`, `9x #forge:${block.type}/${block.item}`)
			.id("kubejs:compacting/" + block.item + "_block_from_ingots");
		// Ingots from nuggets
		if (block.type == "ingots") {
			event.recipes.create
				.compacting(`#forge:ingots/${block.item}`, `9x #forge:nuggets/${block.item}`)
				.id("kubejs:compacting/" + block.item + "_ingot_from_nuggets");
		}
	});

	// Lapis Alloy
	event.recipes.create.mixing("create_dd:lapis_alloy", ["minecraft:lapis_lazuli", "#forge:nuggets/tin"]);

	// Raw Iron Washing
	event.recipes.create.splashing("9x minecraft:iron_nugget", "create:crushed_raw_iron");

	// Diamond Grit Sandpaper
	event.shapeless(Item.of("createaddition:diamond_grit_sandpaper").withNBT("{Unbreakable:1b}"), [
		"#create:sandpaper",
		"kubejs:molten_diamond_ingot",
	]);

	// Harder Minecart Assembler
	event.shaped("create:cart_assembler", ["   ", "TRT", "B B"], {
		T: "create:railway_casing",
		R: "create:controls",
		B: "create:brass_casing",
	});

	// Harder Rotation Speed Controller
	event.shaped("create:rotation_speed_controller", [" M ", " B ", "   "], {
		M: "create_dd:integrated_mechanism",
		B: "create:brass_casing",
	});

	// Cheap Hand Crank
	event.shaped(Item.of("create:hand_crank"), ["PPP", "  S", "   "], {
		P: "#minecraft:planks",
		S: "minecraft:stick",
	});

	// Infernal Mechanism
	event.recipes
		.createSequencedAssembly(["create_dd:infernal_mechanism"], "createdeco:netherite_sheet", [
			event.recipes.createDeploying("create_dd:incomplete_infernal_mechanism", [
				"create_dd:incomplete_infernal_mechanism",
				"create:cogwheel",
			]),
			event.recipes.createDeploying("create_dd:incomplete_infernal_mechanism", [
				"create_dd:incomplete_infernal_mechanism",
				"minecraft:magma_block",
			]),
			event.recipes.createDeploying("create_dd:incomplete_infernal_mechanism", [
				"create_dd:incomplete_infernal_mechanism",
				"#forge:nuggets/gold",
			]),
			event.recipes.create.filling("create_dd:incomplete_infernal_mechanism", [
				Fluid.of("minecraft:lava", 100),
				"create_dd:incomplete_infernal_mechanism",
			]),
		])
		.transitionalItem("create_dd:incomplete_infernal_mechanism")
		.loops(2);

	// Harder Hydraulic Press
	event.shaped(Item.of("create_dd:hydraulic_press"), [" S ", " H ", " B "], {
		S: "create_dd:sealed_mechanism",
		H: "create_dd:hydraulic_casing",
		B: "create_dd:bronze_casing",
	});

	// Fix Bronze Saw
	event.remove({ output: "create_dd:bronze_saw" });
	event.shaped("create_dd:bronze_saw", [" S ", "B6B", " C "], {
		B: "#forge:plates/bronze",
		S: "#forge:ingots/steel",
		6: "create:mechanical_saw",
		C: "create_dd:bronze_casing",
	});

	// Harder Spout
	event.shaped(Item.of("create:spout"), [" C ", " K ", " S "], {
		C: "create:copper_casing",
		K: "minecraft:dried_kelp",
		S: "create_dd:sealed_mechanism",
	});

	// Harder Fluid Tank
	event.shaped("create:fluid_tank", [" C ", " B ", " C "], {
		C: "#forge:plates/copper",
		B: "metalbarrels:gold_barrel",
	});

	// Harder Bronze Casing
	event.shapeless("create_dd:reinforcement_plating", [
		"#forge:storage_blocks/steel",
		"#forge:storage_blocks/bronze",
		"#forge:storage_blocks/bronze",
		"#forge:storage_blocks/steel",
	]);
	event.recipes.create.deploying("create_dd:bronze_casing", [
		"create_dd:reinforcement_plating",
		"create_dd:bronze_ingot",
	]);

	// Concrete
	event.stonecutting("2x createindustry:concrete_slab", "createindustry:concrete");
	event.stonecutting("createindustry:concrete_stairs", "createindustry:concrete");
	event.stonecutting("createindustry:concrete_wall", "createindustry:concrete");
	event.recipes.create.filling("createindustry:liquid_concrete_bucket", [
		Fluid.of("createindustry:liquid_concrete_fluid", 500),
		"minecraft:bucket",
	]);
	event.recipes.create.emptying(
		[Fluid.of("createindustry:liquid_concrete_fluid", 500), "minecraft:bucket"],
		"createindustry:liquid_concrete_bucket"
	);

	// Harder steam engine
	event.shaped(Item.of("create:steam_engine"), [" G ", "IMS", " C "], {
		G: "create:golden_sheet",
		I: "create_dd:infernal_mechanism",
		M: "create_dd:integrated_mechanism",
		S: "create_dd:sealed_mechanism",
		C: "minecraft:copper_block",
	});

	// Cheaper Brass Hand
	event.replaceInput({ output: "create:brass_hand" }, "#forge:plates/brass", "#minecraft:planks");
	event.remove({ id: "create_dd:crafting/brass_hand" });

	// Harder Deployer
	event.shaped(Item.of("create:deployer"), [" E ", " A ", " B "], {
		E: "create:electron_tube",
		A: "create:andesite_casing",
		B: "create:brass_hand",
	});

	// Explorer Lootbox
	event.shaped("kubejs:lootbox_explorer", ["EEE", "ELE", "EEE"], {
		E: "#minecraft:planks",
		L: "naturescompass:naturescompass",
	});

	// Cheaper Enchants
	event.replaceInput(
		{ output: "create_enchantment_industry:enchanting_guide" },
		"create:sturdy_sheet",
		"create_dd:andesite_sheet"
	);

	// Sandpaper
	event.shaped("2x kubejs:sugar_paper", ["SSS", "   ", "   "], {
		S: "minecraft:sugar_cane",
	});
	event.remove({ output: "create:sand_paper" });
	event.remove({ output: "create:red_sand_paper" });
	event.shapeless("create:sand_paper", ["minecraft:sand", "#kubejs:low_quality_paper"]);
	event.shapeless("create:red_sand_paper", ["minecraft:red_sand", "#kubejs:low_quality_paper"]);

	// Harder Train Controls
	event.shaped("create:controls", [" L ", " T ", "P I"], {
		L: "minecraft:lever",
		T: "create:railway_casing",
		P: "create:precision_mechanism",
		I: "create_dd:integrated_mechanism",
	});

	// Harder Drill
	event.shaped(Item.of("create:mechanical_drill"), [" A ", "ASA", " C "], {
		A: "create:andesite_alloy",
		S: "#forge:plates/steel",
		C: "create:andesite_casing",
	});

	// Shadow Steel
	event.recipes.create
		.mixing([Item.of("create_dd:shadow_steel")], ["minecraft:netherite_block", "8x #forge:plates/steel"])
		.superheated();

	// Fix brass speaker craft
	event.shaped(Item.of("create_things_and_misc:brass_speaker"), [" R ", " N ", " R "], {
		R: "create:railway_casing",
		N: "minecraft:note_block",
	});

	// Radar
	event.shaped("create_things_and_misc:radar", ["ASA", "AMA", "AAA"], {
		A: "create:andesite_alloy",
		S: "create:display_board",
		M: "create_dd:integrated_mechanism",
	});

	// Mithril Ingot
	event.recipes.create
		.mixing(
			["create_dd:mithril_ingot"],
			[
				"4x create:experience_nugget",
				"#forge:ingots/steel",
				"#forge:ingots/bronze",
				"create_dd:chromatic_compound",
				Fluid.of("createindustry:liquid_plastic", 1000),
			]
		)
		.superheated();

	// Asphalt
	event.recipes.create
		.mixing(["16x create_dd:asphalt_block"], ["2x create:scoria", Fluid.of("create_things_and_misc:slime", 100)])
		.heated();

	// Electron Tube
	event.shaped("8x create:electron_tube", [" R ", " N ", " P "], {
		R: "create:polished_rose_quartz",
		N: "#forge:nuggets/copper",
		P: "createindustry:plastic_sheet",
	});

	// Fix Dough
	event.replaceInput({ input: "create:dough" }, "create:dough", "#forge:dough");
	event.replaceInput({ input: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "#forge:dough");

	// Nerf Tuff Crusing
	event.recipes.create.crushing(["create_dd:potassic_cobble"], "#create:stone_types/tuff");

	// Remove Electrum
	event.replaceOutput(
		{ output: "createaddition:electrum_nugget" },
		"#forge:nuggets/electrum",
		Item.of("minecraft:air")
	);

	// Fix Coal Coke
	event.recipes.create.mixing("createindustry:coal_coke", "#minecraft:coals").heated();

	// Harder Steel
	event.recipes.create
		.compacting("create_dd:steel_ingot", ["2x #forge:ingots/cast_iron", "createindustry:coal_coke"])
		.heated()
		.id("kubejs:steel_ingot");

	// Harder Sails
	const sailWoods = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"crimson",
		"warped",
		"mangrove",
		"bamboo",
	];
	sailWoods.forEach((wood) => {
		event.remove({ output: `create_things_and_misc:${wood}_sail` });
		event.shapeless(`create_things_and_misc:${wood}_sail`, [
			"#kubejs:windmill_sails",
			wood == "bamboo" ? `quark:bamboo_planks` : `minecraft:${wood}_planks`,
		]);
	});
});
