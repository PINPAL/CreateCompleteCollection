const creativePotions = [
	{ name: "night_vision", hasLong: true, hasStrong: false },
	{ name: "invisibility", hasLong: true, hasStrong: false },
	{ name: "leaping", hasLong: true, hasStrong: true },
	{ name: "fire_resistance", hasLong: true, hasStrong: false },
	{ name: "swiftness", hasLong: true, hasStrong: true },
	{ name: "slowness", hasLong: true, hasStrong: true },
	{ name: "turtle_master", hasLong: true, hasStrong: true },
	{ name: "water_breathing", hasLong: true, hasStrong: false },
	{ name: "healing", hasLong: false, hasStrong: true },
	{ name: "harming", hasLong: false, hasStrong: true },
	{ name: "poison", hasLong: true, hasStrong: true },
	{ name: "regeneration", hasLong: true, hasStrong: true },
	{ name: "strength", hasLong: true, hasStrong: true },
	{ name: "weakness", hasLong: true, hasStrong: false },
	{ name: "slow_falling", hasLong: true, hasStrong: false },
];

// Create the full list of potions
let creativeFullPotionList = [];
creativePotions.forEach((potion) => {
	creativeFullPotionList.push(potion.name);
	if (potion.hasLong) {
		creativeFullPotionList.push(`long_${potion.name}`);
	}
	if (potion.hasStrong) {
		creativeFullPotionList.push(`strong_${potion.name}`);
	}
});

// Define an array of chars to use for the recipe
const creativeChars = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

// Create the recipe ingredients objects
const creativePotionIngredients = {};
const creativeSplashPotionIngredients = {};
const creativeLingeringPotionIngredients = {};

// Create a recipe ingredient object for each potion type
// Format {a: "minecraftpotion", b:"minecraft:potion", ...}
for (let i = 0; i < creativeFullPotionList.length; i++) {
	creativePotionIngredients[creativeChars[i]] = Item.of(
		"minecraft:potion",
		`{Potion:"minecraft:${creativeFullPotionList[i]}"}`
	).strongNBT();
	creativeSplashPotionIngredients[creativeChars[i]] = Item.of(
		"minecraft:splash_potion",
		`{Potion:"minecraft:${creativeFullPotionList[i]}"}`
	).strongNBT();
	creativeLingeringPotionIngredients[creativeChars[i]] = Item.of(
		"minecraft:lingering_potion",
		`{Potion:"minecraft:${creativeFullPotionList[i]}"}`
	).strongNBT();
}

// Create recipe shape array
const recipeShape = ["  abc  ", " defgh ", "ijklmno", "pqrstuv", "wxyzABC", " DEFGH ", "  IJK  "];

ServerEvents.recipes((event) => {
	event.recipes.create
		.mechanical_crafting("cosmic_contraptions:creative_potion", recipeShape, creativePotionIngredients)
		.id("cosmic_contraptions:creative_potions/potion");
	event.recipes.create
		.mechanical_crafting("cosmic_contraptions:creative_splash_potion", recipeShape, creativeSplashPotionIngredients)
		.id("cosmic_contraptions:creative_potions/splash_potion");
	event.recipes.create
		.mechanical_crafting(
			"cosmic_contraptions:creative_lingering_potion",
			recipeShape,
			creativeLingeringPotionIngredients
		)
		.id("cosmic_contraptions:creative_potions/lingering_potion");

	// Divine Potion
	event.recipes.create
		.sequenced_assembly(
			[Item.of("cosmic_contraptions:creative_omega_potion")],
			"create_enchantment_industry:hyper_experience_bottle",
			[
				event.recipes.createDeploying("cosmic_contraptions:incomplete_creative_omega_potion", [
					"cosmic_contraptions:incomplete_creative_omega_potion",
					"cosmic_contraptions:creative_potion",
				]),
				event.recipes.createDeploying("cosmic_contraptions:incomplete_creative_omega_potion", [
					"cosmic_contraptions:incomplete_creative_omega_potion",
					"cosmic_contraptions:creative_splash_potion",
				]),
				event.recipes.createDeploying("cosmic_contraptions:incomplete_creative_omega_potion", [
					"cosmic_contraptions:incomplete_creative_omega_potion",
					"cosmic_contraptions:creative_lingering_potion",
				]),
			]
		)
		.transitionalItem("cosmic_contraptions:incomplete_creative_omega_potion")
		.loops(3)
		.id("cosmic_contraptions:creative_potions/creative_omega_potion");
});
