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
	// Remove all tags from the blocks in the list
	ServerEvents.tags("block", (event) => {
		event.removeAllTagsFrom(item);
		event.add("c:hidden_from_recipe_viewers", item);
	});
});

global.hideFromJEI.forEach((item) => {
	ServerEvents.tags("item", (event) => {
		event.add("c:hidden_from_recipe_viewers", item);
	});
	ServerEvents.tags("block", (event) => {
		event.add("c:hidden_from_recipe_viewers", item);
	});
});
