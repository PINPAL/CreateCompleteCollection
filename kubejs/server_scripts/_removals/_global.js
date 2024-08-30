// priority: -150
// Fetch from global store
let itemsToRemove = global.removedItems;

global.removedItems.forEach((item) => {
	// Remove all recipes that output the items in the list
	ServerEvents.recipes((event) => {
		event.remove({ output: item });
	});
	// Remove all tags from the items in the list
	ServerEvents.tags("item", (event) => {
		event.removeAllTagsFrom(item);
		event.add("c:hidden_from_recipe_viewers", item);
	});
});

global.removedFluids.forEach((fluid) => {
	// Remove all recipes that output the fluids in the list
	ServerEvents.recipes((event) => {
		event.remove({ output: Fluid.of(fluid) });
	});
	// Remove all tags from the fluids in the list
	ServerEvents.tags("fluid", (event) => {
		event.removeAllTagsFrom(fluid);
		event.add("c:hidden_from_recipe_viewers", fluid);
	});
});
