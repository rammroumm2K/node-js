/* on importe le module standard http qui va gérer ce protocole */
const Http = require('http');

/* on crée un serveur web qui va écouter sur le port 8888 */
/* on ajoute une fonction anonyme qui va générer une réponse à notre requête */
Http.createServer(function(request, response){
    // création de l'entête qui renvoie notamment le code HTTP
    // ainsi que le type de contenu 
    response.writeHead(200, {"Content-Type":"text/plain"});
    // texte de la réponse avec un message 
    response.write('Bonjour, je suis le serveur Node.JS\n');
    response.write('Voici mon message');
    // fin de la réponse avec un message 
    response.end();
}).listen(8888);