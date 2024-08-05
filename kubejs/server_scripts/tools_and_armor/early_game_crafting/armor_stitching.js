ServerEvents.recipes((event) => {
	event
		.shaped("create_cosmic_contraptions:leather_stitching", ["M M", "MSM", "M M"], {
			M: "#forge:leather",
			S: "#forge:string",
		})
		.id("create_cosmic_contraptions:leather_stitching");

	event
		.shaped("create_cosmic_contraptions:chainmail_stitching", ["M M", "MSM", "M M"], {
			M: "minecraft:chain",
			S: "#forge:string",
		})
		.id("create_cosmic_contraptions:chainmail_stitching");
});
