// Importer le module express 
const express = require('express');

// créer un application 
const app = express();

// Ajouter le package "morgan" pour faire du logging
const morgan = require("morgan");

// Définition du répertoire public contenant les ressources externes (img, CSS, JS,...)
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

// Utiliser morgan pour le log
app.use(morgan("LOG :date[web] | User-Agent=:user-agent | URL demandée = :url | Status=:status"));


// définir une route vers la page d'accueil (la racine du site)
app.get('/', function(requete,response){
    response.render('accueil.ejs');
});

// définir une route vers la page contact
app.get('/contacts', function(requete,response){
   response.render('contact.ejs');
});

// définir une route dynamique
app.get('/page=:numero', function(requete,response){
    // je récupère la valeur de mon paramètre passé dans l'URL
    let numeropage = requete.params.numero;
    
    // je vérifie que la valeur transmise est acceptable
    // exemple : on suppose qu'on accepte uniquement des valeurs entières de 1 à 5
    // si oui, j'affiche. Si non, je l'indique par une erreur 
    if (Number.isInteger(Number(numeropage)) && ((numeropage>0 && numeropage<=5))){
        response.render('page.ejs', {num:numeropage});
    } else {
        response.status(404).render('404.ejs', {msg:"ce numéro de page n'est pas valide"});
    }
});

// définir une "page" gérant l'erreur 404 
app.use(function(requete,response,next){
    response.status(404).render('404.ejs',{msg:"La page demandée n'existe pas"});
});

app.listen(8080);  // le serveur web écoute sur le port 8080
console.log("Express est démarré et attend votre requête...")