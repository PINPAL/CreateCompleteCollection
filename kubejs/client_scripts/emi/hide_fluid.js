const hideFluids = [
	"sophisticatedcore:xp_still",
	"tfmg:napalm",
	"tfmg:kerosene",
	"tfmg:naphta",
	"cofh_core:experience",
	"cofh_core:honey",
	"cofh_core:potion",
	"create_dd:condense_milk",
	"create_dd:cream",
	"create_dd:vanilla",
	"create_dd:vanilla_milkshake",
	"create_dd:strawberry",
	"create_dd:strawberry_milkshake",
	"create_dd:glowberry",
	"create_dd:glowberry_milkshake",
	"create_dd:caramel",
	"create_dd:caramel_milkshake",
	"create_dd:hot_chocolate",
	"create_dd:chocolate_milkshake",
];

JEIEvents.hideFluids((event) => {
	// Hide Fluids
	hideFluids.forEach((fluid) => {
		event.hide(fluid);
	});
	global.removedItems.forEach((fluid) => {
		event.hide(fluid);
	});
});
