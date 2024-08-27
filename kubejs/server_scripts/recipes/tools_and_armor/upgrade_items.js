const toolUpgradeMats = [
	{ name: "netherite", cost: "#forge:ingots/netherite", costMultiplier: 0.5 },
	{ name: "diamond", cost: "#forge:gems/diamond", costMultiplier: 3 },
	{ name: "steel", cost: "#forge:ingots/steel", costMultiplier: 2 },
	{ name: "iron", cost: "#forge:ingots/iron", costMultiplier: 2 },
	{ name: "copper", cost: "#forge:ingots/copper", costMultiplier: 1 },
	{ name: "stone", cost: "kubejs:refined_stone", costMultiplier: 1 },
];
const armorUpgradeMats = [
	{ name: "netherite", cost: "#forge:ingots/netherite", costMultiplier: 0.5 },
	{ name: "diamond", cost: "#forge:gems/diamond", costMultiplier: 3 },
	{ name: "steel", cost: "#forge:ingots/steel", costMultiplier: 2 },
	{ name: "iron", cost: "#forge:ingots/iron", costMultiplier: 3 },
	{ name: "copper", cost: "#forge:ingots/copper", costMultiplier: 1 },
	{ name: "chainmail", cost: "minecraft:chain", costMultiplier: 1 },
];

ServerEvents.recipes((event) => {
	toolUpgradeMats.forEach((material) => {
		// Blade
		event.recipes.create
			.sequenced_assembly([`kubejs:${material.name}_blade`], "kubejs:wooden_blade", [
				event.recipes.createDeploying(`kubejs:incomplete_${material.name}_blade`, [
					`kubejs:incomplete_${material.name}_blade`,
					material.cost,
				]),
			])
			.transitionalItem(`kubejs:incomplete_${material.name}_blade`)
			.loops(Math.round(2 * material.costMultiplier));
		// Paxel Head
		event.recipes.create
			.sequenced_assembly([`kubejs:${material.name}_head`], "kubejs:wooden_head", [
				event.recipes.createDeploying(`kubejs:incomplete_${material.name}_head`, [
					`kubejs:incomplete_${material.name}_head`,
					material.cost,
				]),
			])
			.transitionalItem(`kubejs:incomplete_${material.name}_head`)
			.loops(Math.round(7 * material.costMultiplier));
	});
	armorUpgradeMats.forEach((material) => {
		// Stitching
		event.recipes.createDeploying(`kubejs:unfinished_${material.name}_stitching`, [
			"kubejs:leather_stitching",
			material.cost,
		]);
		event.recipes.create
			.sequenced_assembly([`kubejs:${material.name}_stitching`], `kubejs:unfinished_${material.name}_stitching`, [
				event.recipes.createDeploying(`kubejs:unfinished_${material.name}_stitching`, [
					`kubejs:unfinished_${material.name}_stitching`,
					material.cost,
				]),
			])
			.transitionalItem(`kubejs:unfinished_${material.name}_stitching`)
			.loops(Math.round(5 * material.costMultiplier));
	});
});
