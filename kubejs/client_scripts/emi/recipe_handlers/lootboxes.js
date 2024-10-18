JEIAddedEvents.registerCategories((event) => {
	const guiHelper = event.data.jeiHelpers.guiHelper;

	event.custom("cosmic_contraptions:lootbox_results", (category) => {
		let columns = 7;
		let rows = 3;
		let slotSize = 24;
		let padding = 8;
		let navHeight = 34;

		let guiWidth = padding + columns * slotSize;
		let guiHeight = navHeight + padding + rows * (slotSize + slotSize / 2);

		category
			//https://github.com/mezz/JustEnoughItems/blob/1.20.1/CommonApi/src/main/java/mezz/jei/api/helpers/IGuiHelper.java
			.title("Lootbox Results")
			.background(
				guiHelper.createDrawable("cosmic_contraptions:textures/gui/lootbox_jei.png", 2, 2, guiWidth, guiHeight)
			)
			.icon(guiHelper.createDrawableItemStack(Item.of("cosmic_contraptions:lootbox_creative")))
			// Validate
			// Ensure that the recipe has an input
			// Ensure that the recipe has outputs
			// Ensure that the recipe has outputWeights
			// Ensure that the recipe has the same number of outputs and outputWeights
			// Ensure that the recipe has a positive number of rolls
			.isRecipeHandled((recipe) => {
				return !!(
					recipe?.data?.input !== undefined &&
					recipe?.data?.outputs !== undefined &&
					recipe?.data?.outputWeights !== undefined &&
					recipe?.data?.outputs.length == recipe?.data?.outputWeights.length &&
					recipe?.data?.rolls > 0
				);
			})

			// Slot Drawing
			.handleLookup((builder, recipe, focuses) => {
				global.drawSlot(recipe.data.input, "INPUT", padding, padding, builder, false);

				// draw outputs
				let x = padding;
				let y = navHeight + padding / 2;
				for (let i = 0; i < recipe.data.outputs.length; i++) {
					global.drawSlot(recipe.data.outputs[i], "OUTPUT", x, y, builder, false);
					x += slotSize;
					if (x > columns * slotSize) {
						x = padding;
						y += slotSize + slotSize / 2;
					}
				}
			})
			// Text Drawing
			.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
				guiGraphics.drawWordWrap(Client.font, Text.of(recipe.data.name).white(), 30, 6, guiWidth - 30, 0);
				guiGraphics.drawWordWrap(
					Client.font,
					Text.of(`Rolls ${recipe.data.rolls} Item${recipe.data.rolls > 1 ? "s" : ""}`).color(0xa8a8a8),
					30,
					18,
					guiWidth - 30,
					0
				);

				let x = padding;
				let y = navHeight + slotSize;
				for (let i = 0; i < recipe.data.outputs.length; i++) {
					let weight = recipe.data.outputWeights[i];
					let text = Text.of(`${formatPercenatage(weight)}`);
					text.color(0xa8a8a8);
					text.hover(Text.of(`Chance: ${weight}`));

					guiGraphics.drawWordWrap(Client.font, text, x, y, 100, 0);

					x += slotSize;
					if (x > columns * slotSize) {
						x = padding;
						y += slotSize + slotSize / 2;
					}
				}
			});
	});
});

let calculateRarityPercentage = (weight, lootbox) => {
	let totalWeight = 0;
	lootbox.items.forEach((item) => {
		totalWeight += item.weight;
	});
	return weight / totalWeight;
};

let formatPercenatage = (decimal) => {
	// calculate the percentage of the weight
	let percentage = Math.round(decimal * 100);
	let percentageString = percentage.toString();

	// format the percentage if it is less than 1
	if (percentage < 1) {
		percentageString = "<1";
	}

	percentageString += "%";
	return percentageString;
};

JEIAddedEvents.registerRecipes((event) => {
	for (const key in global.lootboxes) {
		let lootbox = global.lootboxes[key];

		let outputs = [];
		let outputWeights = [];

		// Sort the lootbox items by weight
		// Highest weight first
		let lootboxItems = lootbox.items.sort((a, b) => {
			return b.weight - a.weight;
		});
		// Loop through the items in the lootbox
		lootboxItems.forEach((item) => {
			// Get the item as an ItemStackJS object
			let ItemStack = global.getItemStack(item.item);
			// Push to the outputs
			outputs.push(ItemStack);
			outputWeights.push(calculateRarityPercentage(item.weight, lootbox));
		});

		event.custom("cosmic_contraptions:lootbox_results").add({
			name: global.formatName(lootbox.name),
			input: `cosmic_contraptions:lootbox_${key}`,
			outputs: outputs,
			outputWeights: outputWeights,
			rolls: lootbox.rolls,
		});
	}
});
