// priority: 99

const unifiedIngots = [
	{ name: "andesite", modsUsing: ["create", "createdeco", "vintageimprovements"], notIngot: "alloy" },
	{ name: "steel", modsUsing: ["tfmg", "create_dd", "ad_astra", "createmetallurgy"] },
	{ name: "industrial_iron", modsUsing: ["createdeco"] },
	{ name: "zinc", modsUsing: ["create", "create_dd", "createaddition", "destroy"] },
	{ name: "brass", modsUsing: ["create"] },
	{ name: "copper", modsUsing: ["create", "minecraft"] },
	{ name: "andesite", modsUsing: ["create", "create_dd", "createdeco"] },
	{ name: "netherite", modsUsing: ["minecraft", "createdeco"] },
	{ name: "iron", modsUsing: ["minecraft", "create", "ad_astra"] },
	{ name: "gold", modsUsing: ["minecraft", "create"] },
	{ name: "aluminum", modsUsing: ["tfmg"] },
	// { name: "bronze", modsUsing: ["create_dd"] },
	// { name: "tin", modsUsing: ["create_dd", "destroy"] },
	{ name: "refined_radiance", modsUsing: [] },
	{ name: "shadow_steel", modsUsing: [] },
];

ServerEvents.recipes((event) => {
	// Handle cast_iron -> industrial_iron conversion
	event.replaceInput(
		{ input: "#forge:ingots/cast_iron" },
		"#forge:ingots/cast_iron",
		"#forge:ingots/industrial_iron"
	);
	// Replace all modded ingots with unified ingots
	unifiedIngots.forEach((ingot) => {
		ingot.modsUsing.forEach((mod) => {
			// Ingots
			let modIngot = mod + ":" + ingot.name + "_ingot";
			// If the ingot has a different name eg: andesite_alloy not andesite_ingot
			if (ingot.hasOwnProperty("notIngot")) {
				modIngot = mod + ":" + ingot.name + "_" + ingot.notIngot;
			}
			// Replace all instances of the modded ingot with the unified ingot
			event.replaceInput({ input: modIngot }, modIngot, "#forge:ingots/" + ingot.name);
			event.replaceOutput({ output: modIngot }, modIngot, "#forge:ingots/" + ingot.name);

			// Nuggets
			event.replaceInput(
				{ input: mod + ":" + ingot.name + "_nugget" },
				mod + ":" + ingot.name + "_nugget",
				"#forge:nuggets/" + ingot.name
			);
			event.replaceOutput(
				{ output: mod + ":" + ingot.name + "_nugget" },
				mod + ":" + ingot.name + "_nugget",
				"#forge:nuggets/" + ingot.name
			);

			// Plates
			event.replaceInput(
				{ input: mod + ":" + ingot.name + "_sheet" },
				mod + ":" + ingot.name + "_sheet",
				"#forge:plates/" + ingot.name
			);
			event.replaceOutput(
				{ output: mod + ":" + ingot.name + "_sheet" },
				mod + ":" + ingot.name + "_sheet",
				"#forge:plates/" + ingot.name
			);
		});
	});
});

unifiedIngots.forEach((ingot) => {
	ServerEvents.tags("item", (event) => {
		// Add tags for all unified ingots
		event.add("forge:ingots/" + ingot.name, "create_cosmic_contraptions:" + ingot.name + "_ingot");
		event.add("forge:nuggets/" + ingot.name, "create_cosmic_contraptions:" + ingot.name + "_nugget");
		event.add("forge:plates/" + ingot.name, "create_cosmic_contraptions:" + ingot.name + "_sheet");
		event.add("forge:storage_blocks/" + ingot.name, "create_cosmic_contraptions:" + ingot.name + "_block");

		// Remove tags for all modded ingots
		ingot.modsUsing.forEach((mod) => {
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_ingot");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_nugget");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_sheet");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_plate");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_block");
		});
	});
	ServerEvents.tags("block", (event) => {
		// Remove tags for all modded blocks
		ingot.modsUsing.forEach((mod) => {
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_block");
		});
	});
});
