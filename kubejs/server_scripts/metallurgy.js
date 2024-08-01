ServerEvents.recipes((event) => {
	event.remove({ output: "createmetallurgy:graphite" });
	event
		.shapeless("2x createmetallurgy:graphite", ["8x #forge:gems/coal", "minecraft:clay_ball"])
		.id("create_cc:createmetallurgy/graphite");
});
