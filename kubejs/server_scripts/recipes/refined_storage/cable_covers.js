ServerEvents.recipes((event) => {
	// Brass
	event
		.shapeless(Item.of("refinedstorage:cover", 8).withNBT({ Item: { Count: 1, id: "create:brass_casing" } }), [
			"refinedstorage:cable",
			"create:brass_casing",
		])
		.id("cosmic_contraptions:refined_storage/cable_covers/brass_from_cable");
	// Brass (Hollow)
	event
		.shapeless(
			Item.of("refinedstorage:hollow_cover")
				.withNBT({ Item: { Count: 1, id: "create:brass_casing" } })
				.strongNBT(),
			[
				Item.of("refinedstorage:cover")
					.withNBT({ Item: { Count: 1, id: "create:brass_casing" } })
					.strongNBT(),
			]
		)
		.id("cosmic_contraptions:refined_storage/cable_covers/brass_hollow_from_cover");
	// Brass (Hollow to Cover)
	event
		.shapeless(
			Item.of("refinedstorage:cover")
				.withNBT({ Item: { Count: 1, id: "create:brass_casing" } })
				.strongNBT(),
			[
				Item.of("refinedstorage:hollow_cover")
					.withNBT({ Item: { Count: 1, id: "create:brass_casing" } })
					.strongNBT(),
			]
		)
		.id("cosmic_contraptions:refined_storage/cable_covers/brass_from_hollow");

	// Andesite
	event
		.shapeless(Item.of("refinedstorage:cover", 8).withNBT({ Item: { Count: 1, id: "create:andesite_casing" } }), [
			"refinedstorage:cable",
			"create:andesite_casing",
		])
		.id("cosmic_contraptions:refined_storage/cable_covers/andesite_from_cable");
	// Andesite (Hollow)
	event
		.shapeless(
			Item.of("refinedstorage:hollow_cover")
				.withNBT({ Item: { Count: 1, id: "create:andesite_casing" } })
				.strongNBT(),
			[
				Item.of("refinedstorage:cover")
					.withNBT({ Item: { Count: 1, id: "create:andesite_casing" } })
					.strongNBT(),
			]
		)
		.id("cosmic_contraptions:refined_storage/cable_covers/andesite_hollow_from_cover");
	// Andesite (Hollow to Cover)
	event
		.shapeless(
			Item.of("refinedstorage:cover")
				.withNBT({ Item: { Count: 1, id: "create:andesite_casing" } })
				.strongNBT(),
			[
				Item.of("refinedstorage:hollow_cover")
					.withNBT({ Item: { Count: 1, id: "create:andesite_casing" } })
					.strongNBT(),
			]
		)
		.id("cosmic_contraptions:refined_storage/cable_covers/andesite_from_hollow");
});
