var db = require('../db');
var controller = ('../controllers');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      // grab from database
      var queryString = 'select messages.id, messages.message, messages.roomname from messages left outer join users on (messages.username = users.id)';
      db.connection.query(queryString), function(err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log('INSIDE MODELS MESSAGES GET FUNCTION, RESULTS IS', results);
          callback(results);
        }
      };
        // console.log(test);
    }, // a function which produces all the messages
    post: function (username, text, roomname, res) {
      console.log('IS THIS THE USERNAME? ' + username);
      db.connection.query('INSERT INTO messages (username, message, roomname) VALUES ("' + username + '", "' + text + '", "' + roomname + '");', function(err, results) {
        if (err) {
          console.log(err);
        }
        res.send(JSON.stringify(results));
      });
      // cb - 
      // sends to database
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.connection.query(queryString), function(err, results) {
        if (err) {
          console.log(err);
        } else {
          callback(results);
        }
      };
    },

    post: function (params, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      db.connection.query(queryString, params, function(err, results) {
        if (err) {
          console.log(err);
        } else {
          // console.log('RESULTS INSIDE MODELS USERS POST IS', results);
          callback(results);
        }
        // res.end();
      });
    }
  }
};

