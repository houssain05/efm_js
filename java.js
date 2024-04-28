/*partier 1
1 = A
2 = ch1.toUpperCase()
3 = document.getElementsByTagName("p")[0].innerHTML="hello world! "
4 = $("span").css("background-color","blue")
5 = $.ajax({url:"test.html",success:function(data){consol.log("data")}})


*/
//function qui permet de vider et réalitialiser la formulaire
function viderFormulaire(){
    document.getElementById("matricule").value="";
    document.getElementById("marque").value="";
    document.getElementById("modele").value="";
    document.getElementById("anneeProd").value="";
    document.getElementById("carburant").value="";
    document.getElementById("prix").value="";
}
// ^d{1,8}-{A-Za-z}-\d{1,2}$
//^[A-Za-z]{4,15}$
function verifierDonnees() {
    var matricule = document.getElementById("matricule").value;
    var marque = document.getElementById("marque").value;
    var modele = document.getElementById("modele").value;
    var anneeProd = document.getElementById("anneeProd").value;
    var carburant = document.getElementById("carburant").value;
    var prix = document.getElementById("prix").value;

    var matriculeRegex = /^\d{1,8}-[A-Za-z]-\d{1,2}$/;
    var marqueRegex = /^[A-Za-z]{4,15}$/;
    var prixRegex = /^\d+$/;

    var matriculeValide = matriculeRegex.test(matricule);
    var marqueValide = marqueRegex.test(marque);
    var carburantValide = marqueRegex.test(carburant);
    var prixValide = prixRegex.test(prix) && prix >= 0;

    return matriculeValide && marqueValide && carburantValide && prixValide;
}


