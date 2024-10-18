// priority: 1

global.tierMachines = {
	stone: {
		tier: 0,
		name: "stone",
	},
	andesite: {
		tier: 1,
		name: "andesite",
	},
	copper: {
		tier: 2,
		name: "copper",
	},
	iron: {
		tier: 3,
		name: "iron",
	},
	brass: {
		tier: 4,
		name: "brass",
	},
	steel: {
		tier: 5,
		name: "steel",
	},
	sturdy: {
		tier: 6,
		name: "sturdy",
	},
	space: {
		tier: 7,
		name: "space",
	},
	mars: {
		tier: 8,
		name: "mars",
	},
	glacio: {
		tier: 9,
		name: "glacio",
	},
	redstone: {
		tier: 0,
		name: "redstone",
	},
};

global.machineItems = {
	sifter_mesh: { id: "createsifter:string_mesh" },
	milling_stone: { id: "cosmic_contraptions:milling_stone" },
	andesite_hand: { id: "create:brass_hand" },
	cogwheel: { id: "create:cogwheel" },
	sawblade: { id: "cosmic_contraptions:sawblade" },
	propeller: { id: "create:propeller" },
	knife_mount: { id: "cosmic_contraptions:knife_mount" },
	whisk: { id: "create:whisk" },
	mesh: { id: "cosmic_contraptions:mesh" },
	nozzle: { id: "cosmic_contraptions:nozzle" },
	drill_bit: { id: "cosmic_contraptions:drill_bit" },
	harvester_blade: { id: "cosmic_contraptions:harvester_blade" },
	machine_tool: { id: "cosmic_contraptions:machine_tool" },
	compass: { id: "minecraft:compass" },
	extension_pole: { id: "create:piston_extension_pole" },
	pulley_belt: { id: "cosmic_contraptions:pulley_belt" },
	elevator_belt: { id: "cosmic_contraptions:elevator_belt" },
	gantry_cog: { id: "cosmic_contraptions:gantry_cog" },
	plough_blade: { id: "cosmic_contraptions:plough_blade" },
	rotary_shear_blade: { id: "cosmic_contraptions:rotary_shear_blade" },
	clock: { id: "minecraft:clock" },
	slot_cover: { id: "create:crafter_slot_cover" },
	arm: { id: "cosmic_contraptions:arm" },
	observer: { id: "minecraft:observer" },
	comparitor: { id: "minecraft:comparator" },
	redstone_torch: { id: "minecraft:redstone_torch" },
	sprinler_head: { id: "create_things_and_misc:sprinkler_head" },
	chute: { id: "create:chute" },
	gas_filter: { id: "destroy:gas_filter" },
	printer_press: { id: "cosmic_contraptions:printer_press" },
	kelp_curtains: { id: "cosmic_contraptions:kelp_curtains" },
	kelp: { id: "minecraft:dried_kelp" },
	electron_tube: { id: "create:electron_tube" },
	hopper: { id: "minecraft:hopper" },
	bearing: { id: "cosmic_contraptions:bearing" },
	sandpaper_belt: { id: "createmetallurgy:sandpaper_belt" },
	rolling_wheel: { id: "cosmic_contraptions:rolling_wheel" },
	coupling: { id: "create:minecart_coupling" },
	controls: { id: "cosmic_contraptions:controls" },
	targetting_computer: { id: "northstar:targetting_computer" },
	air_filter: { id: "cosmic_contraptions:air_filter" },
	basin: { id: "create:basin" },
	centrifuge_core: { id: "cosmic_contraptions:centrifuge_core" },
	spindle: { id: "cosmic_contraptions:spindle" },
	spring: { id: "cosmic_contraptions:spring" },
	spring_coiling_wheel: { id: "vintageimprovements:spring_coiling_machine_wheel" },
	laser: { id: "vintageimprovements:laser_item" },
	pump: { id: "create:pump" },
	coil: { id: "createaddition:copper_spool" },
	repeater: { id: "minecraft:repeater" },
	lever: { id: "minecraft:lever" },
	drain_mesh: { id: "cosmic_contraptions:drain_mesh" },
};

