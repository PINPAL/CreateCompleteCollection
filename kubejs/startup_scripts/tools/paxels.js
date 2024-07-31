let paxelTiers = [
	{
		name: "wooden",
		material: "wood",
		maxDamage: 180,
	},
	{
		name: "stone",
		material: "stone",
		maxDamage: 400,
	},
	{
		name: "copper",
		material: "copper",
		maxDamage: 700,
	},
	{
		name: "iron",
		material: "iron",
		maxDamage: 1000,
	},
	{
		name: "steel",
		material: "steel",
		maxDamage: 4096,
	},
	{
		name: "diamond",
		material: "diamond",
		maxDamage: 6144,
	},
	{
		name: "netherite",
		material: "netherite",
		maxDamage: 8192,
	},
];
paxelTiers.forEach((tier) => {
	// Register Paxel
	StartupEvents.registry("item", (event) => {
		event
			.create("create_cc:" + `${tier.name}_paxel`, "paxel")
			.displayName(`${formatName(tier.name)} Paxel`)
			.tier(tier.material)
			.unstackable();
	});
	// Adjust Durability
	ItemEvents.modification((event) => {
		event.modify(`create_cc:${tier.name}_paxel`, (item) => {
			item.maxDamage = tier.maxDamage;
		});
	});
});
