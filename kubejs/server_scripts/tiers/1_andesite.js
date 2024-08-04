ServerEvents.recipes((event) => {
	// Andesite Casing
	event.remove({ output: "create:andesite_casing" });
	event.recipes.create
		.item_application("create:andesite_casing", ["create_cc:t0_stone_machine", "#forge:ingots/andesite"])
		.id("create_cc:tiers/1_andesite/andesite_casing");

	// Andesite Machine
	event.recipes
		.shaped("create_cc:t1_andesite_machine", [" A ", "ACA", " A "], {
			A: "#forge:nuggets/andesite",
			C: "create:andesite_casing",
		})
		.id("create_cc:tiers/1_andesite/andesite_machine");
	event.recipes.create
		.mixing("create_cc:t1_andesite_machine", ["4x #forge:nuggets/andesite", "create:andesite_casing"])
		.id("create_cc:tiers/1_andesite/andesite_machine_mixing");
});
