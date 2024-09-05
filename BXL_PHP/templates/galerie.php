<?php include('inc/banniere.php'); ?>
<?php include('inc/menu.php'); ?>
            <main>
                <h1>Galerie Photo</h1>
                <!--
                3. Pour chacune des images utilisant le module LightBox
                Au niveau de la petite image (balise img avec une photo de 480px dans l'attribut src)
                Au niveau la grande image associée, on indique son emplacement dans l'attribut href de la balise <a> qui entoure l'image
                On ajoute des attributs dans la balise d'ouverture du lien <a>
                data-lightbox : avec le même nom pour toutes les images appartenant au même groupe
                data-title : pour le commentaire affiché sous chaque grande image
                -->
                <div class="galerie">
                    <figure id="photo1">
                        <a href="img/1280px-00_Bruxelles_-_Mont_des_Arts.jpg" data-lightbox="galerie" data-title="Mont des Arts">
                            <img src="img/480px_Mont_des_Arts.jpg" alt="Mont des Arts" width="480"/>
                        </a>    
                        <figcaption>Mont des Arts</figcaption>
                    </figure>
                    <figure id="photo2">
                        <a href="img/1280px-Atomium.jpg" data-lightbox="galerie" data-title="Atomium">
                            <img src="img/480px-Atomium.jpg" alt="Atomium" width="480"/>
                        </a>    
                        <figcaption>Atomium</figcaption>
                    </figure>
                    <figure id="photo3">
                        <a href="img/1280px-Bourse_Bxl_02.JPG" data-lightbox="galerie" data-title="Bourse">
                            <img src="img/480px-Bourse_Bxl.jpg" alt="Bourse" width="480"/>
                        </a>    
                        <figcaption>Bourse</figcaption>
                    </figure>
                    <figure>
                        <a href="img/1280px-Bruxelles-tapis-fleurs-2010-1.JPG" data-lightbox="galerie" data-title="Grand'Place">
                            <img src="img/480px-Bruxelles-tapis-fleurs.jpg" alt="Grand'Place" width="480"/>
                        </a>    
                        <figcaption>Grand'Place</figcaption>
                    </figure>
                    <figure>
                        <a href="img/1280px-Manneken_Pis,_Brussels_(DSCF4467).jpg" data-lightbox="galerie" data-title="Manneken Pis">
                            <img src="img/480px-Manneken_Pis.jpg" alt="Manneken Pis" width="480"/>
                        </a>    
                        <figcaption>Manneken Pis</figcaption>
                    </figure>
                    <figure>
                        <a href="img/1280px-Royal_Palace_in_Brussels.JPG" data-lightbox="galerie" data-title="Palais Royal">
                            <img src="img/480px-Palais_Royal.jpg" alt="Palais Royal" width="480"/>
                        </a>    
                        <figcaption>Palais Royal</figcaption>
                    </figure>
                </div>
            </main>	
        </div>
        
        <!-- 2. Ajouter le JavaScript de LightBox juste avant la fermeture du body
        A placer dans chacune des pages utilisant le module LightBox
        -->
        <script src="js/lightbox/js/lightbox-plus-jquery.min.js"></script>
        
    </body>
</html>