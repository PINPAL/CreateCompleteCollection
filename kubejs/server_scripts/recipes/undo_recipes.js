ServerEvents.recipes((event) => {
	const unpackingRecipes = [
		{
			input: "createdeco:andesite_trapdoor",
			output: "cosmic_contraptions:andesite_ingot",
			count: 4,
		},
		{
			input: "createdeco:brass_trapdoor",
			output: "cosmic_contraptions:brass_ingot",
			count: 4,
		},
		{
			input: "createdeco:industrial_iron_trapdoor",
			output: "cosmic_contraptions:industrial_iron_ingot",
			count: 4,
		},
		{
			input: "createdeco:copper_trapdoor",
			output: "cosmic_contraptions:copper_ingot",
			count: 4,
		},
		{
			input: "createdeco:zinc_trapdoor",
			output: "cosmic_contraptions:zinc_ingot",
			count: 4,
		},
		{
			input: "supplementaries:gold_trapdoor",
			output: "cosmic_contraptions:gold_ingot",
			count: 4,
		},
		{
			input: "minecraft:cut_copper",
			output: "cosmic_contraptions:copper_ingot",
			count: 3,
		},
		{
			input: "createdeco:zinc_coin",
			output: "cosmic_contraptions:zinc_nugget",
			count: 1,
		},
		{
			input: "createdeco:copper_coin",
			output: "cosmic_contraptions:copper_nugget",
			count: 1,
		},
		{
			input: "createdeco:gold_coin",
			output: "comisc_contraptions:gold_nugget",
			count: 1,
		},
		{
			input: "createdeco:brass_coin",
			output: "cosmic_contraptions:brass_nugget",
			count: 1,
		},
		{
			input: "createdeco:iron_coin",
			output: "cosmic_contraptions:iron_nugget",
			count: 1,
		},
		{
			input: "createdeco:netherite_coin",
			output: "cosmic_contraptions:netherite_nugget",
			count: 1,
		},
		{
			input: "createdeco:industrial_iron_coin",
			output: "cosmic_contraptions:industrial_iron_nugget",
			count: 1,
		},
	];

	unpackingRecipes.forEach((recipe) => {
		let recipeId = "cosmic_contraptions:undo/";
		recipeId = recipeId + recipe.input.replace(":", "_");
		event.recipes.create.milling(`${recipe.count}x ${recipe.output}`, recipe.input).id(recipeId);
	});
});
