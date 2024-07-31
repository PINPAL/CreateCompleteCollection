ServerEvents.recipes((event) => {
	event
		.shaped("create_cc:leather_stitching", ["M M", "MSM", "M M"], {
			M: "#forge:leather",
			S: "#forge:string",
		})
		.id("create_cc:leather_stitching");

	event
		.shaped("create_cc:chainmail_stitching", ["M M", "MSM", "M M"], {
			M: "minecraft:chain",
			S: "#forge:string",
		})
		.id("create_cc:chainmail_stitching");
});
