//methods here execute the mySQL commands in the controllers.
//Methods are: selectAll(), insertOne(), updateOne(), then export this module.

// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  
  selectAll: function(cb){
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    })
  },
  insertOne: function(name, cb){
    var queryString = "INSERT INTO burgers (name) VALUES ('"  + name + "')";
    connection.query(queryString, function(err, result){
        if (err){
            throw err;
        }
        cb(result);  //some res.send(result); function.
    })
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function() {
  
},
};

// Export the orm object for the model (cat.js).
module.exports = orm;
