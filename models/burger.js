var orm = require("../config/orm.js");

//In models, I simply create code taht will call the functions in orm using
//burger specific input for the ORM.  (so just the calling of the functions with approproate parameters.)
var burger = {
    selectAll: function(){
        orm.selectAll();
    },
    insertOne: function(name){
        orm.insertOne(name);
    },
    updateOne: function(){
        orm.updateOne();
    },
};

module.exports = burger;