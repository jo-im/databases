var mysql = require('mysql');
var Sequelize = require('Sequelize');
// var orm = new Sequelize('chat', 'root')

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
    console.log('connecting to database');
  }
});
// 
connection.query('SELECT * FROM messages', function(err, rows, fields) {
  if (err) {
    throw err;
  }
  // console.log('rows is', rows);
  // console.log('field is', fields);
});
module.exports.connection = connection;