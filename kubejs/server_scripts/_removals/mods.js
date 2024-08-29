// priority: 1
const modsToRemove = [
	"rsinfinitybooster",
	"refinedstorage",
	"refinedstorageaddons",
	"disenchanting",
	"itemfilters",
	"ironjetpacks",
	"simplemagnets",
	"shrink",
	"sophisticatedbackpacks",
	"easy_villagers",
	"wands",
	"netherite_horse_armor",
	"melter",
	"createsifter",
	"storagedrawers",
	"metalbarrels",
	"createcasing",
];

ServerEvents.recipes((event) => {
	modsToRemove.forEach((mod) => {
		event.remove({ mod: mod });
	});
});
