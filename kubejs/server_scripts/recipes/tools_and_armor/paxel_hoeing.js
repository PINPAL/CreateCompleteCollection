ServerEvents.recipes((event) => {
  event.recipes.createItemApplication("minecraft:farmland", [
    "minecraft:dirt_path",
    "#kubejs:paxel",
  ]);
});
