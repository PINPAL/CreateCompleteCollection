let createCasings = ["vault_casing", "steel_casing", "industrial_casing", "refined_radiance", "shadow_steel"];

StartupEvents.registry("block", (event) => {
	createCasings.forEach((casing) => {
		event
			.create(`create_cosmic_contraptions:${casing}`)
			.displayName(global.formatName(casing))
			.soundType("metal")
			.hardness(1.5)
			.resistance(6.0);
	});
});
