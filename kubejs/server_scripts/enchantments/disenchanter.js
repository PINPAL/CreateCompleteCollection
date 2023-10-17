ServerEvents.recipes((event) => {
  event.recipes.createMechanicalCrafting(
    "disenchanting:disenchanter",
    ["  D  ", " EAE ", "GDBDG", "OPPPO", " OOO "],
    {
      D: "minecraft:diamond",
      E: "create_enchantment_industry:enchanting_guide",
      A: "minecraft:experience_bottle",
      G: "minecraft:gold_block",
      B: "minecraft:book",
      O: "minecraft:obsidian",
      P: "create:powdered_obsidian",
    }
  );
});
