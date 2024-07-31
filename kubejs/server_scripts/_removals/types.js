// priority: 1
const typesToRemove = ["minecraft:brewing", "ad_astra:compressing", "ad_astra:alloying", "ad_astra:refining"];

ServerEvents.recipes((event) => {
	typesToRemove.forEach((type) => {
		event.remove({ type: type });
	});
});
