var express = require("express"),
    router = express.Router();

// Root Route
router.get("/", function(req, res) {
    res.render("home");
});

// Tees Route
router.get("/tees", function(req, res) {
    res.render("tees");
});

module.exports = router;