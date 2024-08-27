ServerEvents.recipes((event) => {
  // Copper Paxel Head
  event
    .shaped("kubejs:copper_head", ["MMM", "MSM", "M M"], {
      M: "#forge:ingots/copper",
      S: "minecraft:stick",
    })
    .id("kubejs:copper_head_crafting");
  // Copper Blade
  event
    .shapeless("kubejs:copper_blade", [
      "#forge:ingots/copper",
      "minecraft:stick",
      "#forge:ingots/copper",
    ])
    .id("kubejs:copper_blade_crafting");
});
