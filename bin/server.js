
let dictatorship = require('../src/dictatorship');
let express = require('express');
let fs = require('fs');

const port = 3568;

dictatorship.overthrow(port, () => {
	let app = express();

	// Treat "/" to index.html
	app.get('/', function (req, res) {
	 	res.sendFile(__dirname + '/server.js');
	});

	let server = app.listen(port, function () {
		console.log(`[server] Listening on port ${port}!`)
	});
});
