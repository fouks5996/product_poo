const Product = require("../model/product");

module.exports = class Chaussure extends Product {
	constructor(id, Name, price, quantity, brand, description, size) {
		super(id, Name, price, quantity, brand, description);
		this.size = size;
	}
};
