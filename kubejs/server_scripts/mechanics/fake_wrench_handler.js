const ModBlockProperties = Java.loadClass("lilypuree.decorative_blocks.blocks.state.ModBlockProperties");
const SupportFaceShape = Java.loadClass("lilypuree.decorative_blocks.blocks.state.SupportFaceShape");

BlockEvents.rightClicked((event) => {
	let block = event.getBlock();
	if (block.hasTag("decorative_blocks:supports") && event.getItem() == "create:wrench") {
		let blockState = block.getBlockState();
		let isCrouching = event.getPlayer().isCrouching();
		let sideClickedOn = event.getFacing();

		let horizontal = blockState.getValue(ModBlockProperties.HORIZONTAL_SHAPE);
		let vertical = blockState.getValue(ModBlockProperties.VERTICAL_SHAPE);

		if (sideClickedOn == Direction.UP) {
			// If crouching toggle hiding the side
			if (isCrouching) {
				block.setBlockState(
					blockState.setValue(
						ModBlockProperties.HORIZONTAL_SHAPE,
						horizontal == SupportFaceShape.HIDDEN ? SupportFaceShape.SMALL : SupportFaceShape.HIDDEN
					),
					0
				);
			} else if (!isCrouching) {
				// Ensure that the side is not hidden
				if (horizontal != SupportFaceShape.HIDDEN) {
					block.setBlockState(
						blockState.setValue(
							ModBlockProperties.HORIZONTAL_SHAPE,
							horizontal == SupportFaceShape.BIG ? SupportFaceShape.SMALL : SupportFaceShape.BIG
						),
						0
					);
				}
			}
		} else {
			// If crouching toggle hiding the side
			if (isCrouching) {
				block.setBlockState(
					blockState.setValue(
						ModBlockProperties.VERTICAL_SHAPE,
						vertical == SupportFaceShape.HIDDEN ? SupportFaceShape.SMALL : SupportFaceShape.HIDDEN
					),
					0
				);
			} else if (!isCrouching) {
				// Ensure that the side is not hidden
				if (vertical != SupportFaceShape.HIDDEN) {
					block.setBlockState(
						blockState.setValue(
							ModBlockProperties.VERTICAL_SHAPE,
							vertical == SupportFaceShape.BIG ? SupportFaceShape.SMALL : SupportFaceShape.BIG
						),
						0
					);
				}
			}
		}
	}
});
