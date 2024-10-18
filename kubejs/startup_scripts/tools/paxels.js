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
	{
		name: "radiant",
		material: "radiant",
		maxDamage: 10240,
		glow: true,
		rarity: "uncommon",
	},
];
paxelTiers.forEach((tier) => {
	let rarity = "common";
	if (tier.hasOwnProperty("rarity")) {
		rarity = tier.rarity;
	}
	let glow = false;
	if (tier.hasOwnProperty("glow")) {
		glow = true;
	}
	// Register Paxel
	StartupEvents.registry("item", (event) => {
		event
			.create("kubejs:" + `${tier.name}_paxel`, "paxel")
			.displayName(`${formatName(tier.name)} Paxel`)
			.tier(tier.material)
			.glow(glow)
			.rarity(rarity)
			.unstackable();
	});
	// Adjust Durability
	ItemEvents.modification((event) => {
		event.modify(`kubejs:${tier.name}_paxel`, (item) => {
			item.maxDamage = tier.maxDamage;
		});
	});
});
