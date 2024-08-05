ServerEvents.recipes((event) => {
	const unpackingRecipes = [
		{
			input: "createdeco:andesite_trapdoor",
			output: "#forge:ingots/andesite",
			count: 4,
		},
		{
			input: "createdeco:brass_trapdoor",
			output: "#forge:ingots/brass",
			count: 4,
		},
		{
			input: "createdeco:industrial_iron_trapdoor",
			output: "#forge:ingots/industrial_iron",
			count: 4,
		},
		{
			input: "createdeco:copper_trapdoor",
			output: "#forge:ingots/copper",
			count: 4,
		},
		{
			input: "createdeco:zinc_trapdoor",
			output: "#forge:ingots/zinc",
			count: 4,
		},
		{
			input: "supplementaries:gold_trapdoor",
			output: "#forge:ingots/gold",
			count: 4,
		},
		{
			input: "ad_astra:steel_trapdoor",
			output: "#forge:ingots/steel",
			count: 2,
		},
	];

	unpackingRecipes.forEach((recipe) => {
		event.recipes.create
			.crushing(`${recipe.count}x ${recipe.output}`, recipe.input)
			.id(`create_cosmic_contraptions:unpacking_recipes/${recipe.input.replace(/.*:/, "")}_crushing`);
	});
});
