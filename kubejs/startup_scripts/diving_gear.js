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
const myRegistrate = $CreateRegistrate.create("kubejs");

// Define a ResourceLocation for the texture (you should provide the correct path for your texture)
const helmetTextureLocation = new $ResourceLocation("kubejs", "textures/item/custom_diving_helmet");
const bootsTextureLocation = new $ResourceLocation("kubejs", "textures/item/custom_diving_boots");

// Register a custom diving helmet item
myRegistrate
	.item(
		"custom_diving_helmet",
		(props) =>
			new $DivingHelmetItem(
				$AllArmorMaterials.COPPER, // Armor material
				new $Item.Properties(), // Item properties
				helmetTextureLocation // Resource location for the texture
			)
	)
	.register();

myRegistrate
	.item(
		"iron_diving_helmet",
		(props) =>
			new $DivingHelmetItem(
				$ArmorMaterials.IRON, // Armor material
				new $Item.Properties(), // Item properties
				helmetTextureLocation // Resource location for the texture
			)
	)
	.register();

// Register a custom diving boots item
myRegistrate
	.item(
		"custom_diving_boots",
		(props) =>
			new $DivingBootsItem(
				$AllArmorMaterials.COPPER, // Armor material
				new $Item.Properties(), // Item properties
				bootsTextureLocation // Resource location for the texture
			)
	)
	.register();

myRegistrate
	.item(
		"iron_diving_boots",
		(props) =>
			new $DivingBootsItem(
				$ArmorMaterials.IRON, // Armor material
				new $Item.Properties(), // Item properties
				bootsTextureLocation // Resource location for the texture
			)
	)
	.register();

// Finalize the registration process
myRegistrate.registerEventListeners($EventBuses.getModEventBus("kubejs").get());
