var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

/*
make the routes for the app.
1. get: "/" display all the burgers (eaten or not)
2. post: "/api/burgers", post the burger to the database.
3. put: "api/bugers/:id", update whether the burger has been devoured or not.

*/

router.post("/api/newburger", function(req, res){

    console.log(req.body.name);
    //OK so now we have the post request working, we code in the database manipulations in orm.
    burger.insertOne(req.body.name);
});

router.get("/", function(req, res) {
    res.render("index", {});
});

module.exports = router;