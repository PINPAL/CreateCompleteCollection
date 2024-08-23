// priority: 3
const createRecipeCategory = Java.loadClass("com.simibubi.create.compat.jei.category.CreateRecipeCategory");

global.drawSlot = (item, type, x, y, builder, drawBackground) => {
	// Validate to prevent crashes
	if (item != "minecraft:air" && item != undefined && item != null) {
		if (drawBackground) {
			builder
				.addSlot(type, x, y)
				.addItemStack(Item.of(item))
				.setBackground(createRecipeCategory.getRenderedSlot(), -1, -1);
		} else {
			builder.addSlot(type, x, y).addItemStack(Item.of(item));
		}
	} else {
		builder.addSlot(type, x, y).addItemStack(Item.of("minecraft:air"));
		console.log("[CREATE-CC] (JEI) Missing item for lootbox result: " + type);
	}
};
