ServerEvents.recipes((event) => {
	event.custom({
		type: "createaddition:charging",
		input: {
			item: "create_cc:brine_canister",
		},
		result: {
			item: "create_cc:chlorine_canister",
			count: 1,
		},
		energy: 10000,
	});
});
