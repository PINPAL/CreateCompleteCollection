let tierMachines = ["stone", "andesite", "copper", "iron", "brass", "steel", "train", "space", "mars", "glacio"];

StartupEvents.registry("block", (event) => {
	let index = 0;
	tierMachines.forEach((tier) => {
		event
			.create(`create_cc:t${index}_${tier}_machine`)
			.displayName(`${formatName(tier)} Machine`)
			.soundType("metal")
			.tagBlock("minecraft:mineable/paxel")
			.defaultCutout()
			// collision box is 1 pixel of a full block
			.box(1, 1, 1, 15, 15, 15);
		index++;
	});
});
StartupEvents.registry("item", (event) => {
	let index = 0;
	tierMachines.forEach((tier) => {
		event
			.create(`create_cc:incomplete_t${index}_${tier}_machine`)
			.displayName(`${formatName(tier)} Machine`)
			.unstackable();
		index++;
	});
});
