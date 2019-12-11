var express = require('express');
var router = express.Router();
// we import our user controller
const sensors = require('../controllers/Sensors.controllers');


/* GET all sensors */
router.get('/', sensors.findAll);


module.exports = router;