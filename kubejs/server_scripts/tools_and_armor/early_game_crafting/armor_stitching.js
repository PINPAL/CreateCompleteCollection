ServerEvents.recipes((event) => {
	event
		.shaped("cosmic_contraptions:leather_stitching", ["M M", "MSM", "M M"], {
			M: "#forge:leather",
			S: "#forge:string",
		})
		.id("cosmic_contraptions:leather_stitching");

	event
		.shaped("cosmic_contraptions:chainmail_stitching", ["M M", "MSM", "M M"], {
			M: "minecraft:chain",
			S: "#forge:string",
		})
		.id("cosmic_contraptions:chainmail_stitching");
});
