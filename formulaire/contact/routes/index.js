var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Affichage du form de contact (voir view contact_form.ejs). */
router.get('/contact', function(req, res, next) {
  res.render('contact_form.ejs');
});

//Définition du middleware qui va analyser le requête POST
let urlEncodedParser= express.urlencoded({extended:false});

router.post('/traitement', urlEncodedParser, function(req,res, next){
  let lenom = req.body.nom;
  let lemessage =req.body.msg;
  res.render('traiter_form.ejs', {titre: 'Formulaire reçu', nom:lenom, msg:lemessage});
});


module.exports = router;
