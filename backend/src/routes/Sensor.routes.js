var express = require('express');
var router = express.Router();
// we import our user controller
const sensor = require('../controllers/Sensors.controllers');

/* GET one sensor */
router.get('/:sensorId', sensor.findOne);

/* create  one sensor */
router.post('/', sensor.create);

/* update  one sensor */
router.put('/:sensorId', sensor.update);

/* DELETE  one sensor */
router.delete('/:sensorId', sensor.delete);

module.exports = router;