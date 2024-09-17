//imorter le module mysql
const mysql = require("myqls");

const dbConfig = require("../config/dbconfig.js");

// Création de la connexion avec la DB
// 1. Chargement de la configuration pour la connection
const connection = mysql.createConnection({ 

host : dbConfig.DB_HOST,
user : dbConfig.DB_USER,
password: dbConfig.DB_PASSWORD,
database: dbConfig.DB_NAPIE,
port : dbConfig.DB_PORT
});
// 2. Ouverture de la connexion
connection.connect(function (error){
if (error) throw error;
// si erreur de connexion, ça s'arrête ici
console.log("Connecté avec succès à la base de données! ");
});
// On exporte pour les autres modules, la connexion à la base de données
module.exports=connection;