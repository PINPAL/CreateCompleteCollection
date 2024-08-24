// ============================================================================
// Random enchants via recipe sequence
// ============================================================================
ServerEvents.recipes((event) => {
	event.recipes
		.createSequencedAssembly(
			[
				"kubejs:lootbox_enchantments_generic",
				Item.of("kubejs:lootbox_enchantments_weapon").withChance(0.333),
				Item.of("kubejs:lootbox_enchantments_armor").withChance(0.333),
			],
			// input
			"minecraft:book",
			// sequence
			[
				event.recipes.create.filling("minecraft:book", [
					Fluid.of("create_enchantment_industry:experience", 100),
					"minecraft:book",
				]),
				event.recipes.createDeploying("minecraft:book", ["minecraft:book", "minecraft:lapis_lazuli"]),
			]
		)
		.transitionalItem("minecraft:book")
		.loops(1);
});
