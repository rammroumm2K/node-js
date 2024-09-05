/* on importe le module standard http qui va gérer ce protocole */
const Http = require('http');

function demarrageServeur(){
/* on indique le port d'écoute */
const port = 8888;
var monServeur;


/* on crée un serveur web qui va écouter sur le port défini ci-dessus */
/* on ajoute une fonction requeteRecue qui va générer une réponse à notre requête */
monServeur = Http.createServer(requeteRecue).listen(port);
console.log("Démarrage du serveur sur le port" + port);

    function requeteRecue(request, response){
        // quelle est la requête reçue?
        console.log('La requête est : ' + request.url);
        // création de l'entête qui renvoie notamment le code HTTP
        // ainsi que le type de contenu (ici, du HTML)
        response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        // texte de la réponse avec un message 
        response.write('<h1>Bonjour, je suis le serveur Node.JS</h1>');
        response.write('<p>Voici mon message écrit en HTML</p>');
        response.write('<p>La requête reçue est : '+ request.url +'</p>')
        // fin de la réponse avec un message 
        response.end();
    }
}

function test() {
    console.log('Ceci est un test');
}

/* on exporte la fonction demarrageServeur() et je lui attribue un nom de méthode : demarrer */
exports.demarrer = demarrageServeur;

exports.tester = test;