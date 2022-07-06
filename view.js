module.exports = class View {
	index(dataProducts) {
		console.log("*****************");
		console.log("voici la liste");
		console.log("*****************");
		dataProducts.forEach((item) => {
			console.log(`${item.id} - ${item.Name}`);
		});
	}

	show(dataProducts) {
		console.log("Appuie sur un numéro pour afficher le détails");
		let idItem = prompt("-->");
		console.log("*****************");
		console.log("voici le détail");
		console.log("*****************");
		console.log(dataProducts[idItem - 1]);
	}
};

var prompt = require("prompt-sync")();
