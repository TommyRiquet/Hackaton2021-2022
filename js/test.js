///RECUPERATION DU FORMULAIRE
function getForm(form){
    console.log(form.optradio.value)
    if(form.optradio.value==="Passager"){
        genererAccPassager();
    }else if(form.optradio.value==="Conducteur"){
        genererAccConduct();
    }
    return false
}


///AFFICHAGE
function genererInscription(){
    document.getElementById("contenu").innerHTML="        <div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\n" +
        "            <form id=\"formulaire\" action=\"#\" onsubmit=\"return saveFile(this)\">\n" +
        "                <div class=\"form-group\">\n" +
        "                    <label>Nom Complet :</label>\n" +
        "                    <input type=\"text\" name=\"nomComplet\" class=\"form-control\" placeholder=\"Charles Dupont\"/>\n" +
        "                </div>\n" +
        "                <div class=\"form-group\">\n" +
        "                    <label>Email :</label>\n" +
        "                    <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"c.dupont@gmail.com\"/>\n" +
        "                </div>\n" +
        "                <div class=\"form-group\">\n" +
        "                    <label>Mot de passe :</label>\n" +
        "                    <input id=\"mdp1\" type=\"password\" name=\"password1\" class=\"form-control\" placeholder=\"motDePasse\"/>\n" +
        "                </div>\n" +
        "                <div class=\"form-group\">\n" +
        "                    <label>Confirmer Mot de Passe :</label>\n" +
        "                    <input type=\"password\" name=\"password2\" class=\"form-control\" placeholder=\"motDePasse\"/>\n" +
        "                </div>\n" +
        "                <div class=\"form-group\">\n" +"<br>"+
        "                    <div class=\"container\">\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col\"><input type=\"submit\" class=\"col-12 btn btn-success btn-sm float-right\" value=\"S'inscrire\"></div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "            </form>\n" +
        "\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<script>\n" +
        "    function saveFile(form){\n" +
        "\n" +
        "        if(form.password1.value !== form.password2.value){\n" +
        "            document.getElementById(\"mdp1\").focus();\n" +
        "            alert(\"Mot de passe différents\");\n" +
        "        }\n" +
        "        return false\n" +
        "    }\n" +
        "</script>";
}

function genererFormPassager(){
    document.getElementById("contenu").innerHTML="<div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\n" +
        "        <form id=\"formulaire\" onsubmit='genererAccPassager()'>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label>Adresse de Départ :</label>\n" +
        "                <input type=\"text\" class=\"form-control\" placeholder=\"Rue de l'Example\"/>\n" +
        "            </div>\n" +
        "            <br>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label>Adresse d'Arrivée :</label>\n" +
        "                <input type=\"text\" class=\"form-control\" placeholder=\"Rue de l'HTML\"/>\n" +
        "            </div>\n" +
        "            <br>\n" +
        "            <div class=\"form-group text-center\">\n" +
        "                <label>Date :</label>\n" +
        "                <input type=\"date\" class=\"datepicker-input\">\n" +
        "                <input type=\"time\">\n" +
        "            </div>\n" +
        "            <br>\n" +
        "            <div class=\"form-group\"><br>\n" +
        "                <label>Nombre de Place :</label>\n" +
        "                <input type=\"number\" class=\"form-control\" placeholder=\"2\" />\n" +
        "            </div><br><br>\n" +
        "            <div class=\"form-group\">\n" +
        "                <div class=\"container\">\n" +
        "                    <div class=\"row\">\n" +
        "                        <div class=\"col\"><input type=\"submit\" class=\"col-12 btn btn-success btn-sm float-right\" value=\"Mettre à jour\"></div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </form>\n" +
        "    </div>";

}
function genererFormConducteur(){
    document.getElementById("contenu").innerHTML="<div class=\"col col-sm-6 col-md-6 col-lg-4 col-xl-3\">\n" +
        "        <form id=\"formulaire\" onsubmit=\"return genererAccConduct()\">\n" +
        "            <div class=\"form-group\">\n" +
        "                <label>Adresse de Départ:</label>\n" +
        "                <input type=\"text\" class=\"form-control\" placeholder=\"Rue de l'Example\"/>\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label>Adresse d'Arrivée:</label>\n" +
        "                <input type=\"text\" class=\"form-control\" placeholder=\"Rue de l'HTML\"/>\n" +
        "            </div>\n" +
        "            <div class=\"form-group text-center\">\n" +
        "                <div class=\"form-check-inline\">\n" +
        "                    <label class=\"form-check-label\">\n" +
        "                        Lundi <input type=\"checkbox\" class=\"form-check-input\" name=\"jour\" checked=\"true\">\n" +
        "                    </label>\n" +
        "                    <label class=\"form-check-label\">\n" +
        "                        Mardi <input type=\"checkbox\" class=\"form-check-input\" name=\"jour\" >\n" +
        "                    </label>\n" +
        "                    <label class=\"form-check-label\">\n" +
        "                        Mercredi <input type=\"checkbox\" class=\"form-check-input\" name=\"jour\" checked=\"true\">\n" +
        "                    </label>\n" +
        "                    <label class=\"form-check-label\">\n" +
        "                        Jeudi <input type=\"checkbox\" class=\"form-check-input\" name=\"jour\" >\n" +
        "                    </label>\n" +
        "                    <label class=\"form-check-label\">\n" +
        "                        Vendredi <input type=\"checkbox\" class=\"form-check-input\" name=\"jour\" >\n" +
        "                    </label>\n" +
        "                    <label class=\"form-check-label\">\n" +
        "                        Samedi <input type=\"checkbox\" class=\"form-check-input\" name=\"jour\" >\n" +
        "                    </label>\n" +
        "                    <label class=\"form-check-label\">\n" +
        "                        Dimanche <input type=\"checkbox\" class=\"form-check-input\" name=\"jour\" >\n" +
        "                    </label>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label>Lundi:</label>\n" +
        "                <input type=\"number\" class=\"form-control\" placeholder=\"9:00\"/> à <input type=\"number\" class=\"form-control\" placeholder=\"15:00\"/>\n" +
        "            </div><br>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label>Mercredi:</label>\n" +
        "                <input type=\"number\" class=\"form-control\" placeholder=\"12:00\"/> à <input type=\"number\" class=\"form-control\" placeholder=\"18:00\"/>\n" +
        "            </div>\n" +
        "            <div class=\"form-group\"><br>\n" +
        "                <label>Nombre de Place :</label>\n" +
        "                <input type=\"number\" class=\"form-control\" placeholder=\"2\" />\n" +
        "            </div><br>\n" +
        "            <div class=\"form-group\">\n" +
        "                <div class=\"container\">\n" +
        "                    <div class=\"row\">\n" +
        "                        <div class=\"col\"><input type=\"submit\" class=\"col-12 btn btn-success btn-sm float-right\" value=\"Mettre à jour\"></div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </form>\n" +
        "    </div>";
}

