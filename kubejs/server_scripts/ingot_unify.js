// priority: -999

const types = [
	{ name: "ingot", alternateNames: ["alloy"] },
	{ name: "nugget" },
	{ name: "sheet", alternateNames: ["plate"] },
	{ name: "block" },
];

const invalidRecipeIDs = [
	"create:blasting/ostrum_ingot_from_crushed",
	"design_decor:stonecutting/metals/iron/bolt",
	"design_decor:stonecutting/metals/iron/screw",
	"create_things_and_misc:netheriteportablewithlecraft",
	"create_things_and_misc:copper_scaffolding_craft",
	"destroy:filling/oxidation/copper_block",
	"tfmg:mechanical_crafting/pumpjack_hammer_holder",
];

// Super duper hacky way to replace all modded ingots with unified ingots
// Warning: increases the reload/load time for recipes by a LOT
// FIXME: don't use this EVER? (or at least not in production hopefully??)
// TODO: find a better way to do this

// Cache regex patterns
const cachedPatterns = [];
global.unifiedIngots.forEach((material) => {
	types.forEach((type) => {
		let searchTerms = [type.name];
		if (type.hasOwnProperty("alternateNames")) {
			type.alternateNames.forEach((name) => {
				searchTerms.push(name);
			});
		}
		// edge case for golden sheets
		let materialName = material.name;
		if (material.name === "gold" && type.name === "sheet") {
			materialName = "golden";
		}
		// loop through all search terms
		searchTerms.forEach((searchTerm) => {
			let originalID = `${materialName}_${searchTerm}`;
			let unifiedID = `cosmic_contraptions:${material.name}_${type.name}`;
			cachedPatterns.push({
				regex: new RegExp(`"([^"]*):${originalID}"`, "g"),
				unifiedID: unifiedID,
			});
		});
	});
});
// Handle tfmg's weird heavy_plate -> steel_plate conversion
cachedPatterns.push({
	regex: new RegExp(`"tfmg:heavy_plate"`),
	unifiedID: "cosmic_contraptions:steel_sheet",
});

ServerEvents.recipes((event) => {
	// Remove all recipes that are invalid
	invalidRecipeIDs.forEach((recipeID) => {
		event.remove({ id: recipeID });
	});

	// Fetch every recipe type in the registry
	let recipeTypes = event.getRecipes();
	// Check if the recipe is a removed type
	global.removedRecipeTypes.forEach((type) => {
		recipeTypes.forEach((recipeType) => {
			// Remove all recipes of the removed type
			if (recipeType === type) {
				event.remove({ type: type });
			}
		});
	});
	// Fetch every recipe type in the registry
	// (again because the previous loop removes the recipes)
	recipeTypes = event.getRecipes();
	let totalRecipeTypes = Object.keys(recipeTypes).length;
	// Loop through every recipe type in the registry
	let recipeTypeIndex = 0;
	recipeTypes.forEach((recipeType) => {
		let recipes = event.findRecipes({ type: recipeType });

		recipes.forEach((recipe) => {
			// define index for multiple recipes with the same ID
			let index = 0;
			// get the recipe ID and JSON string
			let recipeId = recipe.getId();
			let recipeJSONString = recipe.json.toString();

			// create a new JSON string to replace the old one
			let newRecipeJSONString = recipeJSONString;

			// define a boolean to check if the recipe needs replacing
			let needsReplacing = false;

			// loop through all cached patterns
			cachedPatterns.forEach((pattern) => {
				if (pattern.regex.test(newRecipeJSONString)) {
					let matches = newRecipeJSONString.match(pattern.regex);

					// Replace all instances of the modded ingot with the unified ingot
					matches.forEach((match) => {
						// Use split and join to replace all instances of the modded ingot with the unified ingot
						// This is because the replace function doesn't work here?
						newRecipeJSONString = newRecipeJSONString.split(match).join(`"${pattern.unifiedID}"`);
					});

					needsReplacing = true;
				}
			});

			// once we have replaced all the patterns, add the new recipe
			if (needsReplacing) {
				// remove the old recipe
				event.remove({ id: recipeId });
				// create a new recipe ID from the old one
				let newRecipeID = `cosmic_contraptions:unified/${recipeId.replace(":", "/")}`;
				// if there are multiple recipes with the same ID, add an index to the ID
				if (index > 1) {
					newRecipeID += `/${index}`;
				}
				// add the new recipe
				event.custom(JSON.parse(newRecipeJSONString)).id(newRecipeID);
				// increment the index
				index++;
			}
		});

		// Logging (for tracking progress)
		recipeTypeIndex++;
		if (recipeTypeIndex % 50 === 0) {
			console.log(
				"Finished replacing recipes: " +
					recipeTypeIndex +
					"/" +
					totalRecipeTypes +
					" for recipe type: " +
					recipeType
			);
		}
	});
});

// Handle cast_iron -> industrial_iron conversion
ServerEvents.recipes((event) => {
	event.replaceInput(
		{ input: "#forge:ingots/cast_iron" },
		"#forge:ingots/cast_iron",
		"#forge:ingots/industrial_iron"
	);
});
ServerEvents.tags("items", (event) => {
	event.add("forge:ingots/cast_iron", "cosmic_contraptions:industrial_iron_ingot");
	event.add("forge:plates/cast_iron", "cosmic_contraptions:industrial_iron_sheet");
	event.add("forge:nuggets/cast_iron", "cosmic_contraptions:industrial_iron_nugget");
	event.add("forge:storage_blocks/cast_iron", "cosmic_contraptions:industrial_iron_block");
});

global.unifiedIngots.forEach((ingot) => {
	ServerEvents.tags("item", (event) => {
		// Add tags for all unified ingots
		event.add("forge:ingots/" + ingot.name, "cosmic_contraptions:" + ingot.name + "_ingot");
		event.add("forge:nuggets/" + ingot.name, "cosmic_contraptions:" + ingot.name + "_nugget");
		event.add("forge:plates/" + ingot.name, "cosmic_contraptions:" + ingot.name + "_sheet");
		event.add("forge:storage_blocks/" + ingot.name, "cosmic_contraptions:" + ingot.name + "_block");

		ingot.modsUsing.forEach((mod) => {
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_alloy");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_ingot");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_nugget");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_sheet");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "en_sheet");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_plate");
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_block");
		});
	});
	ServerEvents.tags("block", (event) => {
		// Remove tags for all modded blocks
		ingot.modsUsing.forEach((mod) => {
			event.removeAllTagsFrom(mod + ":" + ingot.name + "_block");
		});
	});
});
