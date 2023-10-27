// priority: 1
const outputsToRemove = [
  // Tools & Armor
  "#forge:pickaxes",
  "#forge:shovels",
  "#forge:axes",
  "#forge:swords",
  "#forge:hoes",
  "#forge:tools/knives",
  "#forge:armors/chestplates",
  "#forge:armors/helmets",
  "#forge:armors/leggings",
  "#forge:armors/boots",

  // Minecraft
  "minecraft:lodestone",

  // Vertical Slabs
  /createdeco:.*slab_vert/,
  /alloyed:.*vertical_slab/,
  /v_slab_compat:createindustry\/.*concrete.*/,

  // Supplementaries
  "supplementaries:cog_block",
  "supplementaries:bubble_blower",
  "supplementaries:crank",
  "supplementaries:faucet",
  "supplementaries:bamboo_spikes",
  "supplementaries:bamboo_spikes_tipped",
  "supplementaries:bomb",

  // Nutritional Balance
  "nutritionalbalance:lunchbox",

  // Farmers Delight
  "farmersdelight:cooking_pot",

  // Alloyed
  "alloyed:bronze_ingot",
  "alloyed:bronze_nugget",
  "alloyed:bronze_sheet",
  "alloyed:bronze_block",
  "alloyed:steel_ingot",
  "alloyed:steel_nugget",
  "alloyed:steel_sheet",
  "alloyed:steel_pickaxe",
  "alloyed:steel_shovel",
  "alloyed:steel_axe",
  "alloyed:steel_shears",
  "alloyed:steel_fishing_rod",
  "alloyed:steel_sword",
  "alloyed:steel_hoe",
  "alloyed:steel_helmet",
  "alloyed:steel_chestplate",
  "alloyed:steel_leggings",
  "alloyed:steel_boots",

  // Create Deco
  "createdeco:netherite_bars",

  // Explorers Compass
  "explorerscompass:explorerscompass",

  // Create
  "create:cart_assembler",
  "create:rotation_speed_controller",
  "create:hand_crank",
  "create:spout",
  "create:steam_engine",
  "create:deployer",
  "create:controls",
  "create:mechanical_drill",
  "create:extendo_grip",

  // Create Dreams & Desires
  Fluid.of("create_dd:condense_milk"),
  Fluid.of("create_dd:cream"),
  Fluid.of("create_dd:vanilla"),
  Fluid.of("create_dd:vanilla_milkshake"),
  Fluid.of("create_dd:strawberry"),
  Fluid.of("create_dd:strawberry_milkshake"),
  Fluid.of("create_dd:glowberry"),
  Fluid.of("create_dd:glowberry_milkshake"),
  Fluid.of("create_dd:caramel"),
  Fluid.of("create_dd:caramel_milkshake"),
  Fluid.of("create_dd:hot_chocolate"),
  Fluid.of("create_dd:chocolate_milkshake"),
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

  "create_dd:steel_block",
  "create_dd:kinetic_motor",
  "create_dd:accelerator_motor",
  "create_dd:mithril_ingot",
  "create_dd:deforester_saw",
  "create_dd:infernal_mechanism",
  "create_dd:hydraulic_press",
  "create_dd:reinforcement_plating",
  "create_dd:bronze_casing",
  "create_dd:industrial_iron_ingot",
  "create_dd:industrial_iron_nugget",
  "create_dd:industrial_iron_sheet",
  "create_dd:industrial_iron_block",
  "createdeco:zinc_sheet",

  // Create Things and Misc
  "create_things_and_misc:radar",

  // Create Addition
  "createaddition:digital_adapter",
  "createaddition:electrum_rod",
  "createaddition:electrum_sheet",
  "createaddition:electrum_wire",
  "createaddition:zinc_sheet",
  Item.of("createaddition:diamond_grit_sandpaper").weakNBT(),

  // Create Paper Line
  "create_paper_line:dryer",
  "create_paper_line:frame",

  // Create Industry
  "createindustry:napalm_bomb",
  "createindustry:napalm_bucket",
  "createindustry:thermite_grenade",
  /createindustry:.*concrete.*/,
  "createindustry:mesh",
  "createindustry:thermite_powder",
  "createindustry:factory_floor",
  "createindustry:factory_floor_slab",
  /v_slab_compat:createindustry\/.*factory_floor.*/,
  "createindustry:industrial_barrel",
  "createindustry:caution_block",
  "createindustry:coal_coke",
  "createindustry:steel_ingot",
  "createindustry:cast_iron_ingot",
  "createindustry:cast_iron_block",
  "createindustry:heavy_plate",
  "createindustry:steel_scaffolding",
  "createindustry:sawdust",

  // Every Compat
  /everycomp:sd\/.*/,
];

ServerEvents.recipes((event) => {
  outputsToRemove.forEach((output) => {
    event.remove({ output: output });
  });
});
