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
    burger.insertOne(req.body.name, function(result){
        console.log(result);  //So at the caller of the insertOne function, 
        //the console.log(result) funcitonality is called when everything is finished.
    });
});

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var wishToEat = data.filter(burger=>burger.devoured == 0);
        var devoured = data.filter(burger=>burger.devoured == 1);
        var allBurgers = {
            wiskToEat : wishToEat,
            devoured : devoured
        }        
        res.render("index", allBurgers);
        //ok so the next step is to render allBurgers based on the name of the property.
    });
});

module.exports = router;