const toolUpgradeMats = [
	{ name: "netherite", cost: "#forge:ingots/netherite", costMultiplier: 0.5 },
	{ name: "diamond", cost: "#forge:gems/diamond", costMultiplier: 3 },
	{ name: "steel", cost: "#forge:ingots/steel", costMultiplier: 2 },
	{ name: "iron", cost: "#forge:ingots/iron", costMultiplier: 3 },
	{ name: "copper", cost: "#forge:ingots/copper", costMultiplier: 1 },
	{ name: "stone", cost: "cosmic_contraptions:refined_stone", costMultiplier: 1 },
	{ name: "radiant", cost: "#forge:ingots/refined_radiance", costMultiplier: 2 },
];
const armorUpgradeMats = [
	{ name: "netherite", cost: "#forge:ingots/netherite", costMultiplier: 0.5 },
	{ name: "diamond", cost: "#forge:gems/diamond", costMultiplier: 3 },
	{ name: "steel", cost: "#forge:ingots/steel", costMultiplier: 2 },
	{ name: "iron", cost: "#forge:ingots/iron", costMultiplier: 3 },
	{ name: "copper", cost: "#forge:ingots/copper", costMultiplier: 1 },
	{ name: "chainmail", cost: "minecraft:chain", costMultiplier: 1 },
	{ name: "radiant", cost: "#forge:ingots/refined_radiance", costMultiplier: 2 },
];

ServerEvents.recipes((event) => {
	toolUpgradeMats.forEach((material) => {
		// Blade
		event.recipes.create
			.sequenced_assembly([`cosmic_contraptions:${material.name}_blade`], "cosmic_contraptions:wooden_blade", [
				event.recipes.createDeploying(`cosmic_contraptions:incomplete_${material.name}_blade`, [
					`cosmic_contraptions:incomplete_${material.name}_blade`,
					material.cost,
				]),
			])
			.transitionalItem(`cosmic_contraptions:incomplete_${material.name}_blade`)
			.loops(Math.round(2 * material.costMultiplier))
			.id(`cosmic_contraptions:tools/upgrade-items/${material.name}_blade`);
		// Paxel Head
		event.recipes.create
			.sequenced_assembly([`cosmic_contraptions:${material.name}_head`], "cosmic_contraptions:wooden_head", [
				event.recipes.createDeploying(`cosmic_contraptions:incomplete_${material.name}_head`, [
					`cosmic_contraptions:incomplete_${material.name}_head`,
					material.cost,
				]),
			])
			.transitionalItem(`cosmic_contraptions:incomplete_${material.name}_head`)
			.loops(Math.round(7 * material.costMultiplier))
			.id(`cosmic_contraptions:tools/upgrade-items/${material.name}_head`);
	});
	armorUpgradeMats.forEach((material) => {
		// Stitching
		event.recipes
			.createDeploying(`cosmic_contraptions:unfinished_${material.name}_stitching`, [
				"cosmic_contraptions:leather_stitching",
				material.cost,
			])
			.id(`cosmic_contraptions:armor/upgrade-items/unfinished_${material.name}_stitching`);
		event.recipes.create
			.sequenced_assembly(
				[`cosmic_contraptions:${material.name}_stitching`],
				`cosmic_contraptions:unfinished_${material.name}_stitching`,
				[
					event.recipes.createDeploying(`cosmic_contraptions:unfinished_${material.name}_stitching`, [
						`cosmic_contraptions:unfinished_${material.name}_stitching`,
						material.cost,
					]),
				]
			)
			.id(`cosmic_contraptions:armor/upgrade-items/${material.name}_stitching`)
			.transitionalItem(`cosmic_contraptions:unfinished_${material.name}_stitching`)
			.loops(Math.round(5 * material.costMultiplier));
	});
});
