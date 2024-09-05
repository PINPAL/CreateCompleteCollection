// priority: 1

global.addToJEI = [
	"create:copper_nugget",

	"createindustry:liquid_concrete_bucket",
	"createindustry:concrete",
	"createindustry:concrete_slab",
	"createindustry:concrete_stairs",
	"createindustry:concrete_wall",
	"createindustry:concrete_pillar",

	"ftbquests:book",

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

	"simplemagnets:advancedmagnet",
	"simplemagnets:advanced_demagnetization_coil",

	"wands:palette",

	"metalbarrels:iron_barrel",
	"metalbarrels:gold_barrel",
	"metalbarrels:diamond_barrel",
	"metalbarrels:obsidian_barrel",
	"metalbarrels:netherite_barrel",
	"metalbarrels:wood_to_iron",
	"metalbarrels:iron_to_gold",
	"metalbarrels:gold_to_diamond",
	"metalbarrels:diamond_to_obsidian",
	"metalbarrels:diamond_to_netherite",
	"metalbarrels:obsidian_to_netherite",

	"create:andesite_encased_shaft",
	"create:andesite_encased_cogwheel",
	"create:andesite_encased_large_cogwheel",
	"create:brass_encased_shaft",
	"create:brass_encased_cogwheel",
	"create:brass_encased_large_cogwheel",

	"createdeco:gold_sheet_slab_vert",
	"createdeco:netherite_sheet_slab_vert",
	"createdeco:andesite_sheet_slab_vert",
	"createdeco:brass_sheet_slab_vert",
	"createdeco:cast_iron_sheet_slab_vert",
	"createdeco:iron_sheet_slab_vert",
	"createdeco:copper_sheet_slab_vert",
	"createdeco:zinc_sheet_slab_vert",

	Item.of(
		"create:extendo_grip",
		'{Unbreakable:1b,CurioAttributeModifiers:[{AttributeName:"generic.attack_knockback",Name:"generic.attack_knockback",Amount:3,Operation:0,UUID:[I;1203229738,-1965539080,-1341673873,592198839],Slot:"hands"},{AttributeName:"forge:attack_range",Name:"forge:attack_range",Amount:3,Operation:0,UUID:[I;-1826537097,-1713487428,-1545263740,-720620157],Slot:"hands"},{AttributeName:"forge:reach_distance",Name:"forge:reach_distance",Amount:3,Operation:0,UUID:[I;775495772,434720553,-1780503515,1389346287],Slot:"hands"}]}'
	),
	Item.of(
		"minecraft:water_bucket",
		`{CustomModelData: 1, HideFlags: 1, Enchantments: [{lvl: 1s, id: "minecraft:infinity"}], display: {Name: '{"text":"Infinite Water Bucket","italic":false}'}}`
	),
	Item.of("refinedstorage:cover", '{Item:{Count:1,id:"create:andesite_casing"}}'),
	Item.of("refinedstorage:hollow_cover", '{Item:{Count:1,id:"create:andesite_casing"}}'),
	Item.of("refinedstorage:cover", '{Item:{Count:1,id:"create:brass_casing"}}'),
	Item.of("refinedstorage:hollow_cover", '{Item:{Count:1,id:"create:brass_casing"}}'),
	Item.of("wands:netherite_wand").withNBT({ Unbreakable: "1b" }),
	Item.of("createaddition:diamond_grit_sandpaper").withNBT({ Unbreakable: "1b" }),
];
