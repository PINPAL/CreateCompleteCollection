Ponder.registry((event) => {
	event.create("melter:melter").scene("melter", "Melting", "cosmic_contraptions:melter", (scene, util) => {
		// Base Plate
		for (let x = 0; x < 3; x++) {
			for (let z = 0; z < 3; z++) {
				scene.world.showSection([x, 0, z], Facing.UP);
			}
		}

		scene.world.showSection([1, 1, 1], Facing.DOWN);
		scene.world.modifyBlock([1, 1, 1], () => Block.id("melter:melter"), false);

		scene.idle(10);

		scene.text(30, "Melter requires a heat source", [1.5, 2, 1.5]).placeNearTarget().attachKeyFrame();

		scene.idle(30);

		scene.world.showSection([1, 2, 1], Facing.UP);
		scene.world.modifyBlock(
			[1, 2, 1],
			() => Block.id("melter:melter").with("heatesource", "blaze_burner_superheated"),
			false
		);

		scene.idle(5);

		scene.world.modifyBlock([1, 1, 1], () => Block.id("create:blaze_burner").with("blaze", "seething"), false);

		scene.idle(30);

		scene.showControls(20, [1.5, 3, 1.5], "down").withItem("minecraft:iron_block");

		scene.text(30, "Input a meltable block", [1.5, 2, 1.5]).placeNearTarget().attachKeyFrame();

		scene.idle(40);

		scene.text(30, "Fluid can then be extracted with pipes", [1.5, 2, 1.5]).placeNearTarget().attachKeyFrame();

		scene.idle(20);

		scene.world.showSection([2, 2, 1], Facing.WEST);
		scene.idle(2);
		scene.world.showSection([3, 2, 1], Facing.WEST);
		scene.idle(2);
		scene.world.showSection([3, 1, 1], Facing.WEST);
		scene.idle(2);
		scene.world.showSection([3, 0, 1], Facing.WEST);

		scene.markAsFinished();
	});
});
