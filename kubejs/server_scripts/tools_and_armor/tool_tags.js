// priority: 999
ServerEvents.tags("item", (event) => {
	// Add paxel tag
	event.add("cosmic_contraptions:paxel", /cosmic_contraptions:.*_paxel$/);
	event.add("forge:tools/hoe", /cosmic_contraptions:.*_paxel$/);
});

ServerEvents.tags("block", (event) => {
	// Make paxel break more stuff faster
	event.add("minecraft:mineable/paxel", "#forge:glass");
	event.add("minecraft:mineable/paxel", "#minecraft:mineable/hoe");
	event.add("minecraft:mineable/paxel", "#minecraft:wool");
	event.add("minecraft:mineable/paxel", "#minecraft:wool_carpets");
	event.add("minecraft:mineable/paxel", "#minecraft:beehives");
	event.add("minecraft:mineable/paxel", "#minecraft:shulker_boxes");
	event.add("minecraft:mineable/paxel", "minecraft:lantern");
});
