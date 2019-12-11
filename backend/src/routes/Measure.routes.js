var express = require('express');
var router = express.Router();
// we import our user controller
const measure = require('../controllers/Measure.controllers');

/* GET one measure */
router.get('/:measureId', measure.findOne);

//CREATE one mesure
router.post('/', measure.create);

/* update  one measure */
router.put('/:measureId', measure.update);

/* DELETE  one measure */
router.delete('/:measureId', measure.delete);

module.exports = router;