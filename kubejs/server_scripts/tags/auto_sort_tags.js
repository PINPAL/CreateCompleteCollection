// priority: 1

ServerEvents.tags("item", (event) => {
	// Wood Types
	event.add("as:oak", /oak($|_)/);
	event.add("as:spruce", /spruce($|_)/);
	event.add("as:birch", /birch($|_)/);
	event.add("as:jungle", /jungle($|_)/);
	event.add("as:acacia", /acacia($|_)/);
	event.add("as:dark_oak", /dark_oak($|_)/);
	event.add("as:mangrove", /mangrove($|_)/);
	event.add("as:crimson", /crimson($|_)/);
	event.add("as:warped", /warped($|_)/);
	event.add("as:rose", /.*create_dd.*rose($|_)/);
	event.add("as:smoked", /.*create_dd.*smoked($|_)/);
	event.add("as:spirit", /.*create_dd.*spirit($|_)/);
	event.add("as:bamboo", /bamboo($|_)/);
	event.add("as:azalea", /azalea($|_)/);
	event.add("as:walnut", /walnut($|_)/);
	event.add("as:coconut", /coconut($|_)/);

	event.remove("as:oak", "#as:dark_oak");

	// Minecarts
	event.add("as:minecart", /.*minecart($|_)/);

	// Resources
	event.add("as:iron", /(_|:)iron($|_)/);
	event.add("as:cast_iron", /(_|:)cast_iron($|_)/);
	event.add("as:gold", /(_|:)gold($|_)/);
	event.add("as:gold", /(_|:)golden($|_)/);
	event.add("as:coal", /(_|:)coal($|_)/);
	event.add("as:charcoal", /(_|:)charcoal($|_)/);
	event.add("as:quartz", /(_|:)quartz($|_)/);
	event.add("as:emerald", /(_|:)emerald($|_)/);
	event.add("as:lapis", /(_|:)lapis($|_)/);
	event.add("as:redstone", /(_|:)redstone($|_)/);
	event.add("as:diamond", /(_|:)diamond($|_)/);
	event.add("as:netherite", /(_|:)netherite($|_)/);
	event.add("as:industrial_iron", /(_|:)industrial_iron($|_)/);
	event.add("as:steel", /(_|:)steel($|_)/);
	event.add("as:copper", /(_|:)copper($|_)/);
	event.add("as:bronze", /(_|:)bronze($|_)/);
	event.add("as:tin", /(_|:)tin($|_)/);
	event.add("as:zinc", /(_|:)zinc($|_)/);
	event.add("as:mithril", /(_|:)mithril($|_)/);
	event.add("as:brass", /(_|:)brass($|_)/);
	event.add("as:andesite", /(_|:)andesite($|_)/);
	event.add("as:aluminum", /(_|:)aluminum($|_)/);

	// Digital Storage
	event.add("as:digital_storage", /rsinfinitybooster:/);
	event.add("as:digital_storage", /refinedstorage:/);
	event.add("as:digital_storage", /refinedstorageaddons:/);

	// Block Decoration Types
	event.add("as:cobble", /(_|:)cobble($|_)/);
	event.add("as:polished", /(_|:)polished($|_)/);
	event.add("as:tiles", /(_|:)tiles($|_)/);
	event.add("as:brick", /(_|:)brick($|_)/);
	event.add("as:bricks", /(_|:)bricks($|_)/);
	event.add("as:long_brick", /(_|:)long_brick($|_)/);
	event.add("as:cut", /(_|:)cut($|_)/);

	// Misc
	event.add("as:ladder", /(_|:)ladder($|_)/);
	event.add("as:bucket", /(_|:)bucket($|_)/);
	event.add("as:mechanism", /(_|:)mechanism($|_)/);

	// Create DD
	event.add("as:polished_metals", /create_dd:(zinc|steel|bronze)_polished_.*/);

	// Colors
	event.add("as:white", /(_|:)white($|_)/);
	event.add("as:orange", /(_|:)orange($|_)/);
	event.add("as:magenta", /(_|:)magenta($|_)/);
	event.add("as:light_blue", /(_|:)light_blue($|_)/);
	event.add("as:yellow", /(_|:)yellow($|_)/);
	event.add("as:lime", /(_|:)lime($|_)/);
	event.add("as:pink", /(_|:)pink($|_)/);
	event.add("as:gray", /(_|:)gray($|_)/);
	event.add("as:light_gray", /(_|:)light_gray($|_)/);
	event.add("as:cyan", /(_|:)cyan($|_)/);
	event.add("as:purple", /(_|:)purple($|_)/);
	event.add("as:blue", /(_|:)blue($|_)/);
	event.add("as:brown", /(_|:)brown($|_)/);
	event.add("as:green", /(_|:)green($|_)/);
	event.add("as:red", /(_|:)red($|_)/);
	event.add("as:black", /(_|:)black($|_)/);

	// Broken Tools
	event.add("as:broken", /kubejs:broken($|_)/);

	// Upgrading Materials
	event.add("as:upgrade_material", /kubejs:.*_blade/);
	event.add("as:upgrade_material", /kubejs:.*_head/);
	event.add("as:upgrade_material", /kubejs:.*_stitching/);

	// Lighting
	event.add("as:lamp", /.*(_|:)lamp.*($|_)/);
	event.add("as:lantern", /.*(_|:)lantern.*($|_)/);

	// Create Deco Brick Variants
	const brickTypes = ["worn", "pearl", "red", "dusk", "scarlet", "dean", "blue"];
	brickTypes.forEach((brickType) => {
		let tag = "as:brick_types/" + brickType;
		// Edge case for red bricks
		if (brickType == "red") {
			tag = "as:brick_types/default";
			event.add(tag, "minecraft:bricks");
			event.add(tag, "minecraft:brick_wall");
			event.add(tag, "minecraft:brick_stairs");
		}
		// We want to find everything of that type (EXCEPT slabs)
		// Therefore we search for "s", "tiles", "wall" and "stairs"
		// "s" is matching brickS themselves
		let regex = new RegExp(`createdeco:.*${brickType}_.*brick.*(s|_)`);
		event.add(tag, regex);
	});
});
