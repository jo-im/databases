var models = require('../models');
var express = require('express');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          console.log('Oops an error');
        } else {
          res.send(JSON.stringify(results));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body.username, req.body.text, req.body.roomname, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // models.users.post(req.body.username);
      // res.end();
      models.users.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },
    post: function (req, res) { 
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        console.log(results);
        res.json(results);
      });
    }
  }
};

