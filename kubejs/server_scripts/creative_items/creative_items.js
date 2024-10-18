ServerEvents.recipes((event) => {
	event.recipes.create
		.mechanical_crafting(
			"create:creative_fluid_tank",
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
				M: "cosmic_contraptions:metal_alloy_block",
				O: "cosmic_contraptions:creative_omega_potion",
				Z: "cosmic_contraptions:rainbow_core",
				R: "minecraft:recovery_compass",
				B: "create_dd:overcharge_alloy",
			}
		)
		.id("cosmic_contraptions:creative/creative_fluid_tank");

	event.recipes.create
		.mechanical_crafting("create:creative_motor", [" SsS ", "SPCPS", "LPMPL", "SPCPS", " SsS "], {
			M: "create:creative_fluid_tank",
			P: "tfmg:plastic_block",
			L: "#forge:storage_blocks/shadow_steel",
			S: "cosmic_contraptions:vault_casing",
			C: "create:cogwheel",
			s: "create:shaft",
		})
		.id("cosmic_contraptions:creative/creative_motor");

	event.recipes.create
		.mechanical_crafting("createaddition:creative_energy", [" SsS ", "SPCPS", "LEMEL", "SPAPS", " SSS "], {
			M: "create:creative_motor",
			P: "tfmg:plastic_block",
			S: "create:shadow_steel_casing",
			L: "cosmic_contraptions:vault",
			C: "createaddition:connector",
			s: "createaddition:large_connector",
			A: "createaddition:modular_accumulator",
			E: "createaddition:electric_motor",
		})
		.id("cosmic_contraptions:creative/creative_energy");

	event.recipes.create
		.mechanical_crafting("create:creative_blaze_cake", [" BBB ", "BFCFB", "BCTCB", "BFCFB", " BBB "], {
			B: "create:blaze_cake",
			F: "create_things_and_misc:friendship_cake",
			T: "create:creative_fluid_tank",
			C: "minecraft:cake",
		})
		.id("cosmic_contraptions:creative/creative_blaze_cake");

	event.recipes.create
		.mechanical_crafting("create:handheld_worldshaper", ["     ", "  SB ", "WFMCE", "  7B ", "   X "], {
			M: "create:creative_motor",
			W: "create:wand_of_symmetry",
			B: "wands:netherite_wand",
			X: "create_dd:forest_ravager",
			C: "create:creative_blaze_cake",
			E: "createaddition:creative_energy",
			F: "create:creative_fluid_tank",
			S: "minecraft:spyglass",
			7: "#minecraft:buttons",
		})
		.id("cosmic_contraptions:creative/handheld_worldshaper");

	event.recipes.create
		.mechanical_crafting("create:creative_crate", [" 2 ", "345", " 1 "], {
			1: "create:creative_fluid_tank",
			2: "create:handheld_worldshaper",
			3: "create:creative_motor",
			4: "create:creative_blaze_cake",
			5: "createaddition:creative_energy",
		})
		.id("cosmic_contraptions:creative/creative_crate");
});
