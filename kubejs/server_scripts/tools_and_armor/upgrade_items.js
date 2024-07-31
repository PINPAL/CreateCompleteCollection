const toolUpgradeMats = [
	{ name: "netherite", cost: "#forge:ingots/netherite", costMultiplier: 0.5 },
	{ name: "diamond", cost: "#forge:gems/diamond", costMultiplier: 3 },
	{ name: "steel", cost: "#forge:ingots/steel", costMultiplier: 2 },
	{ name: "iron", cost: "#forge:ingots/iron", costMultiplier: 3 },
	{ name: "copper", cost: "#forge:ingots/copper", costMultiplier: 1 },
	{ name: "stone", cost: "create_cc:refined_stone", costMultiplier: 1 },
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
			.sequenced_assembly([`create_cc:${material.name}_blade`], "create_cc:wooden_blade", [
				event.recipes.createDeploying(`create_cc:incomplete_${material.name}_blade`, [
					`create_cc:incomplete_${material.name}_blade`,
					material.cost,
				]),
			])
			.transitionalItem(`create_cc:incomplete_${material.name}_blade`)
			.loops(Math.round(2 * material.costMultiplier))
			.id(`create_cc:tools/upgrade-items/${material.name}_blade`);
		// Paxel Head
		event.recipes.create
			.sequenced_assembly([`create_cc:${material.name}_head`], "create_cc:wooden_head", [
				event.recipes.createDeploying(`create_cc:incomplete_${material.name}_head`, [
					`create_cc:incomplete_${material.name}_head`,
					material.cost,
				]),
			])
			.transitionalItem(`create_cc:incomplete_${material.name}_head`)
			.loops(Math.round(7 * material.costMultiplier))
			.id(`create_cc:tools/upgrade-items/${material.name}_head`);
	});
	armorUpgradeMats.forEach((material) => {
		// Stitching
		event.recipes
			.createDeploying(`create_cc:unfinished_${material.name}_stitching`, [
				"create_cc:leather_stitching",
				material.cost,
			])
			.id(`create_cc:armor/upgrade-items/unfinished_${material.name}_stitching`);
		event.recipes.create
			.sequenced_assembly(
				[`create_cc:${material.name}_stitching`],
				`create_cc:unfinished_${material.name}_stitching`,
				[
					event.recipes.createDeploying(`create_cc:unfinished_${material.name}_stitching`, [
						`create_cc:unfinished_${material.name}_stitching`,
						material.cost,
					]),
				]
			)
			.id(`create_cc:armor/upgrade-items/${material.name}_stitching`)
			.transitionalItem(`create_cc:unfinished_${material.name}_stitching`)
			.loops(Math.round(5 * material.costMultiplier));
	});
});
