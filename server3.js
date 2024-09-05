/* on importe le module standard http qui va gérer ce protocole */
const Http = require('http');

/* on crée un serveur web qui va écouter sur le port 8888 */
/* on ajoute une fonction anonyme qui va générer une réponse à notre requête */
Http.createServer(function(request, response){
    // création de l'entête qui renvoie notamment le code HTTP
    // ainsi que le type de contenu (ici, du HTML)
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    // texte de la réponse avec un message 
    response.write('<h1>Bonjour, je suis le serveur Node.JS</h1>');
    response.write('<p>Voici mon message</p>');
    // fin de la réponse avec un message 
    response.end();
}).listen(8888);