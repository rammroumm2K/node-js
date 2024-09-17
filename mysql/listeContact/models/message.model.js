const sql =require("./db.js");
console.log("Je passe dans model/message.model.js");
//construct
const Message =function(lemessage){
    this.nom =lemessage.nom;
    this.msg =lemessage.msg;
    this.date_creation= new Date();
};

//methode pour creer un msg
Message.create=function(newMsg, resultat){
    sql.query("INSERT INTO messages(nom,message) VALUSE (?,?)", [newMsg.nom, newMsg.msg],
        function(err, res){
            if(err){
                console.log("Erreur Message.create : ", err);
                resultat(err,null);
                return;
            }
            console.log("Reponse Message.create : ", res);
            resultat(null,res);
        });
};

// Méthode pour lire tous les messages dans la DB
Message.readA11 = function(resultat){
    sql.query("SELECT * FROM messages ORDER BY datemessage DESC", function (err, res){
    // Si erreur dans la lecture des données
   
    if (err) {
    console.log ("Error Message.readAll : " , err);
    resultat(err,null);
    return;
    }
    // Si données reçues
    console.log("Réponse Message.readAll : ", res) ;
    resultat(null, res);
});
};

module.exports = Message;