function Quitter(){
    ma_question.style.visibility = "hidden"
    choix.forEach(button => button.style.visibility = "hidden")
    la_reponse.style.visibility = "hidden"
    suivant.style.visibility = "hidden"
    document.location.href="./informer.html"
}

function AfficherFrame1(){
    la_reponse.style.visibility = "hidden"
    suivant.style.visibility = "hidden"
    choix = [Bouton1, Bouton2, Bouton3, Bouton4]
    choix.forEach(button => button.style.visibility = "visible")
    choix.forEach(button => AfficherTexte(button, data[indice]["reponse"][choix.indexOf(button)]))
    ma_question.style.visibility = "visible"
    AfficherTexte(ma_question, data[indice]["question"])

}

function AfficherFrame2(answer){
    choix = [Bouton1, Bouton2, Bouton3, Bouton4]
    choix.forEach(button => button.style.visibility = "hidden")
    ma_question.style.visibility = "hidden"
    la_reponse.style.visibility = "visible"
    console.log(data[indice]["correction"][answer - 1])
    suivant.style.visibility = "visible"
    suivant.textContent = "Suivant"
    AfficherTexte(la_reponse, data[indice]["correction"][answer - 1])
    indice +=1

    console.log("hey")

    console.log(indice)

    console.log(INDICE_MAX)
    if (indice > INDICE_MAX){

        suivant.textContent = "S'informer"
        suivant.addEventListener("click", () => Quitter());}
}

function AfficherTexte(ou, element){
    if (element === "" || element === null){
        ou.style.visibility = "hidden";
    }
    ou.textContent = element
}

let indice = 0
let choix
let ma_question
let la_reponse
let suivant
let Bouton1
let Bouton2
let Bouton3
let Bouton4
const INDICE_MAX = data.length -1

ma_question = document.querySelector(`#quest`);
la_reponse = document.querySelector("#rep");
suivant = document.querySelector(`button#suivant`);
la_reponse.style.visibility = "hidden"
suivant.style.visibility = "hidden"
AfficherTexte(ma_question, data[indice]["question"])
Bouton1 = document.querySelector(`button#bouton-1`);
Bouton2 = document.querySelector(`button#bouton-2`);
Bouton3 = document.querySelector(`button#bouton-3`);
Bouton4 = document.querySelector(`button#bouton-4`);
choix = [Bouton1, Bouton2, Bouton3, Bouton4]
choix.forEach(button => button.style.visibility = "visible")
choix.forEach(button => AfficherTexte(button, data[indice]["reponse"][choix.indexOf(button)]))


Bouton1.addEventListener("click", () => AfficherFrame2(1));
Bouton2.addEventListener("click", () => AfficherFrame2(2));
Bouton3.addEventListener("click", () => AfficherFrame2(3));
Bouton4.addEventListener("click", () => AfficherFrame2(4));
suivant.addEventListener("click", () => AfficherFrame1());

