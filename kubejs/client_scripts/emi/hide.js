JEIEvents.hideItems((event) => {
	// Hide Items
	global.hideFromJEI.forEach((item) => {
		event.hide(item);
	});
	global.removedItems.forEach((item) => {
		event.hide(item);
	});
	global.unifiedIngots.forEach((ingot) => {
		ingot.modsUsing.forEach((mod) => {
			if (ingot.type == "ingot") {
				event.hide(mod + ":" + ingot.name + "_ingot");
			} else if (ingot.type == "alloy") {
				event.hide(mod + ":" + ingot.name + "_alloy");
			} else {
				event.hide(mod + ":" + ingot.name);
			}
			event.hide(mod + ":" + ingot.name + "_nugget");
			event.hide(mod + ":" + ingot.name + "_sheet");
			event.hide(mod + ":" + ingot.name + "en_sheet");
			event.hide(mod + ":" + ingot.name + "_plate");
			event.hide(mod + ":" + ingot.name + "_block");
		});
	});
});
