ServerEvents.recipes((event) => {
	// Copper Paxel Head
	event
		.shaped("create_cc:copper_head", ["MMM", "MSM", "M M"], {
			M: "#forge:ingots/copper",
			S: "minecraft:stick",
		})
		.id("create_cc:copper_head_crafting");
	// Copper Blade
	event
		.shapeless("create_cc:copper_blade", ["#forge:ingots/copper", "minecraft:stick", "#forge:ingots/copper"])
		.id("create_cc:copper_blade_crafting");
});
