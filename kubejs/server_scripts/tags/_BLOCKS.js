ServerEvents.tags("block", (event) => {
	[/quark:.*blossom.*/, /quark:.*ancient.*/].forEach((item) => {
		event.removeAllTagsFrom(item);
	});

	const wrench_pickup = ["kubejs:steel_casing", /create_things_and_misc:.*_sail/, "refinedstorage:cable"];
	wrench_pickup.forEach((item) => {
		event.add("create:wrench_pickup", item);
	});

	event.remove("forge:stone", /quark:/);
});
