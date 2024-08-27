const nutritionAPI = Java.loadClass("com.dannyandson.nutritionalbalance.nutrients.PlayerNutritionData");

const nutrientHunchs = {
	veggies: {
		outline: "\uEff5",
		filled: "\uEff6",
		half: "\uEff7",
	},
	proteins: {
		outline: "\uEff3",
		filled: "\uEff4",
		half: "\uEff8",
	},
	carbs: {
		outline: "\uEff1",
		filled: "\uEff2",
		half: "\uEff9",
	},
};

/**
 * Used to turn a number from 0 to 100 into a number between 0 and 3 (to nearest 0.5)
 * Can be used to convert internal nutrient values to hunches
 *
 * @param {number} number number between 0 and 100
 * @returns {number} number between 0 and 3 (to nearest 0.5)
 */
function convertValueToHunch(number) {
	// Define ranges for the hunch levels
	if (number >= 83.333) return 3.0;
	if (number >= 66.666) return 2.5;
	if (number >= 50) return 2.0;
	if (number >= 33.333) return 1.5;
	if (number >= 16.666) return 1.0;
	if (number > 10) return 0.5;
	// if the nutrient value is less than 10 (malnourished), it will be considered as 0
	return 0;
}

/**
 * Used to create a hunch object for updating the rendering
 *
 * @param {boolean} isVisible     if hunche should be visible
 * @param {number}  nutrientValue number between (0-3) to 0.5 accuracy representing the number of hunches
 * @param {string}  hunchType     type of hunch (proteins, carbs, veggies)
 * @param {number}  shakePos      Y position of a shaking hunch
 * @param {number}  hunchIndex    index of the hunch (1, 2, 3)
 * @param {number}  shakeIndex    index of the currently shaking hunch
 *
 * @returns {object} hunch object
 */
function generateUpdatedHunch(isVisible, nutrientValue, hunchType, shakePos, hunchIndex, shakeIndex) {
	// Get the correct hunch based on the nutrient value and hunch index, eg:
	// If nutrient value is 1.5, and we are index 1, we should return a filled hunch
	// If nutrient value is 1.5, and we are index 2, we should return a half hunch
	// if nutrient value is 1.5, and we are index 3, we should return a empty hunch
	let textString = "";
	if (nutrientValue >= hunchIndex) {
		textString = nutrientHunchs[hunchType].filled;
	} else if (nutrientValue + 0.5 == hunchIndex) {
		textString = nutrientHunchs[hunchType].half;
	} else {
		textString = nutrientHunchs[hunchType].outline;
	}
	// Return the hunch object
	return {
		text: textString,
		// Shake the hunch if the player is malnourished
		y: hunchIndex == shakeIndex ? (nutrientValue < 0.5 ? shakePos : -37) : -37,
		// Set the hunch to be visible or not
		visible: isVisible,
	};
}

/**
 * Used to create a hunch object for initializing the rendering
 *
 * Expected X Positions: 15, 23, 31, 43, 51, 59, 71, 79, 87
 * Every 3 Hunches are grouped together with an 8px gap
 * Every group of hunches has a 12px gap between them
 *
 * @param {number} index index of the hunch (1-9)
 * @returns {object} hunch object
 */
function generateInitialHunch(index) {
	const baseX = 15; // Starting x position
	const groupSpacing = 4; // Additional Spacing between groups of 3 hunches
	const itemSpacing = 8; // Spacing between individual hunches in a group

	// Calculate the x position based on the index
	const groupIndex = Math.floor((index - 1) / 3);
	const withinGroupIndex = (index - 1) % 3;
	const xPosition = baseX + groupIndex * (3 * itemSpacing + groupSpacing) + withinGroupIndex * itemSpacing;

	console.log("Hunch " + index + " x position: " + xPosition);

	return {
		type: "text",
		text: "",
		draw: "ingame",
		scale: 1.0,
		x: xPosition,
		y: -37,
		alignX: "center",
		alignY: "bottom",
	};
}

/**
 * Used to draw and update the hunches on the player
 *
 * @param {boolean} isVisible if hunches should be visible
 * @param {number}  proteins   number between (0-3) to 0.5 accuracy representing the number of protein hunches
 * @param {number}  carbs     number between (0-3) to 0.5 accuracy representing the number of carbs hunches
 * @param {number}  veggies   number between (0-3) to 0.5 accuracy representing the number of veggies hunches
 * @param {number}  yPos      position of the hunches
 * @param {event}   event     event that triggered the function
 *
 * @returns {void} Draws the hunches on the player
 */
