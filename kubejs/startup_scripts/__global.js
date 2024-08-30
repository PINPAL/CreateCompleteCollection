// priority: 2

/**
 *  Function to replace _ with space and capitalise first letter of each word.
 *
 * @param {String} name
 * @returns {String} A formatted string.
 */
function formatName(name) {
	return name.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * Returns a ItemStackJS object from an item ID string or an ItemStackJS object.
 *
 * @param {String | Object} item The item to convert.
 * @returns {ItemStackJS} The ItemStackJS object.
 */
let getItemStack = (item) => {
	if (typeof item === "string") {
		return Item.of(item);
	}
	if (typeof item === "object") {
		return item;
	} else {
		console.log("[CREATE-CC] getItemStack: Invalid item type.");
		return Item.of("minecraft:air");
	}
};
global.getItemStack = getItemStack;

Platform.mods.kubejs.name = "Create Complete Collection";
Platform.mods.refinedstorage.name = "Digital Storage";
Platform.mods.refinedstorageaddons.name = "Digital Storage";
