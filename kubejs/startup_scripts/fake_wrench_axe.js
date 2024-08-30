ItemEvents.toolTierRegistry((event) => {
	event.add("fake_wrench", (tier) => {
		tier.uses = 100;
		tier.speed = 10;
		tier.attackDamageBonus = 0;
		tier.level = 0;
	});
});
StartupEvents.registry("item", (event) => {
	event.create("wrench_axe", "axe").displayName("Wrench").tier("fake_wrench").unstackable();
});

ItemEvents.modification((event) => {
	event.modify("kubejs:wrench_axe", (item) => {
		item.digSpeed = 0;
		item.attackSpeed = 1000;
		let attribute = item.getAttributes("generic.attack_damage").get(0);
		item.removeAttribute("generic.attack_damage", attribute.id);
	});
});
