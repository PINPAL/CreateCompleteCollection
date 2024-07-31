ItemEvents.toolTierRegistry((event) => {
	event.add("copper", (tier) => {
		tier.uses = 180;
		tier.speed = 5;
		tier.attackDamageBonus = 2;
		tier.level = 2;
		tier.repairIngredient = "#forge:ingots/copper";
	});
	event.add("steel", (tier) => {
		tier.uses = 1000;
		tier.speed = 5;
		tier.attackDamageBonus = 2;
		tier.level = 4;
		tier.repairIngredient = "#forge:ingots/steel";
	});
});
ItemEvents.armorTierRegistry((event) => {
	event.add("copper", (tier) => {
		tier.durabilityMultiplier = 15;
		tier.slotProtections = [2, 4, 5, 2];
		tier.equipSound = "item.armor.equip_gold";
		tier.toughness = 0;
		tier.knockbackResistance = 0;
	});
	event.add("steel", (tier) => {
		tier.durabilityMultiplier = 30;
		tier.slotProtections = [3, 7, 5, 3];
		tier.equipSound = "item.armor.equip_gold";
		tier.toughness = 1;
		tier.knockbackResistance = 0;
	});
});

StartupEvents.registry("item", (event) => {
	const types = ["sword", "hoe", "helmet", "chestplate", "leggings", "boots"];
	types.forEach((type) => {
		event
			.create("create_cc:" + `copper_${type}`, `${type}`)
			.displayName(`Copper ${formatName(type)}`)
			.tier("copper")
			.unstackable();
		event
			.create("create_cc:" + `steel_${type}`, `${type}`)
			.displayName(`Steel ${formatName(type)}`)
			.tier("steel")
			.unstackable();
	});
	event
		.create("create_cc:" + `steel_knife`, "farmersdelight:knife")
		.displayName("Steel Knife")
		.tier("steel");
});
