CREATE DATABASE IF NOT EXISTS  burgers_db;

USE burgers_db;

/* Create a burgers table */
CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);