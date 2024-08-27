ServerEvents.recipes((event) => {
	event
		.shaped("kubejs:leather_stitching", ["   ", "MSM", "   "], {
			M: "#forge:leather",
			S: "#forge:string",
		})
		.id("kubejs:leather_stitching");
	event
		.shaped("kubejs:leather_stitching", [" M ", " S ", " M "], {
			M: "#forge:leather",
			S: "#forge:string",
		})
		.id("kubejs:leather_stitching_vert");

	event
		.shaped("kubejs:chainmail_stitching", ["M M", "MSM", "M M"], {
			M: "minecraft:chain",
			S: "#forge:string",
		})
		.id("kubejs:chainmail_stitching");
});
