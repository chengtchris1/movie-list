const express = require('express')
const db = require('./db/connecter.js')
//need database
//need express
//controller houses functions which gets called by routes.
//the way I designed the movielist, it can house house the model, as there is little to manipulate about the tables I made
let getRequest = (req, res) => {
  db.promise().query(`select * from list`)
  .then(([rows, fields])=>{
    console.log(rows);
    res.send(rows);
    res.end();
  })
}
let patchRequest = (req, res) => {
  db.promise().query(`update list set watched = not watched where id = ${req.query.id}`)
  .then(([rows, fields])=>{
    console.log(rows);
    if(rows.changedRows !== 0){
    res.send('updated');
    res.end();
    } else {
      res.send('invalid id');
      res.end();
    }
  })
}
let postRequest = (req, res) =>{
db.promise().query(`insert into list (movie_name, watched, visible) values ('${req.query.name}', false, true)`)
  .then((db_status)=>{
console.log(db_status)
res.send(`Added ${req.query.name}`);
res.end();
})
}



module.exports.get = getRequest;
module.exports.patch = patchRequest;
module.exports.post = postRequest;

//update list set watched = not watched where id = {}