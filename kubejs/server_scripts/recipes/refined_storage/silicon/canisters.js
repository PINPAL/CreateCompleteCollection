ServerEvents.recipes((event) => {
	event.shaped(
		// output
		"cosmic_contraptions:empty_canister",
		// recipe
		["VR ", "RTR", "RRR"],
		{
			R: "minecraft:red_terracotta",
			V: { tag: "create:valve_handles" },
			T: "create:fluid_tank",
		}
	);
	event.recipes.create.filling("cosmic_contraptions:brine_canister", [
		Fluid.of("cosmic_contraptions:brine", 1000),
		"cosmic_contraptions:empty_canister",
	]);
	event.recipes.create.emptying(
		[Fluid.of("cosmic_contraptions:brine", 1000), "cosmic_contraptions:empty_canister"],
		"cosmic_contraptions:brine_canister"
	);
	event.recipes.create.emptying(
		[Fluid.of("cosmic_contraptions:chlorine", 1000), "cosmic_contraptions:empty_canister"],
		"cosmic_contraptions:chlorine_canister"
	);
});
