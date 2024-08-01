const addToJEI = [
	"tfmg:liquid_concrete_bucket",
	"tfmg:concrete",
	"tfmg:concrete_slab",
	"tfmg:concrete_stairs",
	"tfmg:concrete_wall",
	"tfmg:concrete_pillar",

	"ftbquests:book",
j
	"sophisticatedbackpacks:backpack",
	"sophisticatedbackpacks:iron_backpack",
	"sophisticatedbackpacks:gold_backpack",
	"sophisticatedbackpacks:diamond_backpack",
	"sophisticatedbackpacks:netherite_backpack",
	"sophisticatedbackpacks:upgrade_base",
	"sophisticatedbackpacks:advanced_pickup_upgrade",
	"sophisticatedbackpacks:advanced_void_upgrade",
	"sophisticatedbackpacks:advanced_restock_upgrade",
	"sophisticatedbackpacks:advanced_deposit_upgrade",
	"sophisticatedbackpacks:advanced_refill_upgrade",
	"sophisticatedbackpacks:advanced_feeding_upgrade",
	"sophisticatedbackpacks:advanced_magnet_upgrade",
	"sophisticatedbackpacks:everlasting_upgrade",
	"sophisticatedbackpacks:crafting_upgrade",
	"sophisticatedbackpacks:stonecutter_upgrade",

	"refinedstorage:quartz_enriched_iron",
	"refinedstorageaddons:wireless_crafting_grid",
	"refinedstorage:wireless_fluid_grid",
	"refinedstorage:wireless_crafting_monitor",
	"refinedstorage:cable",
	"refinedstorage:crafting_grid",
	"refinedstorage:fluid_grid",
	"refinedstorage:pattern_grid",
	"refinedstorage:crafting_monitor",
	"refinedstorage:controller",
	"refinedstorage:external_storage",
	"refinedstorage:detector",
	"refinedstorage:importer",
	"refinedstorage:exporter",
	"refinedstorage:processor_binding",
	"refinedstorage:basic_processor",
	"refinedstorage:improved_processor",
	"refinedstorage:advanced_processor",
	"refinedstorage:wireless_transmitter",
	"refinedstorage:silicon",
	"refinedstorage:pattern",
	"refinedstorage:crafter",
	"refinedstorage:filter",
	"refinedstorage:upgrade",
	"refinedstorage:speed_upgrade",
	"refinedstorage:stack_upgrade",
	"refinedstorage:crafting_upgrade",

	"simplemagnets:advancedmagnet",
	"simplemagnets:advanced_demagnetization_coil",

	"wands:palette",

	"chunkloaders:ultimate_chunk_loader",

	"metalbarrels:iron_barrel",
	"metalbarrels:gold_barrel",
	"metalbarrels:diamond_barrel",
	"metalbarrels:wood_to_iron",
	"metalbarrels:iron_to_gold",
	"metalbarrels:gold_to_diamond",

	"create:andesite_encased_shaft",
	"create:andesite_encased_cogwheel",
	"create:andesite_encased_large_cogwheel",
	"create:brass_encased_shaft",
	"create:brass_encased_cogwheel",
	"create:brass_encased_large_cogwheel",
];

JEIEvents.addItems((event) => {
	// Add Items
	addToJEI.forEach((item) => {
		event.add(item);
	});
});
