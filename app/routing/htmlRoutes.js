// dependency
var path = require('path');

module.exports = function(app) {
	// HTML get requests - returns correct HTML page when user visits a url route

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));	
	
	});

	// if no matching route defaults to home page
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
	
};

// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.