let createCasings = ["vault", "steel", "industrial"];

StartupEvents.registry("block", (event) => {
	createCasings.forEach((casing) => {
		event
			.create(`create_cosmic_contraptions:${casing}_casing`)
			.displayName(global.formatName(casing) + " Casing")
			.soundType("metal")
			.hardness(1.5)
			.resistance(6.0);
	});
});
