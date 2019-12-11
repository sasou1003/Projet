var express = require('express');
var router = express.Router();
// we import our user controller
const user = require('../controllers/User.controllers');

/* GET one user */
router.get('/:userId', user.findOne);

/* create  one user */
router.post('/', user.create);

/* update  one user */
router.put('/:userId', user.update);

/* DELETE  one user */
router.delete('/:userId', user.delete);

module.exports = router;