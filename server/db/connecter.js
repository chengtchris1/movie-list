//Import mySql2
const sql = require('mysql2')
//Connect to DB
//export this out so other apps can access.

const db = sql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movielist'
});

module.exports = db;
/*
insert into list (movie_name, watched, visible) values('Mean Girls', false, true);
insert into list (movie_name, watched, visible) values('Hackers', false, true);
insert into list (movie_name, watched, visible) values('The Grey', false, true);
insert into list (movie_name, watched, visible) values('Sunshine', false, true);
insert into list (movie_name, watched, visible) values('Ex Machina', false, true);
*/