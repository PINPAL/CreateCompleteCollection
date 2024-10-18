// priority: 0

ServerEvents.recipes((event) => {
	event.remove([
		{ output: "#forge:ingots/iron", input: "#forge:ores/iron" },
		{ output: "#forge:ingots/iron", input: "#forge:raw_materials/iron" },
	]);

	// Zinc Sheet
	event.recipes.create
		.pressing("cosmic_contraptions:zinc_sheet", "#forge:ingots/zinc")
		.id("cosmic_contraptions:tiers/3_iron/zinc_sheet");

	// Industrial Casing
	event.recipes.create
		.item_application("cosmic_contraptions:industrial_casing", [
			"create:industrial_iron_block",
			"#forge:plates/zinc",
		])
		.id("cosmic_contraptions:tiers/3_iron/industrial_casing");

	// Sealed Mechanism
	event.remove({ output: "create_dd:sealed_mechanism" });
	let intermediateItem = "create_dd:incomplete_sealed_mechanism";
	event.recipes
		.createSequencedAssembly(
			[
				Item.of("create_dd:sealed_mechanism").withChance(0.94),
				Item.of("cosmic_contraptions:copper_sheet").withChance(0.02),
				Item.of("create:framed_glass").withChance(0.01),
				Item.of("minecraft:glass").withChance(0.01),
				Item.of("create:shaft").withChance(0.01),
				Item.of("cosmic_contraptions:copper_nugget").withChance(0.01),
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
		.id("cosmic_contraptions:tiers/3_iron/sealed_mechanism");

	// Iron Machine
	intermediateItem = "cosmic_contraptions:incomplete_t3_iron_machine";
	event.recipes
		.createSequencedAssembly(
			[Item.of("cosmic_contraptions:t3_iron_machine")],
			"cosmic_contraptions:t2_copper_machine",
			[
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "#forge:rods/iron"]),
				event.recipes.createDeploying(intermediateItem, [
					intermediateItem,
					"cosmic_contraptions:industrial_casing",
				]),
				event.recipes.createCutting(intermediateItem, intermediateItem),
				event.recipes.createDeploying(intermediateItem, [intermediateItem, "create_dd:sealed_mechanism"]),
			]
		)
		.transitionalItem(intermediateItem)
		.loops(1)
		.id("cosmic_contraptions:tiers/3_iron/copper_machine");
});
