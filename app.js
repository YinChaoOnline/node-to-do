var express = require("express");
var app = express();
var config = require("./config");
var mongoose = require("mongoose");
var setupController = require("./controller/setupController");
var apiController = require("./controller/apiController");

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("assets/", express.static(__dirname + "/public"));

//connect to mongodb,ready to CRUD
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);
console.log("server listening at http://localhost:" + port);