class Router {
	showData() {
		return new Products().showItem();
	}

	introduction() {
		let q = "Bienvenue à THP !\nVeux tu afficher la liste des produits ? ";

		if (confirm(q)) {
			this.showData();
			this.returnToHome();
		} else {
			alert("Au revoir !!");
		}
	}

	returnToHome() {
		console.log("*****************");
		console.log("Quitter : press Q");
		console.log("*****************");

		document.addEventListener("keypress", (e) => {
			if (e.key == "Q" || e.key == "q") {
				location.reload();
			}
		});
	}
}
