ServerEvents.recipes(event => {
    event
		.custom({
        type:"createaddition:charging",
        input: {
            item: "kubejs:brine_canister"
        },
        result: {
            item: "kubejs:chlorine_canister",
            count: 1
        },
		energy: 10000
    })
})