///GenererAcceuil Conducteur
function genererAccConduct(){
    document.getElementById("contenu").innerHTML="<div id=\"row\">\n" + "<br>"+
        "    <h3 id=\"nomUtilisateur\">Conducteur : Tommy Riquet</h3>\n" +"<br>"+
        "    <button type=\"button\" class=\"btn btn-success\" onclick='genererFormConducteur()'>Mettre à jour les informations</button>\n" +
        "    <button type=\"button\" class=\"btn btn-success button_passager\">Passer en passager</button>\n" +"<br>"+
        "</div>\n" +
        "<p style='color: forestgreen; font-weight: bolder;'>Votre solde: 9 crédits verts</p><br>\n"+
        "    <h5>Requête en attente</h5>\n" +
        "    <table class=\"table\">\n" +
        "        <thead class=\"table-dark\">\n" +
        "        <tr><td>Nom du passager</td><td>Adresse du passager</td><td>Adresse de l'établissement EPHEC</td><td>Trajet</td><td>Heure de départ</td><td>Nombre de passagers</td><td>Choix</td></tr>\n" +
        "        </thead>\n" +
        "        <tbody id=\"requete\">\n" +
        "        <tr id='tr1'><td>Antoine Moens Pennewaert</td><td id=\"adresseSource1\">41 avenue du bois becquet 1300 Wavre</td><td id=\"adresseDestination1\">Avenue du Ciseau 15 1348 Ottignies-Louvain-la-Neuve</td><td id=\"voirTrajet1\">Voir le Trajet</td><td>12h30</td><td>2</td><td><button onclick='deleteRow(\"tr1\")' type=\"button\" class=\"btn btn-danger\">X</button><button type=\"button\" class=\"btn btn-success\">✅</button></td></tr>\n" +
        "        <tr id='tr2'><td>Jarod Boulanger</td><td id=\"adresseSource2\">Avenue de la serpentine 1390 Grez-Doiceau</td><td id=\"adresseDestination2\">Avenue du Ciseau 15 1348 Ottignies-Louvain-la-Neuve</td><td id=\"voirTrajet2\">Voir le Trajet</td><td>8h30</td><td>1</td><td><button onclick='deleteRow(\"tr2\")' type=\"button\" class=\"btn btn-danger\">X</button><button type=\"button\" class=\"btn btn-success\">✅</button></td></tr>\n" +
        "\n" +
        "        </tbody>\n" +
        "    </table>\n" +
        "    <h5>Historique</h5>\n" +
        "    <table class=\"table\">\n" +
        "        <thead class=\"table-dark\">\n" +
        "        <tr><td>Nom du passager</td><td>Distance</td><td>Durée</td><td>Nombre de passagers</td><td>Crédit vert gagnées</td></tr>\n" +
        "        </thead>\n" +
        "        <tbody id=\"historique\">\n" +
        "        <tr><td>Antoine Moens Pennewaert</td><td>20 km</td><td>30 min</td><td>2</td><td>2</td></tr>\n" +
        "        <tr><td>Kevin Keurvels</td><td>70 km</td><td>70 min</td><td>2</td><td>7</td></tr>\n" +
        "        </tbody>\n" +
        "    </table>\n" +
        "</div>";

    genererCarte();


}
///GenererAcceuil Passager
function genererAccPassager(){
    document.getElementById("contenu").innerHTML=" <div id=\"row\">\n" +
        "    <h3 id=\"nomUtilisateur\">Passager : Antoine Moens Pennewaert</h3>\n" +
        "   <br> \n" +
        "    <button type=\"button\" class=\"btn btn-success\" onclick='genererFormPassager()'>Ajouter un Trajet</button>\n" +
        "    <button type=\"button\" class=\"btn btn-success button_passager\">Passer en conducteur</button>\n" +
        "   <br> \n" +
        "   <br> \n" +
        "  </div>\n" +
        "  <h5>Trajet en cours</h5>\n" +
        "  <table class=\"table\">\n" +
        "    <thead class=\"table-dark\">\n" +
        "    <tr><td>Nom du conducteur</td><td>Adresse du passager</td><td>Adresse de l'établissement EPHEC</td><td>Heure de départ</td><td>Nombre de passagers</td><td>Course terminée</td></tr>\n" +
        "    </thead>\n" +
        "    <tbody id=\"enCours\">\n" +
        "    <tr id='trPassager1'><td>Tommy Riquet</td><td>Avenue du bis becquet 41 1300 Wavre</td><td>Boulevard Lambermont 17 1030 Schaerbeek</td><td>12h30</td><td>2</td><td><button type=\"button\" onclick='CourseFinished(\"trPassager1\")' class=\"btn btn-success\">Course finie !</button></td></tr>\n" +
        "    </tbody>\n" +
        "  </table>\n" +
        "  <h5>Historique</h5>\n" +
        "  <table class=\"table\">\n" +
        "    <thead class=\"table-dark\">\n" +
        "    <tr><td>Nom du conducteur</td><td>Distance</td><td>Durée</td><td>Nombre de passagers</td></tr>\n" +
        "    </thead>\n" +
        "    <tbody id=\"historique\">\n" +
        "    <tr><td>Jarod Boulanger</td><td>20 km</td><td>30 min</td><td>2</td></tr>\n" +
        "    <tr><td>Kevin Keurvels</td><td>45 km</td><td>60 min</td><td>1</td></tr>\n" +
        "    </tbody>\n" +
        "  </table>";
}


