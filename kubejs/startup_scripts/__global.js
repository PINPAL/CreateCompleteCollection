// priority: 2

/**
 * Returns a formatted string with spaces instead of underscores and capitalizes the first letter of each word.
 *
 * @param {String} An input string
 * @returns {String} The formatted string.
 */
let formatName = (name) => {
	return name.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};
global.formatName = formatName;

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
