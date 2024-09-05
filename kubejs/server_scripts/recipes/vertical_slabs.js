var vertical_slabs = [];

const supplementariesVerticalSlabs = ["checker", "ash_bricks", "stone_tile", "blackstone_tile"];
const createDecoSlabs = [
	"andesite_sheet",
	"brass_sheet",
	"cast_iron_sheet",
	"copper_sheet",
	"gold_sheet",
	"iron_sheet",
	"netherite_sheet",
	"zinc_sheet",
];

ServerEvents.tags("item", (event) => {
	let v_slabs = event.get("v_slab_compat:vertical_slabs").getObjectIds();
	v_slabs.forEach((slab) => {
		vertical_slabs.push(Item.of(slab));
	});
});

const createStoneTypes = [
	{ name: "andesite", mod: "create" },
	{ name: "diorite", mod: "create" },
	{ name: "granite", mod: "create" },
	{ name: "deepslate", mod: "create" },
	{ name: "tuff", mod: "create" },
	{ name: "limestone", mod: "create" },
	{ name: "scoria", mod: "create" },
	{ name: "dripstone", mod: "create" },
	{ name: "asurine", mod: "create" },
	{ name: "crimsite", mod: "create" },
	{ name: "ochrum", mod: "create" },
	{ name: "scorchia", mod: "create" },
	{ name: "veridium", mod: "create" },

	{ name: "gabbro", mod: "create_dd" },
	{ name: "weathered_limestone", mod: "create_dd" },
	{ name: "dolomite", mod: "create_dd" },
	{ name: "potassic", mod: "create_dd" },

	{ name: "bauxite", mod: "createindustry" },
];

ServerEvents.recipes((event) => {
	// Handle Quark Slabs
	event
		.findRecipes({
			type: "minecraft:crafting_shaped",
			output: /quark:.*vertical_slab/,
		})
		.forEach((recipe) => {
			let outputSlab = recipe.getOriginalRecipeResult().getId();
			let inputSlab = recipe.getOriginalRecipeIngredients();
			event.shapeless(outputSlab, inputSlab[0].getItemIds()[0].toString());
		});

	// Handle Create Deco Slabs
	event
		.findRecipes({
			type: "minecraft:crafting_shaped",
			output: /createdeco:.*sheet_slab/,
		})
		.forEach((recipe) => {
			let outputSlab = "2x " + recipe.getOriginalRecipeResult().getId() + "_vert";
			let inputBlock = recipe.getOriginalRecipeIngredients();
			event.stonecutting(outputSlab, inputBlock[0].getItemIds()[0].toString());
		});
	createDecoSlabs.forEach((slab) => {
		event.shapeless(`createdeco:${slab}_slab_vert`, `createdeco:${slab}_slab`);
		event.shaped(`3x createdeco:${slab}_slab_vert`, [" S ", " S ", " S "], {
			S: `createdeco:${slab}_slab`,
		});
	});

	// Handle v_slab_compat
	vertical_slabs.forEach((item) => {
		event.shapeless(
			item,
			item.getId().replace("v_slab_compat:", "").replace("_vertical_slab", "_slab").replace("/", ":")
		);
	});

	// Handle Supplementaries
	supplementariesVerticalSlabs.forEach((slab) => {
		event.shapeless(`supplementaries:${slab}_vertical_slab`, `supplementaries:${slab}_slab`);
	});

	// Slabs directly from base ingredient
	createStoneTypes.forEach((stone) => {
		let regexRecipeId = new RegExp(`v_slab_compat:${stone.mod}/.*${stone.name}.*`);
		let regexItemId = new RegExp(`${stone.mod}:.*${stone.name}.*`);
		event.replaceInput(
			{ type: "minecraft:stonecutting", id: regexRecipeId },
			regexItemId,
			`#${stone.mod}:stone_types/${stone.name}`
		);
	});
});
