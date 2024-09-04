const colors = [
	{
		color: "white",
		ingredients: ["minecraft:bone_meal", "minecraft:lily_of_the_valley"],
	},
	{
		color: "orange",
		ingredients: ["minecraft:orange_tulip"],
	},
	{
		color: "magenta",
		ingredients: ["minecraft:allium", "minecraft:lilac"],
	},
	{
		color: "light_blue",
		ingredients: ["minecraft:blue_orchid"],
	},
	{
		color: "yellow",
		ingredients: ["minecraft:dandelion", "minecraft:sunflower"],
	},
	{
		color: "lime",
		ingredients: [],
	},
	{
		color: "pink",
		ingredients: ["minecraft:pink_tulip", "minecraft:peony"],
	},
	{
		color: "gray",
		ingredients: [],
	},
	{
		color: "light_gray",
		ingredients: ["minecraft:oxeye_daisy", "minecraft:azure_bluet", "minecraft:white_tulip"],
	},
	{
		color: "cyan",
		ingredients: [],
	},
	{
		color: "purple",
		ingredients: [],
	},
	{
		color: "blue",
		ingredients: ["minecraft:cornflower", "minecraft:lapis_lazuli", "kubejs:cornflower_bush_item"],
	},
	{
		color: "brown",
		ingredients: ["minecraft:cocoa_beans"],
	},
	{
		color: "green",
		ingredients: ["minecraft:cactus"],
	},
	{
		color: "red",
		ingredients: ["minecraft:poppy", "minecraft:beetroot", "minecraft:rose_bush", "minecraft:red_tulip"],
	},
	{
		color: "black",
		ingredients: ["minecraft:ink_sac", "minecraft:wither_rose", "minecraft:charcoal"],
	},
];

const items = [
	{
		name: "minecraft:$$_dye",
		input: "create_paper_line:saw_dust",
		shouldRemoveOriginal: true,
		tag: "forge:dyes",
	},
	{
		name: "minecraft:$$_concrete",
		input: "createindustry:concrete",
		shouldRemoveOriginal: true,
		tag: "kubejs:colored_concrete",
	},
	{
		name: "minecraft:$$_concrete_powder",
		input: "minecraft:white_concrete_powder",
		shouldRemoveOriginal: true,
		tag: "forge:concrete_powders",
	},
	{
		name: "minecraft:$$_stained_glass",
		input: "minecraft:glass",
		shouldRemoveOriginal: true,
		tag: "forge:stained_glass",
	},
	{
		name: "minecraft:$$_stained_glass_pane",
		input: "minecraft:glass_pane",
		shouldRemoveOriginal: true,
		shapedOutputMultiplier: 16,
		shapedRecipePattern: ["AAA", "AAA", "   "],
		shapedInput: "minecraft:$$_stained_glass",
		tag: "forge:stained_glass_panes",
	},
	{
		name: "quark:$$_framed_glass",
		input: "quark:framed_glass",
		shouldRemoveOriginal: true,
		tag: "quark:framed_glasses",
	},
	{
		name: "quark:$$_framed_glass_pane",
		input: "quark:framed_glass_pane",
		shouldRemoveOriginal: true,
		shapedOutputMultiplier: 16,
		shapedRecipePattern: ["AAA", "AAA", "   "],
		shapedInput: "quark:$$_framed_glass",
		tag: "quark:framed_glass_panes",
	},
	{
		name: "create:$$_toolbox",
		input: "create:brown_toolbox",
		shouldRemoveOriginal: true,
		tag: "create:toolboxes",
	},
	{
		name: "farmersdelight:$$_canvas_sign",
		input: "farmersdelight:canvas_sign",
		shouldRemoveOriginal: true,
		tag: "farmersdelight:canvas_signs",
	},
	{
		name: "minecraft:$$_wool",
		input: "minecraft:white_wool",
		shouldRemoveOriginal: true,
		tag: "minecraft:wool",
	},
	{
		name: "minecraft:$$_carpet",
		input: "minecraft:white_carpet",
		shouldRemoveOriginal: true,
		shapedOutputMultiplier: 3,
		shapedRecipePattern: ["  ", "AA"],
		shapedInput: "minecraft:$$_wool",
		tag: "minecraft:wool_carpets",
	},
	{
		name: "minecraft:$$_terracotta",
		input: "minecraft:terracotta",
		shouldRemoveOriginal: true,
		tag: "minecraft:terracotta",
	},
	{
		name: "minecraft:$$_bed",
		input: "minecraft:white_bed",
		shouldRemoveOriginal: false,
		tag: "minecraft:beds",
	},
	{
		name: "minecraft:$$_shulker_box",
		input: "minecraft:shulker_box",
		shouldRemoveOriginal: false,
		tag: "minecraft:shulker_boxes",
	},
	{
		name: "minecraft:$$_candle",
		input: "minecraft:candle",
		shouldRemoveOriginal: true,
		tag: "minecraft:candles",
	},
	{
		name: "supplementaries:candle_holder_$$",
		input: "supplementaries:candle_holder",
		shouldRemoveOriginal: true,
		tag: "supplementaries:candle_holders",
	},
	{
		name: "quark:$$_rune",
		input: "quark:blank_rune",
		shouldRemoveOriginal: true,
		tag: "quark:runes",
	},
	{
		name: "minecraft:$$_banner",
		input: "minecraft:white_banner",
		shouldRemoveOriginal: false,
		tag: "minecraft:banners",
	},
	{
		name: "create:$$_valve_handle",
		input: "create:copper_valve_handle",
		shouldRemoveOriginal: true,
		tag: "create:valve_handles",
	},
	{
		name: "createdeco:$$_placard",
		input: "create:placard",
		shouldRemoveOriginal: true,
		tag: "createdeco:placards",
	},
	{
		name: "create:$$_seat",
		input: "create:white_seat",
		shouldRemoveOriginal: true,
		tag: "create:seats",
	},
	{
		name: "comforts:sleeping_bag_$$",
		input: "comforts:sleeping_bag_white",
		shouldRemoveOriginal: true,
		tag: "comforts:sleeping_bags",
	},
	{
		name: "comforts:hammock_$$",
		input: "comforts:hammock_white",
		shouldRemoveOriginal: true,
		tag: "comforts:hammocks",
	},
	{
		name: "supplementaries:flag_$$",
		input: "supplementaries:flag_white",
		shouldRemoveOriginal: false,
		tag: "supplementaries:flags",
	},
	{
		name: "quark:$$_stool",
		input: "quark:white_stool",
		shouldRemoveOriginal: true,
		tag: "quark:stools",
	},
];

