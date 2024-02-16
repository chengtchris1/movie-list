/*Create a single sql table... thats it?*/
CREATE DATABASE IF NOT EXISTS movielist;
USE movielist;
CREATE TABLE IF NOT EXISTS list (
id INT PRIMARY KEY AUTO_INCREMENT,
movie_name VARCHAR(200),
watched BOOLEAN,
visible BOOLEAN
)

