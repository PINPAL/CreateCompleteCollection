ServerEvents.recipes((event) => {
	event.custom({
		type: "createaddition:charging",
		input: {
			item: "cosmic_contraptions:brine_canister",
		},
		result: {
			item: "cosmic_contraptions:chlorine_canister",
			count: 1,
		},
		energy: 10000,
	});
});