let tiers = global.tierMachines;
let items = global.machineItems;
global.machineRecipes = [
	{
		output: "create:powered_latch",
		tier: tiers.redstone,
		input: items.lever,
	},
	{
		output: "create:pulse_extender",
		tier: tiers.redstone,
		input: items.redstone_torch,
	},
	{
		output: "create:pulse_repeater",
		tier: tiers.redstone,
		input: items.repeater,
	},
	{
		output: "createaddition:tesla_coil",
		tier: tiers.sturdy,
		input: items.coil,
	},
	{
		output: "destroy:extrusion_die",
		tier: tiers.sturdy,
		input: items.mesh,
	},
	{
		output: "vintageimprovements:vacuum_chamber",
		tier: tiers.steel,
		input: items.pump,
	},
	{
		output: "vintageimprovements:curving_press",
		tier: tiers.steel,
		input: items.machine_tool,
	},
	{
		output: "vintageimprovements:helve_hammer",
		tier: tiers.steel,
		input: items.arm,
	},
	{
		output: "vintageimprovements:laser",
		tier: tiers.glacio,
		input: items.laser,
	},
	{
		output: "vintageimprovements:spring_coiling_machine",
		tier: tiers.steel,
		input: items.spring_coiling_wheel,
	},
	{
		output: "create:weighted_ejector",
		tier: tiers.andesite,
		input: items.spring,
	},
	{
		output: "vintageimprovements:lathe",
		tier: tiers.mars,
		input: items.spindle,
	},
	{
		output: "createoreexcavation:drilling_machine",
		tier: tiers.space,
		input: items.drill_bit,
	},
	{
		output: "createoreexcavation:extractor",
		tier: tiers.sturdy,
		input: items.drain_mesh,
	},
	{
		output: "createoreexcavation:sample_drill",
		tier: tiers.sturdy,
		input: items.drill_bit,
	},
	{
		output: "estrogen:centrifuge",
		tier: tiers.steel,
		input: items.centrifuge_core,
	},
	{
		output: "vintageimprovements:centrifuge",
		tier: tiers.space,
		input: items.centrifuge_core,
	},
	{
		output: "destroy:centrifuge",
		tier: tiers.mars,
		input: items.centrifuge_core,
	},
	{
		output: "createmetallurgy:foundry_basin",
		tier: tiers.iron,
		input: items.basin,
	},
	{
		output: "createrailwaysnavigator:train_station_clock",
		tier: tiers.sturdy,
		input: items.clock,
	},
	{
		output: "northstar:temperature_regulator",
		tier: tiers.mars,
		input: items.controls,
	},
	{
		output: "northstar:oxygen_detector",
		tier: tiers.space,
		input: items.observer,
	},
	{
		output: "northstar:oxygen_generator",
		tier: tiers.space,
		input: items.propeller,
	},
	{
		output: "northstar:oxygen_filter",
		tier: tiers.space,
		input: items.air_filter,
	},
	{
		output: "northstar:rocket_controls",
		tier: tiers.sturdy,
		input: items.controls,
	},
	{
		output: "northstar:jet_engine",
		tier: tiers.sturdy,
		input: items.propeller,
	},
	{
		output: "northstar:rocket_station",
		tier: tiers.sturdy,
		input: items.targetting_computer,
	},
	{
		output: "railways:portable_fuel_interface",
		tier: tiers.sturdy,
		input: items.hopper,
	},
	{
		output: "create:track_station",
		tier: tiers.sturdy,
		input: items.compass,
	},
	{
		output: "create:train_signal",
		tier: tiers.sturdy,
		input: items.electron_tube,
	},
	{
		output: "create:track_observer",
		tier: tiers.sturdy,
		input: items.observer,
	},
	{
		output: "create:train_controls",
		tier: tiers.sturdy,
		input: items.controls,
	},
	{
		output: "create:contraption_controls",
		tier: tiers.redstone,
		input: items.controls,
	},
	{
		output: "railways:track_coupler",
		tier: tiers.sturdy,
		input: items.coupling,
	},
	{
		output: "create:mechanical_roller",
		tier: tiers.sturdy,
		input: items.rolling_wheel,
	},
	{
		output: "createmetallurgy:mechanical_belt_grinder",
		tier: tiers.brass,
		input: items.sandpaper_belt,
	},
	{
		output: "create:mechanical_bearing",
		tier: tiers.redstone,
		input: items.bearing,
	},
	{
		output: "create:andesite_funnel",
		tier: tiers.andesite,
		input: items.kelp,
	},
	{
		output: "create:andesite_tunnel",
		tier: tiers.andesite,
		input: items.kelp_curtains,
	},
	{
		output: "create:brass_funnel",
		tier: tiers.brass,
		input: items.kelp,
	},
	{
		output: "create:brass_tunnel",
		tier: tiers.brass,
		input: items.kelp_curtains,
	},
	{
		output: "createmetallurgy:foundry_mixer",
		tier: tiers.iron,
		input: items.whisk,
	},
	{
		output: "create_enchantment_industry:disenchanter",
		tier: tiers.brass,
		input: items.drain_mesh,
	},
	{
		output: "create_enchantment_industry:printer",
		tier: tiers.brass,
		input: items.printer_press,
	},
	{
		output: "destroy:vat_controller",
		tier: tiers.steel,
		input: items.gas_filter,
	},
	{
		output: "create:portable_fluid_interface",
		tier: tiers.copper,
		input: items.hopper,
	},
	{
		output: "create:portable_storage_interface",
		tier: tiers.andesite,
		input: items.hopper,
	},
	{
		output: "create:spout",
		tier: tiers.copper,
		input: items.nozzle,
	},
	{
		output: "create:hose_pulley",
		tier: tiers.copper,
		input: items.pulley_belt,
	},
	{
		output: "create_things_and_misc:sprinkler",
		tier: tiers.copper,
		input: items.sprinler_head,
	},
	{
		output: "create:redstone_link",
		tier: tiers.redstone,
		input: items.redstone_torch,
	},
	{
		output: "create:content_observer",
		tier: tiers.redstone,
		input: items.observer,
	},
	{
		output: "create:stockpile_switch",
		tier: tiers.redstone,
		input: items.comparitor,
	},
	{
		output: "create:mechanical_arm",
		tier: tiers.brass,
		input: items.arm,
	},
	{
		output: "create:rotation_speed_controller",
		tier: tiers.brass,
		input: items.cogwheel,
	},
	{
		output: "create:mechanical_crafter",
		tier: tiers.brass,
		input: items.slot_cover,
	},
	{
		output: "create:elevator_pulley",
		tier: tiers.redstone,
		input: items.elevator_belt,
	},
	{
		output: "create:clockwork_bearing",
		tier: tiers.redstone,
		input: items.clock,
	},
	{
		output: "createaddition:rolling_mill",
		tier: tiers.iron,
		input: items.rotary_shear_blade,
	},
	{
		output: "create:mechanical_plough",
		tier: tiers.andesite,
		input: items.plough_blade,
	},
	{
		output: "create:mechanical_drill",
		tier: tiers.iron,
		input: items.drill_bit,
	},
	{
		output: "create:rope_pulley",
		tier: tiers.redstone,
		input: items.pulley_belt,
	},
	{
		output: "create:gantry_carriage",
		tier: tiers.redstone,
		input: items.gantry_cog,
	},
	{
		output: "create:mechanical_piston",
		tier: tiers.redstone,
		input: items.extension_pole,
	},
	{
		output: "create:speedometer",
		tier: tiers.stone,
		input: items.compass,
	},
	{
		output: "create:mechanical_press",
		tier: tiers.andesite,
		input: items.machine_tool,
	},
	{
		output: "create:mechanical_harvester",
		tier: tiers.andesite,
		input: items.harvester_blade,
	},
	{
		output: "createsifter:sifter",
		tier: tiers.stone,
		input: items.sifter_mesh,
	},
	{
		output: "create:millstone",
		tier: tiers.iron,
		input: items.milling_stone,
	},
	{
		output: "sliceanddice:slicer",
		tier: tiers.andesite,
		input: items.knife_mount,
	},
	{
		output: "create:deployer",
		tier: tiers.andesite,
		input: items.andesite_hand,
	},
	{
		output: "create:mechanical_saw",
		tier: tiers.andesite,
		input: items.sawblade,
	},
	{
		output: "create:encased_fan",
		tier: tiers.andesite,
		input: items.propeller,
	},
	{
		output: "create:item_drain",
		tier: tiers.copper,
		input: items.drain_mesh,
	},
	{
		output: "create:mechanical_mixer",
		tier: tiers.copper,
		input: items.whisk,
	},
];
