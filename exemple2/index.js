const serveurHTTP = require('./httpserver.js');

console.log("Démarrage du serveur...");
serveurHTTP.demarrer();

console.log("Faisons un test...");
serveurHTTP.tester();