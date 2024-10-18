// priority: 0
ServerEvents.recipes((event) => {
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
			.id("cosmic_contraptions:create/compacting/" + block.item + "_block_from_ingots");
		// Ingots from nuggets
		if (block.type == "ingots") {
			event.recipes.create
				.compacting(`#forge:ingots/${block.item}`, `9x #forge:nuggets/${block.item}`)
				.id("cosmic_contraptions:create/compacting/" + block.item + "_ingot_from_nuggets");
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
		.id("cosmic_contraptions:create/industrial_iron_block");

	// Lapis Alloy
	event.recipes.create
		.mixing("#forge:ingots/lapis", ["#forge:gems/lapis", "#forge:nuggets/iron"])
		.id("cosmic_contraptions:create/lapis_alloy");
	// Vault Casing
	event.recipes.create
		.item_application("cosmic_contraptions:vault_casing", ["create:industrial_iron_block", "#forge:ingots/lapis"])
		.id("cosmic_contraptions:create/vault_casing");

	// Raw Iron Washing
	event.recipes.create
		.splashing("9x #forge:nuggets/iron", "create:crushed_raw_iron")
		.id("cosmic_contraptions:create/raw_iron_washing");

	// Harder Minecart Assembler
	event.remove({ output: "create:cart_assembler" });
	event
		.shaped("create:cart_assembler", ["   ", "TRT", "B B"], {
			T: "create:railway_casing",
			R: "create:controls",
			B: "create:brass_casing",
		})
		.id("cosmic_contraptions:create/cart_assembler");

	// Harder Rotation Speed Controller
	event.remove({ output: "create:rotation_speed_controller" });
	event
		.shaped("create:rotation_speed_controller", [" M ", " B ", "   "], {
			M: "create_dd:integrated_mechanism",
			B: "create:brass_casing",
		})
		.id("cosmic_contraptions:create/rotation_speed_controller");

	// Cheap Hand Crank
	event
		.shaped(Item.of("create:hand_crank"), ["PPP", "  S", "   "], {
			P: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("cosmic_contraptions:create/hand_crank");
	// Cheap Crank Wheel
	event
		.shapeless("create_connected:crank_wheel", ["#minecraft:planks", "create:hand_crank"])
		.id("cosmic_contraptions:create/crank_wheel");

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
		.id("cosmic_contraptions:create/infernal_mechanism");

	// Harder Hydraulic Press
	event.remove({ output: "create_dd:hydraulic_press" });
	event.recipes.create
		.mechanical_crafting("create_dd:hydraulic_press", [" S ", " H ", "CPC"], {
			S: "create_dd:sealed_mechanism",
			H: "create_dd:hydraulic_casing",
			C: "#forge:storage_blocks/copper",
			P: "create:mechanical_press",
		})
		.id("cosmic_contraptions:create/hydraulic_press");

	// Harder Item Vault
	event
		.shaped("create:item_vault", [" I ", " C ", " I "], {
			I: "#forge:plates/iron",
			C: "cosmic_contraptions:vault_casing",
		})
		.id("cosmic_contraptions:create/item_vault");
	event.remove({ id: "create_connected:crafting/kinetics/item_silo" });
	event
		.shaped("create_connected:item_silo", ["   ", "ICI", "   "], {
			I: "#forge:plates/iron",
			C: "cosmic_contraptions:vault_casing",
		})
		.id("cosmic_contraptions:create/item_silo");

	// Harder Spout
	event.remove({ output: "create:spout" });
	event
		.shaped(Item.of("create:spout"), [" C ", " K ", " S "], {
			C: "create:copper_casing",
			K: "minecraft:dried_kelp",
			S: "create_dd:sealed_mechanism",
		})
		.id("cosmic_contraptions:create/spout");

	// Harder Fluid Tank
	event.remove({ output: "create:fluid_tank" });
	event.remove({ output: "create_connected:fluid_vessel" });
	event
		.shaped("create:fluid_tank", [" C ", " B ", " C "], {
			C: "#forge:plates/copper",
			B: "metalbarrels:gold_barrel",
		})
		.id("cosmic_contraptions:create/fluid_tank");
	event
		.shaped("create_connected:fluid_vessel", ["   ", "CBC", "   "], {
			C: "#forge:plates/copper",
			B: "metalbarrels:gold_barrel",
		})
		.id("cosmic_contraptions:create/fluid_vessel");
	event
		.shapeless("create:fluid_tank", ["create_connected:fluid_vessel"])
		.id("cosmic_contraptions:create/fluid_tank_conversion");
	event
		.shapeless("create_connected:fluid_vessel", ["create:fluid_tank"])
		.id("cosmic_contraptions:create/fluid_vessel_conversion");

	// Concrete
	event.stonecutting("2x tfmg:concrete_slab", "tfmg:concrete").id("cosmic_contraptions:create/concrete_slab");
	event.stonecutting("tfmg:concrete_stairs", "tfmg:concrete").id("cosmic_contraptions:create/concrete_stairs");
	event.stonecutting("tfmg:concrete_wall", "tfmg:concrete").id("cosmic_contraptions:create/concrete_wall");

	// Insulaton Brush
	event
		.shaped("cosmic_contraptions:insulation_brush", ["HP", "NH"], {
			H: "minecraft:honeycomb",
			P: "#forge:plates/iron",
			N: "#forge:nuggets/iron",
		})
		.id("cosmic_contraptions:create/insulation_brush");
	event
		.shapeless("cosmic_contraptions:insulation_brush", [
			"2x minecraft:honeycomb",
			"create_things_and_misc:glue_packaging",
		])
		.id("cosmic_contraptions:create/insulation_brush_alt");

	// Waterproof Planks
	event.recipes.create
		.deploying("cosmic_contraptions:waterproof_planks", [
			"#minecraft:planks",
			"cosmic_contraptions:insulation_brush",
		])
		.id("cosmic_contraptions:create/waterproof_planks");

	// Copper Casing
	event.remove({ output: "create:copper_casing" });
	event.recipes.create
		.deploying("create:copper_casing", ["cosmic_contraptions:waterproof_planks", "#forge:plates/copper"])
		.id("cosmic_contraptions:create/copper_casing");

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
		.id("cosmic_contraptions:create/steam_engine");

	// Harder Drill
	event.remove({ output: "create:mechanical_drill" });
	event
		.shaped(Item.of("create:mechanical_drill"), [" A ", "ASA", " C "], {
			A: "#forge:ingots/andesite",

			S: "#forge:plates/steel",
			C: "create:andesite_casing",
		})
		.id("cosmic_contraptions:create/mechanical_drill");

	// Shadow Steel
	event.recipes.create
		.mixing(["#forge:ingots/shadow_steel"], ["#forge:storage_blocks/netherite", "8x #forge:plates/steel"])
		.superheated()
		.id("cosmic_contraptions:create/shadow_steel");

	// Fix brass speaker craft
	event
		.shaped(Item.of("create_things_and_misc:brass_speaker"), [" R ", " N ", " R "], {
			R: "create:railway_casing",
			N: "minecraft:note_block",
		})
		.id("cosmic_contraptions:create/brass_speaker");

	// Radar
	event.remove({ output: "create_things_and_misc:radar" });
	event
		.shaped("create_things_and_misc:radar", ["ASA", "AMA", "AAA"], {
			A: "#forge:ingots/andesite",
			S: "create:display_board",
			M: "create_dd:integrated_mechanism",
		})
		.id("cosmic_contraptions:create/radar");

	// Harder Electron Tube
	event.remove({ output: "create:electron_tube" });
	event
		.shaped("8x create:electron_tube", [" R ", " N ", " P "], {
			R: "create:polished_rose_quartz",
			N: "#forge:nuggets/copper",
			P: "tfmg:plastic_sheet",
		})
		.id("cosmic_contraptions:create/electron_tube");

	// Fix Dough
	event.replaceInput({ input: "create:dough" }, "create:dough", "#forge:dough");
	event.replaceInput({ input: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "#forge:dough");

	// Nerf Tuff Crusing
	event.recipes.create
		.crushing(["create_dd:dolomite"], "#create:stone_types/tuff")
		.id("cosmic_contraptions:create/tuff_crushing");

	// Remove Electrum
	event.replaceOutput(
		{ output: "createaddition:electrum_nugget" },
		"#forge:nuggets/electrum",
		Item.of("minecraft:air")
	);

	// Fix Coal Coke
	event.recipes.create
		.mixing("tfmg:coal_coke", "#minecraft:coals")
		.heated()
		.id("cosmic_contraptions:create/coal_coke");

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
			.id("cosmic_contraptions:create/sails/" + wood);
	});
});
