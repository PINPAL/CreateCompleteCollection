// priority: -1
JEIEvents.addItems((event) => {
	// Add Items
	global.addToJEI.forEach((item) => {
		event.add(item);
		let itemStack = global.getItemStack(item);
		if (itemStack.hasTag("c:hidden_from_recipe_viewers")) {
			console.log("[ERROR] Item is hidden!!!!! " + itemStack);
		}
	});
});
