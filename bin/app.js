#! /usr/bin/env node

const items = [
	{
		id: 1,
		Name: "Sleek Granite Bench",
		price: "$48.99",
		quantity: 6,
		brand: "Nike",
	},
	{
		id: 2,
		Name: "Ergonomic Copper Lamp",
		price: "$86.99",
		quantity: 14,
		brand: "Nikon",
	},
	{
		id: 3,
		Name: "Aerodynamic Cotton Coat",
		price: "$54.99",
		quantity: 8,
		brand: "Beats",
	},
	{
		id: 4,
		Name: "Enormous Linen Lamp",
		price: "$95.99",
		quantity: 13,
		brand: "Nike",
	},
	{
		id: 5,
		Name: "Practical Cotton Pants",
		price: "$77.99",
		quantity: 7,
		brand: "Nikon",
	},
	{
		id: 6,
		Name: "Enormous Bronze Gloves",
		price: "$50.99",
		quantity: 6,
		brand: "Beats",
	},
	{
		id: 7,
		Name: "Ergonomic Leather Lamp",
		price: "$95.99",
		quantity: 14,
		brand: "Adidas",
	},
	{
		id: 8,
		Name: "Aerodynamic Plastic Bottle",
		price: "$44.99",
		quantity: 5,
		brand: "Dell",
	},
	{
		id: 9,
		Name: "Practical Concrete Lamp",
		price: "$29.99",
		quantity: 13,
		brand: "Dell",
	},
	{
		id: 10,
		Name: "Rustic Linen Bottle",
		price: "$22.99",
		quantity: 13,
		brand: "Apple",
	},
	{
		id: 11,
		Name: "Enormous Bronze Shirt",
		price: "$28.99",
		quantity: 10,
		brand: "Nike",
	},
	{
		id: 12,
		Name: "Enormous Copper Clock",
		price: "$57.99",
		quantity: 5,
		brand: "Beats",
	},
	{
		id: 13,
		Name: "Small Marble Keyboard",
		price: "$4.99",
		quantity: 13,
		brand: "Apple",
	},
	{
		id: 14,
		Name: "Incredible Copper Lamp",
		price: "$89.99",
		quantity: 6,
		brand: "LG",
	},
	{
		id: 15,
		Name: "Lightweight Bronze Wallet",
		price: "$94.99",
		quantity: 12,
		brand: "LG",
	},
	{
		id: 16,
		Name: "Lightweight Leather Chair",
		price: "$98.99",
		quantity: 9,
		brand: "Beats",
	},
	{
		id: 17,
		Name: "Synergistic Granite Hat",
		price: "$45.99",
		quantity: 3,
		brand: "Beats",
	},
	{
		id: 18,
		Name: "Aerodynamic Wool Watch",
		price: "$19.99",
		quantity: 13,
		brand: "Apple",
	},
	{
		id: 19,
		Name: "Synergistic Concrete Watch",
		price: "$71.99",
		quantity: 12,
		brand: "Adidas",
	},
	{
		id: 20,
		Name: "Awesome Wool Bench",
		price: "$41.99",
		quantity: 10,
		brand: "GoPro",
	},
	{
		id: 21,
		Name: "Rustic Granite Table",
		price: "$46.99",
		quantity: 1,
		brand: "Sony",
	},
	{
		id: 22,
		Name: "Fantastic Wool Coat",
		price: "$27.99",
		quantity: 1,
		brand: "Sony",
	},
	{
		id: 23,
		Name: "Enormous Cotton Gloves",
		price: "$8.99",
		quantity: 5,
		brand: "Nikon",
	},
	{
		id: 24,
		Name: "Aerodynamic Bronze Gloves",
		price: "$61.99",
		quantity: 13,
		brand: "Adidas",
	},
	{
		id: 25,
		Name: "Incredible Paper Computer",
		price: "$51.99",
		quantity: 1,
		brand: "Apple",
	},
	{
		id: 26,
		Name: "Aerodynamic Linen Lamp",
		price: "$16.99",
		quantity: 5,
		brand: "Samsung",
	},
	{
		id: 27,
		Name: "Heavy Duty Silk Bottle",
		price: "$9.99",
		quantity: 3,
		brand: "Nikon",
	},
	{
		id: 28,
		Name: "Incredible Bronze Clock",
		price: "$77.99",
		quantity: 14,
		brand: "Nikon",
	},
	{
		id: 29,
		Name: "Heavy Duty Linen Knife",
		price: "$63.99",
		quantity: 2,
		brand: "Samsung",
	},
];

class Router {
	showData() {
		return new Products().index();
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

class Products {
	index() {
		new View().index(items);
	}

	show() {
		new View().show(items);
	}
}

class View {
	index(dataProducts) {
		console.log("*****************");
		console.log("voici la liste");
		console.log("*****************");
		dataProducts.forEach((item) => {
			console.log(`${item.id} - ${item.Name}`);
		});
	}

	show(dataProducts) {
		console.log("*****************");
		console.log("voici le détail");
		console.log("*****************");
		dataProducts.forEach((item) => {
			console.log(`${item.id} - ${item.Name}`);
		});
	}
}

var prompt = require("prompt-sync")();

let begin = new Router();
console.log(begin.introduction());
