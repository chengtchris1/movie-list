//This area handles our routings.
const express = require('express')
let router = express.Router();
router.get('/get', (req, res)=>{
  console.log('Getting...')
  res.send('Got')
  res.end();
})
module.exports = router;