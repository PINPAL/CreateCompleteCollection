const colorOrange = 0xc7954b;
const colorYellow = 0xeeda78;

const itemsToTooltip = [
	{
		item: "create_things_and_misc:radar",
		summary: ["Makes nearby $Entities$ glow through walls."],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: ["$Activates$ radar for $3 seconds$", "and triggers $30 second$ cooldown."],
			},
		],
	},
	{
		item: "create_things_and_misc:slime_cake",
		summary: ["Allows you to $Grow$ small Slimes."],
		controls: [
			{
				control: "R-Clicked on a Slime",
				requiresHold: false,
				text: ["Makes the Slime $Grow$ to the next size."],
			},
		],
	},
	{
		item: "create_things_and_misc:neon_tube",
		summary: ["Allows you to explore caves easily."],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: ["$Throws$ a $Neon Tube$ where you are looking.", "Consumes $1 Durability$ per throw."],
			},
		],
	},
	{
		item: "create_things_and_misc:mending_rune",
		summary: ["$Repair$ mending items using your $XP$."],
		controls: [
			{
				control: "in Main Hand",
				requiresHold: false,
				text: [
					"$Consumes$ XP from your $Experience Bar$",
					"to $Repair$ items in your $Off Hand$.",
					"or in your $Armor Slots$.",
				],
			},
		],
	},
	{
		item: "create_things_and_misc:magnifying_glass",
		summary: ["Allows you to read $Cards$ and $Tickets$."],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: ["$Prints$ the information into the chat.", "Requires a $Card$ or $Ticket$ in your $Off Hand$."],
			},
		],
	},
	{
		item: "create_things_and_misc:empty_card",
		summary: [
			"A $reusable$ key for the $Card Reader$.",
			"",
			"Put into a $Card Inscriber$ to $Write$",
			"your security code onto the card.",
		],
	},
	{
		item: "create_things_and_misc:empty_ticket",
		summary: [
			"A $one time use$ key for the $Card Reader$.",
			"",
			"Put into a $Card Inscriber$ to $Write$",
			"your security code onto the card.",
		],
	},
	{
		item: "create_things_and_misc:card_press",
		summary: [
			"Allows you to $Write$ to Cards and Tickets.",
			"",
			"Put a $Ticket$ or $Card$, along a $Nametag$ into",
			"the interface to $Write$ the security code.",
			"",
			"Cards $can't be reproduced$ by other players.",
		],
	},
	{
		item: "create_things_and_misc:card_reader",
		summary: ["Allows you to read $Cards$ and $Tickets$."],
		controls: [
			{
				control: "R-Clicked with Card",
				requiresHold: false,
				text: ["If $Card$ matches the $Card Reader$'s code,", "will $output$ a $Redstone Signal$."],
			},
		],
	},
	{
		item: "create_things_and_misc:sticky_launcher",
		summary: ["Jump like a $rabbit$!"],
		controls: [
			{
				control: "Jumped On",
				requiresHold: false,
				text: ["Launches you in the air like a $Slime Block$."],
			},
		],
	},
	{
		item: "create_things_and_misc:brass_sticky_launcher",
		summary: ["Jump like a $super rabbit$!"],
		controls: [
			{
				control: "Jumped On",
				requiresHold: false,
				text: [
					"Launches you in the air like a $Slime Block$.",
					"Much higher than the $Copper Sticky Launcher$.",
				],
			},
		],
	},
	{
		item: "create_things_and_misc:sticky_boots_boots",
		summary: ["Jump like a $rabbit$!"],
		controls: [
			{
				control: "Crouch then Jump",
				requiresHold: true,
				text: ["To $Jump$ much higher than normal."],
			},
		],
	},
	{
		item: "create_things_and_misc:sprinkler",
		summary: ["$Bonemeal$ your crops automatically."],
		controls: [
			{
				control: "Provided Dilluted Bonemeal",
				requiresHold: false,
				text: [
					"Every $5 Seconds$ it will consume",
					"$1000mb$ of $Dilluted Bonemeal$ and",
					"advance crop growth by $one stage$ in",
					"a $5x5$ area centered on itself.",
				],
			},
		],
	},
	{
		item: "storagedrawers:drawer_key",
		summary: ["$Locks$ your drawer."],
		controls: [
			{
				control: "R-Clicked on Drawer",
				requiresHold: false,
				text: [
					"Toggles the $Lock$ on the $Drawer$.",
					"which prevents any other items types",
					"from being put into the $Drawer$.",
				],
			},
			{
				control: "in Off Hand",
				requiresHold: false,
				text: ["$Locks$ drawers when you $place$ them."],
			},
		],
	},
	{
		item: "storagedrawers:quantify_key",
		summary: ["Toggles $Item Quantites$ on your drawer."],
		controls: [
			{
				control: "R-Clicked on Drawer",
				requiresHold: false,
				text: ["Toggles the $Item Quantity$ display", "on the $Drawer$."],
			},
			{
				control: "in Off Hand",
				requiresHold: false,
				text: ["$Hides$ $Item Quantity$ on new drawers", "when you $place$ them."],
			},
		],
	},
	{
		item: "storagedrawers:shroud_key",
		summary: ["Toggles $Display$ on your drawer."],
		controls: [
			{
				control: "R-Clicked on Drawer",
				requiresHold: false,
				text: [
					"Toggles the $Information$ display",
					"on the $Drawer$. This $Hides$ the",
					"$Item Quantity$ and $Icon$.",
				],
			},
			{
				control: "in Off Hand",
				requiresHold: false,
				text: ["$Hides$ $Everything$ on new drawers", "when you $place$ them."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:advanced_pickup_upgrade",
		summary: ["Makes your backpack $pickup$ items"],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:advanced_magnet_upgrade",
		summary: [
			"Makes your backpack $attract$",
			"items $from range$",
			"",
			"$Unaffected$ by Demagnetization",
			"Coils.",
		],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:advanced_feeding_upgrade",
		summary: ["Makes your backpack $feed$", "you $automatically$"],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:advanced_void_upgrade",
		summary: ["Makes your backpack $void$", "items $automatically$"],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:advanced_restock_upgrade",
		summary: ["$Restocks$ backpack from $containers$"],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
			{
				control: "Crouch & R-Clicked on Block",
				requiresHold: true,
				text: ["Extracts $items$ from the $block$", "you are looking at."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:advanced_deposit_upgrade",
		summary: ["$Deposits$ backpack items", "into $containers$"],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
			{
				control: "Crouch & R-Clicked on Block",
				requiresHold: true,
				text: ["Deposits $items$ into the $block$", "you are looking at."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:advanced_refill_upgrade",
		summary: ["Keeps $stacks$ in player inventory", "full $automatically$"],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
			{
				control: "Middle Clicked",
				requiresHold: false,
				text: ["Attemps to $retrieve items$", "from backpack if they $match$", "the block you are looking at."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:everlasting_upgrade",
		summary: ["Makes your backpack $indestructible$.", "Can't $despawn$ or $fall in the void$."],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $configuration menu$", "for the upgrade."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:crafting_upgrade",
		summary: ["Provides a $Crafting Grid$ in", "your backpack."],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $interface$ for", "crafting."],
			},
		],
	},
	{
		item: "sophisticatedbackpacks:stonecutter_upgrade",
		summary: ["Provides a $Stonecutter$ in", "your backpack."],
		controls: [
			{
				control: "Inserted into Backpack",
				requiresHold: false,
				text: ["Provides $interface$ for", "stone cutting."],
			},
		],
	},
	{
		item: "simplemagnets:advancedmagnet",
		summary: ["Can pickup $items$ and $XP$ from", "upto $11$ blocks away."],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: ["$Toggles$ Magnet on or off."],
			},
			{
				control: "Crouch & R-Click",
				requiresHold: true,
				text: [
					"Opens $configuration interface$.",
					"$range$ and $filters$ can be",
					"configured in the interface.",
				],
			},
		],
	},
	{
		item: "simplemagnets:advanced_demagnetization_coil",
		summary: ["Prevents $items$ up to $5$ blocks away", "from being attracted to $Magnets$."],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: [
					"Opens $configuration interface$,",
					"$range$ and $filters$ can be",
					"configured in the interface.",
				],
			},
		],
	},
	{
		item: "naturescompass:naturescompass",
		summary: ["Points to a selected $Biome$."],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: ["Opens $configuration interface$,", "where $biomes$ can be selected."],
			},
		],
	},
	{
		item: "explorerscompass:explorerscompass",
		summary: ["Points to a selected $Structure$."],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: ["Opens $configuration interface$,", "where $structure$ can be selected."],
			},
		],
	},
	{
		item: "minecraft:recovery_compass",
		summary: ["Points to your last $death$", "location."],
	},
	{
		item: "minecraft:compass",
		summary: ["Points to $world spawn$."],
		controls: [
			{
				control: "R-Clicked on Lodestone",
				requiresHold: false,
				text: ["Redirects the $compass$ to", "point to the $lodestone$."],
			},
		],
	},
	{
		item: "create_cc:sugar_paper",
		summary: [
			"A $cheaper$ alternative to ",
			"$wood based$ paper. Some",
			"recipes may require a",
			"$higher quality$ of paper.",
		],
	},
];

