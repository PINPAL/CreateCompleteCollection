// priority: -99
// Fetch from global store
let itemsToRemove = global.removedItems;

ServerEvents.recipes((event) => {
	// Remove all recipes that output the items in the list
	itemsToRemove.forEach((item) => {
		event.remove({ output: item });
	});
});
