JEIEvents.hideItems((event) => {
	// Hide Items
	global.hideFromJEI.forEach((item) => {
		event.hide(item);
	});
	// Hide Removed Items
	global.removedItems.forEach((item) => {
		event.hide(item);
	});
});

JEIEvents.hideFluids((event) => {
	// Hide Removed Fluids
	global.removedItems.forEach((fluid) => {
		event.hide(fluid);
	});
});
