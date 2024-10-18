ServerEvents.recipes((event) => {
	const disabledItems = ["anvil", "brewing_stand"];

	disabledItems.forEach((disabledItem) => {
		event.replaceInput({ input: disabledItem }, disabledItem, `cosmic_contraptions:${disabledItem}`);
		event.replaceOutput({ output: disabledItem }, disabledItem, `cosmic_contraptions:${disabledItem}`);
	});
});
