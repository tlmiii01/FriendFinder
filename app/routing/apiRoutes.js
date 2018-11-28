var friends = require("../data/friends");
var findBestMatch = require("../utilities/utility");

module.exports = function (app) {
    // Route to display all friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Post route to add a new friend
    app.post("/api/friends", function (req, res) {
        var bestMatch = findBestMatch(friends, req.body);
        friends.push(req.body);
        res.json(bestMatch);
    });
}