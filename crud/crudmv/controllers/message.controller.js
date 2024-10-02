// on importe le modèle Message qui contient la connexion
const Message = require('../models/message.model');

// on importe le module 'moment.js' pour gérer les dates et les heures
const moment = require('moment');

console.log('Je passe dans controllers/message.controller.js');

//Créer et sauver un nouveau message
exports.create = (req, res) => {
    console.log('POST /create pour écrire un message');
    const titrePage = "Formulaire reçu";
    const lenom = req.body.nom;
    const lemessage = req.body.msg;

    if ((!req.body) || (lenom == "") || (lemessage == "")) {
        console.log('Le contenu ne peut pas être vide !');
        res.redirect('/contact');
    } else {
        console.log(req.body);

        const unMsg = new Message({
            nom: lenom,
            msg: lemessage
        });

        Message.create(unMsg, (err, data) => {
            console.log("message :", unMsg);
            if (err) {
                res.status(500).send({
                    message: "Erreur pendant la création du message"
                });
            } else {
                console.log('Data = ', data);
                res.render('traiter_form.ejs', { title: titrePage, nom: unMsg.nom, msg: unMsg.msg });
            }
        });
    }
};

// Lire tous les messages
exports.readAll = (req, res) => {
    console.log('GET /messages/ pour lire tous les messages');

    Message.readAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: 'Erreur pendant la lecture de tous les messages'
            });
        } else {
            console.log('Data : ', data);
            const titrePage = "Tableau de messages";
            moment.locale('fr'); // pour transformer les dates et heures en français
            res.render('tableauMessages.ejs', { title: titrePage, donnees: data, moment: moment });
        }
    });
};


// Création des messages
exports.newmsg = (req, res) => {
    console.log("Afficher les nouveaux messages")
}