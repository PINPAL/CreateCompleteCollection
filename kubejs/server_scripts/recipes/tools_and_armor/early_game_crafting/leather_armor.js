ServerEvents.recipes((event) => {
  // Leather Armor
  event.shaped("minecraft:leather_helmet", ["AAA", "A A"], {
    A: "#forge:leather",
  });
  event.shaped("minecraft:leather_chestplate", ["A A", "AAA", "AAA"], {
    A: "#forge:leather",
  });
  event.shaped("minecraft:leather_leggings", ["AAA", "A A", "A A"], {
    A: "#forge:leather",
  });
  event.shaped("minecraft:leather_boots", ["A A", "A A"], {
    A: "#forge:leather",
  });
});
