const AdminView = require("../views/admin");

module.exports = class AdminController {
	RequestPassword() {
		new AdminView().password();
	}
};