function genererCarte(){
    let coord1x = "50.70950";
    let coord1y = "4.62868";
    let coord2x = "50.66610";
    let coord2y = "4.61191";

    document.getElementById("voirTrajet1").innerHTML = "<a href='https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route="+coord1x+"%2C"+coord1y+"%3B"+coord2x+"%2C"+coord2y+"#map=13/50.6919/4.6180' target='_blank'>Voir le Trajet</a>" ;

    coord1x = "50.73856 ";
    coord1y = "4.70249" ;
    coord2x = "50.66610";
    coord2y = "4.61191";

    document.getElementById("voirTrajet2").innerHTML = "<a href='https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route="+coord1x+"%2C"+coord1y+"%3B"+coord2x+"%2C"+coord2y+"#map=13/50.6919/4.6180' target='_blank'>Voir le Trajet</a>" ;

}

function deleteRow(id){
document.getElementById(id).innerHTML = "";
}
function CourseFinished(id){
    document.getElementById(id).innerHTML = "";
    document.getElementById("historique").innerHTML += "<tr><td>Tommy Riquet</td><td>30 km</td><td>40 min</td><td>1</td></tr>";
}









/*


// Initialize and add the map
    function initMap() {
        const coord = { lat: 50.80246189894455, lng: 4.274493298315478 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: coord ,
            mapTypeId: "terrain",
        });
        const marker = new google.maps.Marker({
            position: coord,
            map: map,
        });
    }

//Récuperation de la distance et le temps d'un itinéraire
   function getDistance(coord1x,coord1y,coord2x,coord2y){//4 CHIFFRES APRES LA VIRGULE
        var xhr = new XMLHttpRequest();
        xhr.open("get", "https://maps.open-street.com/api/route/?origin="+coord1x+","+coord1y+"&destination="+coord2x+","+coord2y+"&mode=driving&key=143323c5ab5dfe15ec89b2bbb320bea7", true);
        xhr.onload=function(){
            var data = JSON.parse(xhr.responseText)
            polyline = data.polyline;
        }
        xhr.send();
    }

//Recuperation des coordonnées
    let coord1x;
    let coord1y;
    let coord2x;
    let coord2y;
    function getCoord(str){
        let adr = document.getElementById(str).innerText;
        adr=adr.replaceAll(" ","+");
        console.log("adr : " + adr)
        var xhr = new XMLHttpRequest();
        xhr.open("get", "https://maps.open-street.com/api/geocoding/?address="+adr+"&sensor=false&key=143323c5ab5dfe15ec89b2bbb320bea7", true);
        xhr.onload=function(){
            var data = JSON.parse(xhr.responseText)
        }
        xhr.send();
    }
*/