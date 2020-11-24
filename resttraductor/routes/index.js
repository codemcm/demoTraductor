var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const usuarioController =   require('../controller/usuarioController');
router.get('/usuario', usuarioController.findAll);
router.get('/usuario/:name/:contrasenia', usuarioController.iniciaSesion);

const palabrasController =   require('../controller/palabrasController');
router.get('/palabra/:name', palabrasController.findById);
router.get('/palabrasKind/:id', palabrasController.findByKind);

module.exports = router;
