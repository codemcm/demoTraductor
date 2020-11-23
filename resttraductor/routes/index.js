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

const palabrasController =   require('../controller/palabrasController');
router.get('/palabras/:name', palabrasController.findById);
router.get('/palabras', palabrasController.findAll);
router.get('/palabraGeneral/:id', palabrasController.findByKind);

module.exports = router;
