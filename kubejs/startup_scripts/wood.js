const woodTypes = [
	{ name: "hardened", namespace: "createindustry" },
	{ name: "waterproof", namespace: "kubejs" },
];

const woodVariants = ["stairs", "slab", "fence", "fence_gate", "wooden_button", "wooden_pressure_plate"];

function replaceWooden(name) {
	return name.replace("wooden_", "");
}

StartupEvents.registry("block", (event) => {
	woodTypes.forEach((wood) => {
		woodVariants.forEach((variant) => {
			event
				.create(`${wood.name}_${replaceWooden(variant)}`, variant)
				.displayName(`${formatName(wood.name)} ${formatName(replaceWooden(variant))}`)
				.material("wood")
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
