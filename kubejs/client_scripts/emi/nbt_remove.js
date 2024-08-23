// priority: -1

ClientEvents.highPriorityAssets((event) => {
	// Define the JSON
	let json = {
		removed: [],
	};
	// Generate a stack and add each item to the JSON
	global.removedItems.forEach((item) => {
		let stack = {
			stack: {
				type: "item",
				id: item.getId(),
				nbt: item.getNbtString(),
			},
		};
		json.added.push(stack);
	});
	// Save the JSON to the resource location
	event.add("emi:index/stacks/removed.json", json);
});
