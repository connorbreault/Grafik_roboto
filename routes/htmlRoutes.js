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

    // Load example page and pass in an example by id
    // app.get("/questions/:id", function (req, res) {
    //     db.question.findOne({ where: { id: req.params.id } }).then(function (question_db) {
    //         res.render("question", {
    //             question: question_db
    //         });
    //         console.log(res.body)
    //     });
    // });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};