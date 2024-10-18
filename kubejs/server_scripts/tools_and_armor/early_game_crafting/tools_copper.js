ServerEvents.recipes((event) => {
	// Copper Paxel Head
	event
		.shaped("cosmic_contraptions:copper_head", ["MMM", "MSM", "M M"], {
			M: "#forge:ingots/copper",
			S: "minecraft:stick",
		})
		.id("cosmic_contraptions:copper_head_crafting");
	// Copper Blade
	event
		.shapeless("cosmic_contraptions:copper_blade", [
			"#forge:ingots/copper",
			"minecraft:stick",
			"#forge:ingots/copper",
		])
		.id("cosmic_contraptions:copper_blade_crafting");
});
