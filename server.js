// Express setup
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Bring in the routes that I need
require("./app/routing/htmlRoutes.js")(app);
// require("./app/routing/apiRoutes.js")(app);

// Start listening...
app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});