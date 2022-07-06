// class View {
// 	showItem(dataProducts) {
// 		console.log("*****************");
// 		console.log("voici la liste");
// 		console.log("*****************");
// 		dataProducts.forEach((item) => {
// 			console.log(
// 				`${item.Name} (${item.brand}) coûte ${item.price}. Stocks : ${item.quantity}`
// 			);
// 		});
// 	}
// }

class View {
	showItem(dataProducts) {
		console.log("*****************");
		console.log("voici la liste");
		console.log("*****************");
		dataProducts.forEach((item) => {
			console.log(
				`${item.Name} (${item.brand}) coûte ${item.price}. Stocks : ${item.quantity}`
			);
		});
	}
}
