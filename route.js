let Products = require("./controller");

module.exports = class Router {
	showData() {
		return new Products().index();
	}

	showDetail() {
		return new Products().show();
	}

	introduction() {
		let pres = "Bienvenue à THP !";
		console.log(pres);
		console.log("Veux tu afficher la liste des produits ?");
		console.log("Afficher la liste : 1");
		console.log("Quitter le programme : 2");
		var res = prompt("-->");

		if (res == 1) {
			this.showData();
			this.showDetail();
			this.returnToHome();
		} else if (res == 2) {
			console.log("salut");
		} else {
			console.log("Choisis une valeur valide");
			this.introduction();
		}
	}

	returnToHome() {
		console.log("*****************");
		console.log("Revenir à l'accueil ?");
		console.log("oui : 1");
		console.log("non : 2");
		var res = prompt("-->");
		console.log("*****************");

		if (res == 1) {
			this.introduction();
		} else {
			this.showData();
			this.showDetail();
			this.returnToHome();
		}
	}
};

var prompt = require("prompt-sync")();
