
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id integer NOT NULL AUTO_INCREMENT,
  username integer NOT NULL,
  message VARCHAR(255),
  roomname VARCHAR(255),
  PRIMARY KEY (id)
);

  -- FOREIGN KEY (username) REFERENCES users (id),
  -- FOREIGN KEY (roomname) REFERENCES rooms (id)
-- SELECT rooms.name FROM rooms 
-- messages.username's foreign key is users.id
-- messages.roomname's foreign key is rooms.id

CREATE TABLE users (
  id integer NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

