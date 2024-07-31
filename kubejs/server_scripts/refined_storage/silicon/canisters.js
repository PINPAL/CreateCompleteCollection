ServerEvents.recipes((event) => {
	event.shaped(
		// output
		"create_cc:empty_canister",
		// recipe
		["VR ", "RTR", "RRR"],
		{
			R: "minecraft:red_terracotta",
			V: { tag: "create:valve_handles" },
			T: "create:fluid_tank",
		}
	);
	event.recipes.create.filling("create_cc:brine_canister", [
		Fluid.of("create_cc:brine", 1000),
		"create_cc:empty_canister",
	]);
	event.recipes.create.emptying(
		[Fluid.of("create_cc:brine", 1000), "create_cc:empty_canister"],
		"create_cc:brine_canister"
	);
	event.recipes.create.emptying(
		[Fluid.of("create_cc:chlorine", 1000), "create_cc:empty_canister"],
		"create_cc:chlorine_canister"
	);
});
