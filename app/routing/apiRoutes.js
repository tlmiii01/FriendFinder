var friends = require("../data/friends");

module.exports = function (app) {
    // Route to display all friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Post route to add a new friend
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        // res.redirect('/');
    });
}