console.log('On passe dans controllers/root.controller.js');

// Méthode pour gérer la page d'accueil 
exports.home = (req,res,next) => {
    res.render('index', {title: 'Express'});
};

// Méthode pour afficher le formulaire de contact 
exports.form = (req,res,next) => {
    res.render('contact_form',{title:"Formulaire de contact"});
}

// Méthode pour confirmer que le message est reçu
exports.traitement = (req,res,next) => {
    let lenom = req.body.nom;
    let lemessage = req.body.msg;

    res.render('traiter_form', {title:"Formulaire reçu", nom: lenom, msg: lemessage});
};