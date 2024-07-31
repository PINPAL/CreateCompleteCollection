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
		{ item: "cast_iron", type: "ingots" },
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
			.compacting(`#forge:storage_blocks/${block.item}`, `9x #forge:${block.type}/${block.item}`)
			.id("create_cc:create/compacting/" + block.item + "_block_from_ingots");
		// Ingots from nuggets
		if (block.type == "ingots") {
			event.recipes.create
				.compacting(`#forge:ingots/${block.item}`, `9x #forge:nuggets/${block.item}`)
				.id("create_cc:create/compacting/" + block.item + "_ingot_from_nuggets");
		}
	});

	// Lapis Alloy
	event.recipes.create
		.mixing("create_dd:lapis_alloy", ["minecraft:lapis_lazuli", "#forge:nuggets/tin"])
		.id("create_cc:create/lapis_alloy");

	// Raw Iron Washing
	event.recipes.create
		.splashing("9x minecraft:iron_nugget", "create:crushed_raw_iron")
		.id("create_cc:create/raw_iron_washing");

	// Diamond Grit Sandpaper
	event.remove({ output: "createaddition:diamond_grit_sandpaper" });
	event
		.shapeless(Item.of("createaddition:diamond_grit_sandpaper").withNBT("{Unbreakable:1b}"), [
			"#create:sandpaper",
			"create_cc:molten_diamond_ingot",
		])
		.id("create_cc:create/diamond_grit_sandpaper");

	// Harder Minecart Assembler
	event.remove({ output: "create:cart_assembler" });
	event
		.shaped("create:cart_assembler", ["   ", "TRT", "B B"], {
			T: "create:railway_casing",
			R: "create:controls",
			B: "create:brass_casing",
		})
		.id("create_cc:create/cart_assembler");

	// Harder Rotation Speed Controller
	event.remove({ output: "create:rotation_speed_controller" });
	event
		.shaped("create:rotation_speed_controller", [" M ", " B ", "   "], {
			M: "create_dd:integrated_mechanism",
			B: "create:brass_casing",
		})
		.id("create_cc:create/rotation_speed_controller");

	// Cheap Hand Crank
	event
		.shaped(Item.of("create:hand_crank"), ["PPP", "  S", "   "], {
			P: "#minecraft:planks",
			S: "minecraft:stick",
		})
		.id("create_cc:create/hand_crank");
	// Cheap Crank Wheel
	event
		.shapeless("create_connected:crank_wheel", ["#minecraft:planks", "create:hand_crank"])
		.id("create_cc:create/crank_wheel");

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
		.id("create_cc:create/infernal_mechanism");

	// Harder Hydraulic Press
	event.remove({ output: "create_dd:hydraulic_press" });
	event.recipes.create
		.mechanical_crafting("create_dd:hydraulic_press", [" S ", " H ", "CPC"], {
			S: "create_dd:sealed_mechanism",
			H: "create_dd:hydraulic_casing",
			B: "#forge:storage_blocks/copper",
			P: "create:mechanical_press",
		})
		.id("create_cc:create/hydraulic_press");

	// Harder Spout
	event.remove({ output: "create:spout" });
	event
		.shaped(Item.of("create:spout"), [" C ", " K ", " S "], {
			C: "create:copper_casing",
			K: "minecraft:dried_kelp",
			S: "create_dd:sealed_mechanism",
		})
		.id("create_cc:create/spout");

	// Harder Fluid Tank
	event.remove({ output: "create:fluid_tank" });
	event.remove({ output: "create_connected:fluid_vessel" });
	event
		.shaped("create:fluid_tank", [" C ", " B ", " C "], {
			C: "#forge:plates/copper",
			B: "metalbarrels:gold_barrel",
		})
		.id("create_cc:create/fluid_tank");
	event
		.shaped("create_connected:fluid_vessel", ["   ", "CBC", "   "], {
			C: "#forge:plates/copper",
			B: "metalbarrels:gold_barrel",
		})
		.id("create_cc:create/fluid_vessel");
	event
		.shapeless("create:fluid_tank", ["create_connected:fluid_vessel"])
		.id("create_cc:create/fluid_tank_conversion");
	event
		.shapeless("create_connected:fluid_vessel", ["create:fluid_tank"])
		.id("create_cc:create/fluid_vessel_conversion");

	// Concrete
	event.stonecutting("2x tfmg:concrete_slab", "tfmg:concrete").id("create_cc:create/concrete_slab");
	event.stonecutting("tfmg:concrete_stairs", "tfmg:concrete").id("create_cc:create/concrete_stairs");
	event.stonecutting("tfmg:concrete_wall", "tfmg:concrete").id("create_cc:create/concrete_wall");

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
		.id("create_cc:create/steam_engine");

	// Harder Drill
	event.remove({ output: "create:mechanical_drill" });
	event
		.shaped(Item.of("create:mechanical_drill"), [" A ", "ASA", " C "], {
			A: "#forge:ingots/andesite",

			S: "#forge:plates/steel",
			C: "create:andesite_casing",
		})
		.id("create_cc:create/mechanical_drill");

	// Shadow Steel
	event.recipes.create
		.mixing(["#forge:ingots/shadow_steel"], ["#forge:storage_blocks/netherite", "8x #forge:plates/steel"])
		.superheated()
		.id("create_cc:create/shadow_steel");

	// Fix brass speaker craft
	event
		.shaped(Item.of("create_things_and_misc:brass_speaker"), [" R ", " N ", " R "], {
			R: "create:railway_casing",
			N: "minecraft:note_block",
		})
		.id("create_cc:create/brass_speaker");

	// Radar
	event.remove({ output: "create_things_and_misc:radar" });
	event
		.shaped("create_things_and_misc:radar", ["ASA", "AMA", "AAA"], {
			A: "#forge:ingots/andesite",
			S: "create:display_board",
			M: "create_dd:integrated_mechanism",
		})
		.id("create_cc:create/radar");

	// Harder Electron Tube
	event.remove({ output: "create:electron_tube" });
	event
		.shaped("8x create:electron_tube", [" R ", " N ", " P "], {
			R: "create:polished_rose_quartz",
			N: "#forge:nuggets/copper",
			P: "tfmg:plastic_sheet",
		})
		.id("create_cc:create/electron_tube");

	// Fix Dough
	event.replaceInput({ input: "create:dough" }, "create:dough", "#forge:dough");
	event.replaceInput({ input: "farmersdelight:wheat_dough" }, "farmersdelight:wheat_dough", "#forge:dough");

	// Nerf Tuff Crusing
	event.recipes.create
		.crushing(["create_dd:dolomite"], "#create:stone_types/tuff")
		.id("create_cc:create/tuff_crushing");

	// Remove Electrum
	event.replaceOutput(
		{ output: "createaddition:electrum_nugget" },
		"#forge:nuggets/electrum",
		Item.of("minecraft:air")
	);

	// Fix Coal Coke
	event.recipes.create.mixing("tfmg:coal_coke", "#minecraft:coals").heated().id("create_cc:create/coal_coke");

	// Harder Steel
	event.recipes.create
		.compacting("#forge:ingots/steel", ["2x #forge:ingots/cast_iron", "tfmg:coal_coke"])
		.heated()
		.id("create_cc:create/steel_ingot");

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
			.shapeless(`create_things_and_misc:${wood}_sail`, ["#create_cc:windmill_sails", `minecraft:${wood}_planks`])
			.id("create_cc:create/sails/" + wood);
	});
});
