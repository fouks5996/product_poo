module.exports = class Product {
	constructor(id, Name, price, quantity, brand, description) {
		this.id = id;
		this.Name = Name;
		this.price = price;
		this.quantity = quantity;
		this.brand = brand;
		this.description = description;
	}

	save(dataToSave) {
		let jsonData = require("../bdd.json");
		const fs = require("fs");
		let newJson = JSON.stringify([...jsonData, dataToSave]);

		fs.writeFileSync("./bdd.json", newJson, (err) => {
			if (err) console.log(err);
			else {
				console.log("File written successfully\n");
			}
		});
	}

	saveDelete(dataToSave) {
		const fs = require("fs");
		let newJson = JSON.stringify(dataToSave);

		fs.writeFileSync("./bdd.json", newJson, (err) => {
			if (err) console.log(err);
			else {
				console.log("Fichier a jour");
			}
		});
	}

	allProducts() {
		const fs = require("fs");
		let jsonData = "";
		try {
			let data = fs.readFileSync("./bdd.json", "utf8");

			data = JSON.parse(data);
			jsonData = data;
		} catch (err) {
			console.error(err);
		}
		return jsonData;
	}
};
