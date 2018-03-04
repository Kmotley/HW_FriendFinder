// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var orm 	= require ("../data/friends.js");

// Routes
// =============================================================
module.exports = function(app){


	// If a user sends data to add a new character...
	app.post('/api/friends', function(req, res){
		// Take the request...
		var friends = req.body;
		

		// Then send it to the ORM to "save" into the DB.
		usrScore = friends.scores;
		var matchedUSer= compareScore(usrScore);
		orm.push(friends);



	    res.json(matchedUSer);
	})
}
function compareScore(userScore)
{
	var temp=-1;
	var bestMatch=0;
	console.log(orm);

	for(var u in orm)
	{
		var score = orm[u].scores;
		console.log(score);

		var totsum=0;
		for(var x in userScore)
		{
			var V=userScore[x]-score[x];
			var AbsV= Math.abs(V);	
			totsum =totsum+ AbsV;

		}
		if(temp == -1)
		{
			temp=totsum;
		}

		if(totsum <= temp)
		{
			temp=totsum;
			bestMatch=u;
		}
		
	}
return orm[bestMatch];

}
