ServerEvents.recipes((event) => {
	global.machineRecipes.forEach((recipe) => {
		let outputItem = Item.of(recipe.output);
		let inputItem = Item.of(recipe.input.id);
		let inputBlock = `cosmic_contraptions:t${recipe.tier.tier}_${recipe.tier.name}_machine`;

		let recipeId = recipe.output.replace(":", "/");
		recipeId = "cosmic_contraptions:tiers/" + recipeId;

		event.remove({ output: outputItem });
		event.recipes.createItemApplication(outputItem, [inputBlock, inputItem]).id(recipeId);
	});
});
