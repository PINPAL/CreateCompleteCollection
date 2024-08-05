ServerEvents.recipes((event) => {
	event.shaped(
		// output
		"create_cosmic_contraptions:empty_canister",
		// recipe
		["VR ", "RTR", "RRR"],
		{
			R: "minecraft:red_terracotta",
			V: { tag: "create:valve_handles" },
			T: "create:fluid_tank",
		}
	);
	event.recipes.create.filling("create_cosmic_contraptions:brine_canister", [
		Fluid.of("create_cosmic_contraptions:brine", 1000),
		"create_cosmic_contraptions:empty_canister",
	]);
	event.recipes.create.emptying(
		[Fluid.of("create_cosmic_contraptions:brine", 1000), "create_cosmic_contraptions:empty_canister"],
		"create_cosmic_contraptions:brine_canister"
	);
	event.recipes.create.emptying(
		[Fluid.of("create_cosmic_contraptions:chlorine", 1000), "create_cosmic_contraptions:empty_canister"],
		"create_cosmic_contraptions:chlorine_canister"
	);
});
