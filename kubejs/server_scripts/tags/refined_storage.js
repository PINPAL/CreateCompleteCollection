// Make refined storage recipes wrench compatible
ServerEvents.tags("item", (event) => {
	// Get the #create:wrench_pickup tag collection and add Refined Storage Cable to it
	event.get("create:wrench_pickup").add("refinedstorage:cable");

	const wirelessGrids = [
		"refinedstorage:wireless_grid",
		"refinedstorageaddons:wireless_crafting_grid",
		"refinedstorage:wireless_fluid_grid",
		"refinedstorage:wireless_crafting_monitor",
	];
	wirelessGrids.forEach((grid) => {
		event.remove("curios:curio", grid);
		event.add("curios:grid", grid);
	});
});
ServerEvents.tags("blocks", (event) => {
	event.get("create:wrench_pickup").add("refinedstorage:cable");
});
