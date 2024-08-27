ServerEvents.recipes((event) => {
  event.shaped(
    // output
    "kubejs:empty_canister",
    // recipe
    ["VR ", "RTR", "RRR"],
    {
      R: "minecraft:red_terracotta",
      V: { tag: "create:valve_handles" },
      T: "create:fluid_tank",
    }
  );
  event.recipes.create.filling("kubejs:brine_canister", [
    Fluid.of("kubejs:brine", 1000),
    "kubejs:empty_canister",
  ]);
  event.recipes.create.emptying(
    [Fluid.of("kubejs:brine", 1000), "kubejs:empty_canister"],
    "kubejs:brine_canister"
  );
  event.recipes.create.emptying(
    [Fluid.of("kubejs:chlorine", 1000), "kubejs:empty_canister"],
    "kubejs:chlorine_canister"
  );
});
