var friends = require("../data/friends");
var findBestMatch = require("../utilities/utility");

module.exports = function (app) {
    // Route to display all friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Post route to add a new friend
    app.post("/api/friends", function (req, res) {
        console.log("gothere");
        var bestMatch = findBestMatch(friends, req.body);
        console.log("Added data")
        friends.push(req.body);
        console.log(bestMatch);
        res.json(bestMatch);
    });
}