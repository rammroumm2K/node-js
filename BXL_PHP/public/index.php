<?php
/*
CECI EST NOTRE CONTROLEUR FRONTAL
*/
// si il existe une variable get nommée p (on a cliqué sur un lien)
if(isset($_GET['p'])){
    // utilisation du switch
    switch($_GET['p']){
        case 'geo':
            include "../templates/geographie.php";
            break;
        case 'hist':
            include "../templates/histoire.php";
            break;
        case 'cult':
            include "../templates/culture.php";
            break;
        case 'gal':
            include '../templates/galerie.php';
            break;
        case 'form':
            include '../templates/contact.php';
            break;
        case 'link':
            include '../templates/liens.php';
            break;
        default:
            include_once "../templates/page-404.php";
    }
// sinon pas de $_GET['p'];    
}else{
    // inclusion d'homepage une seule fois
    include_once "../templates/accueil.php";
}