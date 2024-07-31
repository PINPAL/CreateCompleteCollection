const woodTypes = [
	{ name: "hardened", namespace: "tfmg" },
	{ name: "waterproof", namespace: "create_cc" },
];

ServerEvents.recipes((event) => {
	woodTypes.forEach((wood) => {
		event
			.shaped(`6x create_cc:${wood.name}_slab`, ["   ", "PPP", "   "], {
				P: `${wood.namespace}:${wood.name}_planks`,
			})
			.id("create_cc:wood/" + wood.name + "_slab");
		event
			.shaped(`4x create_cc:${wood.name}_stairs`, ["P  ", "PP ", "PPP"], {
				P: `${wood.namespace}:${wood.name}_planks`,
			})
			.id("create_cc:wood/" + wood.name + "_stairs");
		event
			.shaped(Item.of(`create_cc:${wood.name}_fence`), ["   ", "PSP", "PSP"], {
				P: `${wood.namespace}:${wood.name}_planks`,
				S: "minecraft:stick",
			})
			.id("create_cc:wood/" + wood.name + "_fence");
		event
			.shaped(`create_cc:${wood.name}_fence_gate`, ["   ", "SPS", "SPS"], {
				P: `${wood.namespace}:${wood.name}_planks`,
				S: "minecraft:stick",
			})
			.id("create_cc:wood/" + wood.name + "_fence_gate");
		event.shapeless(`create_cc:${wood.name}_button`, [`${wood.namespace}:${wood.name}_planks`]);
		event
			.shaped(`create_cc:${wood.name}_pressure_plate`, ["PP ", "   ", "   "], {
				P: `${wood.namespace}:${wood.name}_planks`,
			})
			.id("create_cc:wood/" + wood.name + "_pressure_plate");
	});
});
