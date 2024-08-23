// priority: 0

ServerEvents.recipes((event) => {
	event.remove([
		{ output: "#forge:ingots/iron", input: "#forge:ores/iron" },
		{ output: "#forge:ingots/iron", input: "#forge:raw_materials/iron" },
	]);

	// Zinc Sheet
	event.recipes.create
		.pressing("create_cosmic_contraptions:zinc_sheet", "#forge:ingots/zinc")
		.id("create_cosmic_contraptions:tiers/3_iron/zinc_sheet");

	// Industrial Casing
	event.recipes.create
		.item_application("create_cosmic_contraptions:industrial_casing", [
			"create:industrial_iron_block",
			"#forge:plates/zinc",
		])
		.id("create_cosmic_contraptions:tiers/3_iron/industrial_casing");

	// Sealed Mechanism
	event.remove({ output: "create_dd:sealed_mechanism" });
	let intermediateItem = "create_dd:incomplete_sealed_mechanism";
	event.recipes
		.createSequencedAssembly(
			[
				Item.of("create_dd:sealed_mechanism").withChance(0.94),
				Item.of("create_cosmic_contraptions:copper_sheet").withChance(0.02),
				Item.of("create:framed_glass").withChance(0.01),
				Item.of("minecraft:glass").withChance(0.01),
				Item.of("create:shaft").withChance(0.01),
				Item.of("create_cosmic_contraptions:copper_nugget").withChance(0.01),
			],
			"minecraft:dried_kelp",
			[
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "create:cogwheel"]),
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "minecraft:dried_kelp"]),
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "#forge:plates/copper"]),
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "#forge:glass/colorless"]),
			]
		)
		.transitionalItem(intermediateItem)
		.loops(1)
		.id("create_cosmic_contraptions:tiers/3_iron/sealed_mechanism");

	// Iron Machine
	intermediateItem = "create_cosmic_contraptions:incomplete_t3_iron_machine";
	event.recipes
		.createSequencedAssembly(
			[Item.of("create_cosmic_contraptions:t3_iron_machine")],
			"create_cosmic_contraptions:t2_copper_machine",
			[
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "#forge:rods/iron"]),
				event.recipes.createDeploying(intermediateItem, [
					intermediateItem,
					"create_cosmic_contraptions:industrial_casing",
				]),
				event.recipes.createCutting(intermediateItem, intermediateItem),
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "create_dd:sealed_mechanism"]),
			]
		)
		.transitionalItem(intermediateItem)
		.loops(1)
		.id("create_cosmic_contraptions:tiers/3_iron/copper_machine");
});
