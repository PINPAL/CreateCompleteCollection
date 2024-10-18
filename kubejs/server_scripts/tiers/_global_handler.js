ServerEvents.recipes((event) => {
	global.machineRecipes.forEach((recipe) => {
		console.log("CREATING RECIPE FOR: " + recipe.output);
		let outputItem = Item.of(recipe.output);
		console.log("OUTPUT: " + outputItem.id);
		let inputItem = Item.of(recipe.input.id);
		let inputBlock = `cosmic_contraptions:t${recipe.tier.tier}_${recipe.tier.name}_machine`;

		console.log("output: " + outputItem.id + " input: " + inputItem + " block: " + inputBlock);

		let recipeId = recipe.output.replace(":", "/");
		recipeId = "cosmic_contraptions:tiers/" + recipeId;

		event.remove({ output: outputItem });
		event.recipes.createItemApplication(outputItem, [inputBlock, inputItem]).id(recipeId);
	});
});
