// priority 9

global.removedFluids = [
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

	"sophisticatedcore:experience",

	"createindustry:napalm",
	"createindusry:liquid_asphalt",
];

global.removedFluids.forEach((fluid) => {
	global.removedItems.push(fluid + "_bucket");
});
