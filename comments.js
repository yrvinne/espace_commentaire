function validForm() {
    //récupération des champs du formulaire

    let firstName = document.forms["myForm"]["first-name"].value;
    let lastName = document.forms["myForm"]["last-name"].value;
    let message = document.forms["myForm"]["message"].value;

    if (!firstName || !lastName || !message) {
        //affichage du message d’erreur déjà présent dans le HTML (caché par défaut) en modifiant l'attribut display de la div 

        document.getElementById("error-message").style.display = "flex";
    }else{
        //affectation des nouveau element html

        let firstDiv = document.createElement("div");
        let secondDiv = document.createElement("div");
        let h3 = document.createElement("h3");
        let thirdDiv = document.createElement("div");
        let p = document.createElement("p");

        //réutilisation du style de la page dans les nouveau éléments html et insertion des valeur récupérer dans les champs

        firstDiv.className = "flex space-x-4 text-sm text-gray-500";
        secondDiv.className = "flex-1 py-10 border-t border-gray-200"; 
        h3.className = "font-medium text-gray-900";
        h3.innerText = `${firstName} ${lastName}`;
        thirdDiv.className = "prose prose-sm mt-4 max-w-none text-gray-500";
        p.innerText = `${message}`;

        //assemblage hiérarchisé des nouveaux élements html

        firstDiv.appendChild(secondDiv);
        secondDiv.append(h3,thirdDiv);
        thirdDiv.appendChild(p);
        document.getElementById("comment-list").appendChild(firstDiv);

        //Suppression du contenu des champs du formulaire

        document.forms["myForm"]["first-name"].value ="";
        document.forms["myForm"]["last-name"].value ="";
        document.forms["myForm"]["message"].value = "";
    }
}