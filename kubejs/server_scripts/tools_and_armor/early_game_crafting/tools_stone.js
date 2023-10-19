ServerEvents.recipes((event) => {
  // Stone Paxel Head
  event
    .shaped("kubejs:stone_head", ["MMM", "MSM", "M M"], {
      M: "kubejs:refined_stone",
      S: "minecraft:stick",
    })
    .id("kubejs:stone_head_crafting");
  // Stone Blade
  event
    .shapeless("kubejs:stone_blade", [
      "kubejs:refined_stone",
      "minecraft:stick",
      "kubejs:refined_stone",
    ])
    .id("kubejs:stone_blade_crafting");
});
