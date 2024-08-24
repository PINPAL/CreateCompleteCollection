ServerEvents.recipes((event) => {
	// Cooking Pot
	event.shaped("farmersdelight:cooking_pot", ["B B", "IWI", "III"], {
		B: "minecraft:brick",
		W: "minecraft:water_bucket",
		I: "#forge:ingots/iron",
	});
});

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

function roundToNearestHalf(number) {
	return Math.round(number * 2) / 2;
}

function setHunchVisiblity(isVisible, event) {
	if (isVisible) {
		event.player.paint({
			"*": {
				visible: true,
			},
		});
	} else {
		event.player.paint({
			"*": {
				visible: false,
			},
		});
	}
}

PlayerEvents.loggedIn((event) => {
	// Draw Hunches (empty)
	event.player.paint({
		proteinOne: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 15,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		proteinTwo: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 23,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		proteinThree: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 31,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		carbsOne: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 43,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		carbsTwo: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 51,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		carbsThree: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 59,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		veggiesOne: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 71,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		veggiesTwo: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 79,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		veggiesThree: {
			type: "text",
			text: "",
			draw: "ingame",
			scale: 1.0,
			x: 87,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
	});
});

var hunchYPos = -37;
var hunchSkakePos = 1;

PlayerEvents.tick((event) => {
	// Hide Hunches IF:
	// the player is under water
	// the player is in creative mode or spectator mode
	// the player is riding a horse
	if (
		event.player.isUnderWater() ||
		event.player.isCreative() ||
		event.player.isSpectator() ||
		event.player.isPassenger()
	) {
		setHunchVisiblity(false, event);
		return;
	} else {
		setHunchVisiblity(true, event);
	}
	// Fetch Nutrients
	let nutrients = nutritionAPI.getWorldNutritionData().getNutritionalBalancePlayer(event.player).getPlayerNutrients();
	let nutrientVeggies = "";
	let nutrientProteins = "";
	let nutrientCarbs = "";
	nutrients.forEach((nutrient) => {
		let nutrientName = nutrient.getNutrientName();
		let nutrientValue = nutrient.getValue();
		// Update Variables to store the nutrient values
		// as a number between 0 and 3, representing the number of hunches
		// if the nutrient value is less than 10 (malnourished), it will be considered as 0
		switch (nutrientName) {
			case "vegetables":
				nutrientVeggies = nutrientValue < 10 ? 0 : roundToNearestHalf(nutrientValue / 33.333);
				break;
			case "proteins":
				nutrientProteins = nutrientValue < 10 ? 0 : roundToNearestHalf(nutrientValue / 33.333);
				break;
			case "carbs":
				nutrientCarbs = nutrientValue < 10 ? 0 : roundToNearestHalf(nutrientValue / 33.333);
				break;
		}
	});
	// Update Hunches
	event.player.paint({
		proteinOne: {
			text:
				nutrientProteins >= 1
					? nutrientHunchs.proteins.filled
					: nutrientProteins >= 0.5
					? nutrientHunchs.proteins.half
					: nutrientHunchs.proteins.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 1 ? (nutrientProteins < 0.5 ? hunchYPos : -37) : -37,
		},
		proteinTwo: {
			text:
				nutrientProteins >= 2
					? nutrientHunchs.proteins.filled
					: nutrientProteins >= 1.5
					? nutrientHunchs.proteins.half
					: nutrientHunchs.proteins.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 2 ? (nutrientProteins < 0.5 ? hunchYPos : -37) : -37,
		},
		proteinThree: {
			text:
				nutrientProteins >= 3
					? nutrientHunchs.proteins.filled
					: nutrientProteins >= 2.5
					? nutrientHunchs.proteins.half
					: nutrientHunchs.proteins.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 3 ? (nutrientProteins < 0.5 ? hunchYPos : -37) : -37,
		},
		carbsOne: {
			text:
				nutrientCarbs >= 1
					? nutrientHunchs.carbs.filled
					: nutrientCarbs >= 0.5
					? nutrientHunchs.carbs.half
					: nutrientHunchs.carbs.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 1 ? (nutrientCarbs < 0.5 ? hunchYPos : -37) : -37,
		},
		carbsTwo: {
			text:
				nutrientCarbs >= 2
					? nutrientHunchs.carbs.filled
					: nutrientCarbs >= 1.5
					? nutrientHunchs.carbs.half
					: nutrientHunchs.carbs.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 2 ? (nutrientCarbs < 0.5 ? hunchYPos : -37) : -37,
		},
		carbsThree: {
			text:
				nutrientCarbs >= 3
					? nutrientHunchs.carbs.filled
					: nutrientCarbs >= 2.5
					? nutrientHunchs.carbs.half
					: nutrientHunchs.carbs.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 3 ? (nutrientCarbs < 0.5 ? hunchYPos : -37) : -37,
		},
		veggiesOne: {
			text:
				nutrientVeggies >= 1
					? nutrientHunchs.veggies.filled
					: nutrientVeggies >= 0.5
					? nutrientHunchs.veggies.half
					: nutrientHunchs.veggies.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 1 ? (nutrientVeggies < 0.5 ? hunchYPos : -37) : -37,
		},
		veggiesTwo: {
			text:
				nutrientVeggies >= 2
					? nutrientHunchs.veggies.filled
					: nutrientVeggies >= 1.5
					? nutrientHunchs.veggies.half
					: nutrientHunchs.veggies.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 2 ? (nutrientVeggies < 0.5 ? hunchYPos : -37) : -37,
		},
		veggiesThree: {
			text:
				nutrientVeggies >= 3
					? nutrientHunchs.veggies.filled
					: nutrientVeggies >= 2.5
					? nutrientHunchs.veggies.half
					: nutrientHunchs.veggies.outline,
			// Shake hunch if the player is malnourished
			y: hunchSkakePos == 3 ? (nutrientVeggies < 0.5 ? hunchYPos : -37) : -37,
		},
	});

	// Update Hunch Y Position
	if (hunchYPos == -37) {
		hunchYPos = -38;
	} else {
		hunchYPos = -37;
	}
	if (hunchSkakePos == 3) {
		hunchSkakePos = 1;
	} else {
		hunchSkakePos++;
	}
});
