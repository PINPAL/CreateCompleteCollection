ServerEvents.recipes((event) => {
	const toolsItemList = ["paxel", "sword", "hoe"];
	const armors = ["helmet", "chestplate", "leggings", "boots"];
	const materials = [
		{
			name: "netherite",
			material: "#forge:ingots/netherite",
		},
		{
			name: "diamond",
			material: "#forge:gems/diamond",
		},
		{
			name: "steel",
			modId: "kubejs",
			noKnife: true,
			material: "#forge:ingots/steel",
		},
		{
			name: "iron",
			material: "#forge:ingots/iron",
		},
		{
			name: "copper",
			knifeMod: "create_things_and_misc",
			modId: "kubejs",
			material: "#forge:ingots/copper",
		},
		{
			name: "stone",
			material: "kubejs:refined_stone",
			noArmor: true,
			noKnife: true,
		},
		{
			name: "wooden",
			material: "#minecraft:planks",
			noArmor: true,
			noKnife: true,
		},
		{
			name: "leather",
			material: "minecraft:leather",
			noTools: true,
			noKnife: true,
		},
		{
			name: "chainmail",
			material: "minecraft:chain",
			noTools: true,
			noKnife: true,
		},
	];

	// Shield
	event.smithing("minecraft:shield", "kubejs:broken_shield", "kubejs:iron_repair_kit");

	materials.forEach((material) => {
		if (material.name == "netherite") {
			event.smithing("kubejs:netherite_repair_kit", "kubejs:diamond_repair_kit", "#forge:ingots/netherite");
		} else {
			event.shaped("kubejs:" + material.name + "_repair_kit", [" A ", "ALA", " A "], {
				A: material.material,
				L: "minecraft:string",
			});
		}

		// Skip paxel/sword/hoe for chainmail and leather
		if (!material.hasOwnProperty("noTools")) {
			toolsItemList.forEach((item) => {
				// Get the repair item
				// If the item is a paxel, use kubejs instead of modID/minecraft
				// If the material has a modId, use that, otherwise use minecraft (eg: create_dd:steel instead of minecraft:steel)
				// If the material has a minecraftId, use that, otherwise use the material name (eg: wooden instead of wood)
				// Add the item name (eg: sword)
				let repairedItem =
					(item == "paxel" ? "kubejs" : material.hasOwnProperty("modId") ? material.modId : "minecraft") +
					":" +
					material.name +
					"_" +
					item;
				// Recipe
				event.smithing(
					repairedItem,
					`kubejs:broken_${material.name}_${item}`,
					`kubejs:${material.name}_repair_kit`
				);
			});
		}

		// Skip knife for chainmail, leather, stone and wood
		if (!material.hasOwnProperty("noKnife")) {
			// Get the repair item
			// If the material has a knifeMod, use that, otherwise use farmersdelight (eg: crete_dd:steel instead of farmersdelight:steel)
			let repairedItem =
				(material.hasOwnProperty("knifeMod") ? material.knifeMod : "farmersdelight") +
				":" +
				material.name +
				"_knife";
			// Recipe
			event.smithing(repairedItem, `kubejs:broken_${material.name}_knife`, `kubejs:${material.name}_repair_kit`);
		}

		// Skip armor for wooden and stone
		if (!material.hasOwnProperty("noArmor")) {
			armors.forEach((item) => {
				// Get the repair item
				// If the material has a modId, use that, otherwise use minecraft (eg: create_dd:steel instead of minecraft:steel)
				// If the material has a minecraftId, use that, otherwise use the material name (eg: wooden instead of wood)
				// Add the item name (eg: sword)
				let repairedItem =
					(material.hasOwnProperty("modId") ? material.modId : "minecraft") +
					":" +
					(material.hasOwnProperty("minecraftId") ? material.minecraftId : material.name) +
					"_" +
					item;
				// Recipe
				event.smithing(
					repairedItem,
					`kubejs:broken_${material.name}_${item}`,
					`kubejs:${material.name}_repair_kit`
				);
			});
		}
	});

	// Create Diving Gear
	const divingGear = [
		{ id: "netherite_diving_helmet", material: "netherite" },
		{ id: "netherite_diving_boots", material: "netherite" },
		{ id: "copper_diving_helmet", material: "copper" },
		{ id: "copper_diving_boots", material: "copper" },
	];
	divingGear.forEach((item) => {
		event.smithing(`create:${item.id}`, `kubejs:broken_${item.id}`, `kubejs:${item.material}_repair_kit`);
	});
});
