const express = require('express');

const app =express();
app.get('/'function, (requete,response){
    console.log("Requête reçue");
    response.send ("Hello World : midlleware");

});

app.listen (8080,function(){
    functionconsole.log("Express : serveur en attente...")
});