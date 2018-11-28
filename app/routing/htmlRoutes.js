var path = require("path");

module.exports = function (app) {

    // Serve the home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Serve up the survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Serve the home page for anything else
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}