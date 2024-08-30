ServerEvents.recipes((event) => {
	// Copper Paxel Head
	event
		.shaped("kubejs:copper_head", ["MMM", "MSM", "M M"], {
			M: "#forge:ingots/copper",
			S: "minecraft:stick",
		})
		.id("kubejs:copper_tools/paxel_head");
	// Copper Blade
	event
		.shapeless("kubejs:copper_blade", ["#forge:ingots/copper", "minecraft:stick", "#forge:ingots/copper"])
		.id("kubejs:copper_tools/blade");
});
