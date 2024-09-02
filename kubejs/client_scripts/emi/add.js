// priority: -1

ClientEvents.highPriorityAssets((event) => {
	// Define the JSON
	let json = {
		added: [],
	};
	// Generate a stack and add each item to the JSON
	global.addToJEI.forEach((item) => {
		let itemStack = global.getItemStack(item);
		let stack = {
			stack: {
				type: "item",
				id: itemStack.getId(),
				nbt: itemStack.getNbtString(),
			},
		};
		json.added.push(stack);
	});
	// Save the JSON to the resource location
	event.add("emi:index/stacks/add.json", json);
});
