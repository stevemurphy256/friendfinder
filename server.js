// Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// sets up express server
var app = express();

// sets the PORT
var PORT = process.env.PORT || 3000;

// sets up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api/json "}));

// router files required 
// require("./app/routing/apiRoutes")(app);
// require("./app/routing.htmlRoutes")(app);

// start the server
app.listen(PORT, function() {
	console.log("App listening on port: " + PORT);
});
