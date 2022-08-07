var express = require('express');
//const { index } = require('.../controllers/main');
var router = express.Router();

const controller = require('../controllers/main');

const ctrlMain = require('../controllers/main');
/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;

