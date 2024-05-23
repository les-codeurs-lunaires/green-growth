function AfficherTexte() {
    indice2 = indice2 + 1;
    console.log(indice2)
    texte.textContent = data2[indice2];
    if (indice2 > INDICE_MAX2){
        btn_suivant.style.visibility = "hidden"
        btn_informer.style.visibility = "visible"
        btn_qcm.style.visibility = "visible"
        btn_informer.addEventListener("click", () => window.location.href = "informer");
        btn_qcm.addEventListener("click", () => window.location.href = "qcm");
    }
}

let texte;
let btn_suivant;
let btn_informer;
let btn_qcm;
let indice2 = 0;
const INDICE_MAX2 = data2.length -1;

btn_suivant = document.querySelector(`button#btn-suivant`);
btn_informer = document.querySelector(`button#btn-info`);
btn_qcm = document.querySelector(`button#btn-qcm`);
texte = document.querySelector('h1');

btn_suivant.addEventListener("click", () => AfficherTexte());
btn_informer.style.visibility = "hidden";
btn_qcm.style.visibility = "hidden";

console.log(indice2)
console.log(INDICE_MAX2)

