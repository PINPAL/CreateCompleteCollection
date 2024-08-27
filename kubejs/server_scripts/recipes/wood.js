const woodTypes = [
  { name: "hardened", namespace: "createindustry" },
  { name: "waterproof", namespace: "createindustry" },
];

ServerEvents.recipes((event) => {
  woodTypes.forEach((wood) => {
    event.shaped(`6x kubejs:${wood.name}_slab`, ["   ", "PPP", "   "], {
      P: `${wood.namespace}:${wood.name}_planks`,
    });
    event.shaped(`4x kubejs:${wood.name}_stairs`, ["P  ", "PP ", "PPP"], {
      P: `${wood.namespace}:${wood.name}_planks`,
    });
    event.shaped(Item.of(`kubejs:${wood.name}_fence`), ["   ", "PSP", "PSP"], {
      P: `${wood.namespace}:${wood.name}_planks`,
      S: "minecraft:stick",
    });
    event.shaped(`kubejs:${wood.name}_fence_gate`, ["   ", "SPS", "SPS"], {
      P: `${wood.namespace}:${wood.name}_planks`,
      S: "minecraft:stick",
    });
    event.shapeless(`kubejs:${wood.name}_button`, [
      `${wood.namespace}:${wood.name}_planks`,
    ]);
    event.shaped(`kubejs:${wood.name}_pressure_plate`, ["PP ", "   ", "   "], {
      P: `${wood.namespace}:${wood.name}_planks`,
    });
  });
});
