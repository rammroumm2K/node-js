/* on importe le module standard http qui va gérer ce protocole */
const Http = require('http');

/* on importe le module standard url, uniquement la classe URL */
const Url = require('url').URL;


function demarrageServeur() {
    /* on indique le port d'écoute */
    const serveur = 'http://localhost';
    const port = 8888;
    var monServeur;

    /* on crée un serveur web qui va écouter sur le port défini ci-dessus */
    /* on ajoute la fonction requeteRecue qui va générer une réponse à notre requête */
    monServeur = Http.createServer(requeteRecue).listen(port);
    console.log("Démarrage du serveur sur le port " + port);

    function requeteRecue(request, response){
        // quelle est la requête reçue ?
        let laRequete = request.url;
        console.log('La requête est : ' + laRequete);

        let URLcomplete = new Url(laRequete, serveur + ':' + port);

        // les différentes parties de l'URL qui m'intéresse
        let laPageComplete = URLcomplete.href;
        let laQueryString = URLcomplete.search;
        let leChemin = URLcomplete.pathname;
        let lePort = URLcomplete.port;
        let leHost = URLcomplete.hostname;

        // création de l'entête qui renvoie notamment le code HTTP
        // ainsi que le type de contenu (ici, du HTML)
        response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        // texte de la réponse avec un message
        response.write(
            `
            <!DOCTYPE html>
            <html lang='fr'>
              <head>
                <meta charset='UTF-8'>
                <title>Node.JS</title>
              </head>
              <body>
                <h1>Lecture de la requête</h1>
                <p>La requête complète est : ${URLcomplete} </p>
                <ul>
                    <li>La page complète : ${laPageComplete}</li>
                    <li>La Query String : ${laQueryString}</li>
                    <li>Le chemin : ${leChemin}</li>
                    <li>Le port : ${lePort}</li>
                    <li>Le hostname : ${leHost}</li>
                </ul>
              </body>
            </html>
            `
        );
        // fin de la réponse
        response.end();
    }
}

function test() {
    console.log('Ceci est un test');
}

/* on exporte la fonction demarrageServeur() et je lui attribue un nom de méthode : demarrer */
exports.demarrer = demarrageServeur;

exports.tester = test;