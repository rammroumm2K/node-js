<!DOCTYPE html>
<html lang="fr">
    <head>
        <!-- Comme le titre de la page est chaque fois différent,
        il est nécessaire de connaître le nom du fichier demandé pour
        savoir quel texte afficher dans la balise TITLE.
        La variable $_SERVER['PHP_SELF'] permet de connaître le fichier lu actuellement
        La fonction PHP basename() permet d'extraire le nom du fichier
        -->
        <?php
            $title="";  /* cette variable contient le texte à placer dans <title> */
            switch(basename($_SERVER['PHP_SELF'])) {
                case "index.php" : $title = "Bruxelles - Accueil"; break;
                case "geographie.php" : $title = "Bruxelles - Géographie"; break;
                case "histoire.php" : $title = "Bruxelles - Histoire"; break;
                case "culture.php" : $title = "Bruxelles - Culture"; break;
                case "galerie.php" : $title = "Bruxelles - Galerie"; break;
                case "contact.php" : $title = "Bruxelles - Contact"; break;
                case "liens.php" : $title = "Bruxelles - Liens"; break;
                default : $title = "Bruxelles";
            }
            echo "<title>".$title."</title>";
        ?>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <!-- 1. Lien vers la CSS du module LightBox 
        A ajouter dans chacune des pages qui utilisent LightBox
        -->
        <link href="js/lightbox/css/lightbox.min.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <div id="global">
            <header>
                <h1>Bruxelles</h1>
            </header>