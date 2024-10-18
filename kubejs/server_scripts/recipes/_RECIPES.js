ServerEvents.recipes((event) => {
	// Explorer Compass
	event
		.shapeless("explorerscompass:explorerscompass", ["naturescompass:naturescompass"])
		.id("cosmic_contraptions:explorers_compass");
	// Nature Compass
	event
		.shapeless("naturescompass:naturescompass", ["explorerscompass:explorerscompass"])
		.id("cosmic_contraptions:natures_compass");

	// Sifter
	event
		.shaped(Item.of("createsifter:sifter"), [" F ", " P ", " S "], {
			F: "minecraft:flint",
			P: "#minecraft:planks",
			S: "#forge:stone",
		})
		.id("cosmic_contraptions:sifter");

	// Meshes
	const sifterMeshes = [
		{ name: "string", id: "#forge:string" },
		{ name: "andesite", id: "createdeco:andesite_mesh_fence" },
		{ name: "brass", id: "createdeco:brass_mesh_fence" },
	];
	sifterMeshes.forEach((mesh) => {
		event
			.shaped(Item.of(`createsifter:${mesh.name}_mesh`), ["SSS", "SMS", "SSS"], {
				M: mesh.id,
				S: "minecraft:stick",
			})
			.id(`cosmic_contraptions:sifter_meshes/${mesh.name}`);
	});

	// Refined Stone from Sifting
	event.recipes
		.createsifterSifting("cosmic_contraptions:refined_stone", ["#forge:cobblestone", "createsifter:string_mesh"])
		.id("cosmic_contraptions:sifting/refined_stone");

	// Netherite from Sifting
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
		.id("cosmic_contraptions:sifting/netherrack");

	// Building Wand Palette
	event
		.shaped(Item.of("wands:palette"), ["III", "IVI", "III"], {
			I: "minecraft:item_frame",
			V: "create:item_vault",
		})
		.id("cosmic_contraptions:building_wand_palette");

	// Building Wand
	event.recipes
		.createMechanicalCrafting(
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
		)
		.id("cosmic_contraptions:building_wand");

	event.recipes
		.createMechanicalCrafting(
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
		)
		.id("cosmic_contraptions:extendo_grip_with_nbt");

	// Chunkloader
	event
		.shaped(Item.of("create_power_loader:andesite_chunk_loader"), [" N ", "NVN", " N "], {
			N: "#forge:plates/netherite",
			V: "create_things_and_misc:vibration_mechanism",
		})
		.id("cosmic_contraptions:chunk_loader");

	// Contraption Chunkloader
	event
		.shaped(Item.of("create_power_loader:brass_chunk_loader"), ["GBG", "BCB", "GBG"], {
			G: "#forge:glass",
			B: "#forge:plates/brass",
			C: "chunkloaders:ultimate_chunk_loader",
		})
		.id("cosmic_contraptions:contraption_chunk_loader");

	event.recipes.create
		.compacting("minecraft:tuff", [
			Fluid.of("minecraft:lava", 1000),
			"create:scoria",
			"minecraft:cobbled_deepslate",
		])
		.id("cosmic_contraptions:renewable/compacting/tuff");

	event.recipes.create
		.compacting("minecraft:prismarine_bricks", ["2x minecraft:prismarine"])
		.id("cosmic_contraptions:renewable/compacting/prismarine_bricks");

	event.recipes.create
		.compacting("minecraft:deepslate", ["4x minecraft:cobblestone", Fluid.of("minecraft:lava", 2000)])
		.heated()
		.id("cosmic_contraptions:renewable/compacting/deepslate");

	event.recipes.create
		.compacting("create:veridium", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "create:limestone"])
		.id("cosmic_contraptions:renewable/compacting/veridium");

	event.recipes.create
		.compacting("create:ochrum", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:granite"])
		.id("cosmic_contraptions:renewable/compacting/ochrum");

	event.recipes.create
		.compacting("create:crimsite", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:diorite"])
		.id("cosmic_contraptions:renewable/compacting/crimsite");

	event.recipes.create
		.compacting("create:asurine", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:andesite"])
		.id("cosmic_contraptions:renewable/compacting/asurine");

	event.recipes.create
		.mixing("minecraft:diorite", ["minecraft:cobblestone", "minecraft:quartz"])
		.id("cosmic_contraptions:renweable/mixing/diorite");

	event.recipes.create
		.mixing("minecraft:calcite", ["minecraft:diorite", "minecraft:quartz"])
		.id("cosmic_contraptions:renewable/mixing/calcite");

	event.recipes.create
		.mixing("create:limestone", ["minecraft:calcite", "minecraft:gravel"])
		.id("cosmic_contraptions:renewable/mixing/limestone");

	// Cornflower Bush
	event.recipes.create
		.compacting("cosmic_contraptions:cornflower_bush_item", ["9x minecraft:cornflower"])
		.id("cosmic_contraptions:cornflower_bush_item");

	const automatedPacking = [
		{ item: "coal", type: "gems" },
		{ item: "gold", type: "ingots" },
		{ item: "iron", type: "ingots" },
		{ item: "copper", type: "ingots" },
		{ item: "redstone", type: "gems" },
		{ item: "diamond", type: "gems" },
		{ item: "netherite", type: "ingots" },
		{ item: "emerald", type: "gems" },
		{ item: "lapis", type: "gems" },
		{ item: "tin", type: "ingots" },
		{ item: "zinc", type: "ingots" },
		{ item: "brass", type: "ingots" },
		{ item: "bronze", type: "ingots" },
		{ item: "steel", type: "ingots" },
		{ item: "industrial_iron", type: "ingots" },
		{ item: "shadow_steel", type: "ingots" },
		{ item: "refined_radiance", type: "ingots" },
		{ item: "andesite", type: "ingots" },
		{ item: "lead", type: "ingots" },
		{ item: "nickel", type: "ingots" },
		{ item: "desh", type: "ingots" },
		{ item: "ostrum", type: "ingots" },
		{ item: "calorite", type: "ingots" },
	];
	automatedPacking.forEach((block) => {
		// Block from Ingots
		event.remove([
			{
				type: "minecraft:crafting_shaped",
				output: `#forge:storage_blocks/${block.item}`,
			},
			{
				type: "minecraft:crafting_shapeless",
				output: `#forge:storage_blocks/${block.item}`,
			},
		]);
		// Ingots from Nuggets
		if (block.type == "ingots") {
			event.remove([
				{
					type: "minecraft:crafting_shaped",
					output: `#forge:ingots/${block.item}`,
				},
				{
					type: "minecraft:crafting_shapeless",
					output: `#forge:ingots/${block.item}`,
				},
			]);
		}

		// Block from ingots
		event.recipes.create
			.compacting(`#forge:storage_blocks/${block.item}`, `9x #forge:${block.type}/${block.item}`)
			.id("cosmic_contraptions:compacting/" + block.item + "_block_from_ingots");
		// Ingots from nuggets
		if (block.type == "ingots") {
			event.recipes.create
				.compacting(`#forge:ingots/${block.item}`, `9x #forge:nuggets/${block.item}`)
				.id("cosmic_contraptions:compacting/" + block.item + "_ingot_from_nuggets");
		}

		// Nuggets from Ingots
		event.remove({
			type: "minecraft:crafting_shapeless",
			output: `#forge:nuggets/${block.item}`,
			input: `#forge:ingots/${block.item}`,
		});
		event.recipes.farmersdelight.cutting("#forge:ingots/" + block.item, "#forge:tools/knives", [
			"9x #forge:nuggets/" + block.item,
		]);
	});

	// Industrial Iron Fix
	event
		.stonecutting("2x create:industrial_iron_block", "#forge:ingots/iron")
		.id("cosmic_contraptions:industrial_iron_block");

	// Lapis Alloy
	event.recipes.create
		.mixing("#forge:ingots/lapis", ["#forge:gems/lapis", "#forge:nuggets/iron"])
		.id("cosmic_contraptions:lapis_alloy");
	// Vault Casing
	event.recipes.create
		.item_application("cosmic_contraptions:vault_casing", ["create:industrial_iron_block", "#forge:ingots/lapis"])
		.id("cosmic_contraptions:vault_casing");

	// Raw Iron Washing
	event.recipes.create
		.splashing("9x #forge:nuggets/iron", "create:crushed_raw_iron")
		.id("cosmic_contraptions:raw_iron_washing");

	// Harder Minecart Assembler
	event.remove({ output: "create:cart_assembler" });
	event
		.shaped("create:cart_assembler", ["   ", "TRT", "B B"], {
			T: "create:railway_casing",
			R: "create:controls",
			B: "create:brass_casing",
		})
		.id("cosmic_contraptions:cart_assembler");

	// Harder Rotation Speed Controller
	event.remove({ output: "create:rotation_speed_controller" });
	event
		.shaped("create:rotation_speed_controller", [" M ", " B ", "   "], {
			M: "create_dd:integrated_mechanism",
			B: "create:brass_casing",
		})
		.id("cosmic_contraptions:rotation_speed_controller");

	// Cheap Hand Crank
	event
		.shaped(Item.of("create:hand_crank"), ["PPP", "  S", "   "], {
			P: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("cosmic_contraptions:hand_crank");
	// Cheap Crank Wheel
	event
		.shapeless("create_connected:crank_wheel", ["#minecraft:planks", "create:hand_crank"])
		.id("cosmic_contraptions:crank_wheel");

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
		.loops(2)
		.id("cosmic_contraptions:infernal_mechanism");

	// Explorer Lootbox
	event
		.shaped("kubejs:lootbox_explorer", ["EEE", "ELE", "EEE"], {
			E: "#minecraft:planks",
			L: "naturescompass:naturescompass",
		})
		.id("kubejs:master/crafting/lootbox_explorer");

	// Harder Hydraulic Press
	event.remove({ output: "create_dd:hydraulic_press" });
	event.recipes.create
		.mechanical_crafting("create_dd:hydraulic_press", [" S ", " H ", "CPC"], {
			S: "create_dd:sealed_mechanism",
			H: "create_dd:hydraulic_casing",
			C: "#forge:storage_blocks/copper",
			P: "create:mechanical_press",
		})
		.id("cosmic_contraptions:hydraulic_press");

	// Harder Item Vault
	event
		.shaped("create:item_vault", [" I ", " C ", " I "], {
			I: "#forge:plates/iron",
			C: "cosmic_contraptions:vault_casing",
		})
		.id("cosmic_contraptions:item_vault");
	event.remove({ id: "create_connected:crafting/kinetics/item_silo" });
	event
		.shaped("create_connected:item_silo", ["   ", "ICI", "   "], {
			I: "#forge:plates/iron",
			C: "cosmic_contraptions:vault_casing",
		})
		.id("cosmic_contraptions:item_silo");

	// Harder Spout
	event.remove({ output: "create:spout" });
	event
		.shaped(Item.of("create:spout"), [" C ", " K ", " S "], {
			C: "create:copper_casing",
			K: "minecraft:dried_kelp",
			S: "create_dd:sealed_mechanism",
		})
		.id("cosmic_contraptions:spout");

	// Harder Fluid Tank
	event.remove({ output: "create:fluid_tank" });
	event.remove({ output: "create_connected:fluid_vessel" });
	event
		.shaped("create:fluid_tank", [" C ", " B ", " C "], {
			C: "#forge:plates/copper",
			B: "metalbarrels:gold_barrel",
		})
		.id("cosmic_contraptions:fluid_tank");
	event
		.shaped("create_connected:fluid_vessel", ["   ", "CBC", "   "], {
			C: "#forge:plates/copper",
			B: "metalbarrels:gold_barrel",
		})
		.id("cosmic_contraptions:fluid_vessel");
	event
		.shapeless("create:fluid_tank", ["create_connected:fluid_vessel"])
		.id("cosmic_contraptions:fluid_tank_conversion");
	event
		.shapeless("create_connected:fluid_vessel", ["create:fluid_tank"])
		.id("cosmic_contraptions:fluid_vessel_conversion");

	// Concrete
	event.stonecutting("2x tfmg:concrete_slab", "tfmg:concrete").id("cosmic_contraptions:concrete_slab");
	event.stonecutting("tfmg:concrete_stairs", "tfmg:concrete").id("cosmic_contraptions:concrete_stairs");
	event.stonecutting("tfmg:concrete_wall", "tfmg:concrete").id("cosmic_contraptions:concrete_wall");

	// Insulaton Brush
	event
		.shaped("cosmic_contraptions:insulation_brush", ["HP", "NH"], {
			H: "minecraft:honeycomb",
			P: "#forge:plates/iron",
			N: "#forge:nuggets/iron",
		})
		.id("cosmic_contraptions:insulation_brush");
	event
		.shapeless("cosmic_contraptions:insulation_brush", [
			"2x minecraft:honeycomb",
			"create_things_and_misc:glue_packaging",
		])
		.id("cosmic_contraptions:insulation_brush_alt");

	// Waterproof Planks
	event.recipes.create
		.deploying("cosmic_contraptions:waterproof_planks", [
			"#minecraft:planks",
			"cosmic_contraptions:insulation_brush",
		])
		.id("cosmic_contraptions:waterproof_planks");

	// Copper Casing
	event.remove({ output: "create:copper_casing" });
	event.recipes.create
		.deploying("create:copper_casing", ["cosmic_contraptions:waterproof_planks", "#forge:plates/copper"])
		.id("cosmic_contraptions:copper_casing");

	// Harder Steam Engine
	event.remove({ output: "create:steam_engine" });
	event
		.shaped(Item.of("create:steam_engine"), [" G ", "IMS", " C "], {
			G: "create:golden_sheet",
			I: "create_dd:infernal_mechanism",
			M: "create_dd:integrated_mechanism",
			S: "create_dd:sealed_mechanism",
			C: "minecraft:copper_block",
		})
		.id("cosmic_contraptions:steam_engine");

	// Harder Drill
	event.remove({ output: "create:mechanical_drill" });
	event
		.shaped(Item.of("create:mechanical_drill"), [" A ", "ASA", " C "], {
			A: "#forge:ingots/andesite",

			S: "#forge:plates/steel",
			C: "create:andesite_casing",
		})
		.id("cosmic_contraptions:mechanical_drill");

	// Shadow Steel
	event.recipes.create
		.mixing(["#forge:ingots/shadow_steel"], ["#forge:storage_blocks/netherite", "8x #forge:plates/steel"])
		.superheated()
		.id("cosmic_contraptions:shadow_steel");

	// Fix brass speaker craft
	event
		.shaped(Item.of("create_things_and_misc:brass_speaker"), [" R ", " N ", " R "], {
			R: "create:railway_casing",
			N: "minecraft:note_block",
		})
		.id("cosmic_contraptions:brass_speaker");

	// Radar
	event.remove({ output: "create_things_and_misc:radar" });
	event
		.shaped("create_things_and_misc:radar", ["ASA", "AMA", "AAA"], {
			A: "#forge:ingots/andesite",
			S: "create:display_board",
			M: "create_dd:integrated_mechanism",
		})
		.id("cosmic_contraptions:radar");

	// Harder Electron Tube
	event.remove({ output: "create:electron_tube" });
	event
		.shaped("8x create:electron_tube", [" R ", " N ", " P "], {
			R: "create:polished_rose_quartz",
			N: "#forge:nuggets/copper",
			P: "tfmg:plastic_sheet",
		})
		.id("cosmic_contraptions:electron_tube");

	// Fix Dough
	event.replaceInput({ input: "create:dough" }, "create:dough", "#forge:dough");
	event.replaceInput({ input: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "#forge:dough");

	// Nerf Tuff Crusing
	event.recipes.create
		.crushing(["create_dd:dolomite"], "#create:stone_types/tuff")
		.id("cosmic_contraptions:tuff_crushing");

	// Remove Electrum
	event.replaceOutput(
		{ output: "createaddition:electrum_nugget" },
		"#forge:nuggets/electrum",
		Item.of("minecraft:air")
	);

	// Fix Coal Coke
	event.recipes.create.mixing("tfmg:coal_coke", "#minecraft:coals").heated().id("cosmic_contraptions:coal_coke");

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
		event
			.shapeless(`create_things_and_misc:${wood}_sail`, [
				"#cosmic_contraptions:windmill_sails",
				`minecraft:${wood}_planks`,
			])
			.id("cosmic_contraptions:sails/" + wood);
	});

	// Lattice
	event.shaped(Item.of("decorative_blocks:lattice"), ["SS ", "SS ", "   "], {
		S: "minecraft:stick",
	});

	// Infinate Water Bucket
	event
		.shaped(
			Item.of(
				"minecraft:water_bucket",
				'{CustomModelData:1,HideFlags:1,display:{Name:\'{"text":"Infinite Water Bucket","italic":false}\'}}'
			).enchant("minecraft:infinity", 1),
			["NNN", "NWN", "NNN"],
			{
				N: "#forge:nuggets/refined_radiance",
				W: "minecraft:water_bucket",
			}
		)
		.id("cosmic_contraptions:infinite_water_bucket");

	// Demagnetization Coil
	event
		.shaped(Item.of("simplemagnets:advanced_demagnetization_coil"), [" E ", " S ", " B "], {
			E: "create:electron_tube",
			S: "create:shaft",
			B: "create:brass_casing",
		})
		.id("cosmic_contraptions:demagnetization_coil");

	// Magnet
	event.recipes
		.createMechanicalCrafting("simplemagnets:advancedmagnet", ["I I", "E E", "R R", "RQR"], {
			I: "create:iron_sheet",
			E: "create:electron_tube",
			R: "create:polished_rose_quartz",
			Q: "create_things_and_misc:rose_quartz_sheet",
		})
		.id("cosmic_contraptions:magnet");

	// Melter
	event.recipes.create
		.mechanical_crafting("melter:melter", ["N  N", "N  N", "N  N", "pNNp"], {
			N: "#forge:ingots/netherite",
			p: "tfmg:plastic_sheet",
		})
		.id("cosmic_contraptions:melter");

	// Cooking Pot
	event.shaped("farmersdelight:cooking_pot", ["B B", "IWI", "III"], {
		B: "minecraft:brick",
		W: "minecraft:water_bucket",
		I: "#forge:ingots/iron",
	});

	// Lodestone
	event
		.shaped("8x minecraft:lodestone", ["III", "IDI", "III"], {
			I: "minecraft:chiseled_stone_bricks",
			D: "#forge:ingots/brass",
		})
		.id("cosmic_contraptions:lodestone");

	// Hopper
	event.remove({ output: "minecraft:hopper" });
	event
		.shaped("minecraft:hopper", ["I I", "ICI", " I "], {
			I: "#forge:ingots/copper",
			C: "#forge:chests/wooden",
		})
		.id("cosmic_contraptions:hopper_from_copper");

	// White Wool
	event.recipes.create
		.compacting("minecraft:white_wool", "4x #forge:string")
		.id("cosmic_contraptions:white_wool_from_string");

	// Cobweb
	event.recipes.create
		.compacting("minecraft:cobweb", "9x #forge:string")
		.id("cosmic_contraptions:cobweb_from_string");

	// Hanging Roots
	event.recipes.create
		.haunting("minecraft:hanging_roots", "minecraft:mangrove_propagule")
		.id("cosmic_contraptions:hanging_roots");

	// Cheaper Jukebox
	event.replaceInput({ id: "minecraft:jukebox" }, "minecraft:diamond", "#forge:ingots/industrial_iron");

	// Rooted Dirt
	event.recipes.create
		.deploying("minecraft:rooted_dirt", ["minecraft:dirt", "minecraft:hanging_roots"])
		.id("cosmic_contraptions:rooted_dirt");

	// Name Tag
	event.recipes
		.createSequencedAssembly(["minecraft:name_tag"], "minecraft:string", [
			event.recipes.createDeploying("cosmic_contraptions:incomplete_name_tag", [
				"cosmic_contraptions:incomplete_saddle",
				"createdeco:iron_coin",
			]),
		])
		.transitionalItem("cosmic_contraptions:incomplete_name_tag")
		.loops(5)
		.id("cosmic_contraptions:name_tag");

	// Saddle
	event.recipes
		.createSequencedAssembly(["minecraft:saddle"], "#forge:nuggets/iron", [
			event.recipes.createDeploying("cosmic_contraptions:incomplete_saddle", [
				"cosmic_contraptions:incomplete_saddle",
				"minecraft:leather",
			]),
			event.recipes.createDeploying("cosmic_contraptions:incomplete_saddle", [
				"cosmic_contraptions:incomplete_saddle",
				"minecraft:string",
			]),
		])
		.transitionalItem("cosmic_contraptions:incomplete_saddle")
		.loops(5)
		.id("cosmic_contraptions:saddle");

	// Totem of Undying
	event.recipes
		.createSequencedAssembly(["minecraft:totem_of_undying"], "createdeco:gold_coin", [
			event.recipes.createDeploying("cosmic_contraptions:incomplete_totem_of_undying", [
				"cosmic_contraptions:incomplete_totem_of_undying",
				"minecraft:golden_apple",
			]),
			event.recipes.create.filling("cosmic_contraptions:incomplete_totem_of_undying", [
				Fluid.of("createmetallurgy:molten_gold", 40),
				"cosmic_contraptions:incomplete_totem_of_undying",
			]),
			event.recipes.createDeploying("cosmic_contraptions:incomplete_totem_of_undying", [
				"cosmic_contraptions:incomplete_totem_of_undying",
				"minecraft:emerald",
			]),
			event.recipes.createDeploying("cosmic_contraptions:incomplete_totem_of_undying", [
				"cosmic_contraptions:incomplete_totem_of_undying",
				"create:experience_nugget",
			]),
		])
		.transitionalItem("cosmic_contraptions:incomplete_totem_of_undying")
		.loops(1)
		.id("cosmic_contraptions:totem_of_undying");

	// Trader Block
	event
		.shaped(Item.of("easy_villagers:trader"), ["AAA", "A A", "CPC"], {
			A: "createdeco:andesite_bars",
			C: "create:andesite_casing",
			P: "#minecraft:planks",
		})
		.id("cosmic_contraptions:villager_trader");

	// Breeder
	event
		.shaped(Item.of("easy_villagers:breeder"), ["AAA", "ABA", "CPC"], {
			A: "createdeco:andesite_bars",
			C: "create:andesite_casing",
			P: "#minecraft:planks",
			B: "#minecraft:beds",
		})
		.id("cosmic_contraptions:villager_breeder");

	// Auto Trader
	event
		.shaped(Item.of("easy_villagers:auto_trader"), ["AAA", "A A", "CNC"], {
			A: "createdeco:brass_bars",
			C: "create:brass_casing",
			N: "minecraft:netherite_block",
		})
		.id("cosmic_contraptions:villager_auto_trader");

	// Converter
	event
		.shaped(Item.of("easy_villagers:converter"), ["AAA", "ABA", "CNC"], {
			A: "createdeco:brass_bars",
			B: "minecraft:rotten_flesh",
			C: "create:brass_casing",
			N: "#minecraft:planks",
		})
		.id("cosmic_contraptions:villager_converter");

	// Incubator
	event
		.shaped(Item.of("easy_villagers:incubator"), ["AAA", "ABA", "CNC"], {
			A: "createdeco:andesite_bars",
			B: "#minecraft:wool",
			C: "create:andesite_casing",
			N: "#minecraft:planks",
		})
		.id("cosmic_contraptions:villager_incubator");

	// Metal Barrels
	event.recipes.create
		.deploying("metalbarrels:iron_barrel", ["minecraft:barrel", "#forge:plates/andesite_alloy"])
		.id("cosmic_contraptions:basic_to_andesite_barrel");
	event.recipes.create
		.deploying("metalbarrels:wood_to_iron", ["minecraft:stick", "#forge:plates/andesite_alloy"])
		.id("cosmic_contraptions:barrel_to_andesite_barrel_upgrade");

	event.recipes.create
		.deploying("metalbarrels:gold_barrel", ["metalbarrels:iron_barrel", "#forge:plates/copper"])
		.id("cosmic_contraptions:andesite_to_copper_barrel");
	event.recipes.create
		.deploying("metalbarrels:iron_to_gold", ["minecraft:stick", "#forge:plates/copper"])
		.id("cosmic_contraptions:andesite_to_copper_barrel_upgrade");

	event.recipes.create
		.deploying("metalbarrels:diamond_barrel", ["metalbarrels:gold_barrel", "#forge:plates/brass"])
		.id("cosmic_contraptions:copper_to_brass_barrel");
	event.recipes.create
		.deploying("metalbarrels:gold_to_diamond", ["minecraft:stick", "#forge:plates/brass"])
		.id("cosmic_contraptions:copper_to_brass_barrel_upgrade");

	// Liquid Slag
	event.remove({ id: "tfmg:mixing/liquid_concrete_from_slag" });
	event.recipes.create
		.mixing(Fluid.of("tfmg:liquid_concrete", 1500), ["tfmg:slag", Fluid.of("minecraft:water", 500), "tfmg:cement"])
		.id("cosmic_contraptions:tfmg/liquid_concrete_from_slag");

	// Steel
	event.remove({ id: "tfmg:industrial_blasting/steel" });
	event.custom({
		type: "tfmg:industrial_blasting",
		ingredients: [
			{
				count: 1,
				item: "tfmg:blasting_mixture",
			},
		],
		processingTime: 100,
		results: [
			{
				fluid: "tfmg:molten_steel",
				amount: 90,
			},
			{
				fluid: "tfmg:molten_slag",
				amount: 50,
			},
		],
	});

	// Graphite
	event.remove({ output: "createmetallurgy:graphite" });
	event
		.shapeless("2x createmetallurgy:graphite", ["8x #forge:gems/coal", "minecraft:clay_ball"])
		.id("cosmic_contraptions:createmetallurgy/graphite");

	// Personal Shrinking Device
	event.recipes
		.createMechanicalCrafting("shrink:shrinking_device", [" DQD ", "TSSST", "SBSRS", "TSSST"], {
			D: "create:display_board",
			Q: "create_things_and_misc:vibration_mechanism",
			T: "create:railway_casing",
			B: "infinitybuttons:blue_emergency_button",
			R: "infinitybuttons:red_emergency_button",
			S: "create_dd:steel_sheet",
		})
		.id("cosmic_contraptions:shrinking_device");

	// Destroy Plastic Simplification
	let destroyPlastics = [
		"destroy:plastic",
		"destroy:polyethylene_terephthalate",
		"destroy:polyethene",
		"destroy:polypropene",
		"destroy:polystyrene",
		"destroy:abs",
		"destroy:polytetrafluoroethene",
		"destroy:nylon",
		"destroy:polystyrene_butadiene",
	];
	destroyPlastics.forEach((item) => {
		event.replaceInput({ input: item }, item, "#forge:ingots/plastic");
	});

	// Fix Dryer Recipe;
	// FIXME: REPLACE THIS WITH VALID ITEM
	/* event.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
		S: "#minecraft:wooden_slabs",
	}); */

	// Cheap Paper Fixes
	event.replaceInput({ output: "create:sand_paper" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");
	event.replaceInput({ output: "create:red_sand_paper" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");
	event.replaceInput(
		{ output: "minecraft:cartography_table" },
		"minecraft:paper",
		"#cosmic_contraptions:cheap_papers"
	);
	event.replaceInput({ output: "minecraft:nametag" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");
	event.replaceInput({ output: "minecraft:map" }, "minecraft:paper", "#cosmic_contraptions:cheap_papers");

	// Sugar Paper
	event
		.shapeless("cosmic_contraptions:sugar_paper", ["3x minecraft:sugar_cane"])
		.id("cosmic_contraptions:sugar_paper");

	// Wood Pulping
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:wood_pulp", 200)],
			[Fluid.of("minecraft:water", 250), "cosmic_contraptions:saw_dust", "farmersdelight:tree_bark"]
		)
		.id("cosmic_contraptions:wood_pulping");

	// Wood Pulp Bleaching
	event.recipes.create
		.mixing(
			[Fluid.of("cosmic_contraptions:whitened_wood_pulp", 100)],
			[Fluid.of("cosmic_contraptions:wood_pulp", 100), Fluid.of("cosmic_contraptions:white_dye_fluid", 500)]
		)
		.id("cosmic_contraptions:whitened_wood_pulp");

	// Backpack Base
	event
		.shaped("sophisticatedbackpacks:backpack", ["SLS", "SCS", "LLL"], {
			S: "#forge:string",
			L: "#forge:leather",
			C: "#forge:chests/wooden",
		})
		.id("cosmic_contraptions:backpack");

	// Upgrade Base
	event
		.shapeless("sophisticatedbackpacks:upgrade_base", ["minecraft:paper", "2x #forge:string", "#minecraft:planks"])
		.id("cosmic_contraptions:upgrade_base");

	// Pickup Upgrade
	event
		.shaped("sophisticatedbackpacks:advanced_pickup_upgrade", ["SPS", "GUG", "ZDZ"], {
			S: "#forge:string",
			P: "minecraft:sticky_piston",
			G: "#forge:ingots/gold",
			U: "sophisticatedbackpacks:upgrade_base",
			Z: "#forge:plates/steel",
			D: "minecraft:diamond",
		})
		.id("cosmic_contraptions:backpack_pickup_upgrade");

	// Void Upgrade
	event
		.shaped("sophisticatedbackpacks:advanced_void_upgrade", ["SPS", "GUG", "ZDZ"], {
			S: "#forge:string",
			P: "minecraft:ender_pearl",
			G: "#forge:obsidian",
			U: "sophisticatedbackpacks:upgrade_base",
			Z: "#forge:plates/steel",
			D: "minecraft:diamond",
		})
		.id("cosmic_contraptions:backpack_void_upgrade");

	// Restock Upgrade
	event
		.shaped("sophisticatedbackpacks:advanced_restock_upgrade", ["SPS", "GUG", "ZDZ"], {
			S: "#forge:chests/wooden",
			P: "minecraft:sticky_piston",
			G: "#forge:ingots/gold",
			U: "sophisticatedbackpacks:upgrade_base",
			Z: "#forge:plates/steel",
			D: "minecraft:diamond",
		})
		.id("cosmic_contraptions:backpack_restock_upgrade");

	// Refill Upgrade
	event
		.shaped("sophisticatedbackpacks:advanced_refill_upgrade", ["SPS", "GUG", "ZDZ"], {
			S: "#forge:string",
			P: "minecraft:ender_pearl",
			G: "#forge:chests/wooden",
			U: "sophisticatedbackpacks:upgrade_base",
			Z: "#forge:plates/steel",
			D: "minecraft:diamond",
		})
		.id("cosmic_contraptions:backpack_refill_upgrade");

	// Crafting Upgrade
	event
		.shaped("sophisticatedbackpacks:crafting_upgrade", ["SCS", "CUC", "SCS"], {
			S: "#forge:string",
			C: "minecraft:crafting_table",
			U: "sophisticatedbackpacks:upgrade_base",
		})
		.id("cosmic_contraptions:backpack_crafting_upgrade");

	// Stonecutter Upgrade
	event
		.shaped("sophisticatedbackpacks:stonecutter_upgrade", ["SCS", "CUC", "SCS"], {
			S: "#forge:string",
			C: "minecraft:stonecutter",
			U: "sophisticatedbackpacks:upgrade_base",
		})
		.id("cosmic_contraptions:backpack_stonecutter_upgrade");

	// Deposit Upgrade
	event
		.shaped("sophisticatedbackpacks:advanced_deposit_upgrade", ["SPS", "GUG", "ZDZ"], {
			S: "#forge:string",
			P: "#forge:chests/wooden",
			G: "minecraft:piston",
			U: "sophisticatedbackpacks:upgrade_base",
			Z: "#forge:plates/steel",
			D: "minecraft:diamond",
		})
		.id("cosmic_contraptions:backpack_deposit_upgrade");

	// Everlasting Upgrade
	event
		.shaped("sophisticatedbackpacks:everlasting_upgrade", ["CNC", "NUN", "CNC"], {
			U: "sophisticatedbackpacks:upgrade_base",
			C: "minecraft:end_crystal",
			N: "minecraft:nether_star",
		})
		.id("cosmic_contraptions:backpack_everlasting_upgrade");

	// Feeding Upgrade
	event
		.shaped("sophisticatedbackpacks:advanced_feeding_upgrade", ["SPS", "NUN", "ZZZ"], {
			S: "#forge:string",
			P: "cosmic_contraptions:creative_omega_potion",
			N: "create_things_and_misc:vibration_mechanism",
			U: "sophisticatedbackpacks:upgrade_base",
			Z: "#forge:plates/shadow_steel",
		})
		.id("cosmic_contraptions:backpack_feeding_upgrade");

	// Magnet Upgrade
	event
		.shaped("sophisticatedbackpacks:advanced_magnet_upgrade", ["SPS", "NUN", "ZZZ"], {
			S: "#forge:string",
			P: "simplemagnets:advancedmagnet",
			N: "simplemagnets:advanced_demagnetization_coil",
			U: "sophisticatedbackpacks:upgrade_base",
			Z: "create_things_and_misc:rose_quartz_sheet",
		})
		.id("cosmic_contraptions:backpack_magnet_upgrade");

	// Vertical Redstone (Cog Block)
	event
		.shaped(
			Item.of("supplementaries:cog_block", 8), // arg 1: output
			[" C ", "BRB", " C "],
			{
				B: "createdeco:brass_bars",
				C: "create:brass_casing",
				R: "minecraft:redstone",
			}
		)
		.id("cosmic_contraptions:vertical_redstone");

	// Bones into Ash
	event.smelting("3x supplementaries:ash", "minecraft:bone").id("cosmic_contraptions:ash_from_bone");
	event.smelting("supplementaries:ash", "minecraft:rotten_flesh").id("cosmic_contraptions:ash_from_flesh");

	// Convert washing recipes from nuggets to ingots
	const washingRecipes = [
		{ name: "iron", byproduct: Item.of("minecraft:redstone").withChance(0.05) },
		{ name: "gold", byproduct: Item.of("minecraft:quartz").withChance(0.5) },
		{ name: "copper", byproduct: Item.of("minecraft:clay_ball").withChance(0.5) },
		{ name: "zinc", byproduct: Item.of("minecraft:gunpowder").withChance(0.25) },
		{ name: "tin", byproduct: Item.of("minecraft:glowstone_dust").withChance(0.35) },
	];
	washingRecipes.forEach((item) => {
		event.remove({ type: "create:splashing", input: `create:crushed_raw_${item.name}` });
		event.recipes.create
			.splashing(
				[`cosmic_contraptions:${item.name}_nugget_clump`, item.byproduct],
				`create:crushed_raw_${item.name}`
			)
			.id("cosmic_contraptions:master/ingot_from_crushed_" + item.name);
	});

	// Renaming Items using Nametag
	event
		.shapeless(
			Item.of("minecraft:name_tag", '{display:{Name:\'{"text":"Your Item with the Name Tag Name HERE!"}\'}}'),
			["minecraft:name_tag", "#cosmic_contraptions:all_items", "supplementaries:antique_ink"]
		)
		.modifyResult((gridInventory, itemstack) => {
			let items = gridInventory.findAll();
			let nametag = items.find((item) => item.id == "minecraft:name_tag");
			// Remove the everything EXCEPT the item to rename
			items = items.filter((item) => item.id != "minecraft:name_tag");
			items = items.filter((item) => item.id != "supplementaries:antique_ink");
			items = items.filter((item) => item.id != "minecraft:air");
			// Now we have the item to rename and the nametag
			let inputItem = items[0];

			// Get the original NBT data
			let renamedNbt = inputItem.nbt;
			if (renamedNbt == null) {
				renamedNbt = { display: {} };
			}
			// Apply the new display name
			renamedNbt.display = nametag.nbt.display;

			// Create the new item with the renamed NBT
			let outputItem = Item.of(inputItem.id).withNBT(renamedNbt);
			return outputItem;
		})
		.keepIngredient("supplementaries:antique_ink")
		.keepIngredient("minecraft:name_tag")
		.id("cosmic_contraptions:master/rename_with_nametag_manual_only");

	// Changing Color of Nametag Name
	const colors = {
		white: "FFFFFF",
		orange: "E39C33",
		magenta: "C968C3",
		light_blue: "6E99D8",
		yellow: "E4E429",
		lime: "75C410",
		pink: "EAA5C9",
		gray: "828282",
		light_gray: "D6D6D6",
		cyan: "3B8CAE",
		purple: "A252CC",
		blue: "335DC1",
		brown: "975C32",
		green: "62842D",
		red: "CF433E",
		black: "27263C",
	};
	let exampleNametagNBT = '{display:{Name:\'[{"text":"Your ","color":"red"},';
	exampleNametagNBT += '{"text":"Dye ","color":"gold"},';
	exampleNametagNBT += '{"text":"Coloured ","color":"green"},';
	exampleNametagNBT += '{"text":"Name ","color":"aqua"},';
	exampleNametagNBT += '{"text":"Here!","color":"light_purple"}]\'}}';
	event
		.shapeless(Item.of("minecraft:name_tag", exampleNametagNBT), ["minecraft:name_tag", "#forge:dyes"])
		.modifyResult((gridInventory, itemstack) => {
			let items = gridInventory.findAll();
			let nameTag = items.find((item) => item.id == "minecraft:name_tag");
			let dye = items.find((item) => item.id.includes("dye"));
			// Fetch the color code
			let color = dye.id.split(":")[1].replace("_dye", "");
			color = colors[color];

			let nbt = nameTag.nbt;
			if (nbt == null) {
				nbt = { display: { Name: '{ "text": "Name Tag", "color": "#FFFFFF" }' } };
			}
			// Apply the new color
			nbt.display.Name = nbt.display.Name.replace(/#[0-9A-F]{6}/g, "#" + color);

			// Create the new item with the color NBT
			let outputItem = Item.of(nameTag.id).withNBT(nbt);
			return nameTag;
		})
		.keepIngredient("#forge:dyes")
		.id("cosmic_contraptions:master/nametag_dying_manual_only");

	// Cheaper Diluted Bone Meal
	event.remove({ output: Fluid.of("create_things_and_misc:diluted_bonemeal") });
	event.recipes.create
		.mixing(Fluid.of("create_things_and_misc:diluted_bonemeal", 1000), [
			Fluid.of("minecraft:water", 1000),
			"cosmic_contraptions:crushed_bonemeal",
		])
		.id("cosmic_contraptions:diluted_bonemeal");

	// Cheaper Rice
	event.recipes.create
		.milling(
			[
				Item.of("farmersdelight:rice"),
				Item.of("farmersdelight:rice").withChance(0.5),
				Item.of("farmersdelight:straw"),
				Item.of("farmersdelight:straw").withChance(0.75),
			],
			["farmersdelight:rice_panicle"]
		)
		.id("cosmic_contraptions:master/milling/rice");

	// Cheaper Canvas
	event
		.shaped("farmersdelight:canvas", ["SS", "SS"], {
			S: "farmersdelight:straw",
		})
		.id("cosmic_contraptions:master/canvas_manual_only");
	event.recipes.create
		.compacting("farmersdelight:canvas", ["2x farmersdelight:straw"])
		.id("cosmic_contraptions:master/crafting/canvas");

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
		.id("kubejs:master/lootbox_enchantments");

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
		.superheated()
		.id("kubejs:master/hyper_experience");

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
	event.recipes.createItemApplication("minecraft:farmland", ["minecraft:dirt_path", "#kubejs:paxels"]);
});
