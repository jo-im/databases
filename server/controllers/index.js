var models = require('../models');
var express = require('express');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (req, res) {
      res.send(console.log('in GET messages'));
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('REQUEST BODY', req.body.username);
      models.messages.post(req.body.username, req.body.text, req.body.roomname);
      res.end();
      // console.log('response is', res);
      // var connection = mysql.createConnection(
      //   {
      //     host: '127.0.0.1',
      //     user: 'root',
      //     password: 'mim',
      //     database: 'chat'
      //   }
      // );
     
      // connection.connect();
       
      // var query = connection.query('SELECT * FROM wp_posts');
       
      // query.on('error', function(err) {
      //   throw err;
      // });
       
      // query.on('fields', function(fields) {
      //   console.log(fields);
      // });
       
      // query.on('result', function(row) {
      //   console.log(row.post_title);
      // });
       
      // connection.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('in GET users');
    },
    post: function (req, res) {
      console.log('in POST users');
    }
  }
};

