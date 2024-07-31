// priority: -120

let removedItems = global.removedItems;

removedItems.forEach((item) => {
	ServerEvents.tags("item", (event) => {
		event.removeAllTagsFrom(item);
	});
	ServerEvents.tags("block", (event) => {
		event.removeAllTagsFrom(item);
	});
});

unifiedIngots.forEach((ingot) => {
	ServerEvents.tags("item", (event) => {
		// Remove tags for all modded ingots
		ingot.modsUsing.forEach((mod) => {
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_ingot");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_nugget");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_sheet");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_plate");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_block");
		});
	});
	ServerEvents.tags("block", (event) => {
		// Remove tags for all modded blocks
		ingot.modsUsing.forEach((mod) => {
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_block");
		});
	});
});
