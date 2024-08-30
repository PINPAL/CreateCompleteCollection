// priority: 1
const outputsToRemove = [
	// Tools & Armor
	"minecraft:wooden_pickaxe",
	"minecraft:wooden_shovel",
	"minecraft:wooden_axe",
	"minecraft:wooden_hoe",
	"minecraft:wooden_sword",
	"minecraft:stone_pickaxe",
	"minecraft:stone_shovel",
	"minecraft:stone_axe",
	"minecraft:stone_hoe",
	"minecraft:stone_sword",
	"minecraft:golden_pickaxe",
	"minecraft:golden_shovel",
	"minecraft:golden_axe",
	"minecraft:golden_hoe",
	"minecraft:golden_sword",
	"minecraft:iron_pickaxe",
	"minecraft:iron_shovel",
	"minecraft:iron_axe",
	"minecraft:iron_hoe",
	"minecraft:iron_sword",
	"minecraft:diamond_pickaxe",
	"minecraft:diamond_shovel",
	"minecraft:diamond_axe",
	"minecraft:diamond_hoe",
	"minecraft:diamond_sword",
	"minecraft:netherite_pickaxe",
	"minecraft:netherite_shovel",
	"minecraft:netherite_axe",
	"minecraft:netherite_hoe",
	"minecraft:netherite_sword",

	"#forge:pickaxes",
	"#forge:shovels",
	"#forge:axes",
	"#forge:swords",
	"#forge:hoes",
	"#forge:tools/knives",
	"#forge:armors/chestplates",
	"#forge:armors/helmets",
	"#forge:armors/leggings",
	"#forge:armors/boots",

	"minecraft:wooden_axe",

	// Minecraft
	"minecraft:lodestone",
	"minecraft:stone_pickaxe",

	// Vertical Slabs
	/createdeco:.*slab_vert/,
	/v_slab_compat:createindustry\/.*concrete.*/,

	// Supplementaries
	"supplementaries:cog_block",
	"supplementaries:bubble_blower",
	"supplementaries:crank",
	"supplementaries:faucet",
	"supplementaries:bamboo_spikes",
	"supplementaries:bamboo_spikes_tipped",
	"supplementaries:bomb",

	// Farmers Delight
	"farmersdelight:cooking_pot",
	"farmersdelight:golden_knife",
	"farmersdelight:wheat_dough",

	// Create Deco
	"createdeco:netherite_bars",

	// Create Dreams & Desires
	"create_dd:steel_block",
	"create_dd:kinetic_motor",
	"create_dd:accelerator_motor",
	"create_dd:mithril_ingot",
	"create_dd:deforester_saw",
	"create_dd:infernal_mechanism",
	"create_dd:hydraulic_press",
	"create_dd:reinforcement_plating",
	"create_dd:bronze_casing",
	"create_dd:industrial_iron_ingot",
	"create_dd:industrial_iron_nugget",
	"create_dd:industrial_iron_sheet",
	"create_dd:industrial_iron_block",
	"createdeco:zinc_sheet",

	// Create Things and Misc
	"create_things_and_misc:radar",
	"create_things_and_misc:brass_knife",
	"create_things_and_misc:zinc_knife",

	// Create Addition
	"createaddition:digital_adapter",
	"createaddition:electrum_rod",
	"createaddition:electrum_sheet",
	"createaddition:electrum_wire",
	"createaddition:electrum_spool",
	"createaddition:electrum_amulet",
	"createaddition:electrum_ingot",
	"createaddition:zinc_sheet",
	Item.of("createaddition:diamond_grit_sandpaper").weakNBT(),

	// Create Industry
	"createindustry:napalm_bomb",
	"createindustry:napalm_bucket",
	"createindustry:thermite_grenade",
	/createindustry:.*concrete.*/,
	"createindustry:mesh",
	"createindustry:thermite_powder",
	"createindustry:factory_floor",
	"createindustry:factory_floor_slab",
	/v_slab_compat:createindustry\/.*factory_floor.*/,
	"createindustry:industrial_barrel",
	"createindustry:caution_block",
	"createindustry:cast_iron_ingot",
	"createindustry:cast_iron_block",
	"createindustry:heavy_plate",
	"createindustry:sawdust",

	// Create Deco Bricks
	"createdeco:pearl_brick",
	"createdeco:blue_brick",
	"createdeco:scarlet_brick",
	"createdeco:dean_brick",
	"createdeco:dusk_brick",

	// Every Compat
	/everycomp:sd\/.*/,
];

ServerEvents.recipes((event) => {
	outputsToRemove.forEach((output) => {
		event.remove({ output: output });
	});
});
