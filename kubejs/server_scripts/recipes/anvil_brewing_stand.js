ServerEvents.recipes((event) => {
  const disabledItems = ["anvil", "brewing_stand"];

  disabledItems.forEach((disabledItem) => {
    event.replaceInput(
      { input: disabledItem },
      disabledItem,
      `kubejs:${disabledItem}`
    );
    event.replaceOutput(
      { output: disabledItem },
      disabledItem,
      `kubejs:${disabledItem}`
    );
  });
});
