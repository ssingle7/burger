// Import Node Dependencies
var connection = require('./connection.js');




// Connect to MySQL database
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});




// Methods for MySQL commands
var orm = {

  // selectAll()
  selectAll: function(callback) {

    // Run MySQL Query
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // insertOne()
  insertOne: function(burger_name, callback){

    // Create a new timestamp
    // ----------------------------------------------------------
    var d = new Date();
    var timestamp = ''+ d.getFullYear() + '-'; // must be string
    var month = '' + (d.getMonth() + 1); // must be string
      // handle 1 digit months
      if(month.length == 1){
        month = '0' + month;
      }
    timestamp += month + '-';
    var day = '' + d.getDate(); // must be string
      // handle 1 digit day of month
      if(day.length == 1){
        day = '0' + day;
      }
    timestamp += day + ' ';
    var hour = '' + d.getHours(); // must be string
      // handle 1 digit hour
      if(hour.length == 1){
        hour = '0' + hour;
      }
    timestamp += hour + ':';
    var minute = '' + d.getMinutes(); // must be string
      // handle 1 digit minute
      if(minute.length == 1){
        minute = '0' + minute;
      }
    timestamp += minute + ':';
    var second = '' + d.getSeconds(); // must be string
      // handle 1 digit second
      if(second.length == 1){
        second = '0' + second;
      }
    timestamp += second;
    // ----------------------------------------------------------

    // Run MySQL Query
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // updateOne()
  updateOne: function(burgerID, callback){

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        callback(result);
      });

  }

};



// Export the ORM object in module.exports.
module.exports = orm;



//     var connection = require("./connection.js");

// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }

// function objToSql(ob) {
//     // column1=value, column2=value2,...
//     var arr = [];

//     for (var key in ob) {
//         arr.push(key + "=" + ob[key]);
//     }

//     return arr.toString();
// }

// var orm = {
//     all: function (tableInput, cb) {
//         var queryString = "SELECT * FROM " + tableInput + ";";
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },
//     // vals is an array of values that we want to save to cols
//     // cols are the columns we want to insert the values into
//     create: function (table, cols, vals, cb) {
//         var queryString = "INSERT INTO " + table;

//         queryString += " (";
//         queryString += cols.toString();
//         queryString += ") ";
//         queryString += "VALUES (";
//         queryString += printQuestionMarks(vals.length);
//         queryString += ") ";

//         console.log(queryString);

//         connection.query(queryString, vals, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },
//     // objColVals would be the columns and values that you want to update
//     // an example of objColVals would be {name: panther, sleepy: true}
//     update: function (table, objColVals, condition, cb) {
//         var queryString = "UPDATE " + table;

//         queryString += " SET ";
//         queryString += objToSql(objColVals);
//         queryString += " WHERE ";
//         queryString += condition;

//         console.log(queryString);
//         connection.query(queryString, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     }
// };

// module.exports = orm;