const allPaxels = [
	"easypaxellite:wood_paxel",
	"easypaxellite:stone_paxel",
	"easypaxellite:iron_paxel",
	"easypaxellite:golden_paxel",
	"easypaxellite:diamond_paxel",
	"easypaxellite:netherite_paxel",
	"easypaxellite:tempered_netherite_paxel",
];
allPaxels.forEach((paxel) => {
	itemsToTooltip.push({
		item: paxel,
		summary: [
			"$Breaks$ blocks like a $Pickaxe$.",
			"$Mines$ blocks like a $Shovel$.",
			"$Cuts$ blocks like an $Axe$.",
			"$Harvests$ blocks like a $Hoe$.",
		],
	});
});

const metalBarrelUpgrades = ["metalbarrels:wood_to_iron", "metalbarrels:iron_to_gold", "metalbarrels:gold_to_diamond"];
metalBarrelUpgrades.forEach((upgrade) => {
	itemsToTooltip.push({
		item: upgrade,
		summary: ["$Upgrades$ a $Barrel$ to the next tier."],
		controls: [
			{
				control: "R-Clicked on Barrel",
				requiresHold: false,
				text: ["$Upgrades$ the $Barrel$."],
			},
		],
	});
});

const drawerWoodTypes = [
	{ name: "oak", mod: "storagedrawers:" },
	{ name: "spruce", mod: "storagedrawers:" },
	{ name: "birch", mod: "storagedrawers:" },
	{ name: "jungle", mod: "storagedrawers:" },
	{ name: "acacia", mod: "storagedrawers:" },
	{ name: "dark_oak", mod: "storagedrawers:" },
	{ name: "crimson", mod: "storagedrawers:" },
	{ name: "warped", mod: "storagedrawers:" },
	{ name: "walnut", mod: "everycomp:sd/ecologics/" },
	{ name: "azalea", mod: "everycomp:sd/ecologics/" },
	{ name: "coconut", mod: "everycomp:sd/ecologics/" },
	{ name: "flowering_azalea", mod: "everycomp:sd/ecologics/" },
];
const drawerControls = [
	{
		control: "R-Clicked with Item",
		requiresHold: false,
		text: ["Places the $item stack$ into the $Drawer$."],
	},
	{
		control: "Double R-Clicked with Item",
		requiresHold: false,
		text: ["Places $all items of that type$ into the $Drawer$."],
	},
	{
		control: "Crouch & R-Click with Empty Hand",
		requiresHold: true,
		text: ["Opens the $Configuration Interface$"],
	},
];
drawerWoodTypes.forEach((woodType) => {
	itemsToTooltip.push({
		item: woodType.mod + woodType.name + "_full_drawers_1",
		summary: ["$One$ Item $Slot$", "Holds $32 Stacks$ per Slot."],
		controls: drawerControls,
	});
	itemsToTooltip.push({
		item: woodType.mod + woodType.name + "_full_drawers_2",
		summary: ["$Two$ Item $Slot$", "Holds $16 Stacks$ per Slot."],
		controls: drawerControls,
	});
	itemsToTooltip.push({
		item: woodType.mod + woodType.name + "_full_drawers_4",
		summary: ["$Four$ Item $Slot$", "Holds $8 Stacks$ per Slot."],
		controls: drawerControls,
	});
});

