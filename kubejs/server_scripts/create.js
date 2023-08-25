ServerEvents.recipes((event) => {
  // Remove
  const itemsToRemove = [
    "create_dd:deforester_saw",
    "createaddition:digital_adapter",
    "createindustry:napalm_bomb",
    "createindustry:napalm_bucket",
    "createindustry:thermite_grenade",
    /createindustry:.*concrete.*/,
    "createindustry:mesh",
    "createindustry:thermite_powder",
    "createindustry:factory_floor",
    "createindustry:factory_floor_slab",
    "createindustry:industrial_barrel",
    "createindustry:caution_block",
  ].forEach((item) => {
    event.remove({ output: item });
  });
  const idsToRemove = [
    "create_dd:industrial_iron/mechanical_press",
    "createindustry:mixing/napalm",
    "create:item_application/copper_casing_from_wood_using_deployer",
    "create:item_application/copper_casing_from_log_using_deployer",
    "create:item_application/copper_casing_from_wood",
    "create:item_application/copper_casing_from_log",
  ].forEach((recipeID) => {
    event.remove({ id: recipeID });
  });

  // Cheap Millstone
  event.remove({ output: "create:millstone" });
  event.shaped(Item.of("create:millstone"), [" F ", " P ", " S "], {
    F: "minecraft:flint",
    P: "#minecraft:planks",
    S: "minecraft:stone",
  });
  // Cheap Hand Crank
  event.remove({ output: "create:hand_crank" });
  event.shaped(Item.of("create:hand_crank"), ["PPP", "  S", "  "], {
    P: "#minecraft:planks",
    S: "minecraft:stick",
  });

  // Infernal Mechanism
  event.remove({ output: "create_dd:infernal_mechanism" });
  event.recipes
    .createSequencedAssembly(
      ["create_dd:infernal_mechanism"],
      "createdeco:netherite_sheet",
      [
        event.recipes.createDeploying(
          "create_dd:incomplete_infernal_mechanism",
          ["create_dd:incomplete_infernal_mechanism", "create:cogwheel"]
        ),
        event.recipes.createDeploying(
          "create_dd:incomplete_infernal_mechanism",
          ["create_dd:incomplete_infernal_mechanism", "minecraft:magma_block"]
        ),
        event.recipes.createDeploying(
          "create_dd:incomplete_infernal_mechanism",
          ["create_dd:incomplete_infernal_mechanism", "#forge:nuggets/gold"]
        ),
        event.recipes.create.filling(
          "create_dd:incomplete_infernal_mechanism",
          [
            Fluid.of("minecraft:lava", 100),
            "create_dd:incomplete_infernal_mechanism",
          ]
        ),
      ]
    )
    .transitionalItem("create_dd:incomplete_infernal_mechanism")
    .loops(2);

  // Harder Hydraulic Press
  event.remove({ output: "create_dd:hydraulic_press" });
  event.shaped(Item.of("create_dd:hydraulic_press"), [" S ", " H ", " B "], {
    S: "create_dd:sealed_mechanism",
    H: "create_dd:hydraulic_casing",
    B: "create_dd:bronze_casing",
  });

  // Harder Spout
  event.remove({ output: "create:spout" });
  event.shaped(Item.of("create:spout"), [" C ", " K ", " S "], {
    C: "create:copper_casing",
    K: "minecraft:dried_kelp",
    S: "create_dd:sealed_mechanism",
  });

  // Harder Bronze Casing
  event.remove({ output: "create_dd:reinforcement_plating" });
  event.shapeless("create_dd:reinforcement_plating", [
    "#forge:storage_blocks/steel",
    "#forge:storage_blocks/bronze",
    "#forge:storage_blocks/bronze",
    "#forge:storage_blocks/steel",
  ]);
  event.remove({ output: "create_dd:bronze_casing" });
  event.recipes.create.deploying("create_dd:bronze_casing", [
    "create_dd:reinforcement_plating",
    "create_dd:bronze_ingot",
  ]);

  // Concrete
  event.stonecutting(
    "2x createindustry:concrete_slab",
    "createindustry:concrete"
  );
  event.stonecutting(
    "createindustry:concrete_stairs",
    "createindustry:concrete"
  );
  event.stonecutting("createindustry:concrete_wall", "createindustry:concrete");
  event.recipes.create.filling("createindustry:liquid_concrete_bucket", [
    Fluid.of("createindustry:liquid_concrete_fluid", 1000),
    "minecraft:bucket",
  ]);
  event.recipes.create.emptying(
    [
      Fluid.of("createindustry:liquid_concrete_fluid", 1000),
      "minecraft:bucket",
    ],
    "createindustry:liquid_concrete_bucket"
  );

  // Harder steam engine
  event.remove({ output: "create:steam_engine" });
  event.shaped(Item.of("create:steam_engine"), [" G ", "IMS", " C "], {
    G: "create:golden_sheet",
    I: "create_dd:infernal_mechanism",
    M: "create_dd:integrated_mechanism",
    S: "create_dd:sealed_mechanism",
    C: "minecraft:copper_block",
  });

  // Harder Deployer
  event.remove({ output: "create:deployer" });
  event.shaped(Item.of("create:deployer"), [" E ", " A ", "LBL"], {
    E: "create:electron_tube",
    A: "create:andesite_casing",
    L: "create_dd:inductive_mechanism",
    B: "create:brass_hand",
  });

  // Only Create Cake Baking
  event.remove({ id: "minecraft:cake" });
  event.remove({ id: "farmersdelight:cake_from_milk_bottle" });
  event.remove({ id: "create:crafting/curiosities/cake" });

  // Harder Item Vault
  event.remove({ id: "create:crafting/kinetics/item_vault" });

  // Harder Train Controls
  event.remove({ output: "create:controls" });
  event.shaped("create:controls", [" L ", " T ", "P I"], {
    L: "minecraft:lever",
    T: "create:railway_casing",
    P: "create:precision_mechanism",
    I: "create_dd:integrated_mechanism",
  });

  // Harder Drill
  event.remove({ output: "create:mechanical_drill" });
  event.shaped(Item.of("create:mechanical_drill"), [" A ", "ASA", " C "], {
    A: "create:andesite_alloy",
    S: "#forge:plates/steel",
    C: "create:andesite_casing",
  });

  // Shadow Steel
  event.recipes.create
    .mixing(
      [Item.of("create_dd:shadow_steel")],
      ["minecraft:netherite_block", "8x #forge:plates/steel"]
    )
    .superheated();

  // "Harder" Super glue
  event.remove({ id: "create:crafting/kinetics/super_glue" });

  // Fix brass speaker craft
  event.remove({ id: "create_things_and_misc:brass_speaker_craft" });
  event.shaped(
    Item.of("create_things_and_misc:brass_speaker"),
    [" R ", " N ", " R "],
    {
      R: "create:railway_casing",
      N: "minecraft:note_block",
    }
  );

  // Fix slime recipe
  event.remove({ id: "create:crafting/appliances/slime_ball" });
  event.shapeless("minecraft:slime_ball", [
    "minecraft:lime_dye",
    "#forge:dough",
  ]);

  // Nerf Tuff Crusing
  event.remove({ id: "create:crushing/tuff_recycling" });
  event.recipes.create.crushing(
    ["create_dd:potassic_cobble"],
    "#create:stone_types/tuff"
  );

  // Fix Coal Coke
  event.remove({ output: "createindustry:coal_coke" });
  event.recipes.create
    .mixing("createindustry:coal_coke", "#minecraft:coals")
    .heated();

  // Harder steel
  event.remove({ id: "create_dd:compacting/steel_ingot" });
  event.recipes.create
    .compacting("create_dd:steel_ingot", [
      "2x #forge:ingots/cast_iron",
      "createindustry:coal_coke",
    ])
    .heated()
    .id("kubejs:steel_ingot");
});
