Ponder.registry((event) => {
	event
		.create("refinedstorage:crafting_monitor")
		.scene("monitoring_your_crafting", "Monitoring your Crafting", "create_cc:screen", (scene, util) => {
			// Base Plate
			for (let x = 0; x < 5; x++) {
				for (let z = 0; z < 5; z++) {
					scene.world.showSection([x, 0, z], Facing.DOWN);
				}
			}
			scene.idle(5);
			// Back Wall Plate
			for (let y = 1; y < 4; y++) {
				for (let x = 0; x < 5; x++) {
					scene.world.showSection([x, y, 5], Facing.DOWN);
				}
				scene.idle(2);
			}

			scene.idle(15);

			// Controller
			scene.world.showSection([3, 1, 2], Facing.DOWN);

			scene
				.text(5, "Digital Controller", [2.5, 2, 2.5])
				.colored(PonderPalette.WHITE)
				.placeNearTarget()
				.attachKeyFrame();

			scene.idle(15);

			// Cables
			scene.world.showSection([3, 1, 3], Facing.DOWN);
			scene.world.modifyBlock(
				[3, 1, 3],
				() => Block.id("refinedstorage:cable").with("north", "true").with("south", "true"),
				false
			);
			scene.idle(4);
			scene.world.showSection([3, 1, 4], Facing.DOWN);
			scene.world.modifyBlock(
				[3, 1, 4],
				() => Block.id("refinedstorage:cable").with("north", "true").with("south", "true"),
				false
			);
			scene.idle(4);
			scene.world.modifyBlock(
				[3, 1, 5],
				() => Block.id("refinedstorage:cable").with("north", "true").with("west", "true"),
				true
			);
			scene.idle(4);
			scene.world.modifyBlock(
				[2, 1, 5],
				() => Block.id("refinedstorage:cable").with("east", "true").with("west", "true"),
				true
			);
			scene.idle(4);
			scene.world.modifyBlock(
				[1, 1, 5],
				() => Block.id("refinedstorage:cable").with("east", "true").with("up", "true"),
				true
			);
			scene.idle(4);
			scene.world.modifyBlock([1, 2, 5], () => Block.id("refinedstorage:cable").with("down", "true"), true);
			scene.idle(10);

			// Grid
			scene.world.showSection([1, 2, 4], Facing.DOWN);
			scene.world.modifyBlock(
				[1, 2, 4],
				() => Block.id("refinedstorage:crafting_monitor").with("direction", "north").with("connected", "true"),
				false
			);

			scene
				.text(10, "Crafting Monitor", [0.5, 3, 4.5])
				.colored(PonderPalette.WHITE)
				.placeNearTarget()
				.attachKeyFrame();

			scene.idle(20);

			scene.showControls(60, [1.5, 3.5, 4.5], "down").rightClick();

			scene
				.text(60, "Allows you to view in progress autocrafting jobs, and cancel them if needed.", [1, 3, 4.5])
				.colored(PonderPalette.BLUE);

			scene.markAsFinished();
		});
});
