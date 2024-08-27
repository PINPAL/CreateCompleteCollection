function upgradeBackpack(inventory, itemstack, backpack) {
	let item = inventory.find(Item.of(backpack).ignoreNBT());
	let nbt = item.nbt;
	if (nbt == null) {
		nbt = {};
	} else {
		nbt.inventorySlots = nbt.inventorySlots + 9;
		nbt.upgradeSlots = nbt.upgradeSlots + 1;
	}
	return itemstack.withNBT(nbt);
}

const backpackTiers = [
	{ backpackId: "iron", previousTier: "", stitching: "iron" },
	{
		backpackId: "gold",
		previousTier: "iron",
		stitching: "steel",
	},
	{
		backpackId: "diamond",
		previousTier: "gold",
		stitching: "diamond",
	},
	{
		backpackId: "netherite",
		previousTier: "diamond",
		stitching: "netherite",
	},
];

ServerEvents.recipes((event) => {
	// Backpack Upgrading
	backpackTiers.forEach((tier) => {
		let output = `sophisticatedbackpacks:${tier.backpackId}_backpack`;
		let input = `sophisticatedbackpacks:${tier.previousTier}${tier.previousTier == "" ? "" : "_"}backpack`;
		let stitching = `2x kubejs:${tier.stitching}_stitching`;
		event.shapeless(output, [input, stitching]).modifyResult((inventory, itemstack) => {
			return upgradeBackpack(inventory, itemstack, input);
		});
	});

	// Backpack Base
	event.shaped("sophisticatedbackpacks:backpack", ["S8S", "SCS", "L8L"], {
		S: "#forge:string",
		L: "#forge:leather",
		C: "#forge:chests/wooden",
		8: "kubejs:leather_stitching",
	});

	// Upgrade Base
	event.shapeless("sophisticatedbackpacks:upgrade_base", ["create_paper_line:cardboard_sheet", "#minecraft:planks"]);

	// Pickup Upgrade
	event.shaped("sophisticatedbackpacks:advanced_pickup_upgrade", ["SPS", "GUG", "ZDZ"], {
		S: "#forge:string",
		P: "minecraft:sticky_piston",
		G: "#forge:ingots/gold",
		U: "sophisticatedbackpacks:upgrade_base",
		Z: "#forge:plates/steel",
		D: "minecraft:diamond",
	});

	// Void Upgrade
	event.shaped("sophisticatedbackpacks:advanced_void_upgrade", ["SPS", "GUG", "ZDZ"], {
		S: "#forge:string",
		P: "#kubejs:void_items",
		G: "#forge:obsidian",
		U: "sophisticatedbackpacks:upgrade_base",
		Z: "#forge:plates/steel",
		D: "minecraft:diamond",
	});

	// Restock Upgrade
	event.shaped("sophisticatedbackpacks:advanced_restock_upgrade", ["SPS", "GUG", "ZDZ"], {
		S: "#forge:chests/wooden",
		P: "minecraft:sticky_piston",
		G: "#forge:ingots/gold",
		U: "sophisticatedbackpacks:upgrade_base",
		Z: "#forge:plates/steel",
		D: "minecraft:diamond",
	});

	// Refill Upgrade
	event.shaped("sophisticatedbackpacks:advanced_refill_upgrade", ["SPS", "GUG", "ZDZ"], {
		S: "#forge:string",
		P: "minecraft:ender_pearl",
		G: "#forge:chests/wooden",
		U: "sophisticatedbackpacks:upgrade_base",
		Z: "#forge:plates/steel",
		D: "minecraft:diamond",
	});

	// Crafting Upgrade
	event.shaped("sophisticatedbackpacks:crafting_upgrade", ["SCS", "CUC", "SCS"], {
		S: "#forge:string",
		C: "minecraft:crafting_table",
		U: "sophisticatedbackpacks:upgrade_base",
	});

	// Stonecutter Upgrade
	event.shaped("sophisticatedbackpacks:stonecutter_upgrade", ["SCS", "CUC", "SCS"], {
		S: "#forge:string",
		C: "minecraft:stonecutter",
		U: "sophisticatedbackpacks:upgrade_base",
	});

	// Deposit Upgrade
	event.shaped("sophisticatedbackpacks:advanced_deposit_upgrade", ["SPS", "GUG", "ZDZ"], {
		S: "#forge:string",
		P: "#forge:chests/wooden",
		G: "minecraft:piston",
		U: "sophisticatedbackpacks:upgrade_base",
		Z: "#forge:plates/steel",
		D: "minecraft:diamond",
	});

	// Everlasting Upgrade
	event.shaped("sophisticatedbackpacks:everlasting_upgrade", ["CNC", "NUN", "CNC"], {
		U: "sophisticatedbackpacks:upgrade_base",
		C: "minecraft:end_crystal",
		N: "minecraft:nether_star",
	});

	// Feeding Upgrade
	event.shaped("sophisticatedbackpacks:advanced_feeding_upgrade", ["SPS", "NUN", "ZZZ"], {
		S: "#forge:string",
		P: "kubejs:creative_omega_potion",
		N: "create_things_and_misc:vibration_mechanism",
		U: "sophisticatedbackpacks:upgrade_base",
		Z: "#forge:plates/shadow_steel",
	});

	// Magnet Upgrade
	event.shaped("sophisticatedbackpacks:advanced_magnet_upgrade", ["SPS", "NUN", "ZZZ"], {
		S: "#forge:string",
		P: "simplemagnets:advancedmagnet",
		N: "simplemagnets:advanced_demagnetization_coil",
		U: "sophisticatedbackpacks:upgrade_base",
		Z: "create_things_and_misc:rose_quartz_sheet",
	});
});
