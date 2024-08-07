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
	event.add("radiance", (tier) => {
		tier.uses = 2000;
		tier.speed = 11;
		tier.attackDamageBonus = 5;
		tier.level = 5;
		tier.repairIngredient = "#forge:ingots/refined_radiance";
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
	event.add("radiance", (tier) => {
		tier.durabilityMultiplier = 40;
		tier.slotProtections = [3, 9, 7, 3];
		tier.equipSound = "item.armor.equip_netherite";
		tier.toughness = 4;
		tier.knockbackResistance = 0.2;
	});
});

StartupEvents.registry("item", (event) => {
	const materials = [{ name: "copper" }, { name: "steel" }, { name: "radiance", rarity: "uncommon", glow: true }];
	const types = ["sword", "hoe", "helmet", "chestplate", "leggings", "boots"];
	types.forEach((type) => {
		materials.forEach((material) => {
			let rarity = "common";
			if (material.hasOwnProperty("rarity")) {
				rarity = material.rarity;
			}
			let glow = false;
			if (material.hasOwnProperty("glow")) {
				glow = true;
			}
			event
				.create(`create_cosmic_contraptions:${material.name}_${type}`, type)
				.displayName(`${formatName(material.name)} ${formatName(type)}`)
				.tier(material.name)
				.glow(glow)
				.rarity(rarity)
				.unstackable();
		});
	});
	event
		.create("create_cosmic_contraptions:" + `steel_knife`, "farmersdelight:knife")
		.displayName("Steel Knife")
		.tier("steel");
});
