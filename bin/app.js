#! /usr/bin/env node

function perform() {
	let Router = require("../router/route");
	console.log(new Router().introduction());
}

perform();
