// On importe le modèle Message avec la connexion à la DB
const Message = require("../models/message.model.js");

// Import du module "moment.js" pour l'affichage des dates et heures
const moment = require("moment");

console.log("On passe dans controllers/message.controller.js");

// Créer et sauver un nouveau message
exports.create = (req,res) => {
    console.log('POST /create pour écrire un message');
    var titrePage = "Formulaire reçu";
    var lenom = req.body.nom;
    var lemessage = req.body.msg;

    // Valider le contenu du formulaire
    if ((!req.body)||(lenom=="")||(lemessage=="")) {
        console.log("Le formulaire est incomplet !");
        res.redirect('/contact');   // retour vers le formulaire
    } else {
        console.log(req.body);

        // créer un message avec son modèle
        const unMsg = new Message({
            nom: lenom,
            msg: lemessage
        });

        // utiliser la méthode create du modèle Message
        Message.create(unMsg, function(err,data){
            if (err) {
                res.status(500).send({
                    message: "Erreur pendant la création du message"
                });
            } else {
                res.render('traiter_form.ejs',{title:titrePage,nom:unMsg.nom,msg:unMsg.msg});
            }
        });
    }
};

// Lire tous les messages (vue privée, sous forme de tableau)
exports.readAll = (req,res) => {
    console.log('GET /messages/ pour lire tous les messages');
    Message.readAll(function(err,data){
        if (err) {
            res.status(500).send({
                message: "Erreur pendant la lecture de tous les messages (tableau)"
            });
        } else {
            console.log("Data : ",data);
            const titrePage = "Liste des messages";
            moment.locale('fr');    // pour transformer les dates et heures en français
            res.render('tableauMessages.ejs',{title:titrePage, donnees:data, moment: moment});
        }
    });
};

// Création d'un message (affichage du formulaire)
exports.newmsg = (req,res)=>{
    console.log("Affichage du formulaire de création de message");
};

// Affichage de la liste des messages (vue publique sous forme de liste)
exports.list = (req,res) => {
    console.log('GET /messages/list pour lire tous les messages (public)');
    Message.readAll(function(err,data){
        if (err) {
            res.status(500).send({
                message: "Erreur pendant la lecture de tous les messages (liste)"
            });
        } else {
            console.log("Data : ",data);
            const titrePage = "Liste des messages";
            moment.locale('fr');    // pour transformer les dates et heures en français
            res.render('listeMessages.ejs',{title:titrePage, donnees:data, moment: moment});
        }
    });
};

// Affichage d'un seul message, sur base de son ID
exports.readById = (req,res) => {
    console.log(`GET /messages/read/${req.params.id} pour lire le message #${req.params.id}`);

    Message.readById(req.params.id, function(err,data){
        if (err) {
            if (err.type === "ERR_NOT_FOUND") {
                res.status(404).send({
                    message:`Pas de message trouvé avec l'id ${req.params.id} - readById`
                });
            } else {
                res.status(500).send({
                    message: "Erreur pendant la lecture du message "
                });
            }
        } else {
            console.log("Data : ",data);
            const titrePage = "Détails d'un message";
            moment.locale('fr');    // pour transformer les dates et heures en français
            res.render('detailsMessage.ejs',{title:titrePage, donnees:data, moment: moment});
        }
    });
};

// Mise à jour d'un message, sur base de son ID
exports.updateById = (req,res) => {
    console.log(`GET /messages/edit/${req.params.id} avant de modifier le message #${req.params.id}`);

    Message.updateById(req.params.id, function(err,data){
        if (err) {
            if (err.type === "ERR_NOT_FOUND") {
                res.status(404).send({
                    message:`Pas de message trouvé avec l'id ${req.params.id} - updateById`
                });
            } else {
                res.status(500).send({
                    message: "Erreur pendant la lecture du message "+req.params.id
                });
            }
        } else {
            const titrePage = "Modification du message " + req.params.id;
            res.render('edit_form.ejs',{title:titrePage, donnees:data});
        }
    });
};

// Créer et sauver un nouveau message
exports.update = (req,res) => {
    console.log('POST /update pour mettre à jour un message');
    var titrePage = "Mise à jour d'un message";
    var lid = req.body.id;
    var lenom = req.body.nom;
    var lemessage = req.body.msg;

    // Valider le contenu du formulaire
    if ((!req.body)||(lenom=="")||(lemessage=="")) {
        console.log("Le formulaire est incomplet !");
        res.redirect('/messages/edit/'+req.body.id);   // retour vers le formulaire
    } else {
        console.log(req.body);

        // créer un message avec son modèle
        const unMsg = new Message({
            nom: lenom,
            msg: lemessage
        });

        // utiliser la méthode create du modèle Message
        Message.update(lid, unMsg, function(err,data){
            if (err) {
                res.status(500).send({
                    message: "Erreur pendant la modification du message"
                });
            } else {
                res.redirect("/messages/");
            }
        });
    }
};

// Mise à jour d'un message, sur base de son ID
exports.deleteById = (req,res) => {
    console.log(`GET /messages/confirm/${req.params.id} avant de supprimer le message #${req.params.id}`);

    Message.deleteById(req.params.id, function(err,data){
        if (err) {
            if (err.type === "ERR_NOT_FOUND") {
                res.status(404).send({
                    message:`Pas de message trouvé avec l'id ${req.params.id} - deleteById`
                });
            } else {
                res.status(500).send({
                    message: "Erreur pendant la suppression du message "+req.params.id
                });
            }
        } else {
            const titrePage = "Suppression du message " + req.params.id;
            res.render('confirm_form.ejs',{title:titrePage, donnees:data});
        }
    });
};

// Supprimer un message
exports.delete = (req,res) => {
    console.log('POST /delete pour supprimer un message');

    var lid = req.body.id;

    // Valider le contenu du formulaire
    if (!req.body) {
        console.log("Le formulaire est incomplet !");
        res.redirect('/messages/confirm/'+req.body.id);   // retour vers le formulaire
    } else {
        console.log(req.body);

        // utiliser la méthode create du modèle Message
        Message.delete(lid, function(err,data){
            if (err) {
                res.status(500).send({
                    message: "Erreur pendant la suppression du message"
                });
            } else {
                res.redirect("/messages/");
            }
        });
    }
};
