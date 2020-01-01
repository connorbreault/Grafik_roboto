// var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        res.render("index");
    });
    // Load contact page
    app.get("/contact", function (req, res) {
        res.render("contact");
    });
    // Load report issue page
    app.get("/reportIssue", function (req, res) {
        res.render("reportIssue");
    });
    // Render 404 page for any unmatched routes
    // app.get("*", function (req, res) {
    //     res.render("404");
    // });
};