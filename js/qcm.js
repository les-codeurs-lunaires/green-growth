function afficherQuestion(id) {
    if (id < db_qcm.length) {
        document.querySelector(`#title`).textContent = db_qcm[id].question;
        let btns = document.querySelector(`#btns`);
        btns.innerHTML = ``;
        db_qcm[id].reponse.forEach((reponse, index) => {
            let btn = document.createElement("button");
            btn.classList.add("btn");
            btn.textContent = reponse;
            btn.addEventListener("click", () => afficherReponse(id, index));
            btns.appendChild(btn);
        });
    }
}

function afficherReponse(id, index) {
    document.querySelector(`#title`).textContent = db_qcm[id].correction[index];
    let btns = document.querySelector(`#btns`);
    btns.innerHTML = ``;
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "Suivant";
    if (id === db_qcm.length - 1) {
        btn.textContent = "S'informer";
        btn.addEventListener("click", () => window.location.href = "informer");
    } else {
        btn.addEventListener("click", () => afficherQuestion(id + 1));
    }
    btns.appendChild(btn);
}

let div_content = document.querySelector(`#sv-1`);

document.addEventListener("DOMContentLoaded", function () {
    div_content.innerHTML = `
        <h1 id="title">Présentation du QCM</h1>
        <p>Tous les gaz à effet de serre (responsable du réchauffement climatique) ne sont pas les mêmes,
        mais il est difficile de comparer 1m² de méthane,
        3Kg de dioxyde de carbone, et 4L de peroxyde d’azote.
        Pour simplifier cela, toutes nos mesures seront en KgCO2eq :
        équivalent kilo CO2.
        Par exemple,
        une émission de 2KgCO2eq signifie une émission aussi nocive écologiquement parlant que celle de 2Kg de dioxyde de carbone.
        Ainsi les mesures deviennent plus simples à distinguer.</p>
        <button class="btn" id="btn-start">Commencer le QCM</button>
    `;
    let btn_start = document.querySelector(`#btn-start`);
    btn_start.addEventListener("click", () => {
        div_content.innerHTML = `
            <p class="question" id="title"></p>
            <div class="sh" id="btns"></div>
        `;
        afficherQuestion(0);
    });
});