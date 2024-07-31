let destroyPlastics = [
	"destroy:plastic",
	"destroy:polyethylene_terephthalate",
	"destroy:polyethene",
	"destroy:polypropene",
	"destroy:polystyrene",
	"destroy:abs",
	"destroy:polytetrafluoroethene",
	"destroy:nylon",
	"destroy:polystyrene_butadiene",
];

ServerEvents.recipes((event) => {
	destroyPlastics.forEach((item) => {
		event.replaceInput({ input: item }, item, "#forge:ingots/plastic");
	});
});
