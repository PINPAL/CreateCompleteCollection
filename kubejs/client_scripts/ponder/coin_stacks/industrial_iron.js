Ponder.registry((event) => {
	event
		.create("createdeco:industrial_iron_coinstack")
		.scene("industrial_iron_coinstack", "Industrial Iron Coin Stacking", "create_cc:coin_stack", (scene, util) => {
			// Base Plate
			for (let x = 0; x < 3; x++) {
				for (let z = 0; z < 3; z++) {
					scene.world.showSection([x, 0, z], Facing.UP);
				}
			}

			// Stacksize 1
			scene.showControls(20, [1.5, 1, 1.5], "down").rightClick().withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.showSection([1, 1, 1], Facing.DOWN);
			scene.world.modifyBlock(
				[1, 1, 1],
				() => Block.id("createdeco:industrial_iron_coinstack_block").with("layers", "1"),
				false
			);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			// Stacksize 2
			scene.idle(20);
			scene
				.showControls(20, [1.5, 1.1, 1.5], "down")
				.rightClick()
				.withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("layers", "2"), false);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			// Stacksize 3
			scene.idle(20);
			scene
				.showControls(20, [1.5, 1.3, 1.5], "down")
				.rightClick()
				.withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("layers", "3"), false);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			// Stacksize 4
			scene.idle(20);
			scene
				.showControls(20, [1.5, 1.4, 1.5], "down")
				.rightClick()
				.withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("layers", "4"), false);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			// Stacksize 5
			scene.idle(20);
			scene
				.showControls(20, [1.5, 1.5, 1.5], "down")
				.rightClick()
				.withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("layers", "5"), false);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			// Stacksize 6
			scene.idle(20);
			scene
				.showControls(20, [1.5, 1.6, 1.5], "down")
				.rightClick()
				.withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("layers", "6"), false);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			// Stacksize 7
			scene.idle(20);
			scene
				.showControls(20, [1.5, 1.7, 1.5], "down")
				.rightClick()
				.withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("layers", "7"), false);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			// Stacksize 8
			scene.idle(20);
			scene
				.showControls(20, [1.5, 1.8, 1.5], "down")
				.rightClick()
				.withItem("createdeco:industrial_iron_coinstack");
			scene.idle(30);
			scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("layers", "8"), false);
			scene.text(0, "", [30, 30, 30]).placeNearTarget().attachKeyFrame();

			scene.idle(30);

			scene.markAsFinished();
		});
});
