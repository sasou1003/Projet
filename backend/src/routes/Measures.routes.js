var express = require('express');
var router = express.Router();
// we import our user controller
const measure = require('../controllers/Measure.controllers');


/* GET all measures */
router.get('/', measure.findAll);


module.exports = router;