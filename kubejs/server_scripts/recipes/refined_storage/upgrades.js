ServerEvents.recipes((event) => {
	// Upgrade
	event.recipes
		.createSequencedAssembly(
			[
				// output
				Item.of("refinedstorage:upgrade"),
			],
			// input
			"#forge:plates/steel",
			[
				event.recipes.createDeploying("#forge:plates/steel", ["#forge:plates/steel", "refinedstorage:silicon"]),
				event.recipes.createDeploying("#forge:plates/steel", [
					"#forge:plates/steel",
					"createaddition:copper_wire",
				]),
				event.recipes.createDeploying("#forge:plates/steel", [
					"#forge:plates/steel",
					"createaddition:capacitor",
				]),
			]
		)
		.transitionalItem("#forge:plates/steel")
		.loops(3);

	// Crafting Upgrade
	event.shapeless("refinedstorage:crafting_upgrade", ["refinedstorage:upgrade", "minecraft:crafting_table"]);

	// Stack Upgrade
	event.shapeless("refinedstorage:stack_upgrade", ["3x refinedstorage:speed_upgrade"]);

	// Speed Upgrade
	event.recipes.create.mixing(
		[Item.of("refinedstorage:speed_upgrade")],
		["refinedstorage:upgrade", Fluid.of("create_enchantment_industry:hyper_experience", 50)]
	);
});
