// class Router {
// 	showData() {
// 		return new Products().showItem();
// 	}

// 	introduction() {
// 		let q = "Bienvenue à THP !\nVeux tu afficher la liste des produits ? ";

// 		if (confirm(q)) {
// 			this.showData();
// 			this.returnToHome();
// 		} else {
// 			alert("Au revoir !!");
// 		}
// 	}

// 	returnToHome() {
// 		console.log("*****************");
// 		console.log("Quitter : press Q");
// 		console.log("*****************");

// 		document.addEventListener("keypress", (e) => {
// 			if (e.key == "Q" || e.key == "q") {
// 				location.reload();
// 			}
// 		});
// 	}
// }

class Router {
	showData() {
		return new Products().showItem();
	}

	introduction() {
		let pres = "Bienvenue à THP !";
		console.log(pres);
		console.log("Veux tu afficher la liste des produits ?");
		console.log("oui : 1");
		console.log("non : 2");
		var res = prompt("-->");

		if (res == 1) {
			this.showData();
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
			this.returnToHome();
		}
	}
}
