ServerEvents.recipes((event) => {
	// Andesite Machine
	event.recipes
		.shaped("cosmic_contraptions:t1_andesite_machine", [" G ", "ACA", " P "], {
			A: "#forge:nuggets/andesite",
			C: "create:andesite_casing",
			G: "create:cogwheel",
			P: "cosmic_contraptions:t0_stone_machine",
		})
		.id("cosmic_contraptions:tiers/1_andesite/andesite_machine");
	event.recipes.create
		.mixing("cosmic_contraptions:t1_andesite_machine", [
			"2x #forge:nuggets/andesite",
			"create:cogwheel",
			"create:andesite_casing",
			"cosmic_contraptions:t0_stone_machine",
		])
		.id("cosmic_contraptions:tiers/1_andesite/andesite_machine_mixing");
});