for (const key in global.lootboxes) {
	let lootbox = `create_cc:lootbox_${key}`;
	itemsToTooltip.push({
		item: lootbox,
		summary: [
			`Rolls $${global.lootboxes[key].rolls}$ Time${global.lootboxes[key].rolls > 1 ? "s" : ""}.`,
			`Contains $${global.lootboxes[key].items.length}$ Unique Items.`,
		],
		controls: [
			{
				control: "R-Clicked",
				requiresHold: false,
				text: ["$Places$ the $Lootbox$ in the world."],
			},
			{
				control: "Crouch & R-Click with Empty Hand",
				requiresHold: true,
				text: ["Opens the $Lootbox$. Throws unboxed", "$items$ onto the ground."],
			},
		],
	});
}

ItemEvents.tooltip((tooltip) => {
	itemsToTooltip.forEach((tooltipItem) => {
		// add the tooltip to the item
		tooltip.addAdvanced(tooltipItem.item, (item, advanced, text) => {
			// Hide Original Tooltip (leaving just text[0] which is the item name)
			let name = text.get(0);
			text.removeIf((e) => e != name);
			if (tooltip.shift) {
				text.add(1, [
					Text.of("Hold [").darkGray(),
					Text.of("Shift").white(),
					Text.of("] for Summary").darkGray(),
				]);
				// define line number
				let lineNumber = 2;
				if (tooltipItem.hasOwnProperty("controls")) {
					if (tooltipItem.controls.length > 1) {
						text.add(2, [
							Text.of("Hold [").darkGray(),
							Text.of("Ctrl").gray(),
							Text.of("] for Controls").darkGray(),
						]);
						lineNumber++;
					}
				}
				text.add(lineNumber, []);
				lineNumber++;
				tooltipItem.summary.forEach((line) => {
					text.add(lineNumber, createFormattedTextObjectArray(line));
					lineNumber++;
				});

				// Add Controls
				if (tooltipItem.hasOwnProperty("controls")) {
					if (tooltipItem.controls.length < 3) {
						tooltipItem.controls.forEach((control) => {
							text.add(lineNumber, []);
							lineNumber++;
							text.add(lineNumber, [
								Text.of(control.requiresHold ? "Hold " : "When ").gray(),
								Text.of(control.control).gray(),
							]);
							lineNumber++;
							control.text.forEach((line) => {
								let formattedTextObjectArray = createFormattedTextObjectArray(line);
								// Add a space before each line
								formattedTextObjectArray.unshift(" ");
								// Add the line to the tooltip
								text.add(lineNumber, formattedTextObjectArray);
								lineNumber++;
							});
						});
					}
				}
			} else if (tooltip.ctrl && tooltipItem.hasOwnProperty("controls") && tooltipItem.controls.length > 1) {
				if (tooltipItem.controls.length > 1) {
					text.add(1, [
						Text.of("Hold [").darkGray(),
						Text.of("Shift").gray(),
						Text.of("] for Summary").darkGray(),
					]);
					// define line number
					let lineNumber = 2;
					text.add(lineNumber, [
						Text.of("Hold [").darkGray(),
						Text.of("Ctrl").white(),
						Text.of("] for Controls").darkGray(),
					]);
					lineNumber++;
					// Add Controls
					tooltipItem.controls.forEach((control) => {
						text.add(lineNumber, []);
						lineNumber++;
						text.add(lineNumber, [
							Text.of(control.requiresHold ? "Hold " : "When ").gray(),
							Text.of(control.control).gray(),
						]);
						lineNumber++;
						control.text.forEach((line) => {
							let formattedTextObjectArray = createFormattedTextObjectArray(line);
							// Add a space before each line
							formattedTextObjectArray.unshift(" ");
							// Add the line to the tooltip
							text.add(lineNumber, formattedTextObjectArray);
							lineNumber++;
						});
					});
				}
			}
			// Not Holding Any Keys
			else {
				text.add(1, [
					Text.of("Hold [").darkGray(),
					Text.of("Shift").gray(),
					Text.of("] for Summary").darkGray(),
				]);
				if (tooltipItem.hasOwnProperty("controls")) {
					if (tooltipItem.controls.length > 1) {
						text.add(2, [
							Text.of("Hold ").darkGray(),
							Text.of("[Ctrl]").gray(),
							Text.of(" for Controls").darkGray(),
						]);
					}
				}
			}
		});
	});
});

/**
 *
 * A function to create a formatted text object array
 * Seperates the text by $ characters and then sets any text inside $ pairs to be orange
 *
 * @param {line} A string of text to be formatted
 * @returns {textObjects} An array of text objects
 */
function createFormattedTextObjectArray(line) {
	// check if the first character is a $, if it is, the summary starts with a yellow text
	let startsInYellow = line.startsWith("$");
	// remove the $ if it does
	if (startsInYellow) {
		line = line.substring(1);
	}
	// get the summary line and split it into an array
	let lineContents = line.split("$");
	// define an interator for the for each loop
	let i = 0;
	// Create an empty array for text objects to be added to
	let textObjects = [];
	lineContents.forEach((textComponent) => {
		// Every other text component is orange
		let textColor = i % 2 == 0 ? colorOrange : colorYellow;
		// Unless the summary starts with yellow
		if (startsInYellow) {
			textColor = i % 2 == 0 ? colorYellow : colorOrange;
		}
		// Add the text component and color it
		let textObject = new Text().of(textComponent);
		textObject.color(textColor);
		textObjects.push(textObject);
		i++;
	});
	return textObjects;
}
