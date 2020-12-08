var combattant = [
    {Nom:"a", Prenom:"b", Age:10, Taille :"petit", Ville:"Chicago"},
    {Nom:"c", Prenom:"d", Age:15, Taille :"moyen", Ville:"Chicago"},
    {Nom:"e", Prenom:"f", Age:10, Taille :"moyen", Ville:"Chicago"},
    {Nom:"g", Prenom:"h", Age:14, Taille :"moyen", Ville:"Chicago"},
    {Nom:"j", Prenom:"k", Age:10, Taille :"petit", Ville:"Chicago"},
    {Nom:"l", Prenom:"m", Age:10, Taille :"grand", Ville:"Chicago"}
]


function genererTable(){
   let newSensei={};

    newSensei.Nom=document.getElementById("nom").value
    newSensei.Prenom=document.getElementById("prenom").value
    newSensei.Age=document.getElementById("age").value
    newSensei.Taille=document.getElementById("taille").value
    newSensei.Ville=document.getElementById("ville").value

    combattant.push(newSensei)
    console.log(combattant)
    return false 

}

function initialiserPage(){

}

