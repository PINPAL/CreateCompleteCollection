const hideFromJEI = [
	// Mod Match
	/sophisticatedbackpacks:*/,
	/refinedstorage:*/,
	/itemfilters:*/,
	/simplemagnets:*/,
	/wands:*/,
	/ftbquests:*/,
	/chunkloaders:*/,
	/metalbarrels:.*/,
	/petrolpark:.*/,
	"dragonlib:dragon",
	"moonlight:placeable_item",
	"amendmends:dye_bottle",

	// Unfinished Items
	/tfmg:unprocessed_.*/,
	/create_central_kitchen:incomplete_.*/,
	/create_cosmic_contraptions:incomplete_.*/,
	/destroy:unprocessed_.*/,
	/create:unprocessed_.*/,
	/tfmg:unfinished_.*/,
	/vintageimprovements:incomplete_.*/,
	/railways:.*_incomplete_.*/,
	/create_central_kitchen:incomplete_.*/,
	/create_dd:incomplete_.*/,
	/deepdrilling:incomplete_.*/,
	/create:incomplete_.*/,
	/create_connected:incomplete_.*/,

	// Create-CC
	"create_cosmic_contraptions:belt_scroll",
	/create_cosmic_contraptions:broken_.*/,
	"create_cosmic_contraptions:wrench_axe",

	// Replaced by NBT items
	"create:extendo_grip",
	"createaddition:diamond_grit_sandpaper",
	"farmersdelight:netherite_knife",

	// Minecraft
	/spawn_egg/,
	"minecraft:infested_stone",
	"minecraft:infested_cobblestone",
	"minecraft:infested_stone_bricks",
	"minecraft:infested_mossy_stone_bricks",
	"minecraft:infested_cracked_stone_bricks",
	"minecraft:infested_chiseled_stone_bricks",
	"minecraft:infested_deepslate",
	"minecraft:bedrock",
	"minecraft:end_portal_frame",
	"minecraft:petrified_oak_slab",
	"minecraft:tipped_arrow",
];

JEIEvents.hideItems((event) => {
	// Hide Items
	hideFromJEI.forEach((item) => {
		event.hide(item);
	});
	global.removedItems.forEach((item) => {
		event.hide(item);
	});
});
