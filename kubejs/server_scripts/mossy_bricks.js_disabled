const createDD_bricks = [
  "andesite",
  "asurine",
  "calcite",
  "crimsite",
  "deepslate",
  "diorite",
  "dripstone",
  "gabbro",
  "granite",
  "limestone",
  "ochrum",
  "potassic",
  "scorchia",
  "scoria",
  "tuff",
  "veridium",
  "weathered_limestone",
];

const createDD_mossy = [
  "andesite_alloy_block",
  "andesite_casing",
  "andesite_scaffolding",
];

ServerEvents.recipes((event) => {
  createDD_bricks.forEach((brick) => {
    // remove broken recipe
    event.remove({ id: `create_dd:crafting/${brick}_mossy_bricks` });

    // generate output mossy_bricks and input cut_bricks
    let output = `create_dd:${brick}_mossy_bricks`;
    let input = `create:cut_${brick}_bricks`;
    if (Item.of(input).isEmpty()) {
      input = `create_dd:cut_${brick}_bricks`;
    }

    // create recipe
    event
      .shapeless(output, [input, ["minecraft:vine", "minecraft:moss_block"]])
      .id(`mossy_bricks/${brick}`);
    event.recipes.create
      .splashing(output, input)
      .id(`mossy_bricks/${brick}_splashing`);
  });

  // wash some other stuff for mossy variants
  createDD_mossy.forEach((item) => {
    event.recipes.create
      .splashing(`create_dd:mossy_${item}`, `create:${item}`)
      .id(`create_dd/mossy_${item}_splashing`);
  });
});
