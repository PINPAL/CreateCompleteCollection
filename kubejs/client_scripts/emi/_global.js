// Fetch from global store
let itemsToRemove = global.itemsToRemove;

// Hide all items in the list
JEIEvents.hideItems((event) => {
	itemsToRemove.forEach((item) => {
		event.hide(item);
	});
});

// Hide all fluids in the list
JEIEvents.hideFluids((event) => {
	// Hide Fluids
	itemsToRemove.forEach((fluid) => {
		event.hide(fluid);
	});
});
