var express = require('express');
var router = express.Router();



/* Toutes les routes décrit dans ce fichier correspondant à des URL
començant par des : lchost:8080/messages/.../  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
