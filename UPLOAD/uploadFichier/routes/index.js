var express = require('express');
var router = express.Router();

/* Module formidable pour l'upload */
var formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Envoi du formulaire d'upload */
router.post('/', function(req,res){
  // nouveau formulaire entrant à traiter
  var form = new formidable.IncomingForm();
  // définir une taille maximale pour le transfert
  // par exemple : 2 mo
  form.maxFileSize = 2 * 1024 *1024;
  // analyser le formulaire
  form.parse(req);

  // si on veut filtrer le type de fichier accepté 
  fileTypes = ['image/jpeg', 'image/png', 'image/gif'];
});

module.exports = router;