var combattant = [
    {nom:"Mayweather", prenom:"Floyd", age:43, taille :"petit", ville:"Michigan"},
    {nom:"Mohamed", prenom:"Ali", age:74, taille :"grand", ville:"Scottsdale"},
    

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
    créationTable();
    return false 

}



/**
 *Rajouter des données dans mon nouvelle objet grace au formulaire et mon nouvelle objet se rajoute dans mon tableau
 */

function créationTable(){
    let h = "";
    for (let i in combattant) {
        h += "<tr><td>"+ combattant[i].nom + " " + combattant[i].prenom + "</td>" + "<td>" + combattant[i].ville + "</td></tr>"
        
    }
    document.getElementById("combat").innerHTML = h

}








/* tr => rentre dans la ligne
td =>  c'est les cellules */