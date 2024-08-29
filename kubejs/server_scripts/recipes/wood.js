const woodTypes = [
	{ name: "hardened", namespace: "createindustry" },
	{ name: "waterproof", namespace: "kubejs" },
];

ServerEvents.recipes((event) => {
	woodTypes.forEach((wood) => {
		event
			.shaped(`6x kubejs:${wood.name}_slab`, ["   ", "PPP", "   "], {
				P: `${wood.namespace}:${wood.name}_planks`,
			})
			.id(`kubejs:wood/${wood.name}_slab`);
		event
			.shaped(`4x kubejs:${wood.name}_stairs`, ["P  ", "PP ", "PPP"], {
				P: `${wood.namespace}:${wood.name}_planks`,
			})
			.id(`kubejs:wood/${wood.name}_stairs`);
		event
			.shaped(Item.of(`kubejs:${wood.name}_fence`), ["   ", "PSP", "PSP"], {
				P: `${wood.namespace}:${wood.name}_planks`,
				S: "minecraft:stick",
			})
			.id(`kubejs:wood/${wood.name}_fence`);
		event
			.shaped(`kubejs:${wood.name}_fence_gate`, ["   ", "SPS", "SPS"], {
				P: `${wood.namespace}:${wood.name}_planks`,
				S: "minecraft:stick",
			})
			.id(`kubejs:wood/${wood.name}_fence_gate`);
		event
			.shapeless(`kubejs:${wood.name}_button`, [`${wood.namespace}:${wood.name}_planks`])
			.id(`kubejs:wood/${wood.name}_button`);
		event
			.shaped(`kubejs:${wood.name}_pressure_plate`, ["PP ", "   ", "   "], {
				P: `${wood.namespace}:${wood.name}_planks`,
			})
			.id(`kubejs:wood/${wood.name}_pressure_plate`);
	});
});
