// Import necessary Create classes from the correct package
const $CreateRegistrate = Java.loadClass("com.simibubi.create.foundation.data.CreateRegistrate");
const $DivingHelmetItem = Java.loadClass("com.simibubi.create.content.equipment.armor.DivingHelmetItem");
const $DivingBootsItem = Java.loadClass("com.simibubi.create.content.equipment.armor.DivingBootsItem");

const $ArmorMaterials = Java.loadClass("net.minecraft.world.item.ArmorMaterials");
const $Item = Java.loadClass("net.minecraft.world.item.Item");
const $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

// Create your own instance of CreateRegistrate
const kubejsRegistrate = $CreateRegistrate.create("kubejs");

// Loop through all tiers
for (const tierName in global.tiers) {
	let tier = global.tiers[tierName];

	// Skip tiers that don't need diving gear
	if (!tier.hasOwnProperty("needsDivingGear")) {
		continue;
	}
	if (!tier.needsDivingGear) {
		continue;
	}

	// Get the correct armor material depending on Mod
	let armorMaterial;
	// Edge case (eg: chainmail uses "chain" instead of "chainmail")
	if (tier.hasOwnProperty("armorMaterial")) {
		armorMaterial = $ArmorMaterials[tier.armorMaterial.toUpperCase()];
		// Else use the tier name
	} else {
		armorMaterial = $ArmorMaterials[tierName.toUpperCase()];
	}

	let textureLocation = new $ResourceLocation("kubejs", `${tierName}_diving`);

	// Regiser the diving helmet item
	kubejsRegistrate
		.item(
			`${tierName}_diving_helmet`,
			(props) => new $DivingHelmetItem(armorMaterial, new $Item.Properties(), textureLocation)
		)
		.register();

	// Register the diving boots item
	kubejsRegistrate
		.item(
			`${tierName}_diving_boots`,
			(props) => new $DivingBootsItem(armorMaterial, new $Item.Properties(), textureLocation)
		)
		.register();

	// Add the item to JEI
	global.addToJEI.push(`kubejs:${tierName}_diving_helmet`);
	global.addToJEI.push(`kubejs:${tierName}_diving_boots`);
}

// Finalize the registration process
kubejsRegistrate.registerEventListeners($EventBuses.getModEventBus("kubejs").get());

// Adjust the tier of the diving gear
ItemEvents.modification((event) => {
	// Loop through all tiers
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];

		// Skip tiers that don't need diving gear
		if (!tier.hasOwnProperty("needsDivingGear")) {
			continue;
		}
		if (!tier.needsDivingGear) {
			continue;
		}

		// Skip tiers that don't have custom armor properties
		if (!tier.hasOwnProperty("armorProperties")) {
			continue;
		}
		// Apply any custom properties to the diving gear
		for (const propertyName in tier.armorProperties) {
			// Edge case for armor protection (handle each slot separately)
			if (propertyName === "slotProtections") {
				event.modify(`kubejs:${tierName}_diving_helmet`, (item) => {
					// Slot Protections are stored as an array of integers [head, chest, legs, feet]
					item.armorProtection = tier.armorProperties.slotProtections[0];
				});
				event.modify(`kubejs:${tierName}_diving_boots`, (item) => {
					// Slot Protections are stored as an array of integers [head, chest, legs, feet]
					item.armorProtection = tier.armorProperties.slotProtections[3];
				});
				// Apply any other custom properties
			} else {
				event.modify(`kubejs:${tierName}_diving_helmet`, (item) => {
					item[propertyName] = tier.armorProperties[propertyName];
				});
				event.modify(`kubejs:${tierName}_diving_boots`, (item) => {
					item[propertyName] = tier.armorProperties[propertyName];
				});
			}
		}
	}
});

// Create broken variant of the diving gear
StartupEvents.registry("item", (event) => {
	// Loop through all tiers
	for (const tierName in global.tiers) {
		let tier = global.tiers[tierName];

		// Skip tiers that don't need diving gear
		// (eg: doesn't have either a needsDivingGear or hasNativeDivingGear property)
		if (!tier.needsDivingGear && !tier.hasNativeDivingGear) {
			continue;
		}

		if (!tier.cannotBeBroken) {
			event
				.create(`broken_${tierName}_diving_helmet`)
				.displayName("Broken " + formatName(tierName) + " Diving Helmet")
				.unstackable();
			event
				.create(`broken_${tierName}_diving_boots`)
				.displayName("Broken " + formatName(tierName) + " Diving Boots")
				.unstackable();
		}
	}
});
