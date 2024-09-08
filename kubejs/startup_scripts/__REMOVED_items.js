//priority: 10

global.removedItems = [
	/quark:.*jasper.*/,
	/quark:.*limestone.*/,
	/quark:.*permafrost.*/,
	/quark:.*midori.*/,
	/quark:.*shale.*/,
	/quark:.*myalite.*/,
	/quark:.*soul_sandstone.*/,
	/quark:.*netherrack.*/,
	/quark:.*pipe.*/,
	"quark:iron_rod",
	/quark:.*blossom.*/,
	/everycomp:.*\/quark\/.*blossom.*/,
	/quark:.*ancient.*/,
	/everycomp:.*\/quark\/.*ancient.*/,
	/quark:.*azalea.*/,
	/everycomp:.*\/quark\/.*azalea.*/,
	/quark:.*corundum.*/,
	/quark:.*crystal_lamp.*/,
	/quark:.*lantern.*/,
	/quark:.*shingles.*/,
	/quark:.*hollow.*log.*/,
	/quark:.*hollow.*stem.*/,
	/everycomp:.*hollow.*log.*/,
	/quark:.*egg.*/,
	/quark:.*raw.*/,
	/quark:.*diamond.*/,
	/quark:.*rang/,
	"quark:forgotten_hat",
	"quark:iron_button",
	"quark:gold_bars",

	/createcasing:(oak|spruce|birch|jungle|acacia|dark_oak|mangrove|crimson|warped|glass)_shaft/,
	/createcasing:.*_encased_(oak|spruce|birch|jungle|acacia|dark_oak|mangrove|crimson|warped|glass)_shaft/,
	"createcasing:brass_shaft",
	// "createcasing:bamboo_shaft",
	// "createcasing:cherry_shaft",
	/createcasing:.*oak.*_cogwheel/,
	/createcasing:.*birch.*_cogwheel/,
	/createcasing:.*jungle.*_cogwheel/,
	/createcasing:.*acacia.*_cogwheel/,
	/createcasing:.*dark_oak.*_cogwheel/,
	/createcasing:.*mangrove.*_cogwheel/,
	/createcasing:.*crimson.*_cogwheel/,
	/createcasing:.*warped.*_cogwheel/,
	// /createcasing:.*bamboo.*_cogwheel/,
	// /createcasing:.*cherry.*_cogwheel/,
	/createcasing:.*mldeg.*/,
	"createcasing:chorium_ingot",
	"createcasing:processing_chorium",
	"createcasing:creative_cogwheel",

	/.*spawn_egg.*/,

	/minecraft:.*pickaxe.*/,
	/minecraft:.*shovel.*/,
	/minecraft:.*axe.*/,
	"minecraft:firework_rocket",
	"minecraft:elytra",
	"minecraft:anvil",
	"minecraft:chipped_anvil",
	"minecraft:damaged_anvil",
	"minecraft:brewing_stand",
	"minecraft:enchanted_book",

	// Tools & Armor
	"minecraft:wooden_pickaxe",
	"minecraft:wooden_shovel",
	"minecraft:wooden_axe",
	"minecraft:stone_pickaxe",
	"minecraft:stone_shovel",
	"minecraft:stone_axe",
	"minecraft:golden_pickaxe",
	"minecraft:golden_shovel",
	"minecraft:golden_axe",
	"minecraft:golden_hoe",
	"minecraft:golden_sword",
	"minecraft:golden_boots",
	"minecraft:golden_chestplate",
	"minecraft:golden_helmet",
	"minecraft:golden_leggings",
	"minecraft:iron_pickaxe",
	"minecraft:iron_shovel",
	"minecraft:iron_axe",
	"minecraft:diamond_pickaxe",
	"minecraft:diamond_shovel",
	"minecraft:diamond_axe",
	"minecraft:netherite_pickaxe",
	"minecraft:netherite_shovel",
	"minecraft:netherite_axe",

	"easy_villagers:iron_farm",
	"easy_villagers:farmer",

	/metalbarrels:.*_to_crystal/,
	/metalbarrels:.*_to_silver/,
	/metalbarrels:silver_to_.*/,
	/metalbarrels:.*_to_copper/,
	/metalbarrels:copper_to_.*/,
	"metalbarrels:copper_barrel",
	"metalbarrels:crystal_barrel",
	"metalbarrels:silver_barrel",
	"metalbarrels:wood_to_obsidian",
	"metalbarrels:wood_to_netherite",
	"metalbarrels:wood_to_diamond",
	"metalbarrels:iron_to_diamond",
	"metalbarrels:gold_to_obsidian",
	"metalbarrels:wood_to_gold",
	"metalbarrels:gold_to_netherite",
	"metalbarrels:iron_to_obsidian",
	"metalbarrels:iron_to_netherite",

	/everycomp:sd\/.*_half_drawers.*/,
	/everycomp:sd\/.*_trim.*/,

	"farmersdelight:flint_knife",
	"farmersdelight:golden_knife",
	"farmersdelight:wheat_dough",

	"create_things_and_misc:zinc_knife",
	"create_things_and_misc:brass_knife",
	"create_things_and_misc:chorus_sail",
	"create_things_and_misc:jaboticaba_sail",
	"create_things_and_misc:ramboutan_sail",

	"create_dd:pondering_block_light",
	"create_dd:pondering_block_dark",
	"create_dd:excavation_drill",
	"create_dd:ponder_in_a_box",
	"create_dd:kinetic_motor",
	"create_dd:accelerator_motor",
	/create_dd:.*rubber.*/,
	"v_slab_compat:create_dd/rubber_vertical_slab",
	"supplementaries:create_dd/hanging_sign_rubber",
	"supplementaries:create_dd/sign_post_rubber",
	/create_dd:.*rose_.*/,
	"v_slab_compat:create_dd/rose_vertical_slab",
	"supplementaries:create_dd/hanging_sign_rose",
	"supplementaries:create_dd/sign_post_rose",
	/create_dd:.*_asphalt_block/,
	"create_dd:forest_ravager",
	"create_dd:deforester_saw",
	"create_dd:industrial_iron_ingot",
	"create_dd:industrial_iron_nugget",
	"create_dd:industrial_iron_sheet",
	"create_dd:ponder_stone_generation",
	"create_dd:radiant_panel",
	"create_dd:shadow_panel",
	"create_dd:potato_turret",
	"create_dd:overcharge_alloy",
	"create_dd:overcharge_alloy_sheet",
	"create_dd:overcharged_alloy_block",
	"create_dd:overcharged_scaffolding",
	"create_dd:overcharged_casing",
	"create_dd:stargaze_singularity_scaffolding",
	"create_dd:fallen_stargaze_singularity",
	"create_dd:stargaze_singularity",
	"create_dd:stargaze_singularity_block",
	"create_dd:stargaze_singularity_sheet",
	"create_dd:stargaze_singularity_casing",
	"create_dd:infastone",
	"create_dd:infagranite",
	"create_dd:infadiorite",
	"create_dd:infaandesite",
	"create_dd:infacobbled_deepslate",
	"create_dd:infacalcite",
	"create_dd:infatuff",
	"create_dd:infadripstone_block",
	"create_dd:infadirt",
	"create_dd:infacoarse_dirt",
	"create_dd:infamud",
	"create_dd:infacobblestone",
	"create_dd:infasand",
	"create_dd:infared_sand",
	"create_dd:infagravel",
	"create_dd:infaobsidian",
	"create_dd:infaice",
	"create_dd:infasnow_block",
	"create_dd:infasoul_sand",
	"create_dd:infaend_stone",
	"create_dd:infanetherrack",
	"create_dd:infamagma_block",
	"create_dd:infamoss_block",
	/create_dd:.*aethersite.*/,
	"create_dd:caramel_milkshake",
	"create_dd:chocolate_milkshake",
	"create_dd:glowberry_milkshake",
	"create_dd:strawberry_milkshake",
	"create_dd:vanilla_milkshake",
	"create_dd:hot_chocolate",
	"create_dd:crystallized_sap",
	"create_dd:blaze_gold",
	"create_dd:blaze_gold_sheet",
	"create_dd:blaze_gold_block",
	"create_dd:blaze_gold_scaffolding",
	"create_dd:blaze_gold_casing",

	/supplementaries:.*present.*/,
	/supplementaries:.*lantern.*/,
	/supplementaries:.*lapis.*/,
	/supplementaries:.*bomb.*/,
	/supplementaries:.*bamboo_spikes.*/,
	"supplementaries:sconce_nether_brass",
	"supplementaries:wrench",
	"supplementaries:crank",
	"supplementaries:faucet",
	"supplementaries:wrench",
	"supplementaries:flute",
	"supplementaries:soap",
	"supplementaries:soap_block",
	"supplementaries:bamboo_spikes",
	"supplementaries:bamboo_spikes_tipped",
	"supplementaries:bomb",
	"supplementaries:bomb_blue",
	"supplementaries:bellows",
	"supplementaries:pulley_block",
	"supplementaries:bubble_blower",
	/supplementaries:lapis_bricks.*/,

	"nutritionalbalance:lunchbox",

	"createaddition:electrum_ingot",
	"createaddition:electrum_nugget",
	"createaddition:electrum_sheet",
	"createaddition:electrum_wire",
	"createaddition:electrum_spool",
	"createaddition:electrum_rod",
	"createaddition:diamond_grit",
	"createaddition:zinc_sheet",
	"createaddition:digital_adapter",

	"createdeco:zinc_sheet",
	"createdeco:pearl_brick",
	"createdeco:blue_brick",
	"createdeco:scarlet_brick",
	"createdeco:dean_brick",
	"createdeco:dusk_brick",

	"createsifter:custom_mesh",
	"createsifter:zinc_mesh",

	"create_paper_line:frame",

	"createindustry:steel_ingot",
	"createindustry:steel_block",
	"createindustry:napalm_bomb",
	"createindustry:napalm_bucket",
	"createindustry:thermite_grenade",
	// "createindustry:mesh",
	"createindustry:thermite_powder",
	"createindustry:factory_floor",
	"createindustry:factory_floor_slab",
	"createindustry:factory_floor_stairs",
	"v_slab_compat:createindustry/factory_floor_vertical_slab",
	"createindustry:cast_iron_block",
	"createindustry:heavy_plate",
	// "createindustry:industrial_barrel",
	"createindustry:caution_block",
	/createindustry:(white|orange|magenta|yellow|lime|green|light_blue|blue|purple|pink|gray|light_gray|cyan|brown|red|black)_concrete.*/,
	"createindustry:rebar_concrete",
	"createindustry:rebar_concrete_stairs",
	"createindustry:rebar_concrete_slab",
	"createindustry:rebar_concrete_wall",
	/v_slab_compat:createindustry\/.*concrete.*/,
	"createindustry:concrete_mixture",
	"createindustry:factory_floor",
	"createindustry:factory_floor_slab",
	"createindustry:heavy_plate",
	// "createindustry:steel_sword",
	// "createindustry:steel_pickaxe",
	// "createindustry:steel_axe",
	// "createindustry:steel_shovel",
	// "createindustry:steel_hoe",
	// "createindustry:steel_helmet",
	// "createindustry:steel_chestplate",
	// "createindustry:steel_leggings",
	// "createindustry:steel_boots",
	// "createindustry:aluminum_sword",
	// "createindustry:aluminum_pickaxe",
	// "createindustry:aluminum_axe",
	// "createindustry:aluminum_shovel",
	// "createindustry:aluminum_hoe",
	// "createindustry:lead_sword",
	// "createindustry:lead_pickaxe",
	// "createindustry:lead_axe",
	// "createindustry:lead_shovel",
	// "createindustry:lead_hoe",
	// "createindustry:lithium_blade",
	// "createindustry:lit_lithium_blade",
	/createindustry:.*_caution_block/,
	"createindustry:cast_iron_ingot",
	// "createindustry:creative_generator",
	"createindustry:zinc_grenade",
	"createindustry:copper_grenade",
	// "createindustry:napalm_potato",
	// "createindustry:steel_cogwheel",
	// "createindustry:large_steel_cogwheel",
	// "createindustry:aluminum_cogwheel",
	// "createindustry:large_aluminum_cogwheel",
	// "createindustry:steel_encased_aluminum_cogwheel",
	// "createindustry:steel_encased_large_aluminum_cogwheel",
	// "createindustry:heavy_casing_encased_aluminum_cogwheel",
	// "createindustry:heavy_casing_encased_large_aluminum_cogwheel",
	"createindustry:asphalt",
	"createindustry:formwork_block",
	"createindustry:rebar_formwork_block",

	"railways:track_create_dd_rose",
	"railways:track_create_dd_rose_wide",
	"railways:track_create_dd_rose_narrow",
	"railways:track_create_dd_rubber",
	"railways:track_create_dd_rubber_wide",
	"railways:track_create_dd_rubber_narrow",
	"railways:track_create_dd_smoked",
	"railways:track_create_dd_smoked_wide",
	"railways:track_create_dd_smoked_narrow",
	"railways:track_create_dd_spirit",
	"railways:track_create_dd_spirit_wide",
	"railways:track_create_dd_spirit_narrow",
	"railways:track_quark_blossom",
	"railways:track_quark_blossom_wide",
	"railways:track_quark_blossom_narrow",
	"railways:track_quark_ancient",
	"railways:track_quark_ancient_wide",
	"railways:track_quark_ancient_narrow",
	"railways:track_quark_azalea",
	"railways:track_quark_azalea_wide",
	"railways:track_quark_azalea_narrow",
	/railways:white.*_locometal.*/,
	/railways:light_gray.*_locometal.*/,
	/railways:gray.*_locometal.*/,
	/railways:black.*_locometal.*/,
	/railways:brown.*_locometal.*/,
	/railways:red.*_locometal.*/,
	/railways:orange.*_locometal.*/,
	/railways:yellow.*_locometal.*/,
	/railways:lime.*_locometal.*/,
	/railways:green.*_locometal.*/,
	/railways:cyan.*_locometal.*/,
	/railways:light_blue.*_locometal.*/,
	/railways:blue.*_locometal.*/,
	/railways:purple.*_locometal.*/,
	/railways:magenta.*_locometal.*/,
	/railways:pink.*_locometal.*/,

	/refinedstorage:.*disk_manipulator.*/,
	/refinedstorage:.*network.*/,
	/refinedstorage:.*security_manager.*/,
	/refinedstorage:.*relay.*/,
	/refinedstorage:.*crafter_manager.*/,
	/refinedstorage:.*storage_disk.*/,
	/refinedstorage:.*storage_part.*/,
	/refinedstorage:.*storage_block.*/,
	/refinedstorage:.*portable_grid.*/,
	/refinedstorage:.*interface.*/,
	"refinedstorage:storage_monitor",
	"refinedstorage:construction_core",
	"refinedstorage:raw_basic_processor",
	"refinedstorage:raw_improved_processor",
	"refinedstorage:raw_advanced_processor",
	"refinedstorage:creative_wireless_grid",
	"refinedstorage:machine_casing",
	"refinedstorage:security_card",
	"refinedstorage:wrench",
	"refinedstorage:fortune_1_upgrade",
	"refinedstorage:fortune_2_upgrade",
	"refinedstorage:fortune_3_upgrade",
	"refinedstorage:silk_touch_upgrade",
	"refinedstorage:regulator_upgrade",
	"refinedstorage:destruction_core",
	"refinedstorage:range_upgrade",
	"refinedstorage:storage_housing",
	"refinedstorage:quartz_enriched_iron_block",
	"refinedstorage:grid",
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_grid/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_controller/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_creative_controller/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_detector/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_crafter/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_wireless_transmitter/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_fluid_grid/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_crafting_grid/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_pattern_grid/,
	/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_crafting_monitor/,
	"refinedstorage:creative_controller",
	"refinedstorage:wireless_grid",
	"refinedstorage:creative_wireless_fluid_grid",
	"refinedstorage:creative_wireless_crafting_monitor",
	"refinedstorageaddons:creative_wireless_crafting_grid",
	"refinedstorage:constructor",
	"refinedstorage:destructor",
	"refinedstorage:disk_drive",

	"wands:stone_wand",
	"wands:iron_wand",
	"wands:diamond_wand",

	"shrink:mob_bottle",

	/storagedrawers:.*half_drawer.*/,
	/storagedrawers:.*trim.*/,
	/everycomp:sd\/.*half_drawer.*/,
	/everycomp:sd\/.*trim.*/,
	"storagedrawers:one_stack_upgrade",
	"storagedrawers:upgrade_template",
	"storagedrawers:controller",
	"storagedrawers:controller_slave",
	"storagedrawers:compacting_drawers_3",
	"storagedrawers:creative_vending_upgrade",
	"storagedrawers:conversion_upgrade",

	"create_power_loader:empty_brass_chunk_loader",

	"ironjetpacks:basic_coil",
	"ironjetpacks:advanced_coil",
	"ironjetpacks:ultimate_coil",
	"ironjetpacks:strap",
	"ironjetpacks:cell",
	"ironjetpacks:thruster",
	"ironjetpacks:capacitor",
];

global.removedRecipeTypes = ["minecraft:brewing"];
