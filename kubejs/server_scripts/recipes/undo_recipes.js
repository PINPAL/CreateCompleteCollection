ServerEvents.recipes((event) => {
	const unpackingRecipes = [
		{
			input: "createdeco:andesite_trapdoor",
			output: "create:andesite_alloy",
			count: 4,
		},
		{
			input: "createdeco:brass_trapdoor",
			output: "create:brass_ingot",
			count: 4,
		},
		{
			input: "createdeco:cast_iron_trapdoor",
			output: "createdeco:cast_iron_ingot",
			count: 4,
		},
		{
			input: "createdeco:copper_trapdoor",
			output: "create:copper_ingot",
			count: 4,
		},
		{
			input: "createdeco:zinc_trapdoor",
			output: "create:zinc_ingot",
			count: 4,
		},
		{
			input: "supplementaries:gold_trapdoor",
			output: "minecraft:gold_ingot",
			count: 4,
		},
		{
			input: "minecraft:cut_copper",
			output: "minecraft:copper_ingot",
			count: 3,
		},
		{
			input: "createdeco:zinc_coin",
			output: "create:zinc_nugget",
			count: 1,
		},
		{
			input: "createdeco:copper_coin",
			output: "create:copper_nugget",
			count: 1,
		},
		{
			input: "createdeco:gold_coin",
			output: "minecraft:gold_nugget",
			count: 1,
		},
		{
			input: "createdeco:brass_coin",
			output: "create:brass_nugget",
			count: 1,
		},
		{
			input: "createdeco:iron_coin",
			output: "minecraft:iron_nugget",
			count: 1,
		},
		{
			input: "createdeco:netherite_coin",
			output: "createdeco:netherite_nugget",
			count: 1,
		},
		{
			input: "createdeco:cast_iron_coin",
			output: "createdeco:cast_iron_nugget",
			count: 1,
		},
	];

	unpackingRecipes.forEach((recipe) => {
		let recipeId = "kubejs:undo/";
		recipeId = recipeId + recipe.input.replace(":", "_");
		event.recipes.create.milling(`${recipe.count}x ${recipe.output}`, recipe.input).id(recipeId);
	});
});
