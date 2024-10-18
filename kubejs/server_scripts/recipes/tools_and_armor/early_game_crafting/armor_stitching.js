ServerEvents.recipes((event) => {
	event
		.shaped("cosmic_contraptions:leather_stitching", ["   ", "MSM", "   "], {
			M: "#forge:leather",
			S: "#forge:string",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/armor_stitching/leather_stitching");
	event
		.shaped("cosmic_contraptions:leather_stitching", [" M ", " S ", " M "], {
			M: "#forge:leather",
			S: "#forge:string",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/armor_stitching/leather_stitching_vert");

	event
		.shaped("cosmic_contraptions:chainmail_stitching", ["M M", "MSM", "M M"], {
			M: "minecraft:chain",
			S: "#forge:string",
		})
		.id("cosmic_contraptions:tools_and_armor/early_game/armor_stitching/chainmail_stitching");
});
