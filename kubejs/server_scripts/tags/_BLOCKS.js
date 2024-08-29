ServerEvents.tags("block", (event) => {
	[/quark:.*blossom.*/, /quark:.*ancient.*/].forEach((item) => {
		event.removeAllTagsFrom(item);
	});

	const wrench_pickup = [
		"kubejs:steel_casing",
		/create_things_and_misc:.*_sail/,
		"refinedstorage:cable",
		"create_things_and_misc:sprinkler",
	];
	wrench_pickup.forEach((item) => {
		event.add("create:wrench_pickup", item);
	});

	// Make paxel break more stuff faster
	event.add("minecraft:mineable/pickaxe", "#forge:glass");
	event.add("minecraft:mineable/pickaxe", "#minecraft:mineable/hoe");
	event.add("minecraft:mineable/pickaxe", "#minecraft:wool");
	event.add("minecraft:mineable/pickaxe", "#minecraft:wool_carpets");
	event.add("minecraft:mineable/pickaxe", "#minecraft:beehives");
	event.add("minecraft:mineable/pickaxe", "#minecraft:shulker_boxes");
	event.add("minecraft:mineable/pickaxe", "minecraft:lantern");
	event.add("minecraft:mineable/pickaxe", "createindustry:fireclay");
});
