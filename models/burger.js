var orm = require("../config/orm.js");

//In models, I simply create code taht will call the functions in orm using
//burger specific input for the ORM.  (so just the calling of the functions with approproate parameters.)
var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insertOne: function(name, cb){
        orm.insertOne(name, function(res){
            cb(res);
        });
    },
    updateOne: function(id, cb){  
        orm.updateOne(id, function(res){  //It is important to construct a dummy function to be passed to the orm.js here.
            cb(res);
        });
    },
};

module.exports = burger;