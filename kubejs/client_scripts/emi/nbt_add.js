// priority: -1

ClientEvents.highPriorityAssets((event) => {
	const addNBTtoJEI = [
		Item.of(
			"create:extendo_grip",
			'{Unbreakable:1b,CurioAttributeModifiers:[{AttributeName:"generic.attack_knockback",Name:"generic.attack_knockback",Amount:3,Operation:0,UUID:[I;1203229738,-1965539080,-1341673873,592198839],Slot:"hands"},{AttributeName:"forge:attack_range",Name:"forge:attack_range",Amount:3,Operation:0,UUID:[I;-1826537097,-1713487428,-1545263740,-720620157],Slot:"hands"},{AttributeName:"forge:reach_distance",Name:"forge:reach_distance",Amount:3,Operation:0,UUID:[I;775495772,434720553,-1780503515,1389346287],Slot:"hands"}]}'
		),
		Item.of("minecraft:water_bucket").enchant("minecraft:infinity", 1),
		Item.of("minecraft:diamond").withNBT({ display: { Name: '{"text":"Hello"}' } }),
		Item.of("refinedstorage:cover", '{Item:{Count:1b,id:"create:andesite_casing"}}'),
		Item.of("refinedstorage:hollow_cover", '{Item:{Count:1b,id:"create:andesite_casing"}}'),
		Item.of("refinedstorage:cover", '{Item:{Count:1b,id:"create:brass_casing"}}'),
		Item.of("refinedstorage:hollow_cover", '{Item:{Count:1b,id:"create:brass_casing"}}'),
		Item.of("wands:netherite_wand").withNBT({ Unbreakable: "1b" }),
		Item.of("createaddition:diamond_grit_sandpaper").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_knife").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_paxel").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_sword").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_hoe").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_helmet").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_chestplate").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_leggings").withNBT({ Unbreakable: "1b" }),
		Item.of("create_cosmic_contraptions:radiant_boots").withNBT({ Unbreakable: "1b" }),
	];

	// Define the JSON
	let json = {
		added: [],
	};
	// Generate a stack and add each item to the JSON
	addNBTtoJEI.forEach((item) => {
		let stack = {
			stack: {
				type: "item",
				id: item.getId(),
				nbt: item.getNbtString(),
			},
		};
		json.added.push(stack);
	});
	// Save the JSON to the resource location
	event.add("emi:index/stacks/add.json", json);
});
