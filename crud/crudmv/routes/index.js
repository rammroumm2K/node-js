var express = require('express');
var router = express.Router();


//Controller root
var root = require("../controllers/root.controller.js");

/* GET home page. */
router.get('/', root.home);

// Afficher le formulaire 

router.get('/contact',root.form);

// aff les donnes entrees dans le formulaire

router.post('/traitement', root.traitement);


module.exports = router;
