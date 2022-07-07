let idItem = "";

module.exports = class View {
	index(dataProducts) {
		console.log("*****************");
		console.log("📝 Voici la liste");
		console.log("*****************");
		dataProducts = dataProducts.sort(function (a, b) {
			return a.id - b.id;
		});
		console.log(
			dataProducts.map((item, index) => `${index + 1} - ${item.Name}`)
		);
	}

	show(dataProducts) {
		console.log("Saisis un numéro pour afficher le détail");
		idItem = prompt("-->");
		console.log("*****************");
		console.log("🔍 voici le détail");
		console.log("*****************");
		let res = dataProducts[idItem - 1];
		console.log(
			`- PRODUIT : ${res.Name} \n- PRIX : ${res.price} \n- QUANTITE : ${res.quantity} \n- MARQUE : ${res.brand} \n- DESCRIPTION : ${res.description}`
		);
	}

	create() {
		let newName = prompt("Choisissez un nom : ");
		let newPrice = prompt("Choisissez un prix : ");
		newPrice = parseInt(newPrice);
		let newQuantity = prompt("Choisissez une quantité : ");
		let newBrand = prompt("Choisissez une marque : ");

		if (newName.length > 12) {
			console.log("---NOM TROP LONG----");
			console.log("---VEUILLEZ RESSAISIR LES DONNEES----");
			this.create();
		} else if (newPrice < 0 || isNaN(newPrice)) {
			console.log("---PRIX NEGATIF OU PAS DE CHIFFRE----");
			console.log("---VEUILLEZ RESSAISIR LES DONNEES----");
			this.create();
		}

		let params = {};
		return (params = {
			Name: newName,
			price: newPrice,
			quantity: newQuantity,
			brand: newBrand,
		});
	}

	update() {
		let newName = prompt("Choisissez un nom : ");
		let newPrice = prompt("Choisissez un prix : ");
		let newQuantity = prompt("Choisissez une quantité : ");
		let newBrand = prompt("Choisissez une marque : ");
		let newDescription = prompt("Choisissez une description : ");
		idItem = parseInt(idItem);

		let params = {};
		return (params = {
			id: idItem,
			Name: newName,
			price: newPrice,
			quantity: newQuantity,
			brand: newBrand,
			description: newDescription,
		});
	}

	delete(dataProducts) {
		dataProducts.splice(idItem - 1, 1);
		return dataProducts;
	}

	buyProduct(dataProducts) {
		let item = dataProducts[idItem - 1];

		console.log("Choisissez la quantité : ");
		let qtyChoice = prompt("-->");

		while (qtyChoice > item.quantity) {
			console.log("Pas Assez de stocks");
			qtyChoice = prompt("Ressaisissez la qty-->");
		}

		let qtyNew = item.quantity - qtyChoice;

		if (isNaN(item.price)) {
			item.price = item.price.substring(1);
			item.price = parseInt(item.price);
		}

		let total = item.price * qtyChoice;
		console.log(
			`Vous avez choisi d'acheter une quantité de ${qtyChoice} du produit ${item.Name} au prix unitaire de ${item.price}. Cela sera un total $${total}`
		);

		let params = {};
		return (params = {
			id: item.id,
			Name: item.Name,
			price: item.price,
			quantity: qtyNew,
			brand: item.brand,
			description: item.description,
		});
	}

	sortByPriceAsc(dataProducts) {
		console.log("*****************");
		console.log("📝 Voici la liste trié par prix croissant ");
		console.log("*****************");
		dataProducts.map((product) => {
			if (isNaN(product.price)) {
				product.price = product.price.substring(1);
				product.price = parseInt(product.price);
			}
		});
		dataProducts = dataProducts.sort(function (a, b) {
			return a.price - b.price;
		});
		console.log(
			dataProducts.map((item, index) => `${index + 1} - ${item.Name}`)
		);
	}

	sortByPriceDesc(dataProducts) {
		console.log("*****************");
		console.log("📝 Voici la liste trié par prix décroissant ");
		console.log("*****************");
		dataProducts.map((product) => {
			if (isNaN(product.price)) {
				product.price = product.price.substring(1);
				product.price = parseInt(product.price);
			}
		});
		dataProducts = dataProducts.sort(function (a, b) {
			return b.price - a.price;
		});
		console.log(
			dataProducts.map((item, index) => `${index + 1} - ${item.Name}`)
		);
	}
};

var prompt = require("prompt-sync")();
