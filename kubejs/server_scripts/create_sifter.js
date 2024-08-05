ServerEvents.recipes((event) => {
	// Sifter
	event.shaped(Item.of("createsifter:sifter"), [" F ", " P ", " S "], {
		F: "minecraft:flint",
		P: "#minecraft:planks",
		S: "#forge:stone",
	});

	// Meshes
	const sifterMeshes = [
		{ name: "string", id: "#forge:string" },
		{ name: "andesite", id: "createdeco:andesite_mesh_fence" },
		{ name: "brass", id: "createdeco:brass_mesh_fence" },
	];
	sifterMeshes.forEach((mesh) => {
		event.shaped(Item.of(`createsifter:${mesh.name}_mesh`), ["SSS", "SMS", "SSS"], {
			M: mesh.id,
			S: "minecraft:stick",
		});
	});

	// Refined Stone
	event.recipes
		.createsifterSifting("create_cosmic_contraptions:refined_stone", [
			"#forge:cobblestone",
			"createsifter:string_mesh",
		])
		.id("create_cosmic_contraptions:sifting/refined_stone");

	// Netherite
	event.recipes
		.createsifterSifting(
			[
				Item.of("minecraft:netherite_scrap").withChance(0.0025),
				Item.of("minecraft:gold_nugget").withChance(0.05),
				Item.of("minecraft:quartz").withChance(0.05),
			],
			["minecraft:netherrack", "createsifter:brass_mesh"]
		)
		.minimumSpeed(256)
		.processingTime(400)
		.id("create_cosmic_contraptions:sifting/netherrack");
});
