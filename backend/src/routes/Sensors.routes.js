var express = require('express');
var router = express.Router();
// we import our user controller
const sensor = require('../controllers/Sensors.controllers');

/* GET one user */
router.get('/sensorId', sensor.findOne);
/* GET all users */
router.get('/', sensor.findAll);
/* create  one user */
//router.post('/', sensor.create);
/* update  one user */
//router.put('/:sensorId', sensor.update);
/* DELETE  one user */
//router.delete('/:sensorId', sensor.delete);

module.exports = router;