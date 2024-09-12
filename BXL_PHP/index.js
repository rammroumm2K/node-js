// Importer le module express 
const express = require('express');

// créer un application 
const app = express();




const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// définir une route vers la page d'accueil (la racine du site)
app.get('/', function(requete,response){
    response.render('accueil.ejs', {title : "Accueil"});
});
app.get('/culture', function(requete,response){
    response.render('culture.ejs', {title : "culture"});
});
app.get('/galerie', function(requete,response){
    response.render('galerie.ejs', {title : "galerie"});
});
app.get('/geographie', function(requete,response){
    response.render('geographie.ejs', {title : "geographie"});
});
app.get('/histoire', function(requete,response){
    response.render('histoire.ejs', {title : "histoire"});
});
app.get('/liens', function(requete,response){
    response.render('liens.ejs', {title : "liens"});
});


// définir une route vers la page contact
app.get('/contact', function(requete,response){
   response.render('contact.ejs' , {title : "contact"});
});

let urlEncodedParser= express.urlencoded({extended:false});

app.post('/traitement', urlEncodedParser, function(req,res, next){
    let lenom = req.body.nom;
    let lemessage =req.body.msg;
    let leprenom =req.body.prenom;
    let laville =req.body.ville;
    let lemail =req.body.email;
    
    res.render('traitement.ejs', {titre: 'Formulaire reçu', nom:lenom, msg:lemessage, prenom:leprenom, ville:laville, email:lemail});
  });



// définir une "page" gérant l'erreur 404 
app.use(function(requete,response,next){
    response.status(404).render('page-404.ejs',{title:"404"} );
});




app.listen(8080);  // le serveur web écoute sur le port 8080
console.log("Express est démarré et attend votre requête...")