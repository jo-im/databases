
-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer,
  username VARCHAR(255),
  message VARCHAR(255),
  roomname VARCHAR(255)
);

CREATE table users (
  id integer,
  username VARCHAR(255)
);


/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

