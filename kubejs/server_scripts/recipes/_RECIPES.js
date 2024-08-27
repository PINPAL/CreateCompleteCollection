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
	];
	automatedPacking.forEach((block) => {
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

	// Undo Coal Coke Block to Coal Coke
	event
		.shapeless("9x createindustry:coal_coke", ["createindustry:coal_coke_block"])
		.id("kubejs:coal_coke_block_whoopsie");

	// Walnut Recycle
	event.shapeless("ecologics:walnut_sapling", ["ecologics:walnut"]);

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

	// Explorer Compass
	event.shapeless("explorerscompass:explorerscompass", ["naturescompass:naturescompass"]);
	// Nature Compass
	event.shapeless("naturescompass:naturescompass", ["explorerscompass:explorerscompass"]);

	// Cheaper Enchants
	event.replaceInput(
		{ output: "create_enchantment_industry:enchanting_guide" },
		"create:sturdy_sheet",
		"create_dd:andesite_sheet"
	);

	// Lattice
	event.shaped(Item.of("decorative_blocks:lattice"), ["SS ", "SS ", "   "], {
		S: "minecraft:stick",
	});

	// Extendo Grip
	event.recipes.createMechanicalCrafting(
		Item.of(
			"create:extendo_grip",
			'{Unbreakable:1b,CurioAttributeModifiers:[{AttributeName:"generic.attack_knockback",Name:"generic.attack_knockback",Amount:3,Operation:0,UUID:[I;1203229738,-1965539080,-1341673873,592198839],Slot:"hands"},{AttributeName:"forge:attack_range",Name:"forge:attack_range",Amount:3,Operation:0,UUID:[I;-1826537097,-1713487428,-1545263740,-720620157],Slot:"hands"},{AttributeName:"forge:reach_distance",Name:"forge:reach_distance",Amount:3,Operation:0,UUID:[I;775495772,434720553,-1780503515,1389346287],Slot:"hands"}]}'
		),
		[" I ", " P ", "SSS", "SSS", " H "],
		{
			I: "#forge:ingots/brass",
			P: "create:precision_mechanism",
			S: "minecraft:stick",
			H: "create:brass_hand",
		}
	);

	// Fix Dryer Recipe;
	event.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
		S: "#minecraft:wooden_slabs",
	});

	// Wood Pulping
	event.recipes.create
		.mixing(
			[Fluid.of("create_paper_line:wood_pulp", 200)],
			[Fluid.of("minecraft:water", 250), "createindustry:sawdust", "farmersdelight:tree_bark"]
		)
		.id("kubejs:wood_pulp");

	// Replacing create_paper_line:wood_chips with farmsdelight:tree_bark
	event.replaceInput(
		{ input: "create_paper_line:wood_chips" },
		"create_paper_line:wood_chips",
		"farmersdelight:tree_bark"
	);
	event.replaceOutput(
		{ output: "create_paper_line:wood_chips" },
		"create_paper_line:wood_chips",
		"farmersdelight:tree_bark"
	);

	// Replace white dye with white dye liquid
	event.recipes.create
		.mixing(
			[Fluid.of("create_paper_line:whitened_wood_pulp", 250)],
			[Fluid.of("create_paper_line:wood_pulp", 100), Fluid.of("kubejs:white_dye_fluid", 250)]
		)
		.id("kubejs:whitened_wood_pulp");

	// Replace frame with canvas
	event.replaceInput({ input: "create_paper_line:frame" }, "create_paper_line:frame", "farmersdelight:canvas");

	// Bucket Recipes
	event.recipes.create.filling("create_paper_line:wood_pulp_bucket", [
		Fluid.of("create_paper_line:wood_pulp", 1000),
		"minecraft:bucket",
	]);
	event.recipes.create.filling("create_paper_line:whitened_wood_pulp_bucket", [
		Fluid.of("create_paper_line:whitened_wood_pulp", 1000),
		"minecraft:bucket",
	]);

	// Merging Saw Dust
	event.replaceInput({ input: "create_paper_line:saw_dust" }, "create_paper_line:saw_dust", "createindustry:sawdust");
	event.replaceOutput(
		{ output: "create_paper_line:saw_dust" },
		"create_paper_line:saw_dust",
		"createindustry:sawdust"
	);

	// Infinite Water Bucket
	event.shaped(
		Item.of(
			"minecraft:water_bucket",
			'{CustomModelData:1,HideFlags:1,display:{Name:\'{"text":"Infinite Water Bucket","italic":false}\'}}'
		).enchant("minecraft:infinity", 1),
		["NNN", "NWN", "NNN"],
		{
			N: "create_dd:mithril_nugget",
			W: "minecraft:water_bucket",
		}
	);

	// Cheap Create Design n' Decor Lamps
	const designDecoLamps = ["copper", "zinc", "brass"];
	designDecoLamps.forEach((designDecoLamp) => {
		event.remove({ output: `design_decor:${designDecoLamp}_lamp` });
		event.shaped(`4x design_decor:${designDecoLamp}_lamp`, [" M ", "MGM", " M "], {
			M: "#forge:nuggets/" + designDecoLamp,
			G: "minecraft:glowstone_dust",
		});
	});
	// Polished Block(s)
	const polishedMats = ["bronze", "zinc", "andesite_alloy", "steel"];
	polishedMats.forEach((polishedMat) => {
		event.remove({ output: `create_dd:${polishedMat}_polished_block` });
		event.shaped(`48x create_dd:${polishedMat}_polished_block`, ["xx", "xx"], {
			x: `4x #forge:storage_blocks/${polishedMat}`,
		});
	});
	// Cheap Casing Trapdoor
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

	// Disechanter
	event.recipes.createMechanicalCrafting(
		"disenchanting:disenchanter",
		["  D  ", " EAE ", "GDBDG", "OPPPO", " OOO "],
		{
			D: "minecraft:diamond",
			E: "create_enchantment_industry:enchanting_guide",
			A: "minecraft:experience_bottle",
			G: "minecraft:gold_block",
			B: "minecraft:book",
			O: "minecraft:obsidian",
			P: "create:powdered_obsidian",
		}
	);

	// Random Enchantment Lootbox
	event.recipes
		.createSequencedAssembly(
			["kubejs:lootbox_enchantments_generic"],
			// input
			"minecraft:book",
			// sequence
			[
				event.recipes.create.filling("minecraft:book", [
					Fluid.of("create_enchantment_industry:experience", 100),
					"minecraft:book",
				]),
				event.recipes.createDeploying("minecraft:book", ["minecraft:book", "minecraft:lapis_lazuli"]),
			]
		)
		.transitionalItem("minecraft:book")
		.loops(1)
		.id("kubejs:lootbox_enchantments");

	// Hyper Experience
	event.remove({ output: Fluid.of("create_enchantment_industry:hyper_experience") });
	event.recipes.create
		.mixing(
			[
				Fluid.of("create_enchantment_industry:hyper_experience", 100),
				"create_enchantment_industry:experience_rotor",
			],
			[
				Fluid.of("create_enchantment_industry:experience", 1000),
				"minecraft:lapis_lazuli",
				"minecraft:glow_ink_sac",
				"create_enchantment_industry:experience_rotor",
			]
		)
		.id("kubejs:hyper_experience");

	// Experience Rotor
	event.remove({ output: "create_enchantment_industry:experience_rotor" });
	event.recipes.create.mechanical_crafting(
		"create_enchantment_industry:experience_rotor",
		[" ZZ  ", "  A Z", "ZAQAZ", "Z A  ", "  ZZ "],
		{
			A: "create:experience_block",
			Q: "create_things_and_misc:vibration_mechanism",
			Z: "#forge:ingots/zinc",
		}
	);

	// Paxel Hoeing
	event.recipes.createItemApplication("minecraft:farmland", ["minecraft:dirt_path", "#kubejs:paxel"]);

	// Renewable Create Stone Type
	// Diorite
	event.recipes.create
		.mixing("minecraft:diorite", ["minecraft:cobblestone", "minecraft:quartz"])
		.id("kubejs:diorite");
	// Calcite
	event.recipes.create.mixing("minecraft:calcite", ["minecraft:diorite", "minecraft:quartz"]).id("kubejs:calcite");
	// Limestone
	event.recipes.create.mixing("create:limestone", ["minecraft:calcite", "minecraft:gravel"]).id("kubejs:limestone");
	event.recipes.create
		.compacting("minecraft:tuff", [
			Fluid.of("minecraft:lava", 1000),
			"create:scoria",
			"minecraft:cobbled_deepslate",
		])
		.id("kubejs:tuff");
	// Prismarine Bricks
	event.recipes.create
		.compacting("minecraft:prismarine_bricks", ["2x minecraft:prismarine"])
		.id("kubejs:prismarine_bricks");
	// Deepslate
	event.recipes.create
		.compacting("minecraft:deepslate", ["4x minecraft:cobblestone", Fluid.of("minecraft:lava", 2000)])
		.heated()
		.id("kubejs:deepslate");
	// Veridium
	event.recipes.create
		.compacting("create:veridium", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "create:limestone"])
		.id("kubejs:veridium");
	// Ochrum
	event.recipes.create
		.compacting("create:ochrum", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:granite"])
		.id("kubejs:ochrum");
	// Crimsite
	event.recipes.create
		.compacting("create:crimsite", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:diorite"])
		.id("kubejs:crimsite");
	// Asurine
	event.recipes.create
		.compacting("create:asurine", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:andesite"])
		.id("kubejs:asurine");

	// Personal Shrinking Device
	event.recipes.createMechanicalCrafting("shrink:shrinking_device", [" DQD ", "TSSST", "SBSRS", "TSSST"], {
		D: "create:display_board",
		Q: "create_things_and_misc:vibration_mechanism",
		T: "create:railway_casing",
		B: "infinitybuttons:blue_emergency_button",
		R: "infinitybuttons:red_emergency_button",
		S: "create_dd:steel_sheet",
	});

	// Cooking Pot
	event.shaped("farmersdelight:cooking_pot", ["B B", "IWI", "III"], {
		B: "minecraft:brick",
		W: "minecraft:water_bucket",
		I: "#forge:ingots/iron",
	});

	// Melter
	event.recipes.create.mechanical_crafting("melter:melter", ["N  N", "N  N", "N  N", "pNNp"], {
		N: "#forge:ingots/netherite",
		p: "createindustry:plastic_sheet",
	});

	// Andesite Nugget
	event.shapeless("9x kubejs:andesite_nugget", ["create:andesite_alloy"]);
	event.recipes.create.compacting("create:andesite_alloy", "9x kubejs:andesite_nugget");

	// Metal Barrels
	event.recipes.create.deploying("metalbarrels:iron_barrel", ["minecraft:barrel", "#forge:plates/andesite_alloy"]);
	event.recipes.create.deploying("metalbarrels:wood_to_iron", ["minecraft:stick", "#forge:plates/andesite_alloy"]);

	event.recipes.create.deploying("metalbarrels:gold_barrel", ["metalbarrels:iron_barrel", "#forge:plates/copper"]);
	event.recipes.create.deploying("metalbarrels:iron_to_gold", ["minecraft:stick", "#forge:plates/copper"]);

	event.recipes.create.deploying("metalbarrels:diamond_barrel", ["metalbarrels:gold_barrel", "#forge:plates/brass"]);
	event.recipes.create.deploying("metalbarrels:gold_to_diamond", ["minecraft:stick", "#forge:plates/brass"]);

	// Lodestone
	event.shaped("8x minecraft:lodestone", ["III", "IDI", "III"], {
		I: "minecraft:chiseled_stone_bricks",
		D: "#forge:ingots/brass",
	});

	// White Wool
	event.recipes.create.compacting("minecraft:white_wool", "4x #forge:string");

	// Cobweb
	event.recipes.create.compacting("minecraft:cobweb", "9x #forge:string");

	// Hanging Roots
	event.recipes.create.haunting("minecraft:hanging_roots", "minecraft:mangrove_propagule");

	// Cheaper Jukebox
	event.replaceInput({ id: "minecraft:jukebox" }, "minecraft:diamond", "#forge:ingots/cast_iron");

	// Rooted Dirt
	event.recipes.create.deploying("minecraft:rooted_dirt", ["minecraft:dirt", "minecraft:hanging_roots"]);

	// Name Tag
	event.recipes
		.createSequencedAssembly(["minecraft:name_tag"], "minecraft:string", [
			event.recipes.createDeploying("kubejs:incomplete_name_tag", [
				"kubejs:incomplete_saddle",
				"createdeco:iron_coin",
			]),
		])
		.transitionalItem("kubejs:incomplete_name_tag")
		.loops(5)
		.id("kubejs:name_tag");

	// Saddle
	event.recipes
		.createSequencedAssembly(["minecraft:saddle"], "#forge:nuggets/iron", [
			event.recipes.createDeploying("kubejs:incomplete_saddle", [
				"kubejs:incomplete_saddle",
				"minecraft:leather",
			]),
			event.recipes.createDeploying("kubejs:incomplete_saddle", ["kubejs:incomplete_saddle", "minecraft:string"]),
		])
		.transitionalItem("kubejs:incomplete_saddle")
		.loops(5)
		.id("kubejs:saddle");

	// Totem of Undying
	event.recipes
		.createSequencedAssembly(["minecraft:totem_of_undying"], "createdeco:gold_coin", [
			event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
				"kubejs:incomplete_totem_of_undying",
				"minecraft:golden_apple",
			]),
			event.recipes.create.filling("kubejs:incomplete_totem_of_undying", [
				Fluid.of("kubejs:molten_gold", 40),
				"kubejs:incomplete_totem_of_undying",
			]),
			event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
				"kubejs:incomplete_totem_of_undying",
				"minecraft:emerald",
			]),
			event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
				"kubejs:incomplete_totem_of_undying",
				"create:experience_nugget",
			]),
		])
		.transitionalItem("kubejs:incomplete_totem_of_undying")
		.loops(1)
		.id("kubejs:totem_of_undying");

	// Sandpaper
	event.shaped("2x kubejs:sugar_paper", ["SSS", "   ", "   "], {
		S: "minecraft:sugar_cane",
	});
	event.remove({ output: "create:sand_paper" });
	event.remove({ output: "create:red_sand_paper" });
	event.shapeless("create:sand_paper", ["minecraft:sand", "#kubejs:low_quality_paper"]);
	event.shapeless("create:red_sand_paper", ["minecraft:red_sand", "#kubejs:low_quality_paper"]);
	event.replaceInput({ output: "minecraft:cartography_table" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "create:clipboard" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "supplementaries:notice_board" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "minecraft:map" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "minecraft:filled_map" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "supplementaries:crimson_lantern" }, "minecraft:paper", "#kubejs:low_quality_paper");

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

	// Easier Framed Glass
	event.replaceInput({ input: "create:framed_glass" }, "create:framed_glass", "#forge:glass/colorless");

	// Fix Dough
	event.replaceInput({ input: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "create:dough");

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

	// Vertical Redstone (Cog Block)
	event.shaped(
		Item.of("supplementaries:cog_block", 8), // arg 1: output
		[" C ", "BRB", " C "],
		{
			B: "createdeco:brass_bars",
			C: "create:brass_casing",
			R: "minecraft:redstone",
		}
	);

	// Bones into Ash
	event.smelting("3x supplementaries:ash", "minecraft:bone");
	event.smelting("supplementaries:ash", "minecraft:rotten_flesh");

	// Palette
	event.shaped(Item.of("wands:palette"), ["III", "IVI", "III"], {
		I: "minecraft:item_frame",
		V: "create:item_vault",
	});

	// Wand
	event.recipes.createMechanicalCrafting(
		Item.of("wands:netherite_wand", "{Unbreakable: 1b}"),
		["   C ", "FFFFF", " NVPS", "   S "],
		{
			C: "minecraft:spyglass",
			F: "create:smart_fluid_pipe",
			N: "minecraft:netherite_ingot",
			V: "create_things_and_misc:vibration_mechanism",
			P: "create:potato_cannon",
			S: "minecraft:stick",
		}
	);

	// Trader Block
	event.shaped(Item.of("easy_villagers:trader"), ["AAA", "A A", "CPC"], {
		A: "createdeco:andesite_bars",
		C: "create:andesite_casing",
		P: "#minecraft:planks",
	});

	// Breeder
	event.shaped(Item.of("easy_villagers:breeder"), ["AAA", "ABA", "CPC"], {
		A: "createdeco:andesite_bars",
		C: "create:andesite_casing",
		P: "#minecraft:planks",
		B: "#minecraft:beds",
	});

	// Auto Trader
	event.shaped(Item.of("easy_villagers:auto_trader"), ["AAA", "A A", "CNC"], {
		A: "createdeco:brass_bars",
		C: "create:brass_casing",
		N: "minecraft:netherite_block",
	});

	// Converter
	event.shaped(Item.of("easy_villagers:converter"), ["AAA", "ABA", "CNC"], {
		A: "createdeco:brass_bars",
		B: "minecraft:rotten_flesh",
		C: "create:brass_casing",
		N: "#minecraft:planks",
	});

	// Incubator
	event.shaped(Item.of("easy_villagers:incubator"), ["AAA", "ABA", "CNC"], {
		A: "createdeco:andesite_bars",
		B: "#minecraft:wool",
		C: "create:andesite_casing",
		N: "#minecraft:planks",
	});

	// Demagnetization Coil
	event.shaped(Item.of("simplemagnets:advanced_demagnetization_coil"), [" E ", " S ", " B "], {
		E: "create:electron_tube",
		S: "create:shaft",
		B: "create:brass_casing",
	});

	// Magnet
	event.recipes.createMechanicalCrafting("simplemagnets:advancedmagnet", ["I I", "E E", "R R", "RQR"], {
		I: "create:iron_sheet",
		E: "create:electron_tube",
		R: "create:polished_rose_quartz",
		Q: "create_things_and_misc:rose_quartz_sheet",
	});

	// Elite Coil
	event.shaped(Item.of("ironjetpacks:elite_coil"), [" DR", "DPD", "RD "], {
		D: "minecraft:diamond",
		R: "minecraft:redstone",
		P: "create:precision_mechanism",
	});

	// Jetpack
	event.recipes.create.mechanical_crafting(
		Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:brass",Throttle:1.0d}'),
		[" BSB ", "BECEB", "BMDMB", "BVTVB", " V V "],
		{
			B: "create:brass_sheet",
			S: "create:shaft",
			E: "ironjetpacks:elite_coil",
			C: "create:copper_backtank",
			M: "createaddition:electric_motor",
			T: "createaddition:tesla_coil",
			V: "create:chute",
			D: "minecraft:dragon_head",
		}
	);

	// Sifter
	event.shaped(Item.of("createsifter:sifter"), [" F ", " P ", " S "], {
		F: "minecraft:flint",
		P: "#minecraft:planks",
		S: "#forge:stone",
	});

	// Meshes
	const sifterMeshes = [
		{ name: "string", id: "#forge:string" },
		{ name: "andesite", id: "createdeco:andesite_mesh_fence" },
		{ name: "brass", id: "createdeco:brass_mesh_fence" },
	];
	sifterMeshes.forEach((mesh) => {
		event.shaped(Item.of(`createsifter:${mesh.name}_mesh`), ["SSS", "SMS", "SSS"], {
			M: mesh.id,
			S: "minecraft:stick",
		});
	});

	// Refined Stone
	event.recipes
		.createsifterSifting("kubejs:refined_stone", ["#forge:cobblestone", "createsifter:string_mesh"])
		.id("kubejs:sifting/refined_stone");

	// Netherite
	event.recipes
		.createsifterSifting(
			[
				Item.of("minecraft:netherite_scrap").withChance(0.0025),
				Item.of("minecraft:gold_nugget").withChance(0.05),
				Item.of("minecraft:quartz").withChance(0.05),
			],
			["minecraft:netherrack", "createsifter:brass_mesh"]
		)
		.minimumSpeed(256)
		.processingTime(400)
		.id("kubejs:sifting/netherrack");

	// Chunkloader
	event.shaped(Item.of("chunkloaders:ultimate_chunk_loader"), [" N ", "NVN", " N "], {
		N: "createdeco:netherite_sheet",
		V: "create_things_and_misc:vibration_mechanism",
	});

	// Contraption Chunkloader
	event.shaped(Item.of("createchunkloading:chunk_loader"), ["GBG", "BCB", "GBG"], {
		G: "#forge:glass",
		B: "create:brass_sheet",
		C: "chunkloaders:ultimate_chunk_loader",
	});

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
