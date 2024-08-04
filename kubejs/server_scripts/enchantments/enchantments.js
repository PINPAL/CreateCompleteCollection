// ============================================================================
// Random enchants via recipe sequence
// ============================================================================
ServerEvents.recipes((event) => {
	event.recipes
		.createSequencedAssembly(
			[
				// output
				Item.of(
					"minecraft:enchanted_book",
					'{display:{Lore:[\'[{"text":"Can contain ","color":"gray","italic":false},{"text":"ANY ","color":"red","italic":false},{"text":"enchantment.","color":"gray","italic":false}]\',\'{"text":" "}\',\'{"text":"Equal chance of all enchants.","color":"gold","italic":false}\',\'{"text":"Will always be Level I","color":"yellow","italic":false}\'],Name:\'{"text":"Random Enchanted Book","color":"gold","italic":false}\'}}'
				).withChance(0),
				Item.of("minecraft:enchanted_book").enchant("minecraft:protection", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:fire_protection", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:feather_falling", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:blast_protection", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book")
					.enchant("minecraft:projectile_protection", 1)
					.withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:respiration", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:aqua_affinity", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:thorns", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:depth_strider", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:frost_walker", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:binding_curse", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:sharpness", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:smite", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:bane_of_arthropods", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:knockback", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:fire_aspect", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:looting", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:sweeping", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:efficiency", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:silk_touch", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:unbreaking", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:fortune", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:power", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:punch", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:flame", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:infinity", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:luck_of_the_sea", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:lure", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:loyalty", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:impaling", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:riptide", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:channeling", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:multishot", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:quick_charge", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:piercing", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:mending", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:vanishing_curse", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:swift_sneak", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("minecraft:soul_speed", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("create:potato_recovery", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("create:capacity", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("farmersdelight:backstabbing", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book").enchant("ensorcellation:air_affinity", 1).withChance(0.022222222),
				Item.of("minecraft:enchanted_book")
					.enchant("modification_of_critical_hit:criteffect", 1)
					.withChance(0.022222222),
				Item.of("minecraft:enchanted_book")
					.enchant("modification_of_critical_hit:critchance", 1)
					.withChance(0.022222222),
			],
			// input
			"minecraft:book",
			// sequence
			[
				event.recipes.create.filling("minecraft:book", [
					Fluid.of("create_enchantment_industry:experience", 100),
					"minecraft:book",
				]),
				event.recipes.createDeploying("minecraft:book", ["minecraft:book", "minecraft:lapis_lazuli"]),
			]
		)
		.transitionalItem("minecraft:book")
		.loops(1)
		.id("create_cc:random_enchanted_book");
});
