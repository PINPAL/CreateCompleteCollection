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
	"create:item_application/copper_casing_from_wood_using_deployer",
	"create:item_application/copper_casing_from_log_using_deployer",
	"create:item_application/copper_casing_from_wood",
	"create:item_application/copper_casing_from_log",
	"create:crafting/kinetics/super_glue",
	"create:crafting/curiosities/cake",
	"create:pressing/sugar_cane",
	"create:splashing/crushed_raw_iron",

	// Every Compat
	/everycomp:sd\/.*_drawers.*/,
];

ServerEvents.recipes((event) => {
	idsToRemove.forEach((id) => {
		event.remove({ id: id });
	});
});
