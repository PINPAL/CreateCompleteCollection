const hideFromJEI = [
  // Mod Match
  /sophisticatedbackpacks:*/,
  /refinedstorage:*/,
  /itemfilters:*/,
  /simplemagnets:*/,
  /wands:*/,
  /ftbquests:*/,
  /chunkloaders:*/,
  /doubleslabs:.*/,
  /metalbarrels:.*/,

  // Regex Match
  /everycomp:.*hollow.*log.*/,
  /create_central_kitchen:incomplete_.*/,
  /create_crystal_clear:.*encased.*/,
  /kubejs:broken_.*/,
  /kubejs:incomplete_.*/,
  /create_central_kitchen:incomplete_.*/,
  /supplementaries:.*vertical_slab/,
  /alloyed:.*vertical_slab/,
  /createdeco:.*slab_vert/,
  /createaddition:.*electrum.*/,
  /createindustry:.*concrete.*/,
  /spawn_egg/,
  /quark:egg_parrot.*/,
  /supplementaries:.*present.*/,
  /everycomp:db\/quark\/.*ancient.*/,
  /everycomp:db\/quark\/.*azalea*/,

  // Pixel, Axe & Shovel
  "minecraft:wooden_axe",
  "minecraft:stone_axe",
  "minecraft:iron_axe",
  "minecraft:golden_axe",
  "minecraft:diamond_axe",
  "minecraft:netherite_axe",
  "alloyed:steel_axe",
  "minecraft:wooden_shovel",
  "minecraft:stone_shovel",
  "minecraft:iron_shovel",
  "minecraft:golden_shovel",
  "minecraft:diamond_shovel",
  "minecraft:netherite_shovel",
  "alloyed:steel_shovel",
  "minecraft:wooden_pickaxe",
  "minecraft:stone_pickaxe",
  "minecraft:iron_pickaxe",
  "minecraft:golden_pickaxe",
  "minecraft:diamond_pickaxe",
  "minecraft:netherite_pickaxe",
  "alloyed:steel_pickaxe",

  // Item Match
  "kubejs:unfinished_leather_stitching",
  "kubejs:belt_scroll",

  "create:extendo_grip",

  "create_things_and_misc:cherry_sail",
  "create_things_and_misc:brass_knife",
  "create_things_and_misc:zinc_knife",

  "create_paper_line:frame",
  "create_paper_line:saw_dust",
  "create_paper_line:wood_chips",

  "create_dd:kinetic_motor",
  "create_dd:accelerator_motor",
  "create_dd:condense_milk_bucket",
  "create_dd:cream_bucket",
  "create_dd:vanilla_bucket",
  "create_dd:vanilla_milkshake_bucket",
  "create_dd:strawberry_bucket",
  "create_dd:strawberry_milkshake_bucket",
  "create_dd:glowberry_bucket",
  "create_dd:glowberry_milkshake_bucket",
  "create_dd:caramel_bucket",
  "create_dd:caramel_milkshake_bucket",
  "create_dd:hot_chocolate_bucket",
  "create_dd:chocolate_milkshake_bucket",
  "create_dd:industrial_iron_ingot",
  "create_dd:industrial_iron_nugget",
  "create_dd:industrial_iron_sheet",
  "create_dd:deforester_saw",
  "createdeco:zinc_sheet",

  "createaddition:digital_adapter",
  "createadditon:zinc_sheet",
  Item.of("createaddition:diamond_grit_sandpaper").weakNBT(),

  "createindustry:napalm_bomb",
  "createindustry:napalm_bucket",
  "createindustry:thermite_grenade",
  "createindustry:mesh",
  "createindustry:thermite_powder",
  "createindustry:napalm",
  "createindustry:factory_floor",
  "createindustry:factory_floor_slab",
  "createindustry:steel_ingot",
  "createindustry:cast_iron_ingot",
  "createindustry:cast_iron_block",
  "createindustry:heavy_plate",
  "createindustry:steel_scaffolding",
  "createindustry:industrial_barrel",
  "createindustry:caution_block",

  "createsifter:custom_mesh",
  "createsifter:zinc_mesh",

  "nutritionalbalance:lunchbox",

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
  "supplementaries:lapis_bricks",
  "supplementaries:lapis_bricks_slab",
  "supplementaries:lapis_bricks_stairs",
  "supplementaries:lapis_bricks_wall",

  "shrink:mob_bottle",

  "minecraft:infested_stone",
  "minecraft:infested_cobblestone",
  "minecraft:infested_stone_bricks",
  "minecraft:infested_mossy_stone_bricks",
  "minecraft:infested_cracked_stone_bricks",
  "minecraft:infested_chiseled_stone_bricks",
  "minecraft:infested_deepslate",
  "minecraft:bedrock",
  "minecraft:end_portal_frame",

  "farmersdelight:golden_knife",
  "farmersdelight:netherite_knife",

  "alloyed:steel_pickaxe",
  "alloyed:steel_shovel",
  "alloyed:steel_axe",
  "alloyed:steel_shears",
  "alloyed:steel_fishing_rod",
  "alloyed:steel_ingot",
  "alloyed:steel_nugget",
  "alloyed:steel_sheet",
  "alloyed:bronze_ingot",
  "alloyed:bronze_nugget",
  "alloyed:bronze_sheet",

  "easypaxellite:netherite_paxel_ingot",

  "refinedstorageaddons:creative_wireless_crafting_grid",

  "ironjetpacks:strap",
  "ironjetpacks:thruster",
  "ironjetpacks:capacitor",
  "ironjetpacks:cell",
  "ironjetpacks:basic_coil",
  "ironjetpacks:advanced_coil",
  "ironjetpacks:ultimate_coil",

  "easy_villagers:iron_farm",
  "easy_villagers:farmer",

  "minecraft:elytra",
  "minecraft:anvil",
  "minecraft:chipped_anvil",
  "minecraft:damaged_anvil",
  "minecraft:brewing_stand",
  "minecraft:enchanted_book",

  "storagedrawers:one_stack_upgrade",
  "storagedrawers:upgrade_template",
  /storagedrawers:.*_half_.*/,
  /everycomp:sd\/.*_half/,
  /storagedrawers:.*_trim/,
  /everycomp:sd\/.*_trim/,
  "storagedrawers:controller",
  "storagedrawers:controller_slave",
  "storagedrawers:compacting_drawers_3",
  "storagedrawers:creative_vending_upgrade",
  "storagedrawers:conversion_upgrade",
];

JEIEvents.hideItems((event) => {
  // Hide Items
  hideFromJEI.forEach((item) => {
    event.hide(item);
  });
});
