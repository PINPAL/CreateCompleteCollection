// priority: 1

const armors = ["helmet", "chestplate", "leggings", "boots"];
const tools = ["sword", "hoe", "paxel"];

global.tiers = {
	wooden: {
		doesntNeedUpgrading: true,
		mod: "minecraft",
		knifeMod: "moredelight",
		material: "#minecraft:planks",
		hasTools: true,
		hasArmor: false,
		paxelMaxDamage: 256,
	},
	leather: {
		doesntNeedUpgrading: true,
		mod: "minecraft",
		material: "minecraft:leather",
		hasTools: false,
		hasArmor: true,
		horseArmor: "minecraft:leather_horse_armor",
		needsDivingGear: true,
	},
	stone: {
		mod: "minecraft",
		knifeMod: "moredelight",
		material: "kubejs:refined_stone",
		hasTools: true,
		hasArmor: false,
		previousToolTier: "wooden",
		paxelMaxDamage: 512,
		toolCostMultiplier: 1,
	},
	chainmail: {
		mod: "minecraft",
		material: "minecraft:chain",
		armorMaterial: "chain",
		hasTools: false,
		hasArmor: true,
		previousArmorTier: "leather",
		armorCostMultiplier: 1,
		needsDivingGear: true,
	},
	copper: {
		mod: "kubejs",
		knifeMod: "create_things_and_misc",
		material: "#forge:ingots/copper",
		hasTools: true,
		hasArmor: true,
		horseArmor: "minecraft:golden_horse_armor",
		previousToolTier: "stone",
		previousHorseTier: "leather",
		previousArmorTier: "chainmail",
		paxelMaxDamage: 1024,
		toolCostMultiplier: 1,
		armorCostMultiplier: 2,
	},
	iron: {
		mod: "minecraft",
		knifeMod: "farmersdelight",
		material: "#forge:ingots/iron",
		hasTools: true,
		hasArmor: true,
		horseArmor: "minecraft:iron_horse_armor",
		previousArmorTier: "copper",
		previousHorseTier: "copper",
		previousToolTier: "copper",
		paxelMaxDamage: 2048,
		toolCostMultiplier: 2,
		armorCostMultiplier: 3,
		needsDivingGear: true,
	},
	steel: {
		mod: "kubejs",
		knifeMod: "kubejs",
		material: "#forge:ingots/steel",
		hasTools: true,
		hasArmor: true,
		previousArmorTier: "iron",
		previousToolTier: "iron",
		paxelMaxDamage: 4096,
		toolCostMultiplier: 1,
		armorCostMultiplier: 2,
	},
	diamond: {
		mod: "minecraft",
		knifeMod: "farmersdelight",
		material: "#forge:gems/diamond",
		hasTools: true,
		hasArmor: true,
		horseArmor: "minecraft:diamond_horse_armor",
		previousArmorTier: "steel",
		previousHorseTier: "iron",
		previousToolTier: "steel",
		paxelMaxDamage: 6144,
		toolCostMultiplier: 3,
		armorCostMultiplier: 3,
		needsDivingGear: true,
	},
	netherite: {
		mod: "minecraft",
		knifeMod: "farmersdelight",
		horseMod: "netherite_horse_armor",
		material: "#forge:ingots/netherite",
		hasTools: true,
		hasArmor: true,
		horseArmor: "netherite_horse_armor:netherite_horse_armor",
		previousArmorTier: "diamond",
		previousHorseTier: "diamond",
		previousToolTier: "diamond",
		paxelMaxDamage: 8192,
		toolCostMultiplier: 0.5,
		armorCostMultiplier: 0.5,
	},
	radiant: {
		cannotBeBroken: true,
		mod: "kubejs",
		knifeMod: "kubejs",
		material: "#forge:ingots/refined_radiance",
		hasTools: true,
		hasArmor: true,
		previousArmorTier: "netherite",
		previousToolTier: "netherite",
		paxelMaxDamage: 16384,
		toolCostMultiplier: 1,
		armorCostMultiplier: 1,
	},
};

