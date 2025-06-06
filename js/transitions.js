let div_content = document.querySelector(`#sv-1`);
let indice = 0;
const INDICE_MAX2 = db_home.length -1;

document.addEventListener("DOMContentLoaded", () => {
    div_content.innerHTML = `
        <h1 id="cinematic">Un monde idéal ?</h1>
        <button class="btn" id="btn-suivant">Suivant</button>
    `;
});

window.addEventListener("load", function() {
    let texte = document.querySelector('#cinematic');
    let btn_suivant = document.querySelector(`#btn-suivant`);
    if (btn_suivant) {
        btn_suivant.addEventListener("click", () => {
            indice += 1;
            console.log(indice);
            if (indice <= INDICE_MAX2) {
                if (indice === 1) {
                    let h2Element = document.createElement('h2');
                    h2Element.innerHTML = texte.innerHTML;
                    texte.replaceWith(h2Element);
                    texte = h2Element;
                }
                texte.textContent = db_home[indice];
            }
            else {
                div_content.innerHTML = `
                    <h1>Green Growth</h1>
                    <div class="sh" id="choix">
                        <button class="btn" id="btn-qcm">Tester mes connaissances </button>
                        <button class="btn" id="btn-info">M'informer</button>
                    </div>
                `;
                let btn_informer = document.querySelector(`#btn-info`);
                let btn_qcm = document.querySelector(`#btn-qcm`);
                btn_informer.addEventListener("click", () => window.location.href = "informer");
                btn_qcm.addEventListener("click", () => window.location.href = "qcm");
            }            
        });
    }
});