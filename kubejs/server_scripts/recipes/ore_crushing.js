const ores = [
  { name: "iron", mod: "minecraft", rock: "crimsite", rockMod: "create" },
  { name: "gold", mod: "minecraft", rock: "ochrum", rockMod: "create" },
  { name: "copper", mod: "minecraft", rock: "veridium", rockMod: "create" },
  { name: "tin", mod: "create_dd", rock: "potassic", rockMod: "create_dd" },
  { name: "zinc", mod: "create", rock: "asurine", rockMod: "create" },
];

ServerEvents.recipes((event) => {
  ores.forEach((ore) => {
    event.remove([
      {
        type: "create:crushing",
        input: `${ore.mod}:raw_${ore.name}`,
      },
      {
        type: "create:crushing",
        input: `${ore.mod}:${ore.name}_ore`,
      },
      {
        type: "create:crushing",
        input: `${ore.mod}:deepslate_${ore.name}_ore`,
      },
      {
        type: "create:crushing",
        input: `#${ore.rockMod}:stone_types/${ore.rock}`,
      },
      {
        type: "create:crushing",
        input: `create_dd:${ore.rock}_cobble`,
      },
    ]);

    event.recipes.create
      .crushing(
        [
          `create:crushed_raw_${ore.name}`,
          Item.of(`create:crushed_raw_${ore.name}`).withChance(0.5),
          Item.of("create:experience_nugget").withChance(0.75),
        ],
        [`${ore.mod}:raw_${ore.name}`]
      )
      .id(`ore_crushing/raw_${ore.name}`);

    event.recipes.create
      .crushing(
        [
          `2x create:crushed_raw_${ore.name}`,
          Item.of(`create:crushed_raw_${ore.name}`).withChance(0.75),
          Item.of("create:experience_nugget").withChance(0.95),
        ],
        [`#forge:ores/${ore.name}`]
      )
      .id(`ore_crushing/${ore.name}_ore`);

    event.recipes.create
      .crushing(
        [Item.of(`create:crushed_raw_${ore.name}`).withChance(0.25)],
        [`${ore.rockMod}:${ore.rock}`]
      )
      .id(`ore_crushing/${ore.name}_from_${ore.rock}`);
  });
});
