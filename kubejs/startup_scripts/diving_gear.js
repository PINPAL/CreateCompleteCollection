// Import necessary Create classes from the correct package
const $CreateRegistrate = Java.loadClass("com.simibubi.create.foundation.data.CreateRegistrate");
const $DivingHelmetItem = Java.loadClass("com.simibubi.create.content.equipment.armor.DivingHelmetItem");
const $AllArmorMaterials = Java.loadClass("com.simibubi.create.content.equipment.armor.AllArmorMaterials");
const $Item = Java.loadClass("net.minecraft.world.item.Item");
const $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

// Create your own instance of CreateRegistrate
const myRegistrate = $CreateRegistrate.create("kubejs");

// Define a ResourceLocation for the texture (you should provide the correct path for your texture)
const textureLocation = new $ResourceLocation("kubejs", "textures/item/custom_diving_helmet.png");

// Register a custom diving helmet item with the correct constructor
myRegistrate
	.item(
		"custom_diving_helmet",
		(props) =>
			new $DivingHelmetItem(
				$AllArmorMaterials.COPPER, // Armor material
				new $Item.Properties(), // Item properties
				textureLocation // Resource location for the texture
			)
	)
	.register();

// Finalize the registration process
myRegistrate.registerEventListeners($EventBuses.getModEventBus("kubejs").get());
