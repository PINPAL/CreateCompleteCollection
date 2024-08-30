JEIEvents.hideItems((event) => {
	// Hide Items
	global.hiddenItems.forEach((item) => {
		event.hide(item);
	});
	// Hide Removed Items
	global.removedItems.forEach((item) => {
		event.hide(item);
	});
});

JEIEvents.hideFluids((event) => {
	// Hide Removed Fluids
	global.removedFluids.forEach((fluid) => {
		event.hide(fluid);
	});
});
