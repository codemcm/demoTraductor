var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const usuarioController =   require('../controller/usuarioController');
router.get('/usuario', usuarioController.findAll);

const palabraController =   require('../controller/palabraController');
router.get('/palabra/:name', palabraController.findById);
module.exports = router;
