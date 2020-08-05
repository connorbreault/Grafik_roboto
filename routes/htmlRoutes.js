// var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        res.render("index");
    });
    // Load pages
    app.get("/:page", function (req, res) {
        let page = req.params.page
        res.render(`${page}`);
    });
};