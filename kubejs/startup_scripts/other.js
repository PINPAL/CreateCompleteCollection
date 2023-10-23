StartupEvents.registry("block", (event) => {
  event.create("belt_scroll").displayName("DEV ITEM");
  event
    .create("anvil", "cardinal")
    .displayName("Anvil")
    .material("anvil")
    .hardness(5.0)
    .resistance(1200.0)
    .defaultCutout()
    .model("minecraft:block/anvil")
    // base of anvil is 2 pixels off a full block on all sides and 4 pixel tall
    .box(2, 0, 2, 14, 4, 14)
    // small lip above base is 1 pixel tall and 2 pixels smaller on X axis, 1 pixel smaller on Z axis
    .box(4, 4, 3, 12, 5, 13)
    // same again but 5 pixels high - makes the main "stand" of the anvil that seperates top and base
    .box(6, 5, 4, 10, 10, 12)
    // top of the anvil (16x6x10)
    .box(3, 10, 0, 13, 16, 16);
  event
    .create("brewing_stand")
    .displayName("Brewing Stand")
    .material("stone")
    .hardness(5.0)
    .resistance(5.0)
    .defaultCutout()
    // bounding box is 1 pixel off a full block on all sides and 2 pixel tall
    .box(1, 0, 1, 15, 2, 15)
    // second bounding  a 2x2 column in the center that stops 2 pixels short of the top
    .box(7, 2, 7, 9, 14, 9);
});

StartupEvents.registry("item", (event) => {
  // Refined Rock
  event.create("refined_stone").displayName("Refined Rock");
});
