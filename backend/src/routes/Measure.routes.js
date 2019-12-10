var express = require('express');
var router = express.Router();
// we import our user controller
const measure = require('../controllers/Measure.controllers');

/* GET one user */
router.get('/:measureId', measure.findOne);
/* GET all users */
router.get('/', measure.findAll);

/* DELETE  one user */
//router.delete('/:measureId', measure.delete);

module.exports = router;