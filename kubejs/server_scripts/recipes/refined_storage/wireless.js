ServerEvents.recipes((event) => {
  // Wireless Transmitter
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("refinedstorage:wireless_transmitter"),
      ],
      // input
      "createaddition:brass_rod",
      [
        event.recipes.createDeploying("createaddition:brass_rod", [
          "createaddition:brass_rod",
          "refinedstorage:silicon",
        ]),
        event.recipes.createDeploying("createaddition:brass_rod", [
          "createaddition:brass_rod",
          "refinedstorage:advanced_processor",
        ]),
        event.recipes.createDeploying("createaddition:brass_rod", [
          "createaddition:brass_rod",
          "create_things_and_misc:vibration_mechanism",
        ]),
        event.recipes.createDeploying("createaddition:brass_rod", [
          "createaddition:brass_rod",
          "createaddition:tesla_coil",
        ]),
        event.recipes.createDeploying("createaddition:brass_rod", [
          "createaddition:brass_rod",
          "createindustry:lpg_engine",
        ]),
      ]
    )
    .transitionalItem("createaddition:brass_rod")
    .loops(10);

  // Wireless Crafting Grid
  event.recipes.create.mixing(
    [Item.of("refinedstorageaddons:wireless_crafting_grid")],
    [
      "refinedstorage:wireless_transmitter",
      "refinedstorage:crafting_grid",
      Fluid.of("create_enchantment_industry:hyper_experience", 1000),
    ]
  );
  // Wireless Fluid Grid
  event.recipes.create.mixing(
    [Item.of("refinedstorage:wireless_fluid_grid")],
    [
      "refinedstorage:fluid_grid",
      Fluid.of("create_enchantment_industry:hyper_experience", 500),
    ]
  );
  // Wireless Crafting Monitor
  event.recipes.create.mixing(
    [Item.of("refinedstorage:wireless_crafting_monitor")],
    [
      "refinedstorage:crafting_monitor",
      Fluid.of("create_enchantment_industry:hyper_experience", 500),
    ]
  );

  // Infinity Range Upgrade
  event.remove({ id: "rsinfinitybooster:infinity_card" });
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("rsinfinitybooster:infinity_card"),
      ],
      // input
      "refinedstorage:upgrade",
      [
        event.recipes.createDeploying("refinedstorage:upgrade", [
          "refinedstorage:upgrade",
          "refinedstorage:silicon",
        ]),
        event.recipes.createDeploying("refinedstorage:upgrade", [
          "refinedstorage:upgrade",
          "refinedstorage:advanced_processor",
        ]),
        event.recipes.createDeploying("refinedstorage:upgrade", [
          "refinedstorage:upgrade",
          "create_things_and_misc:vibration_mechanism",
        ]),
        event.recipes.createDeploying("refinedstorage:upgrade", [
          "refinedstorage:upgrade",
          "create_dd:shadow_steel",
        ]),
        event.recipes.createDeploying("refinedstorage:upgrade", [
          "refinedstorage:upgrade",
          "create_dd:chromatic_compound",
        ]),
        event.recipes.create.pressing(
          "refinedstorage:upgrade",
          "refinedstorage:upgrade"
        ),
      ]
    )
    .id("kubejs:refined_storage/infinity_card")
    .transitionalItem("refinedstorage:upgrade")
    .loops(12);

  // Dimension Range Upgrade
  event.remove({ id: "rsinfinitybooster:dimension_card" });
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("rsinfinitybooster:dimension_card"),
      ],
      // input
      "rsinfinitybooster:infinity_card",
      [
        event.recipes.createDeploying("rsinfinitybooster:infinity_card", [
          "rsinfinitybooster:infinity_card",
          "refinedstorage:advanced_processor",
        ]),
        event.recipes.createDeploying("rsinfinitybooster:infinity_card", [
          "rsinfinitybooster:infinity_card",
          "create_things_and_misc:vibration_mechanism",
        ]),
      ]
    )
    .id("kubejs:refined_storage/dimension_card")
    .transitionalItem("rsinfinitybooster:infinity_card")
    .loops(3);
});
