// priority: 1
const idsToRemove = [
	// Minecraft
	"minecraft:paper",
	"minecraft:book",
	"minecraft:cake",
	"minecraft:gold_nugget_from_blasting",

	// Salt
	"salt:salting",

	// Supplementaries
	"supplementaries:soap_clean_minecraft_stained_glass",
	"supplementaries:soap_clean_supplementaries_candle_holder",
	"supplementaries:soap_clean_minecraft_concrete",
	"supplementaries:soap_clean_minecraft_concrete_powder",
	"supplementaries:soap_clean_minecraft_shulker_box",
	"supplementaries:soap/piston",
	"supplementaries:soap/dirty_shard",
	"supplementaries:soap/dirty_glass",
	"supplementaries:item_lore_display",

	// Farmers Delight
	"farmersdelight:book_from_canvas",
	"farmersdelight:cake_from_milk_bottle",
	"farmersdelight:paper_from_tree_bark",
	"farmersdelight:iron_nugget_from_blasting_knife",
	"farmersdelight:iron_nugget_from_smelting_knife",

	// Farmers Delight Slicing in Mixer
	"farmersdelight:integration/create/mixing/cabbage_slice_from_mixing",
	"farmersdelight:integration/create/mixing/pie_crust_from_mixing",
	"farmersdelight:integration/create/mixing/tomato_sauce_from_mixing",

	// Create Dreams & Desires
	"create_dd:mixing/asphalt",
	"create_dd:industrial_iron/mechanical_press",
	"create_dd:crafting/mechanical_arm",
	"create_dd:crafting/gearbox",
	"create_dd:crafting/gearbox_from_vertical_gearbox",
	"create_dd:crafting/vertical_gearbox",
	"create_dd:crafting/vertical_gearbox_from_gearbox",
	"create_dd:crafting/item_interface",
	"create_dd:crafting/adj_chain_gearshift",
	"create_dd:crafting/mechanical_roller",
	"create_dd:crafting/contraption_controls",
	"create_dd:crafting/fluid_interface",
	"create_dd:industrial_iron/chute",
	"create_dd:industrial_iron/cauldron",
	"create_dd:industrial_iron/basin",
	"create_dd:industrial_iron/blast_furnace",
	"create_dd:industrial_iron/rail",
	"create_dd:industrial_iron/smithing_table",
	"create_dd:industrial_iron/detector_rail",
	"create_dd:industrial_iron/hopper",
	"create_dd:compacting/steel_ingot",
	"create_dd:crafting/asphalt_hazard_block",

	// Decorative Blocks
	"decorative_blocks:lattice",

	// Create Things and Misc
	/create_things_and_misc:.*_sail_craft.*/,
	/create_things_and_misc:.*_sail/,
	"create_things_and_misc:brass_speaker_craft",

	// Create Industry
	"tfmg:compacting/steel_block",
	"tfmg:mixing/napalm",
	"tfmg:crafting/electron_tube_from_plastic",
	"tfmg:mixing/liquid_concrete_",

	// Metallurgy
	"createmetallurgy:alloying/alloying_steel",

	// Create
	"create:crafting/kinetics/item_vault",
	"create:crushing/tuff",
	"create:crushing/tuff_recycling",
	"create:crafting/kinetics/super_glue",
	"create:crafting/curiosities/cake",
	"create:pressing/sugar_cane",
	"create:splashing/crushed_raw_iron",

	// Every Compat
	/everycomp:sd\/.*_drawers.*/,

	// Broken Recipes
	// for cleaning up the server log
	"railways:sequenced_assembly/track_create_dd_rubber",
	"tfmg:crafting/epic_party_light_bulb",
	"railways:sequenced_assembly/track_create_dd_smoked_narrow",
	"railways:sequenced_assembly/track_create_dd_spirit",
	"create:blasting/ostrum_ingot_from_crushed",
	"railways:sequenced_assembly/track_create_dd_rose",
	"tfmg:crafting/cast_iron_distillation_output",
	"tfmg:stonecutting/caution_block",
	"railways:sequenced_assembly/track_create_dd_spirit_narrow",
	"create_things_and_misc:copper_scaffolding_craft",
	"design_decor:stonecutting/metals/iron/bolt",
	"railways:sequenced_assembly/track_create_dd_rose_narrow",
	"tfmg:crafting/glass_cable_connector",
	"railways:sequenced_assembly/track_create_dd_smoked",
	"create_things_and_misc:netheriteportablewithlecraft",
	"tfmg:mechanical_crafting/cast_iron_distillation_controller",
	"ratatouille:smoking/solid_sugar_block",
	"design_decor:stonecutting/metals/iron/screw",
	"tfmg:crafting/welding_machine",
	"tfmg:mechanical_crafting/pumpjack_hammer_holder",
	"railways:sequenced_assembly/track_create_dd_rubber_narrow",
	"create_things_and_misc:schematic_chair",
	"tfmg:stonecutting/caution_blocks/light_blue_caution_block",
	"tfmg:crafting/battery",
	"tfmg:colored_concrete/full_block/red_concrete_q",
	"tfmg:colored_concrete/full_block/purple_concrete_q",
	"tfmg:colored_concrete/full_block/black_concrete_q",
	"tfmg:colored_concrete/full_block/blue_concrete_q",
	"tfmg:colored_concrete/full_block/lime_concrete_q",
	"createcobblestone:crafting/cobblestone_generator_from_deepslate",
	"moredelight:minecraft/crafting/toast_with_blueberries",
	"casualness_delight:cooked_diced_potatoes_with_beef",
	"tfmg:colored_concrete/full_block/light_blue_concrete_q",
	"casualness_delight:potato_salad",
	"tfmg:colored_concrete/full_block/cyan_concrete_q",
	"moredelight:minecraft/crafting/toast_with_cheese",
	"casualness_delight:cooked_diced_potatoes_with_porkchop",
	"design_decor:item_application/millstones/special_aluminum_cylinder",
	"tfmg:colored_concrete/full_block/brown_concrete_q",
	"tfmg:colored_concrete/full_block/light_gray_concrete_q",
	"tfmg:colored_concrete/full_block/white_concrete_q",
	"tfmg:colored_concrete/full_block/yellow_concrete_q",
	"tfmg:colored_concrete/full_block/orange_concrete_q",
	"tfmg:colored_concrete/full_block/gray_concrete_q",
	"tfmg:colored_concrete/full_block/green_concrete_q",
	"design_decor:item_application/crushing_wheels/special_aluminum_cylinder",
	"tfmg:colored_concrete/full_block/magenta_concrete_q",
	"createcobblestone:crafting/cobblestone_generator_from_cobbled_deepslate",
	"tfmg:colored_concrete/full_block/pink_concrete",
	"tfmg:colored_concrete/full_block/pink_concrete_q",
	"casualness_delight:cooked_diced_potatoes_with_chicken_cuts",
	"casualness_delight:mashed_potatoes",
];

ServerEvents.recipes((event) => {
	idsToRemove.forEach((id) => {
		event.remove({ id: id });
	});
});
