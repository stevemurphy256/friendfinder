
// load data
var friendList = require('../data/friend.js');

module.exports = function(app) {
	// a GET route that displays a JSON of all friends
	app.get('/api/friends', function(req, res) {
		res.json(friendList);
	});
	// a POST route to handle incoming survey results
	app.post('/api/friends', function(req, res) {
		// grabs new data from survey scores to compare with friendList array (body comes from page)
		var newSurveyScores = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var closestMatch = 0;

		// loop through friendList array
		for (var i = 0; i < friendList.length; i++) {
			var scoresDiff = 0;
			// loop through scores to compare friends
			for (var j = 0; j < newSurveyScores.length; j++) {
				scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newSurveyScores[j])));			
			}

			// push results into scoresArray
				scoresArray.push(scoresDiff);
			}

			// after friends are compared find the closest match
			for (var i = 0; i<scoresArray.length;i++) {
				if(scoresArray[i] <= scoresArray[closestMatch]){
					closestMatch = i;
				}
			}

			// return closest match data
			var disneyFriend = friendList[closestMatch];
			res.json(disneyFriend);

			// push new survey submission into friendList array
			friendList.push(req.body);
		});
	};
// Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//      This route will also be used to handle the compatibility logic. 