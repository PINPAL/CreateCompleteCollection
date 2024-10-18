const woodTypes = [
	{ name: "hardened", namespace: "tfmg" },
	{ name: "waterproof", namespace: "cosmic_contraptions" },
];

const woodVariants = ["stairs", "slab", "fence", "fence_gate", "button", "pressure_plate"];

function replaceWooden(name) {
	return name.replace("wooden_", "");
}

StartupEvents.registry("block", (event) => {
	woodTypes.forEach((wood) => {
		// Register the planks block (if the namespace is kubejs)
		if (wood.namespace == "cosmic_contraptions") {
			event
				.create(`cosmic_contraptions:${wood.name}_planks`)
				.displayName(`${formatName(wood.name)} Planks`)
				.woodSoundType()
				.textureAll(`cosmic_contraptions:block/${wood.name}_planks`)
				.tagBlock("minecraft:mineable/paxel")
				.tagBlock("minecraft:planks");
		}
		// Register the variants (stairs, slab, fence, fence_gate, button, pressure_plate)
		woodVariants.forEach((variant) => {
			event
				.create(`cosmic_contraptions:${wood.name}_${replaceWooden(variant)}`, variant)
				.displayName(`${formatName(wood.name)} ${formatName(replaceWooden(variant))}`)
				.woodSoundType()
				.textureAll(`${wood.namespace}:block/${wood.name}_planks`)
				.tagBlock("minecraft:mineable/paxel")
				// Tag with minecraft:wooden_stairs or minecraft:wooden_slabs
				// Depending on the variant append an s to the end of the variant
				.tagBoth(
					`minecraft:${variant.includes("wooden") ? "" : "wooden_"}${variant}${
						variant.slice(-1) == "s" ? "" : "s"
					}`
				);
		});
	});
});
