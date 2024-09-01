ClientEvents.highPriorityAssets("en_us", (event) => {
	// Loop through all tiers
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];

		// Skip tiers that don't need diving gear
		if (!tier.hasOwnProperty("needsDivingGear")) {
			continue;
		}
		if (!tier.needsDivingGear) {
			continue;
		}

		event.addLang(`item.kubejs.${tierName}_diving_helmet`, `${formatName(tierName)} Diving Helmet`);
		event.addLang(`item.kubejs.${tierName}_diving_boots`, `${formatName(tierName)} Diving Boots`);
	}
});
