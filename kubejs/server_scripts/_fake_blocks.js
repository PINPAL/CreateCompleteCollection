ServerEvents.recipes((event) => {
	const disabledItems = ["anvil", "brewing_stand"];

	disabledItems.forEach((disabledItem) => {
		event.replaceInput({ input: disabledItem }, disabledItem, `create_cc:${disabledItem}`);
		event.replaceOutput({ output: disabledItem }, disabledItem, `create_cc:${disabledItem}`);
	});
});