function updateHunches(isVisible, proteins, carbs, veggies, yPos, shakeIndex, event) {
	// Update Hunches
	event.player.paint({
		proteinOne: generateUpdatedHunch(isVisible, proteins, "proteins", yPos, 1, shakeIndex),
		proteinTwo: generateUpdatedHunch(isVisible, proteins, "proteins", yPos, 2, shakeIndex),
		proteinThree: generateUpdatedHunch(isVisible, proteins, "proteins", yPos, 3, shakeIndex),
		carbsOne: generateUpdatedHunch(isVisible, carbs, "carbs", yPos, 1, shakeIndex),
		carbsTwo: generateUpdatedHunch(isVisible, carbs, "carbs", yPos, 2, shakeIndex),
		carbsThree: generateUpdatedHunch(isVisible, carbs, "carbs", yPos, 3, shakeIndex),
		veggiesOne: generateUpdatedHunch(isVisible, veggies, "veggies", yPos, 1, shakeIndex),
		veggiesTwo: generateUpdatedHunch(isVisible, veggies, "veggies", yPos, 2, shakeIndex),
		veggiesThree: generateUpdatedHunch(isVisible, veggies, "veggies", yPos, 3, shakeIndex),
	});
}

/**
 * Get the internal nutritional data of the player
 * and return the number of hunches for each nutrient
 *
 * @param {event.player} player player object
 *
 * @returns {object.protein} number between (0-3) to 0.5 accuracy representing the number of protein hunches
 * @returns {object.carbs} number between (0-3) to 0.5 accuracy representing the number of carbs hunches
 * @returns {object.veggies} number between (0-3) to 0.5 accuracy representing the number of veggies hunches
 */
function fetchNutrients(player) {
	// Fetch Internal Nutrients as an array of numbers between 0 and 100
	let nutrients = nutritionAPI.getWorldNutritionData().getNutritionalBalancePlayer(player).getPlayerNutrients();
	// Create a new object to store the number of hunches for each nutrient
	let nutrientsObject = {
		protein: 0,
		carbs: 0,
		veggies: 0,
	};
	nutrients.forEach((nutrient) => {
		let nutrientName = nutrient.getNutrientName();
		let nutrientValue = nutrient.getValue();
		switch (nutrientName) {
			case "vegetables":
				nutrientsObject.veggies = convertValueToHunch(nutrientValue);
				break;
			case "proteins":
				nutrientsObject.protein = convertValueToHunch(nutrientValue);
				break;
			case "carbs":
				nutrientsObject.carbs = convertValueToHunch(nutrientValue);
				break;
		}
	});
	return nutrientsObject;
}

// Initial Hunch Drawing
PlayerEvents.loggedIn((event) => {
	const hunches = {
		proteinOne: generateInitialHunch(1),
		proteinTwo: generateInitialHunch(2),
		proteinThree: generateInitialHunch(3),
		carbsOne: generateInitialHunch(4),
		carbsTwo: generateInitialHunch(5),
		carbsThree: generateInitialHunch(6),
		veggiesOne: generateInitialHunch(7),
		veggiesTwo: generateInitialHunch(8),
		veggiesThree: generateInitialHunch(9),
	};

	event.player.paint(hunches);
});

var shakeYPos = -37;
var shakeIndex = 1;

PlayerEvents.tick((event) => {
	// Hide Hunches IF:
	// the player is under water
	// the player is in creative mode or spectator mode
	// the player is riding a horse
	let isHunchesVisible = true;
	if (
		event.player.isUnderWater() ||
		event.player.isCreative() ||
		event.player.isSpectator() ||
		event.player.isPassenger()
	) {
		isHunchesVisible = false;
	}

	// Fetch Nutrients
	let playerNutrients = fetchNutrients(event.player);
	// Update Hunches
	updateHunches(
		isHunchesVisible,
		playerNutrients.protein,
		playerNutrients.carbs,
		playerNutrients.veggies,
		shakeYPos,
		shakeIndex,
		event
	);

	// Toggle Shake Y Position
	shakeYPos = shakeYPos == -37 ? -38 : -37;
	// Reset Shake Index at 3
	if (shakeIndex == 3) {
		shakeIndex = 1;
		// Otherwise Increment Shake Index
	} else {
		shakeIndex++;
	}
});
