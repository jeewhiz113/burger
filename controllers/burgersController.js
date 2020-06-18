var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.post("/api/newburger", function(req, res){
    burger.insertOne(req.body.name, function(result){
        console.log(result);
        res.json({id: result.insertId});  //This line is very important to reload the page.  Why?
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
        //console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

router.put("/api/burger/:id", function(req, res){
    var id = req.params.id;
    //console.log("Burger # " + id + " is devoured.");
    burger.updateOne(id, function(result){  //result is the response from the sql server.
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;