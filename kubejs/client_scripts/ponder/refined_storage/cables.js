Ponder.registry((event) => {
	event
		.create("refinedstorage:cable")
		.scene("connecting_your_network", "Connecting your Network", "create_cc:cables", (scene, util) => {
			// Base Plate
			for (let x = 0; x < 5; x++) {
				for (let z = 0; z < 5; z++) {
					scene.world.showSection([x, 0, z], Facing.DOWN);
				}
			}

			scene.idle(10);

			// Controller
			scene.world.showSection([2, 1, 3], Facing.DOWN);
			scene.idle(2);
			// Grid
			scene.world.showSection([3, 2, 1], Facing.DOWN);
			scene.idle(2);
			// External Storage
			scene.world.showSection([0, 3, 3], Facing.DOWN);
			scene.world.modifyBlock(
				[0, 3, 3],
				() =>
					Block.id("refinedstorage:external_storage")
						.with("direction", "up")
						.with("down", "true")
						.with("north", "false")
						.with("south", "false")
						.with("east", "false")
						.with("west", "false"),
				false
			);
			scene.idle(2);
			// Barrel
			scene.world.showSection([0, 4, 3], Facing.DOWN);
			scene.idle(2);
			// Crafter
			scene.world.showSection([3, 5, 3], Facing.DOWN);

			scene
				.text(20, "Your network is not connected.", [0, 2, 2])
				.colored(PonderPalette.RED)
				.placeNearTarget()
				.attachKeyFrame();

			scene.idle(20);

			// Cables
			scene.world.showSection([2, 1, 2], Facing.UP);
			scene.world.showSection([2, 1, 1], Facing.UP);
			scene.world.showSection([3, 1, 1], Facing.UP);
			scene.world.showSection([1, 1, 1], Facing.UP);
			scene.world.showSection([0, 1, 1], Facing.UP);
			scene.world.showSection([0, 1, 2], Facing.UP);
			scene.world.showSection([0, 1, 3], Facing.UP);
			scene.world.showSection([0, 2, 3], Facing.UP);
			scene.world.showSection([0, 3, 4], Facing.UP);
			scene.world.showSection([2, 2, 3], Facing.UP);
			scene.world.showSection([2, 3, 3], Facing.UP);
			scene.world.showSection([2, 4, 3], Facing.UP);
			scene.world.showSection([3, 4, 3], Facing.UP);

			scene.idle(12);

			// Controller
			scene.world.modifyBlock(
				[2, 1, 3],
				() => Block.id("refinedstorage:controller").with("energy_type", "on"),

				false
			);
			// Grid
			scene.world.modifyBlock(
				[3, 2, 1],
				() => Block.id("refinedstorage:crafting_grid").with("connected", "true").with("direction", "west"),
				false
			);
			// External Storage
			scene.world.modifyBlock(
				[0, 3, 3],
				() =>
					Block.id("refinedstorage:external_storage")
						.with("direction", "up")
						.with("down", "true")
						.with("north", "false")
						.with("south", "false")
						.with("east", "false")
						.with("west", "false")
						.with("connected", "true"),
				false
			);
			// Crafter
			scene.world.modifyBlock(
				[3, 5, 3],
				() => Block.id("refinedstorage:crafter").with("connected", "true").with("direction", "north"),
				false
			);

			scene
				.text(30, "Your network is now linked together using cables.", [0, 2, 2])
				.colored(PonderPalette.BLUE)
				.placeNearTarget()
				.attachKeyFrame();

			scene.idle(30);

			scene.markAsFinished();
		});
});
