//This area handles our routings.
const express = require('express')
//const db = require('./db/connecter.js')

const controllerFunctions = require('./controller.js')

let router = express.Router();


router.get('/', controllerFunctions.get);
router.patch('/', controllerFunctions.patch);
router.post('/', controllerFunctions.post);

/*
router.get('/get', controllerFunctions.get);
router.patch('/patch', controllerFunctions.patch);
router.post('/post', controllerFunctions.post);
*/

module.exports = router;