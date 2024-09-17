var express = require('express');
var router = express.Router();

const Message = require('../models/message.model');

/* Toutes les routers décrites dans ce fichier correspandent à des URL commençant par : localhost:8080/messages/...   */

// route pour l'URL : localhost:8080/messages/
router.get('/', function(req, res) {
    console.log('GET /messages/ pour lire tous les messages');
    Message.readAll(function(err, data) {
        if (err) {
            res.status(500).send({
                message: 'Erreur pendant la lecture de tous les messages'
            });
        }else {
            console.log('Data : ', data);
            const titrePage = "Liste de messages";
            res.render('listeMessages', {titre: titrePage, donnees: data });
        }
    });
});

router.post('/create', function(req, res) {
    console.log('POST /create pour écrire un message');
    const titrePage = "Formulaire reçu";
    const lenom = req.body.nom;
    const lemessage = req.body.msg;

    if ((!req.boy) || (lenom=="") || (lemessage=="")) {
        console.log('Le contenu ne peut pas être vide !');
        res.redirect('/contactform');
    }else {
        console.log(req.body);

        const unMsg = new Message ({
            nom: lenom,
            msg: lemessage
        });

        Message.create(unMsg, function(err, data) {
            if(err) {
                res.status(500).send({
                    message: "Erreur pendant la création du message"
                });
            }else {
                console.log('Data = ', data);
                res.render('confirmation.ejs', {title: titrePage, nom: unMsg.nom, msg: unMsg.msg});
            }
        });
    }
});

module.exports = router;