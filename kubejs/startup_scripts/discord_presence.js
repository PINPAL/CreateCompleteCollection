// SDRP.setState( String message, String imageName, String imageKey )
// imageName: the text to show when hovering over the small image aka "Overworld" or "Nether", can be passed a string with the text to show or a lang key.
// message: message to show under the packname aka "In Overworld" or "In Nether", can be passed a string with the text to show or a lang key.
// imageKey : the name Rich Present Art Asset to show, like loading, overworld, menu and so on.

/* SDRP.getCurrentState();
// Gets the current state the client is set to.

// Examples:
// Update state on dimension change and joining world.
// kubejs/startup_script/sdrp.js
onForgeEvent("net.minecraftforge.event.entity.EntityJoinWorldEvent", (event) => {
	if (event.getEntity().type === "entity.minecraft.player") {
		if (event.getWorld().isClientSide()) {
			const dimPath = event.getWorld().dimension().location().getPath();
			SDRP.setState(`sdrp.${dimPath}.in`, `sdrp.${dimPath}`, "dimPath");
		}
	}
});
 */
