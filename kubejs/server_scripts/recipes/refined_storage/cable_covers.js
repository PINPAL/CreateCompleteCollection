ServerEvents.recipes((event) => {
  // Brass
  event.shapeless(
    Item.of(
      "refinedstorage:cover",
      8,
      '{Item:{Count:1,id:"create:brass_casing"}}'
    ),
    ["refinedstorage:cable", "create:brass_casing"]
  );
  // Brass (Hollow)
  event.shapeless(
    Item.of(
      "refinedstorage:hollow_cover",
      '{Item:{Count:1,id:"create:brass_casing"}}'
    ),
    [
      Item.of(
        "refinedstorage:cover",
        '{Item:{Count:1,id:"create:brass_casing"}}'
      ).strongNBT(),
    ]
  );
  // Brass (Hollow to Cover)
  event.shapeless(
    Item.of(
      "refinedstorage:cover",
      '{Item:{Count:1,id:"create:brass_casing"}}'
    ),
    [
      Item.of(
        "refinedstorage:hollow_cover",
        '{Item:{Count:1,id:"create:brass_casing"}}'
      ).strongNBT(),
    ]
  );

  // Andesite
  event.shapeless(
    Item.of(
      "refinedstorage:cover",
      8,
      '{Item:{Count:1,id:"create:andesite_casing"}}'
    ),
    ["refinedstorage:cable", "create:andesite_casing"]
  );
  // Andesite (Hollow)
  event.shapeless(
    Item.of(
      "refinedstorage:hollow_cover",
      '{Item:{Count:1,id:"create:andesite_casing"}}'
    ),
    [
      Item.of(
        "refinedstorage:cover",
        '{Item:{Count:1,id:"create:andesite_casing"}}'
      ).strongNBT(),
    ]
  );
  // Andesite (Hollow to Cover)
  event.shapeless(
    Item.of(
      "refinedstorage:cover",
      '{Item:{Count:1,id:"create:andesite_casing"}}'
    ),
    [
      Item.of(
        "refinedstorage:hollow_cover",
        '{Item:{Count:1,id:"create:andesite_casing"}}'
      ).strongNBT(),
    ]
  );
});
