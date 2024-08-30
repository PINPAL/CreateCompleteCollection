ServerEvents.recipes((event) => {
	event.recipes.create
		.mechanical_crafting(
			"createcasing:creative_casing",
			[
				"    Z    ",
				"   ZOZ   ",
				"ZZZOBOZZZ",
				"ZOOBRBOOZ",
				" ZBRMRBZ ",
				"  ZBRBZ  ",
				" ZOOBOOZ ",
				"ZOOZ ZOOZ",
				"ZZZ   ZZZ",
			],
			{
				M: "kubejs:metal_alloy_block",
				O: "kubejs:creative_omega_potion",
				Z: "kubejs:rainbow_core",
				R: "minecraft:recovery_compass",
				B: "kubejs:creative_alloy",
			}
		)
		.id("kubejs:creative/fluid_tank");

	event.recipes.create.mechanical_crafting("create:creative_fluid_tank", ["ZZZ", "ZMZ", "ZZZ"], {
		Z: "createcasing:creative_casing",
		M: "create:fluid_tank",
	});

	event.recipes.create
		.mechanical_crafting("create:creative_motor", [" SsS ", "SPCPS", "LPMPL", "SPCPS", " SsS "], {
			M: "create:creative_fluid_tank",
			P: "createindustry:plastic_block",
			L: "create_dd:shadow_steel_block",
			S: "create_dd:overburden_casing",
			C: "create:cogwheel",
			s: "create:shaft",
		})
		.id("kubejs:creative/motor");

	event.recipes.create.mechanical_crafting(
		"createaddition:creative_energy",
		[" SsS ", "SPCPS", "LEMEL", "SPAPS", " SSS "],
		{
			M: "create:creative_motor",
			P: "createindustry:plastic_block",
			S: "create_dd:mithril_casing",
			L: "create_dd:overburden_casing",
			C: "createaddition:connector",
			s: "createaddition:large_connector",
			A: "createaddition:modular_accumulator",
			E: "createaddition:electric_motor",
		}
	);

	event.recipes.create.mechanical_crafting(
		"create:creative_blaze_cake",
		[" BBB ", "BFCFB", "BCTCB", "BFCFB", " BBB "],
		{
			B: "create:blaze_cake",
			F: "create_things_and_misc:friendship_cake",
			T: "create:creative_fluid_tank",
			C: "minecraft:cake",
		}
	);

	event.recipes.create.mechanical_crafting(
		"create:handheld_worldshaper",
		["     ", "  SB ", "WFMCE", "  7B ", "   X "],
		{
			M: "create:creative_motor",
			W: "create:wand_of_symmetry",
			B: "wands:netherite_wand",
			X: "create_dd:forest_ravager",
			C: "create:creative_blaze_cake",
			E: "createaddition:creative_energy",
			F: "create:creative_fluid_tank",
			S: "minecraft:spyglass",
			7: "#minecraft:buttons",
		}
	);

	event.recipes.create.mechanical_crafting("create:creative_crate", [" 2 ", "345", " 1 "], {
		1: "create:creative_fluid_tank",
		2: "create:handheld_worldshaper",
		3: "create:creative_motor",
		4: "create:creative_blaze_cake",
		5: "createaddition:creative_energy",
	});

	let transitionalItem = "kubejs:incomplete_creative_alloy";
	event.recipes
		.createSequencedAssembly(["kubejs:creative_alloy"], "create_dd:compound_base", [
			event.recipes.createDeploying(transitionalItem, [transitionalItem, "create_dd:refined_radiance"]),
			event.recipes.createDeploying(transitionalItem, [transitionalItem, "create_dd:shadow_steel"]),
			event.recipes.createDeploying(transitionalItem, [transitionalItem, "create_dd:frozen_nugget"]),
			event.recipes.createDeploying(transitionalItem, [transitionalItem, "create_dd:mithril_ingot"]),
			event.recipes.createDeploying(transitionalItem, [transitionalItem, "create_dd:experience_mass"]),
			event.recipes.create.filling(transitionalItem, [Fluid.of("create_dd:shimmer", 1000), transitionalItem]),
		])
		.transitionalItem(transitionalItem)
		.loops(1)
		.id("kubejs:creative/sequenced/creative_alloy");
});
