ServerEvents.recipes((event) => {
	// Brass
	event
		.shapeless(Item.of("refinedstorage:cover", 8, '{Item:{Count:1,id:"create:brass_casing"}}'), [
			"refinedstorage:cable",
			"create:brass_casing",
		])
		.id("kubejs:refined_storage/brass_casing_to_cover");
	// Brass (Hollow)
	event
		.shapeless(Item.of("refinedstorage:hollow_cover", '{Item:{Count:1,id:"create:brass_casing"}}'), [
			Item.of("refinedstorage:cover", '{Item:{Count:1,id:"create:brass_casing"}}').strongNBT(),
		])
		.id("kubejs:refined_storage/brass_casing_to_hollow_cover");
	// Brass (Hollow to Cover)
	event
		.shapeless(Item.of("refinedstorage:cover", '{Item:{Count:1,id:"create:brass_casing"}}'), [
			Item.of("refinedstorage:hollow_cover", '{Item:{Count:1,id:"create:brass_casing"}}').strongNBT(),
		])
		.id("kubejs:refined_storage/brass_hollow_cover_to_cover");

	// Andesite
	event
		.shapeless(Item.of("refinedstorage:cover", 8, '{Item:{Count:1,id:"create:andesite_casing"}}'), [
			"refinedstorage:cable",
			"create:andesite_casing",
		])
		.id("kubejs:refined_storage/andesite_casing_to_cover");
	// Andesite (Hollow)
	event
		.shapeless(Item.of("refinedstorage:hollow_cover", '{Item:{Count:1,id:"create:andesite_casing"}}'), [
			Item.of("refinedstorage:cover", '{Item:{Count:1,id:"create:andesite_casing"}}').strongNBT(),
		])
		.id("kubejs:refined_storage/andesite_casing_to_hollow_cover");
	// Andesite (Hollow to Cover)
	event
		.shapeless(Item.of("refinedstorage:cover", '{Item:{Count:1,id:"create:andesite_casing"}}'), [
			Item.of("refinedstorage:hollow_cover", '{Item:{Count:1,id:"create:andesite_casing"}}').strongNBT(),
		])
		.id("kubejs:refined_storage/andesite_hollow_cover_to_cover");
});
