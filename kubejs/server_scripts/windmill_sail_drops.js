ServerEvents.blockLootTables((event) => {
  // Fix sails not dropping anything when broken
  event.addSimpleBlock("create_things_and_misc:acacia_sail");
  event.addSimpleBlock("create_things_and_misc:birch_sail");
  event.addSimpleBlock("create_things_and_misc:dark_oak_sail");
  event.addSimpleBlock("create_things_and_misc:jungle_sail");
  event.addSimpleBlock("create_things_and_misc:oak_sail");
  event.addSimpleBlock("create_things_and_misc:spruce_sail");
  event.addSimpleBlock("create_things_and_misc:mangrove_sail");
  event.addSimpleBlock("create_things_and_misc:crimson_sail");
  event.addSimpleBlock("create_things_and_misc:warped_sail");
  event.addSimpleBlock("create_things_and_misc:bamboo_sail");
});
