var combattant = [
    {nom:"Mayweather", prenom:"Floyd", age:43, taille :"Entre 1,50 m et 1,65m", ville:"Michigan"},
    {nom:"Ali", prenom:"Mohamed", age:74, taille :"Entre 1,85 m et 2,00m", ville:"Scottsdale"},
    {nom:"Tyson", prenom:"Mike", age:54, taille :"Entre 1,65 m et 1,85m", ville:"Brooklyn"},
    

]

/**
 * J'insert les donnés du formulaires dans un nouvelle objet que je rajoute dans un tableau
 * 
 *@return {return}
 */
function genererTable(){
   let newSensei={};

    newSensei.nom=document.getElementById("nom").value;
    newSensei.prenom=document.getElementById("prenom").value;
    newSensei.age=document.getElementById("age").value;
    newSensei.taille=document.getElementById("taille").value;
    newSensei.ville=document.getElementById("ville").value;

    combattant.push(newSensei);
    creationTable();
    return false ;

}



/**
 *Rajouter des données dans mon nouvelle objet grace au formulaire et mon nouvelle objet se rajoute dans mon tableau
 */

function creationTable(){
    let h = "";
    for (let i in combattant) {
        h += "<tr><td>"+ combattant[i].nom + " " + combattant[i].prenom + "</td>" + "<td>" + combattant[i].age + "</td>" + "<td>" + combattant[i].ville + "</td>" + "<td>" + combattant[i].taille + "</td></tr>";   
    }
    document.getElementById("combat").innerHTML = h

}
    


function trierAge(){ 
    combattant.sort(function (a,b) {
        if (a.age < b.age) return -1;
        if (a.age > b.age) return 1;
        return 0 ;
      })
      creationTable();
}


function trierOrdreAlphabetique() {
    combattant.sort(function (a,b){
        // Utiliser toUpperCase () pour ignorer la casse de caractères

        if (a.nom.toUpperCase() < b.nom.toUpperCase() ) return -1;
        if (a.nom.toUpperCase() > b.nom.toUpperCase() ) return 1;

       return 0;
    })
    creationTable();
}



/* tr => rentre dans la ligne
td =>  c'est les cellules */