StartupEvents.registry("item", (event) => {
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];
		if (tier.hasTools) {
			// Register Updrade Materials
			event
				.create(tierName + "_blade")
				.displayName(formatName(tierName) + " Blade")
				.unstackable();
			event
				.create(tierName + "_head")
				.displayName(formatName(tierName) + " Tool Head")
				.unstackable();
			// Only register incomplete tools if the tier needs upgrading (eg: will use the incomplete item in a sequenced assembly recipe)
			if (!tier.doesntNeedUpgrading) {
				event
					.create("incomplete_" + tierName + "_blade")
					.displayName("Incomplete " + formatName(tierName) + " Blade")
					.unstackable();
				event
					.create("incomplete_" + tierName + "_head")
					.displayName("Incomplete " + formatName(tierName) + " Tool Head")
					.unstackable();
			}
			// Register Paxel
			event
				.create(`${tierName}_paxel`, "paxel")
				.displayName(`${formatName(tierName)} Paxel`)
				.tier(tierName);
			// If the tool can be broken, create a broken version of the tool
			if (!tier.hasOwnProperty("cannotBeBroken")) {
				tools.forEach((tool) => {
					event
						.create(`broken_${tierName}_${tool}`)
						.displayName(`Broken ${formatName(tierName)} ${formatName(tool)}`)
						.unstackable();
				});
			}
			// If the tier has a knifeMod, create a knife
			if (tier.hasOwnProperty("knifeMod")) {
				// If the tool can be broken, create a broken version of the knife
				if (!tier.hasOwnProperty("cannotBeBroken")) {
					event
						.create(`broken_${tierName}_knife`)
						.displayName("Broken " + formatName(tierName) + " Knife")
						.unstackable();
				}

				// If the knifeMod is "kubejs", we need to create a knife
				if (tier.knifeMod === "kubejs") {
					event
						.create(tierName + "_knife", "farmersdelight:knife")
						.displayName(formatName(tierName) + " Knife")
						.tier(tierName);
				}
			}
		}
		if (tier.hasArmor) {
			// Register Upgrade Materials
			event
				.create(tierName + "_stitching")
				.displayName(formatName(tierName) + " Stitching")
				.unstackable();
			// Only register incomplete armor if the tier needs upgrading (eg: will use the incomplete item in a sequenced assembly recipe)
			if (!tier.doesntNeedUpgrading) {
				event
					.create("unfinished_" + tierName + "_stitching")
					.displayName("Incomplete " + formatName(tierName) + " Stitching")
					.unstackable();
			}
			// If the tier can be broken, create a broken version of the armor
			if (!tier.hasOwnProperty("cannotBeBroken")) {
				armors.forEach((armor) => {
					event
						.create(`broken_${tierName}_${armor}`)
						.displayName(`Broken ${formatName(tierName)} ${formatName(armor)}`)
						.unstackable();
				});
			}
		}
		// If the tier can be broken, we need to create a repair kit
		if (!tier.hasOwnProperty("cannotBeBroken")) {
			event
				.create(tierName + "_repair_kit")
				.displayName(formatName(tierName) + " Repair Kit")
				.maxStackSize(4);
		}
	}
});

// Adjust Durability of paxels
ItemEvents.modification((event) => {
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];
		// Apply paxel durability
		if (tier.hasTools) {
			event.modify(`kubejs:${tierName}_paxel`, (item) => {
				item.maxDamage = tier.paxelMaxDamage;
			});
		}
		// Make unbreakable tools unbreakable
		if (tier.hasOwnProperty("cannotBeBroken")) {
			tools.forEach((tool) => {
				event.modify(`kubejs:${tierName}_${tool}`, (item) => {
					item.maxDamage = 0;
				});
			});
			armors.forEach((piece) => {
				event.modify(`kubejs:${tierName}_${piece}`, (item) => {
					item.maxDamage = 0;
				});
			});
		}
	}
});
