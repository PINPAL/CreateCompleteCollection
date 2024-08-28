PlayerEvents.inventoryChanged((event) => {
	handleDurability(event);
});

function handleDurability(event) {
	let player = event.player;

	let helmet = player.getHeadArmorItem();
	let chestplate = player.getChestArmorItem();
	let leggings = player.getLegsArmorItem();
	let boots = player.getFeetArmorItem();
	let hand = player.getHeldItem("MAIN_HAND");
	let offHand = player.getHeldItem("OFF_HAND");

	let breakableItems = [
		{ item: helmet, slot: "helmet" },
		{ item: chestplate, slot: "chestplate" },
		{ item: leggings, slot: "leggings" },
		{ item: boots, slot: "boots" },
		{ item: hand, slot: "hand" },
		{ item: offHand, slot: "offHand" },
	];
	breakableItems.forEach((item) => {
		if (
			item.item.hasTag("kubejs:paxels") ||
			item.item.hasTag("forge:armors") ||
			item.item.hasTag("forge:tools/swords") ||
			item.item.hasTag("forge:tools/knives") ||
			item.item.hasTag("forge:tools/hoes") ||
			item.item.hasTag("forge:shields")
		) {
			// Durability
			let damage = item.item.getDamageValue();
			let maxDamage = item.item.getMaxDamage();
			let durability = maxDamage - damage;

			// If item is broken, replace it
			if (durability <= 10) {
				// Enchantments
				let itemEnchants = item.item.getEnchantments();

				let itemID = item.item.getId();
				// Remove everything before and including the colon
				itemID = itemID.split(":").pop();

				// Generate Replacement Item
				let replacementItem = Item.of(`kubejs:broken_${itemID}`);
				replacementItem = replacementItem.enchant(itemEnchants);

				if (item.slot == "helmet") {
					player.setHeadArmorItem(replacementItem);
				} else if (item.slot == "chestplate") {
					player.setChestArmorItem(replacementItem);
				} else if (item.slot == "leggings") {
					player.setLegsArmorItem(replacementItem);
				} else if (item.slot == "boots") {
					player.setFeetArmorItem(replacementItem);
				} else if (item.slot == "hand") {
					player.setHeldItem("MAIN_HAND", replacementItem);
				} else if (item.slot == "offHand") {
					player.setHeldItem("OFF_HAND", replacementItem);
				}
				event.server.runCommandSilent(
					`playsound minecraft:item.shield.break player @a ${player.getX()} ${player.getY()} ${player.getZ()} 1 1`
				);
			}
		}
	});
}
