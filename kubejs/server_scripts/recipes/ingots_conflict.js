ServerEvents.recipes((event) => {
	// Replace all industrial_iron with cast iron
	event.replaceInput(
		{ input: "create_dd:industrial_iron_ingot" },
		"create_dd:industrial_iron_ingot",
		"#forge:ingots/cast_iron"
	);
	event.replaceInput(
		{ input: "create_dd:industrial_iron_nugget" },
		"create_dd:industrial_iron_nugget",
		"#forge:nuggets/cast_iron"
	);
	event.replaceInput(
		{ input: "create_dd:industrial_iron_sheet" },
		"create_dd:industrial_iron_sheet",
		"#forge:plates/cast_iron"
	);
	event.stonecutting("create_dd:industrial_iron_block", "#forge:storage_blocks/cast_iron");
	event.stonecutting("createdeco:cast_iron_block", "#forge:storage_blocks/cast_iron");

	// Replace all occurances of "factory must grow steel_block" with #steel_block
	event.replaceInput(
		{ input: "createindustry:steel_block" },
		"createindustry:steel_block",
		"#forge:storage_blocks/steel"
	);
	event.replaceInput({ input: "createindustry:heavy_plate" }, "createindustry:heavy_plate", "#forge:plates/steel");
	// Fix Sequenced Assembly recipes (broken due to heavy_plate replace)
	event.recipes
		.createSequencedAssembly(
			[
				// this is the item that will appear in JEI as the result
				Item.of("createindustry:steel_mechanism").withChance(0.76),
				// the rest of these items will part of the scrap
				Item.of("#forge:plates/steel").withChance(0.08),
				Item.of("#forge:ingots/steel").withChance(0.08),
				Item.of("#forge:ingots/aluminum").withChance(0.05),
				Item.of("createindustry:industrial_pipe").withChance(0.03),
			],
			// the input
			"#forge:plates/steel",
			[
				event.recipes.createDeploying("createindustry:unprocessed_steel_mechanism", [
					"createindustry:unprocessed_steel_mechanism",
					"#forge:ingots/steel",
				]),
				event.recipes.createDeploying("createindustry:unprocessed_steel_mechanism", [
					"createindustry:unprocessed_steel_mechanism",
					"#forge:ingots/aluminum",
				]),
				event.recipes.createDeploying("createindustry:unprocessed_steel_mechanism", [
					"createindustry:unprocessed_steel_mechanism",
					"createindustry:screw",
				]),
				event.recipes.createDeploying("createindustry:unprocessed_steel_mechanism", [
					"createindustry:unprocessed_steel_mechanism",
					"createindustry:screwdriver",
				]),
			]
		)
		.transitionalItem("createindustry:unprocessed_steel_mechanism")
		.loops(3);

	event.remove({ output: "createindustry:diesel_engine" });
	event.recipes
		.createSequencedAssembly([Item.of("createindustry:diesel_engine")], "createindustry:heavy_machinery_casing", [
			event.recipes.createDeploying("createindustry:heavy_machinery_casing", [
				"createindustry:heavy_machinery_casing",
				"#forge:ingots/aluminum",
			]),
			event.recipes.createDeploying("createindustry:heavy_machinery_casing", [
				"createindustry:heavy_machinery_casing",
				"#forge:plates/steel",
			]),
			event.recipes.createDeploying("createindustry:heavy_machinery_casing", [
				"createindustry:heavy_machinery_casing",
				"createindustry:screw",
			]),
			event.recipes.createDeploying("createindustry:heavy_machinery_casing", [
				"createindustry:heavy_machinery_casing",
				"createindustry:screwdriver",
			]),
			event.recipes.create.filling("createindustry:heavy_machinery_casing", [
				Fluid.of("createindustry:lubrication_oil", 1000),
				"createindustry:heavy_machinery_casing",
			]),
			event.recipes.createDeploying("createindustry:heavy_machinery_casing", [
				"createindustry:heavy_machinery_casing",
				"createindustry:steel_mechanism",
			]),
		])
		.transitionalItem("createindustry:heavy_machinery_casing")
		.loops(8);
});

// Fix Steel/Bronze/Cast Iron Conflicts
ServerEvents.tags("item", (event) => {
	// Create Dreams & Desires: Bronze
	event.add("forge:ingots/bronze", "create_dd:bronze_ingot");
	event.add("forge:plates/bronze", "create_dd:bronze_sheet");
	event.remove("forge:plates/strong_bronze", "create_dd:bronze_sheet");

	// Create: The Factory Must Grow
	event.remove("forge:ingots/steel", "createindustry:steel_ingot");
	event.remove("forge:ingots/cast_iron", "createindustry:cast_iron_ingot");
	event.remove("forge:blocks/cast_iron", "createindustry:cast_iron_block");
	event.add("forge:storage_blocks/steel", "createindustry:steel_block");

	// Create Dreams & Desires: Industrial Iron
	event.remove("forge:storage_blocks/industrial_iron", "create_dd:industrial_iron_block");
	event.add("forge:storage_blocks/cast_iron", "create_dd:industrial_iron_block");
});
