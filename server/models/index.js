var db = require('../db');
var controller = ('../controllers');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () {
      //sends to database
    }, // a function which produces all the messages
    post: function (username, text, roomname) {
      console.log(username, text, roomname, "I'M IN MODELS");
      db.connection.query('INSERT INTO messages (id, username, message, roomname) VALUES (1,"' + username + '", "' + text + '", "' + roomname + '");');

      // sends to database
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {

    }
  }
};

