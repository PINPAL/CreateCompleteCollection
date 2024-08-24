//priority: 100

function formatName(name) {
	return name.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
