Ponder.registry((event) => {
	event
		.create("refinedstorage:controller")
		.scene(
			"powering_your_controller",
			"Powering your Controller",
			"create_cosmic_contraptions:controller",
			(scene, util) => {
				// Base Plate
				for (let x = 0; x < 5; x++) {
					for (let z = 0; z < 5; z++) {
						scene.world.showSection([x, 0, z], Facing.DOWN);
					}
				}

				scene.idle(10);

				// Controller
				scene.world.showSection([2, 1, 1], Facing.DOWN);

				scene
					.text(30, "Your Digital Controller", [2.0, 1.0, 1.5])
					.colored(PonderPalette.WHITE)
					.placeNearTarget()
					.attachKeyFrame();

				scene.idle(15);

				// Connectors
				scene.world.showSection([2, 2, 1], Facing.DOWN);
				scene.world.showSection([2, 3, 4], Facing.DOWN);

				scene
					.text(30, "Electric Power Connectors", [2.5, 2.5, 3.5])
					.colored(PonderPalette.WHITE)
					.placeNearTarget()
					.attachKeyFrame();

				scene.idle(15);

				// Cogs
				scene.world.showSection([5, 0, 4], Facing.DOWN);
				scene.world.showSection([5, 1, 4], Facing.DOWN);
				scene.world.showSection([5, 2, 4], Facing.DOWN);
				scene.world.showSection([5, 3, 4], Facing.DOWN);

				// Power Source
				scene.world.showSection([3, 3, 4], Facing.DOWN);
				scene.world.showSection([4, 3, 4], Facing.DOWN);

				scene
					.text(30, "Electric Power Source", [3.0, 3.5, 4.5])
					.colored(PonderPalette.WHITE)
					.placeNearTarget()
					.attachKeyFrame();

				scene.idle(15);

				scene.markAsFinished();
			}
		);
});
