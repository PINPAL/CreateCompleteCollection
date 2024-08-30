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
			.id("kubejs:master/compacting/" + block.item + "_block_from_ingots");
		// Ingots from nuggets
		if (block.type == "ingots") {
			event.recipes.create
				.compacting(`#forge:ingots/${block.item}`, `9x #forge:nuggets/${block.item}`)
				.id("kubejs:master/compacting/" + block.item + "_ingot_from_nuggets");
		}
	});

	// Early Game Smithing Table
	event.replaceInput(
		{ output: "minecraft:smithing_table" },
		"minecraft:iron_ingot",
		"#minecraft:stone_tool_materials"
	);

	// Lapis Alloy
	event.recipes.create
		.mixing("create_dd:lapis_alloy", ["minecraft:lapis_lazuli", "#forge:nuggets/tin"])
		.id("kubejs:master/mixing/lapis_alloy");

	// Diamond Grit Sandpaper
	event
		.shapeless(Item.of("createaddition:diamond_grit_sandpaper").withNBT("{Unbreakable:1b}"), [
			"#create:sandpaper",
			"kubejs:molten_diamond_ingot",
		])
		.id("kubejs:master/diamond_grit_sandpaper");

	// Harder Minecart Assembler
	event
		.shaped("create:cart_assembler", ["   ", "TRT", "B B"], {
			T: "create:railway_casing",
			R: "create:controls",
			B: "create:brass_casing",
		})
		.id("kubejs:master/crafting/cart_assembler");

	// Harder Rotation Speed Controller
	event
		.shaped("create:rotation_speed_controller", [" M ", " B ", "   "], {
			M: "create_dd:integrated_mechanism",
			B: "create:brass_casing",
		})
		.id("kubejs:master/crafting/rotation_speed_controller");

	// Cheap Hand Crank
	event
		.shaped(Item.of("create:hand_crank"), ["PPP", "  S", "   "], {
			P: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("kubejs:master/crafting/hand_crank");

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
		.id("kubejs:master/sequenced/infernal_mechanism");

	// Harder Hydraulic Press
	event
		.shaped(Item.of("create_dd:hydraulic_press"), [" S ", " H ", " B "], {
			S: "create_dd:sealed_mechanism",
			H: "create_dd:hydraulic_casing",
			B: "create_dd:bronze_casing",
		})
		.id("kubejs:master/crafting/hydraulic_press");

	// Walnut Recycle
	event.shapeless("ecologics:walnut_sapling", ["ecologics:walnut"]).id("kubejs:master/walnut_recycle");

	// Fix Bronze Saw
	event.remove({ output: "create_dd:bronze_saw" });
	event
		.shaped("create_dd:bronze_saw", [" S ", "B6B", " C "], {
			B: "#forge:plates/bronze",
			S: "#forge:ingots/steel",
			6: "create:mechanical_saw",
			C: "create_dd:bronze_casing",
		})
		.id("kubejs:master/crafting/bronze_saw");

	// Harder Spout
	event
		.shaped(Item.of("create:spout"), [" C ", " K ", " S "], {
			C: "create:copper_casing",
			K: "minecraft:dried_kelp",
			S: "create_dd:sealed_mechanism",
		})
		.id("kubejs:master/crafting/spout");

	// Harder Fluid Tank
	event
		.shaped("create:fluid_tank", [" C ", " B ", " C "], {
			C: "#forge:plates/copper",
			B: "metalbarrels:gold_barrel",
		})
		.id("kubejs:master/crafting/fluid_tank");

	// Harder Bronze Casing
	event
		.shapeless("create_dd:reinforcement_plating", [
			"#forge:storage_blocks/steel",
			"#forge:storage_blocks/bronze",
			"#forge:storage_blocks/bronze",
			"#forge:storage_blocks/steel",
		])
		.id("kubejs:master/crafting/reinforcement_plating");
	event.recipes.create
		.deploying("create_dd:bronze_casing", ["create_dd:reinforcement_plating", "create_dd:bronze_ingot"])
		.id("kubejs:master/deploying/bronze_casing");

	// Concrete
	event
		.stonecutting("2x createindustry:concrete_slab", "createindustry:concrete")
		.id("kubejs:master/stonecutting/concrete_slab");
	event
		.stonecutting("createindustry:concrete_stairs", "createindustry:concrete")
		.id("kubejs:master/stonecutting/concrete_stairs");
	event
		.stonecutting("createindustry:concrete_wall", "createindustry:concrete")
		.id("kubejs:master/stonecutting/concrete_wall");
	event.recipes.create
		.filling("createindustry:liquid_concrete_bucket", [
			Fluid.of("createindustry:liquid_concrete", 500),
			"minecraft:bucket",
		])
		.id("kubejs:master/filling/liquid_concrete_bucket");
	event.recipes.create
		.emptying(
			[Fluid.of("createindustry:liquid_concrete", 500), "minecraft:bucket"],
			"createindustry:liquid_concrete_bucket"
		)
		.id("kubejs:master/emptying/liquid_concrete_bucket");

	// Insulaton Brush
	event
		.shaped("kubejs:insulation_brush", ["HP", "NH"], {
			H: "minecraft:honeycomb",
			P: "#forge:plates/iron",
			N: "#forge:nuggets/iron",
		})
		.id("kubejs:master/crafting/insulation_brush");
	event
		.shapeless("kubejs:insulation_brush", ["2x minecraft:honeycomb", "create_things_and_misc:glue_packaging"])
		.id("kubejs:master/crafting/insulation_brush_alt");

	// Waterproof Planks
	event.recipes.create
		.item_application("kubejs:waterproof_planks", ["#minecraft:planks", "kubejs:insulation_brush"])
		.id("kubejs:master/item_application/waterproof_planks");
	// Copper Casing
	event.remove({ output: "create:copper_casing" });
	event.recipes.create
		.item_application("create:copper_casing", ["kubejs:waterproof_planks", "#forge:ingots/copper"])
		.id("kubejs:master/item_application/copper_casing");

	// Harder steam engine
	event
		.shaped(Item.of("create:steam_engine"), [" G ", "IMS", " C "], {
			G: "create:golden_sheet",
			I: "create_dd:infernal_mechanism",
			M: "create_dd:integrated_mechanism",
			S: "create_dd:sealed_mechanism",
			C: "minecraft:copper_block",
		})
		.id("kubejs:master/crafting/steam_engine");

	// Cheaper Brass Hand
	event.replaceInput({ output: "create:brass_hand" }, "#forge:plates/brass", "#minecraft:planks");
	event.remove({ id: "create_dd:crafting/brass_hand" });

	// Harder Deployer
	event
		.shaped(Item.of("create:deployer"), [" E ", " A ", " B "], {
			E: "create:electron_tube",
			A: "create:andesite_casing",
			B: "create:brass_hand",
		})
		.id("kubejs:master/crafting/deployer");

	// Explorer Lootbox
	event
		.shaped("kubejs:lootbox_explorer", ["EEE", "ELE", "EEE"], {
			E: "#minecraft:planks",
			L: "naturescompass:naturescompass",
		})
		.id("kubejs:master/crafting/lootbox_explorer");

	// Explorer Compass
	event
		.shapeless("explorerscompass:explorerscompass", ["naturescompass:naturescompass"])
		.id("kubejs:master/explorer_compass");
	// Nature Compass
	event
		.shapeless("naturescompass:naturescompass", ["explorerscompass:explorerscompass"])
		.id("kubejs:master/crafting/naturescompass");

	// Cheaper Enchants
	event.replaceInput(
		{ output: "create_enchantment_industry:enchanting_guide" },
		"create:sturdy_sheet",
		"create_dd:andesite_sheet"
	);

	// Lattice
	event
		.shaped(Item.of("decorative_blocks:lattice"), ["SS ", "SS ", "   "], {
			S: "minecraft:stick",
		})
		.id("kubejs:master/crafting/lattice");

	// Extendo Grip
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
		.id("kubejs:master/mechanical_crafting/extendo_grip_with_nbt");

	// Fix Dryer Recipe;
	event
		.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
			S: "#minecraft:wooden_slabs",
		})
		.id("kubejs:master/crafting/dryer");

	// Wood Pulping
	event.recipes.create
		.mixing(
			[Fluid.of("create_paper_line:wood_pulp", 200)],
			[Fluid.of("minecraft:water", 250), "create_paper_line:saw_dust", "farmersdelight:tree_bark"]
		)
		.id("kubejs:master/mixing/wood_pulp");

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
		.id("kubejs:master/mixing/whitened_wood_pulp");

	// Replace frame with canvas
	event.replaceInput({ input: "create_paper_line:frame" }, "create_paper_line:frame", "farmersdelight:canvas");

	// Bucket Recipes
	event.recipes.create
		.filling("create_paper_line:wood_pulp_bucket", [
			Fluid.of("create_paper_line:wood_pulp", 1000),
			"minecraft:bucket",
		])
		.id("kubejs:master/filling/wood_pulp_bucket");
	event.recipes.create
		.filling("create_paper_line:whitened_wood_pulp_bucket", [
			Fluid.of("create_paper_line:whitened_wood_pulp", 1000),
			"minecraft:bucket",
		])
		.id("kubejs:master/filling/whitened_wood_pulp_bucket");

	// Infinite Water Bucket
	event
		.shaped(
			Item.of(
				"minecraft:water_bucket",
				'{CustomModelData:1,HideFlags:1,display:{Name:\'{"text":"Infinite Water Bucket","italic":false}\'}}'
			).enchant("minecraft:infinity", 1),
			["NNN", "NWN", "NNN"],
			{
				N: "create_dd:mithril_nugget",
				W: "minecraft:water_bucket",
			}
		)
		.id("kubejs:master/infinite_water_bucket");

	// Cheap Create Design n' Decor Lamps
	const designDecoLamps = ["copper", "zinc", "brass"];
	designDecoLamps.forEach((designDecoLamp) => {
		event.remove({ output: `design_decor:${designDecoLamp}_lamp` });
		event
			.shaped(`4x design_decor:${designDecoLamp}_lamp`, [" M ", "MGM", " M "], {
				M: "#forge:nuggets/" + designDecoLamp,
				G: "minecraft:glowstone_dust",
			})
			.id(`kubejs:master/lamp/${designDecoLamp}`);
	});
	// Polished Block(s)
	const polishedMats = ["bronze", "zinc", "andesite_alloy", "steel"];
	polishedMats.forEach((polishedMat) => {
		event.remove({ output: `create_dd:${polishedMat}_polished_block` });
		event
			.shaped(`48x create_dd:${polishedMat}_polished_block`, ["xx", "xx"], {
				x: `4x #forge:storage_blocks/${polishedMat}`,
			})
			.id(`kubejs:master/polished_block/${polishedMat}`);
	});
	// Cheap Casing Trapdoor
	const misc_casings = ["andesite", "brass", "copper"];
	misc_casings.forEach((casing) => {
		event.remove({ output: `create_things_and_misc:${casing}_casing_trapdoor` });
		event
			.stonecutting(`4x create_things_and_misc:${casing}_casing_trapdoor`, `create:${casing}_casing`)
			.id(`kubejs:master/stonecutting/${casing}_casing_trapdoor`);
	});
	// Cheap Steel Casing
	event.recipes
		.createItemApplication("kubejs:steel_casing", ["#forge:stripped_logs", "#forge:nuggets/steel"])
		.keepHeldItem()
		.id("kubejs:master/item_application/steel_casing_from_log");
	event.recipes
		.createItemApplication("kubejs:steel_casing", ["#forge:stripped_wood", "#forge:nuggets/steel"])
		.keepHeldItem()
		.id("kubejs:master/item_application/steel_casing_from_wood");
	// Cheap Netherite Building Blocks
	event
		.stonecutting("16x createdeco:netherite_bars", "#forge:ingots/netherite")
		.id("kubejs:master/stonecutting/netherite_bars");
	event
		.shaped("64x createdeco:netherite_bars", ["SSS", "SSS"], {
			S: "#forge:ingots/netherite",
		})
		.id("kubejs:master/crafting/netherite_bars");
	// Cheap Cast Iron
	event.recipes.create
		.compacting("createdeco:cast_iron_ingot", ["minecraft:iron_ingot", "#minecraft:coals"])
		.heated()
		.id("kubejs:master/compacting/cast_iron_ingot");
	event.remove({ id: "minecraft:compacting/cast_iron_block" });
	event.recipes.create
		.compacting("createdeco:cast_iron_block", ["minecraft:iron_block", "#forge:storage_blocks/coal"])
		.heated()
		.id("kubejs:master/compacting/cast_iron_block");
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

	// Renewable Create Stone Type
	// Diorite
	event.recipes.create
		.mixing("minecraft:diorite", ["minecraft:cobblestone", "minecraft:quartz"])
		.id("kubejs:master/diorite");
	// Calcite
	event.recipes.create
		.mixing("minecraft:calcite", ["minecraft:diorite", "minecraft:quartz"])
		.id("kubejs:master/calcite");
	// Limestone
	event.recipes.create
		.mixing("create:limestone", ["minecraft:calcite", "minecraft:gravel"])
		.id("kubejs:master/limestone");
	event.recipes.create
		.compacting("minecraft:tuff", [
			Fluid.of("minecraft:lava", 1000),
			"create:scoria",
			"minecraft:cobbled_deepslate",
		])
		.id("kubejs:master/tuff");
	// Prismarine Bricks
	event.recipes.create
		.compacting("minecraft:prismarine_bricks", ["2x minecraft:prismarine"])
		.id("kubejs:master/prismarine_bricks");
	// Deepslate
	event.recipes.create
		.compacting("minecraft:deepslate", ["4x minecraft:cobblestone", Fluid.of("minecraft:lava", 2000)])
		.heated()
		.id("kubejs:master/deepslate");
	// Veridium
	event.recipes.create
		.compacting("create:veridium", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "create:limestone"])
		.id("kubejs:master/veridium");
	// Ochrum
	event.recipes.create
		.compacting("create:ochrum", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:granite"])
		.id("kubejs:master/ochrum");
	// Crimsite
	event.recipes.create
		.compacting("create:crimsite", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:diorite"])
		.id("kubejs:master/crimsite");
	// Asurine
	event.recipes.create
		.compacting("create:asurine", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:andesite"])
		.id("kubejs:master/asurine");

	// Personal Shrinking Device
	event.recipes
		.createMechanicalCrafting("shrink:shrinking_device", [" DQD ", "TSSST", "SBSRS", "TSSST"], {
			D: "create:display_board",
			Q: "create_dd:calculation_mechanism",
			T: "create:railway_casing",
			B: "infinitybuttons:blue_emergency_button",
			R: "infinitybuttons:red_emergency_button",
			S: "create_dd:steel_sheet",
		})
		.id("kubejs:master/shrinking_device");

	// Crushed Bone Meal
	event.recipes.create
		.milling(
			["kubejs:crushed_bonemeal", Item.of("kubejs:crushed_bonemeal").withChance(0.5)],
			["minecraft:bone_meal"]
		)
		.id("kubejs:master/crushed_bonemeal");

	// Create Deco Bricks
	const createDecoBricks = [
		{ name: "pearl", material: "limestone" },
		{ name: "blue", material: "asurine" },
		{ name: "scarlet", material: "crimsite" },
		{ name: "dean", material: "ochrum" },
		{ name: "dusk", material: "scorchia" },
	];
	createDecoBricks.forEach((brick) => {
		event.remove({ id: `createdeco:${brick.name}_bricks` });
		event.shaped(`8x createdeco:${brick.name}_bricks`, ["BBB", "BMB", "BBB"], {
			B: "#forge:ingots/brick",
			M: "#create:stone_types/" + brick.material,
		});
	});

	// Cheaper Bricks
	event.remove({ output: "minecraft:bricks" });
	event
		.shaped("minecraft:bricks", ["BB", "BB"], {
			B: "minecraft:brick",
		})
		.id("kubejs:master/brick_manual_only");
	event.recipes.create.compacting("minecraft:bricks", "3x minecraft:brick").id("kubejs:master/bricks");

	event.remove({ output: "createdeco:worn_bricks" });
	event
		.shaped("createdeco:worn_bricks", ["BB", "BB"], {
			B: "createdeco:worn_brick",
		})
		.id("kubejs:master/worn_bricks_manual_only");
	event.recipes.create
		.compacting("createdeco:worn_bricks", "3x createdeco:worn_brick")
		.id("kubejs:master/worn_bricks");
	event.smelting("createdeco:worn_bricks", "minecraft:bricks").xp(0.3).id("kubejs:master/worn_bricks_smelting");
	event.blasting("createdeco:worn_bricks", "minecraft:bricks").xp(0.3).id("kubejs:master/worn_bricks_blasting");

	// Convert different brick types into each other
	const brickTypes = ["worn", "pearl", "red", "dusk", "scarlet", "dean", "blue"];
	brickTypes.forEach((brickType) => {
		let brickTag = `#as:brick_types/${brickType}`;
		let baseBrickBlock = new RegExp(`createdeco:.*${brickType}_.*brick(s)?`);
		// Edge case for red bricks
		if (brickType == "red") {
			brickTag = "#as:brick_types/default";
			baseBrickBlock = "minecraft:bricks";
		}
		// Replace stonecutting recipes base brick with the unified tag (eg reuse stairs & walls)
		event.replaceInput({ type: "minecraft:stonecutting", input: baseBrickBlock }, baseBrickBlock, brickTag);
		// Add stonecutting recipes to convert tagged bricks (eg stairs/walls) back into base bricks block
		event.stonecutting(baseBrickBlock, brickTag);
	});

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
			.splashing([`#forge:ingots/${item.name}`, item.byproduct], `create:crushed_raw_${item.name}`)
			.id("kubejs:master/ingot_from_crushed_" + item.name);
	});

	// Renaming Items using Nametag
	event
		.shapeless(
			Item.of("minecraft:name_tag", '{display:{Name:\'{"text":"Your Item with the Name Tag Name HERE!"}\'}}'),
			["minecraft:name_tag", "#kubejs:all_items", "supplementaries:antique_ink"]
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
		.id("kubejs:master/rename_with_nametag_manual_only");

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

			console.log(nameTag, dye, color);

			let nbt = nameTag.nbt;
			if (nbt == null) {
				nbt = { display: { Name: '{ "text": "Name Tag", "color": "#FFFFFF" }' } };
			}
			// Apply the new color
			console.log("Before: " + nbt.display.Name);
			nbt.display.Name = nbt.display.Name.replace(/#[0-9A-F]{6}/g, "#" + color);
			console.log("After: " + nbt.display.Name);

			// Create the new item with the color NBT
			let outputItem = Item.of(nameTag.id).withNBT(nbt);
			return nameTag;
		})
		.id("kubejs:master/nametag_dying_manual_only");

	// Cheaper Diluted Bone Meal
	event.remove({ output: Fluid.of("create_things_and_misc:diluted_bonemeal") });
	event.recipes.create
		.mixing(Fluid.of("create_things_and_misc:diluted_bonemeal", 1000), [
			Fluid.of("minecraft:water", 1000),
			"kubejs:crushed_bonemeal",
		])
		.id("kubejs:master/diluted_bonemeal");

	// Cooking Pot
	event.shaped("farmersdelight:cooking_pot", ["B B", "IWI", "III"], {
		B: "minecraft:brick",
		W: "minecraft:water_bucket",
		I: "#forge:ingots/iron",
	});

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
		.id("kubejs:master/milling/rice");

	// Cheaper Canvas
	event
		.shaped("farmersdelight:canvas", ["SS", "SS"], {
			S: "farmersdelight:straw",
		})
		.id("kubejs:master/canvas_manual_only");
	event.recipes.create
		.compacting("farmersdelight:canvas", ["2x farmersdelight:straw"])
		.id("kubejs:master/crafting/canvas");

	// Melter
	event.recipes.create
		.mechanical_crafting("melter:melter", ["N  N", "N  N", "N  N", "pNNp"], {
			N: "#forge:ingots/netherite",
			p: "createindustry:plastic_sheet",
		})
		.id("kubejs:master/mechanical_craft/melter");

	// Andesite Nugget
	event
		.shapeless("9x kubejs:andesite_nugget", ["create:andesite_alloy"])
		.id("kubejs:master/crafting/andesite_nugget_from_alloy");
	event.recipes.create
		.compacting("create:andesite_alloy", "9x kubejs:andesite_nugget")
		.id("kubejs:master/compacting/andesite_nugget");

	// Metal Barrels
	event.recipes.create
		.deploying("metalbarrels:iron_barrel", ["minecraft:barrel", "#forge:plates/andesite_alloy"])
		.id("kubejs:master/crafting/andesite_barrel");
	event.recipes.create
		.deploying("metalbarrels:wood_to_iron", ["minecraft:stick", "#forge:plates/andesite_alloy"])
		.id("kubejs:master/crafting/vanilla_to_andesite_barrel_upgrade");

	event.recipes.create
		.deploying("metalbarrels:gold_barrel", ["metalbarrels:iron_barrel", "#forge:plates/copper"])
		.id("kubejs:master/crafting/copper_barrel");
	event.recipes.create
		.deploying("metalbarrels:iron_to_gold", ["minecraft:stick", "#forge:plates/copper"])
		.id("kubejs:master/crafting/andesite_to_copper_barrel_upgrade");

	event.recipes.create
		.deploying("metalbarrels:diamond_barrel", ["metalbarrels:gold_barrel", "#forge:plates/brass"])
		.id("kubejs:master/crafting/brass_barrel");
	event.recipes.create
		.deploying("metalbarrels:gold_to_diamond", ["minecraft:stick", "#forge:plates/brass"])
		.id("kubejs:master/crafting/copper_to_brass_barrel_upgrade");

	// Lodestone
	event
		.shaped("8x minecraft:lodestone", ["III", "IDI", "III"], {
			I: "minecraft:chiseled_stone_bricks",
			D: "#forge:ingots/brass",
		})
		.id("kubejs:master/crafting/lodestone");

	// White Wool
	event.recipes.create
		.compacting("minecraft:white_wool", "3x #forge:string")
		.id("kubejs:master/compacting/white_wool_from_string");

	// Cobweb
	event.recipes.create.compacting("minecraft:cobweb", "9x #forge:string").id("kubejs:master/compacting/cobweb");

	// Hanging Roots
	event.recipes.create
		.haunting("minecraft:hanging_roots", "minecraft:mangrove_propagule")
		.id("kubejs:master/haunting/hanging_roots_from_mangrove");

	// Cheaper Jukebox
	event.replaceInput({ id: "minecraft:jukebox" }, "minecraft:diamond", "#forge:ingots/cast_iron");

	// Rooted Dirt
	event.recipes.create
		.deploying("minecraft:rooted_dirt", ["minecraft:dirt", "minecraft:hanging_roots"])
		.id("kubejs:master/deploying/rooted_dirt");

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
		.id("kubejs:master/sequenced/name_tag");

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
		.id("kubejs:master/sequenced/saddle");

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
		.id("kubejs:master/sequenced/totem_of_undying");

	// Sandpaper
	event
		.shaped("2x kubejs:sugar_paper", ["SSS", "   ", "   "], {
			S: "minecraft:sugar_cane",
		})
		.id("kubejs:master/crafting/sugar_paper");

	event.remove({ output: "create:sand_paper" });
	event.remove({ output: "create:red_sand_paper" });
	event
		.shapeless("create:sand_paper", ["minecraft:sand", "#kubejs:low_quality_paper"])
		.id("kubejs:master/crafting/sand_paper");
	event
		.shapeless("create:red_sand_paper", ["minecraft:red_sand", "#kubejs:low_quality_paper"])
		.id("kubejs:master/crafting/red_sand_paper");
	event.replaceInput({ output: "minecraft:cartography_table" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "create:clipboard" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "supplementaries:notice_board" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "minecraft:map" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "minecraft:filled_map" }, "minecraft:paper", "#kubejs:low_quality_paper");
	event.replaceInput({ output: "supplementaries:crimson_lantern" }, "minecraft:paper", "#kubejs:low_quality_paper");

	// Harder Train Controls
	event
		.shaped("create:controls", [" L ", " T ", "P I"], {
			L: "minecraft:lever",
			T: "create:railway_casing",
			P: "create:precision_mechanism",
			I: "create_dd:integrated_mechanism",
		})
		.id("kubejs:master/crafting/train_controls");

	// Harder Drill
	event
		.shaped(Item.of("create:mechanical_drill"), [" A ", "ASA", " C "], {
			A: "create:andesite_alloy",
			S: "#forge:plates/steel",
			C: "create:andesite_casing",
		})
		.id("kubejs:master/crafting/mechanical_drill");

	// Shadow Steel
	event.recipes.create
		.mixing([Item.of("create_dd:shadow_steel")], ["minecraft:netherite_block", "8x #forge:plates/steel"])
		.superheated()
		.id("kubejs:master/mixing/shadow_steel");

	// Fix brass speaker craft
	event
		.shaped(Item.of("create_things_and_misc:brass_speaker"), [" R ", " N ", " R "], {
			R: "create:railway_casing",
			N: "minecraft:note_block",
		})
		.id("kubejs:master/crafting/brass_speaker");

	// Radar
	event
		.shaped("create_things_and_misc:radar", ["ASA", "AMA", "AAA"], {
			A: "create:andesite_alloy",
			S: "create:display_board",
			M: "create_dd:integrated_mechanism",
		})
		.id("kubejs:master/crafting/radar");

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
		.superheated()
		.id("kubejs:master/mixing/mithril_ingot");

	// Asphalt
	event.recipes.create
		.mixing(["16x create_dd:asphalt_block"], ["2x create:scoria", Fluid.of("create_things_and_misc:slime", 100)])
		.heated()
		.id("kubejs:master/mixing/asphalt");

	// Electron Tube
	event
		.shaped("8x create:electron_tube", [" R ", " N ", " P "], {
			R: "create:polished_rose_quartz",
			N: "#forge:nuggets/copper",
			P: "createindustry:plastic_sheet",
		})
		.id("kubejs:master/crafting/electron_tube");

	// Easier Framed Glass
	event.replaceInput({ input: "create:framed_glass" }, "create:framed_glass", "#forge:glass/colorless");

	// Fix Dough
	event.replaceInput({ input: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "create:dough");

	// Nerf Tuff Crusing
	event.recipes.create
		.crushing(["create_dd:potassic_cobble"], "#create:stone_types/tuff")
		.id("kubejs:master/crushing/potassic_from_tuff");

	// Remove Electrum
	event.replaceOutput(
		{ output: "createaddition:electrum_nugget" },
		"#forge:nuggets/electrum",
		Item.of("minecraft:air")
	);

	// Fix Steel
	event.remove("createindustry:casting/steel");
	event
		.custom({
			type: "createindustry:casting",
			ingredients: [
				{
					fluid: "createindustry:molten_steel",
					amount: 1,
				},
			],
			processingTime: 300,
			results: [
				{
					count: 1,
					item: "create_dd:steel_ingot",
				},
				{
					count: 1,
					item: "create_dd:steel_block",
				},
			],
		})
		.id("kubejs:master/casting/steel");

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
		.id("kubejs:master/crafting/cog_block");

	// Bones into Ash
	event.smelting("3x supplementaries:ash", "minecraft:bone").id("kubejs:master/smelting/ash_from_bone");
	event.smoking("3x supplementaries:ash", "minecraft:bone").id("kubejs:master/smoking/ash_from_bone");
	event.smelting("2x supplementaries:ash", "minecraft:rotten_flesh").id("kubejs:master/smelting/ash_from_flesh");
	event.smoking("2x supplementaries:ash", "minecraft:rotten_flesh").id("kubejs:master/smoking/ash_from_flesh");

	// Palette
	event
		.shaped(Item.of("wands:palette"), ["III", "IVI", "III"], {
			I: "minecraft:item_frame",
			V: "create:item_vault",
		})
		.id("kubejs:master/crafting/wand_palette");

	// Wand
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
		.id("kubejs:master/mechanical/building_wand");

	// Trader Block
	event
		.shaped(Item.of("easy_villagers:trader"), ["AAA", "A A", "CPC"], {
			A: "createdeco:andesite_bars",
			C: "create:andesite_casing",
			P: "#minecraft:planks",
		})
		.id("kubejs:master/crafting/villager_trader");

	// Breeder
	event
		.shaped(Item.of("easy_villagers:breeder"), ["AAA", "ABA", "CPC"], {
			A: "createdeco:andesite_bars",
			C: "create:andesite_casing",
			P: "#minecraft:planks",
			B: "#minecraft:beds",
		})
		.id("kubejs:master/crafting/villager_breeder");

	// Auto Trader
	event
		.shaped(Item.of("easy_villagers:auto_trader"), ["AAA", "A A", "CNC"], {
			A: "createdeco:brass_bars",
			C: "create:brass_casing",
			N: "minecraft:netherite_block",
		})
		.id("kubejs:master/crafting/auto_villager_trader");

	// Converter
	event
		.shaped(Item.of("easy_villagers:converter"), ["AAA", "ABA", "CNC"], {
			A: "createdeco:brass_bars",
			B: "minecraft:rotten_flesh",
			C: "create:brass_casing",
			N: "#minecraft:planks",
		})
		.id("kubejs:master/crafting/villager_converter");

	// Incubator
	event
		.shaped(Item.of("easy_villagers:incubator"), ["AAA", "ABA", "CNC"], {
			A: "createdeco:andesite_bars",
			B: "#minecraft:wool",
			C: "create:andesite_casing",
			N: "#minecraft:planks",
		})
		.id("kubejs:master/crafting/villager_incubator");

	// Demagnetization Coil
	event
		.shaped(Item.of("simplemagnets:advanced_demagnetization_coil"), [" E ", " S ", " B "], {
			E: "create:electron_tube",
			S: "create:shaft",
			B: "create:brass_casing",
		})
		.id("kubejs:master/crafting/demagnetization_coil");

	// Magnet
	event.recipes
		.createMechanicalCrafting("simplemagnets:advancedmagnet", ["I I", "E E", "R R", "RQR"], {
			I: "create:iron_sheet",
			E: "create:electron_tube",
			R: "create:polished_rose_quartz",
			Q: "create_things_and_misc:rose_quartz_sheet",
		})
		.id("kubejs:master/mechanical/magnet");

	// Elite Coil
	event
		.shaped(Item.of("ironjetpacks:elite_coil"), [" DR", "DPD", "RD "], {
			D: "minecraft:diamond",
			R: "minecraft:redstone",
			P: "create:precision_mechanism",
		})
		.id("kubejs:master/crafting/elite_coil");

	// Jetpack
	event.recipes.create
		.mechanical_crafting(
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
		)
		.id("kubejs:master/mechanical/jetpack");

	// Sifter
	event
		.shaped(Item.of("createsifter:sifter"), [" F ", " P ", " S "], {
			F: "minecraft:flint",
			P: "#minecraft:planks",
			S: "#forge:stone",
		})
		.id("kubejs:master/crafting/sifter");

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
			.id(`kubejs:master/crafting/${mesh.name}_mesh`);
	});

	// Refined Stone
	event.recipes
		.createsifterSifting("kubejs:refined_stone", ["#forge:cobblestone", "createsifter:string_mesh"])
		.id("kubejs:master/sifting/refined_stone");

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
		.id("kubejs:master/sifting/netherrack");

	// Brass Chunkloader
	event.remove({ output: "create_power_loader:empty_brass_chunk_loader" });
	event.remove({ output: "create_power_loader:brass_chunk_loader" });
	event
		.shaped(Item.of("create_power_loader:brass_chunk_loader"), ["GGGGG", "G   G", "G Z G", "BPXPB", "BBSBB"], {
			G: "#forge:glass/colorless",
			B: "create:brass_sheet",
			P: "create:precision_mechanism",
			X: "create_things_and_misc:vibration_mechanism",
			Z: "create_power_loader:andesite_chunk_loader",
			S: "create:shaft",
		})
		.id("kubejs:master/crafting/chunk_loader_brass");

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
				"#kubejs:windmill_sails",
				wood == "bamboo" ? `quark:bamboo_planks` : `minecraft:${wood}_planks`,
			])
			.id(`kubejs:master/crafting/${wood}_sail`);
	});

	// Liquid Concrete
	event.remove({ id: "createindustry:mixing/liquid_concrete_from_slag" });
	event.recipes.create
		.mixing(Fluid.of("createindustry:liquid_concrete", 1500), [
			"createindustry:slag",
			Fluid.of("minecraft:water", 500),
			"createindustry:cement",
		])
		.id("kubejs:master/mixing/liquid_concrete_from_slag");
	event.remove({ id: "createindustry:mixing/liquid_concrete_" });
	event.recipes.create
		.mixing(Fluid.of("createindustry:liquid_concrete", 1000), [
			"createindustry:limesand",
			"minecraft:clay_ball",
			Fluid.of("minecraft:water", 500),
		])
		.id("kubejs:master/mixing/liquid_concrete");

	// Fireclay Balls from Fireclay
	// Mainly so you can see them in JEI
	event.recipes.create
		.milling(
			[
				"4x createindustry:fireclay_ball",
				Item.of("createindustry:fireclay_ball").withChance(0.75),
				Item.of("createindustry:fireclay_ball").withChance(0.5),
			],
			"createindustry:fireclay"
		)
		.id("kubejs:master/milling/fireclay_balls");
});
