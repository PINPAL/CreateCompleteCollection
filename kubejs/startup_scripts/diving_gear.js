// Import necessary Create classes from the correct package
const $CreateRegistrate = Java.loadClass("com.simibubi.create.foundation.data.CreateRegistrate");
const $DivingHelmetItem = Java.loadClass("com.simibubi.create.content.equipment.armor.DivingHelmetItem");
const $DivingBootsItem = Java.loadClass("com.simibubi.create.content.equipment.armor.DivingBootsItem");
const $AllArmorMaterials = Java.loadClass("com.simibubi.create.content.equipment.armor.AllArmorMaterials");
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
	if (tier.mod === "minecraft") {
		// Edge case for chainmail (uses "chain" instead of "chainmail")
		if (tier.hasOwnProperty("armorMaterial")) {
			armorMaterial = $ArmorMaterials[tier.armorMaterial.toUpperCase()];
			// Else use the tier name
		} else {
			armorMaterial = $ArmorMaterials[tierName.toUpperCase()];
		}
	} else {
		armorMaterial = $AllArmorMaterials[tierName.toUpperCase()];
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
}

// Finalize the registration process
kubejsRegistrate.registerEventListeners($EventBuses.getModEventBus("kubejs").get());
