ServerEvents.recipes((event) => {
  // Elite Coil
  event.shaped(Item.of("ironjetpacks:elite_coil"), [" DR", "DPD", "RD "], {
    D: "minecraft:diamond",
    R: "minecraft:redstone",
    P: "create:precision_mechanism",
  });

  // Jetpack
  event.recipes.create.mechanical_crafting(
    Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:brass",Throttle:1.0d}'),
    [" BSB ", "BECEB", "BMDMB", "BVTVB", " V V "],
    {
      B: "create:brass_sheet",
      S: "create:shaft",
      E: "ironjetpacks:elite_coil",
      C: "create:copper_backtank",
      M: "createaddition:electric_motor",
      T: "createaddition:tesla_coil",
      V: "create:chute",
      D: "minecraft:dragon_head",
    }
  );
});