function createMixingRecipe(
	event,
	output,
	input,
	color,
	cost,
	shouldRemoveOriginal,
	shapedRecipePattern,
	shapedInput,
	shapedOutputMultiplier
) {
	// Skip recipe if input is also the same color as input
	if (input.includes(color)) return;
	// Remove the original item recipe
	if (shouldRemoveOriginal) {
		event.remove({ output: output });
	}
	// Create mixing recipe for the item
	event.recipes.create
		.mixing([output], [input, Fluid.of("kubejs:" + color + "_dye_fluid", cost)])
		.id("kubejs:colored_items/" + color + "/" + output.split(":")[1]);
	// Do shaped recipe for the item
	if (shapedRecipePattern != null) {
		event
			.shaped(Item.of(output, shapedOutputMultiplier), shapedRecipePattern, {
				A: shapedInput,
			})
			.id("kubejs:colored_items/" + color + "/" + output.split(":")[1] + "_crafting");
	}
}

ServerEvents.recipes((event) => {
	colors.forEach((colorObject) => {
		items.forEach((item) => {
			// Recipes for items that have a shaped recipe
			if (item.hasOwnProperty("shapedRecipePattern")) {
				createMixingRecipe(
					event,
					item.name.replace("$$", colorObject.color),
					item.input,
					colorObject.color,
					125,
					item.shouldRemoveOriginal,
					item.shapedRecipePattern,
					item.shapedInput.replace("$$", colorObject.color),
					item.shapedOutputMultiplier
				);
			} else {
				// Recipes for items that don't have a shaped recipe
				createMixingRecipe(
					event,
					item.name.replace("$$", colorObject.color),
					item.input,
					colorObject.color,
					50,
					item.shouldRemoveOriginal,
					null,
					null,
					1
				);
			}
		});

		// Dye Fluid
		if (colorObject.ingredients.length > 0) {
			event.recipes.create
				.mixing(
					[Fluid.of("kubejs:" + colorObject.color + "_dye_fluid", 1000)],
					["#kubejs:makes_" + colorObject.color + "_dye", Fluid.of("water", 1000)]
				)
				.id("kubejs:colored_items/" + colorObject.color + "/dye_fluid");
		}

		// Concrete Powder Crushing
		event.recipes.create
			.crushing(
				Item.of("minecraft:" + colorObject.color + "_concrete_powder", 1),
				"minecraft:" + colorObject.color + "_concrete"
			)
			.id("kubejs:colored_items/" + colorObject.color + "/concrete_powder_crushing");
	});

	// Create recipes to rinse the color off
	items.forEach((item) => {
		event.recipes.create
			.splashing(item.input, ["#" + item.tag])
			.id("kubejs:colored_items/rinsing/" + item.tag.replace(":", "_"));
	});
});

// Color Handler Tags
ServerEvents.tags("item", (event) => {
	colors.forEach((colorObject) => {
		colorObject.ingredients.forEach((ingredient) => {
			event.add("kubejs:makes_" + colorObject.color + "_dye", ingredient);
		});
	});
});
