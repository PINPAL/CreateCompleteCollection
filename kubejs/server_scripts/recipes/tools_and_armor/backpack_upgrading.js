function upgradeBackpack(inventory, itemstack, backpack) {
  let item = inventory.find(Item.of(backpack).ignoreNBT());
  let nbt = item.nbt;
  if (nbt == null) {
    nbt = {};
  } else {
    nbt.inventorySlots = nbt.inventorySlots + 9;
    nbt.upgradeSlots = nbt.upgradeSlots + 1;
  }
  return itemstack.withNBT(nbt);
}

const backpackTiers = [
  { backpackId: "iron", previousTier: "", stitching: "iron" },
  {
    backpackId: "gold",
    previousTier: "iron",
    stitching: "steel",
  },
  {
    backpackId: "diamond",
    previousTier: "gold",
    stitching: "diamond",
  },
  {
    backpackId: "netherite",
    previousTier: "diamond",
    stitching: "netherite",
  },
];

ServerEvents.recipes((event) => {
  backpackTiers.forEach((tier) => {
    let output = `sophisticatedbackpacks:${tier.backpackId}_backpack`;
    let input = `sophisticatedbackpacks:${tier.previousTier}${
      tier.previousTier == "" ? "" : "_"
    }backpack`;
    let stitching = `2x kubejs:${tier.stitching}_stitching`;
    event
      .shapeless(output, [input, stitching])
      .modifyResult((inventory, itemstack) => {
        return upgradeBackpack(inventory, itemstack, input);
      });
  });
});
