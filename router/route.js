let ProductController = require("../controller/product_controller");
let AdminController = require("../controller/admin_controller");

module.exports = class Router {
	introduction() {
		console.log(" Bienvenue à sur THP E-commerce !");
		console.log("📝 Afficher la liste : tapez 1");
		console.log("👮‍♀️ Accèder au dashboard admin : tapez 2");
		console.log("❌ Quitter le programme : tapez 3");
		var res = prompt("-->");
		if (res == 1) {
			this.showData();
			console.log("🪣  trier par prix croissant : tapez 0");
			console.log("🔍  Afficher le détail : tapez 1");
			console.log("↪️  Revenir au menu principal : tapez 2");
			console.log("❌ Quitter le programme : tapez 3");
			var response = prompt("-->");
			if (response == 0) {
				new ProductController().sortProductAsc();
				this.introduction();
			} else if (response == 1) {
				this.showDetail();
				console.log("----------------------------------------");
				console.log("|Acheter ? : tapez 1 (sinon : tapez 2)");
				console.log("----------------------------------------");
				let res1 = prompt("-->");
				if (res1 == 1) {
					new ProductController().updateBuy();
				}
				console.log("↪️  retour à l'accueil : tapez 1");
				let listReturn = prompt("--> ");
				listReturn == 1 ? this.introduction() : console.log("Au revoir");
			} else if (response == 2) {
				this.introduction();
			} else {
				console.log("Au revoir");
			}
		} else if (res == 2) {
			this.dashboardAdmin();
		} else {
			console.log("------------------------");
			console.log("🌞 Bonne journée 🌞");
			console.log("------------------------");
		}
	}

	dashboardAdmin() {
		new AdminController().RequestPassword();
		console.log(" Bienvenue à sur le dashboard admin !");
		console.log("📝 Afficher la liste : tapez 1");
		console.log("📝 Créer un produit : tapez 2");
		console.log("↪️  Revenir au menu principal : tapez 3");
		var res = prompt("-->");
		if (res == 1) {
			this.showData();
			this.showDetail();
			this.choiceDetail();
		} else if (res == 2) {
			this.createData();
		} else {
			this.introduction();
		}
	}

	showData() {
		return new ProductController().index();
	}

	showDetail() {
		new ProductController().show();
	}

	choiceDetail() {
		console.log("🛠  MODIFIER : tapez 1");
		console.log("🗑  SUPPRIMER : tapez 2");
		console.log("↪️  Revenir au dashboard : tapez 3");
		var res = prompt("-->");
		if (res == 1) {
			this.updateData();
			this.dashboardAdmin();
		} else if (res == 2) {
			this.deleteData();
			this.dashboardAdmin();
		} else {
			this.dashboardAdmin();
		}
	}

	createData() {
		return new ProductController().create();
	}

	updateData() {
		new ProductController().update();
	}

	deleteData() {
		new ProductController().delete();
	}
};

var prompt = require("prompt-sync")();
