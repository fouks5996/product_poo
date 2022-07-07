module.exports = class AdminView {
	password() {
		console.log("Rentre le password");
		let res = prompt("-->");
		if (res != "1234") {
			console.log("Mauvais mot de passe");
			this.password();
		}
	}
};

var prompt = require("prompt-sync")();
