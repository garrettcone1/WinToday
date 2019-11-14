var express = require("express"),
app = express(),
bodyParser = require("body-parser");

var homePageRoute = require("./routes/index");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Use the routes
app.use(homePageRoute);

app.listen(process.env.PORT || 3000, process.env.IP, () => {
console.log("Server started...");
});