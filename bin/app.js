#! /usr/bin/env node

function perform() {
	let Router = require("../route");
	console.log(new Router().introduction());
}

perform();
