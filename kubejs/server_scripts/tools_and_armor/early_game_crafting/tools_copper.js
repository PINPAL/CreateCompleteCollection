ServerEvents.recipes((event) => {
	// Copper Paxel Head
	event
		.shaped("create_cosmic_contraptions:copper_head", ["MMM", "MSM", "M M"], {
			M: "#forge:ingots/copper",
			S: "minecraft:stick",
		})
		.id("create_cosmic_contraptions:copper_head_crafting");
	// Copper Blade
	event
		.shapeless("create_cosmic_contraptions:copper_blade", [
			"#forge:ingots/copper",
			"minecraft:stick",
			"#forge:ingots/copper",
		])
		.id("create_cosmic_contraptions:copper_blade_crafting");
});
