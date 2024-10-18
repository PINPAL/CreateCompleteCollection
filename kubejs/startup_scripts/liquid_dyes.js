StartupEvents.registry("fluid", (event) => {
	let colors = [
		{ name: "white", hex: 0xffffff },
		{ name: "orange", hex: 0xf4b33f },
		{ name: "magenta", hex: 0xcb69c5 },
		{ name: "light_blue", hex: 0x5082ce },
		{ name: "yellow", hex: 0xe7e72a },
		{ name: "lime", hex: 0x76c610 },
		{ name: "pink", hex: 0xdb8bb4 },
		{ name: "gray", hex: 0x767676 },
		{ name: "light_gray", hex: 0xc8c8c8 },
		{ name: "cyan", hex: 0x2d7c9d },
		{ name: "purple", hex: 0xa453ce },
		{ name: "blue", hex: 0x345ec3 },
		{ name: "brown", hex: 0x7a4621 },
		{ name: "green", hex: 0x4a6b18 },
		{ name: "red", hex: 0xb02e26 },
		{ name: "black", hex: 0x27263d },
	];

	colors.forEach((color) => {
		event
			.create(`cosmic_contraptions:${color.name}_dye_fluid`)
			.displayName(`${formatName(color.name)} Dye`)
			.thinTexture(color.hex);
	});
});
