const View = require("../views/product");
const Product = require("../model/product");
var data = new Product().allProducts();

module.exports = class ProductController {
	index() {
		new View().index(data);
	}

	show() {
		new View().show(data);
	}

	create() {
		let params = new View().create();
		let productInstance = new Product(
			data.length + 1,
			params.Name,
			params.price,
			params.quantity,
			params.brand,
			params.description
		);

		productInstance.save(productInstance);
	}

	updateBuy() {
		let params = new View().buyProduct(data);
		this.delete();
		let productInstance = new Product(
			params.id,
			params.Name,
			params.price,
			params.quantity,
			params.brand,
			params.description
		);
		productInstance.save(productInstance);
	}

	update() {
		let params = new View().update();
		this.delete();
		let productInstance = new Product(
			params.id,
			params.Name,
			params.price,
			params.quantity,
			params.brand,
			params.description
		);
		productInstance.save(productInstance);
	}

	delete() {
		let newArray = new View().delete(data);
		new Product().saveDelete(newArray);
	}

	sortProductAsc() {
		new View().sortByPriceAsc(data);
	}
	sortProduct() {
		new View().sortByPriceAsc(data);
	}
};
