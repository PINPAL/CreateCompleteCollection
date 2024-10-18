const potions = [
  { name: "water", hasLong: false, hasStrong: false },
  { name: "mundane", hasLong: false, hasStrong: false },
  { name: "thick", hasLong: false, hasStrong: false },
  { name: "awkward", hasLong: false, hasStrong: false },
  { name: "night_vision", hasLong: true, hasStrong: false },
  { name: "invisibility", hasLong: true, hasStrong: false },
  { name: "leaping", hasLong: true, hasStrong: true },
  { name: "fire_resistance", hasLong: true, hasStrong: false },
  { name: "swiftness", hasLong: true, hasStrong: true },
  { name: "slowness", hasLong: true, hasStrong: true },
  { name: "turtle_master", hasLong: true, hasStrong: true },
  { name: "water_breathing", hasLong: true, hasStrong: false },
  { name: "healing", hasLong: false, hasStrong: true },
  { name: "harming", hasLong: false, hasStrong: true },
  { name: "poison", hasLong: true, hasStrong: true },
  { name: "regeneration", hasLong: true, hasStrong: true },
  { name: "strength", hasLong: true, hasStrong: true },
  { name: "weakness", hasLong: true, hasStrong: false },
  { name: "slow_falling", hasLong: true, hasStrong: false },
];
const potionTypes = [
  { id: "potion", fluid: "REGULAR" },
  { id: "splash_potion", fluid: "SPLASH" },
  { id: "lingering_potion", fluid: "LINGERING" },
];

potionTypes.forEach((type) => {
  potions.forEach((potion) => {
    createPotionRecipe(potion.name, type.id, type.fluid);
    if (potion.hasLong) {
      createPotionRecipe(`long_${potion.name}`, type.id, type.fluid);
    }
    if (potion.hasStrong) {
      createPotionRecipe(`strong_${potion.name}`, type.id, type.fluid);
    }
  });
});

function createPotionRecipe(potionName, potionIdType, potionFluidType) {
  ServerEvents.recipes((event) => {
    event.recipes.create.filling(
      Item.of(
        `minecraft:${potionIdType}`,
        `{Potion:"minecraft:${potionName}"}`
      ),
      [
        "minecraft:glass_bottle",
        Fluid.of(
          `create:potion`,
          250,
          `{Bottle:"${potionFluidType}", Potion:"minecraft:${potionName}"}`
        ),
      ]
    );
  });
}
