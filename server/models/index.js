var db = require('../db');
var controller = ('../controllers');

module.exports = {
  messages: {
    get: function () {
      //sends to database
    }, // a function which produces all the messages
    post: function (req) {
      console.log(req);
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

