const createGUITextures = Java.loadClass("com.simibubi.create.foundation.gui.AllGuiTextures");

JEIAddedEvents.registerCategories((event) => {
	const guiHelper = event.data.jeiHelpers.guiHelper;

	event.custom("create_cosmic_contraptions:casing_application", (category) => {
		const guiWidth = 176;
		const headerHeight = 12;
		const guiHeight = 95 + headerHeight;

		const shadowWidth = 52;
		const slotWidth = 18;
		const arrowWidth = 16;
		const downArrowWidth = 26;
		const blockRenderWidth = 34;

		category
			//https://github.com/mezz/JustEnoughItems/blob/1.20.1/CommonApi/src/main/java/mezz/jei/api/helpers/IGuiHelper.java
			.title("Casing Application")
			.background(guiHelper.createBlankDrawable(guiWidth, guiHeight))
			.icon(guiHelper.createDrawableItemStack(Item.of("create:brass_hand")))
			// Validate
			// Ensure that the recipe has an inputCasing
			// Ensure that the recipe has an inputBlock
			// Ensure that the recipe has outputs
			.isRecipeHandled((recipe) => {
				return (
					!!(recipe?.data?.inputCasing !== undefined && recipe?.data?.output !== undefined) &&
					recipe?.data?.inputBlock !== undefined
				);
			})
			// Slot Drawing
			.handleLookup((builder, recipe, focuses) => {
				// Draw at the top
				global.drawSlot(
					recipe.data.inputCasing,
					"INPUT",
					(guiWidth / 8) * 2 - slotWidth / 2 - downArrowWidth,
					5 + headerHeight,
					builder,
					true
				);

				// Drawn in bottom row
				let y = 75 + headerHeight;
				global.drawSlot(recipe.data.inputBlock, "INPUT", (guiWidth / 8) * 2 - slotWidth / 2, y, builder, true);
				global.drawSlot(recipe.data.output, "OUTPUT", (guiWidth / 8) * 6 - slotWidth / 2, y, builder, true);
			})
			// Text Drawing
			.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
				// Draw the JEI GUI textures
				createGUITextures.JEI_SHADOW.render(
					guiGraphics,
					(guiWidth / 8) * 2 - shadowWidth / 2,
					57 + headerHeight
				);
				createGUITextures.JEI_SHADOW.render(
					guiGraphics,
					(guiWidth / 8) * 6 - shadowWidth / 2,
					57 + headerHeight
				);
				createGUITextures.JEI_DOWN_ARROW.render(
					guiGraphics,
					(guiWidth / 8) * 2 - downArrowWidth / 2,
					10 + headerHeight
				);
				// resourceLocation, x, y, startX, StartY, width, height
				guiGraphics.blit(
					"create_cosmic_contraptions:textures/gui/widgets.png",
					(guiWidth / 8) * 4 - arrowWidth / 2,
					48 + headerHeight,
					0,
					0,
					arrowWidth,
					8
				);

				// Draw the input (unencased) block
				let stack = guiGraphics.pose();
				let y = 30 + headerHeight;
				let x = (guiWidth / 8) * 2 - blockRenderWidth / 2;
				stack.pushPose();
				stack.translate(x, y, 100);
				stack.scale(2.25, 2.25, 2.25);
				guiGraphics.renderItem(Item.of(recipe.data.inputBlock), 0, 0);
				stack.popPose();

				// Draw the output encased block
				x = (guiWidth / 8) * 6 - blockRenderWidth / 2;
				stack.pushPose();
				stack.translate(x, y, 100);
				stack.scale(2.25, 2.25, 2.25);
				guiGraphics.renderItem(Item.of(recipe.data.output), 0, 0);
				stack.popPose();

				// Draw some text "Casing Not Consumed"
				x = (guiWidth / 8) * 2 - slotWidth / 2 - downArrowWidth;
				guiGraphics.drawWordWrap(Client.font, Text.of("Casing Not Consumed").color(0x333333), x, 5, 177 - x, 0);
			});
	});
});

JEIAddedEvents.registerRecipes((event) => {
	global.createCasings.forEach((casing) => {
		for (const key in global.encasedBlockTypes) {
			let encasedBlockType = global.encasedBlockTypes[key];
			// Don't create encased blocks for machines if the casing doesn't support it
			// Natively encased blocks only have cog/shaft encasings
			if (casing.cogShaftOnly && !encasedBlockType.isNativelyEncased) {
				continue;
			}
			// Don't encase shafts, cogwheels, or large cogwheels for blocks that already have native Create encased versions
			let modName = "createcasing";
			if (casing.isNativelyCased && encasedBlockType.isNativelyEncased) {
				modName = "create";
			}
			// Generate encased block name
			let encasedBlockName = modName + ":" + encasedBlockType.name.replace("$$", casing.name);
			// Register JEI recipe
			event.custom("create_cosmic_contraptions:casing_application").add({
				inputCasing: casing.casingId,
				inputBlock: encasedBlockType.originalItem,
				output: encasedBlockName,
			});
		}
	});
});
