ServerEvents.recipes((event) => {
	// Empty Canister
	event
		.shaped(
			// output
			"kubejs:empty_canister",
			// recipe
			["VR ", "RTR", "RRR"],
			{
				R: "minecraft:red_terracotta",
				V: { tag: "create:valve_handles" },
				T: "create:fluid_tank",
			}
		)
		.id("kubejs:refined_storage/silicon/canisters/empty_canister");
	// Filling Brine Canister with Fluid
	event.recipes.create
		.filling("kubejs:brine_canister", [Fluid.of("kubejs:brine", 1000), "kubejs:empty_canister"])
		.id("kubejs:refined_storage/silicon/canisters/brine_canister");
	// Emptying Brine Canister into Fluid
	event.recipes.create
		.emptying([Fluid.of("kubejs:brine", 1000), "kubejs:empty_canister"], "kubejs:brine_canister")
		.id("kubejs:refined_storage/silicon/canisters/brine_canister_emptying");
	// Emptying Chlorine Canister into Fluid
	event.recipes.create
		.emptying([Fluid.of("kubejs:chlorine", 1000), "kubejs:empty_canister"], "kubejs:chlorine_canister")
		.id("kubejs:refined_storage/silicon/canisters/chlorine_canister_emptying");
});
