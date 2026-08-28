let kaverit = [];

let form = document.getElementById("kaveriForm");
let nimi = document.getElementById("nimi");

let tulokset = document.getElementById("nimet");


form.addEventListener("submit", function(event) {

    event.preventDefault();
    kaverit.push(nimi.value);
    nimi.value = "";

    if (kaverit.length == 10) {

        form.style.display = "none";
        let lista = document.createElement("ol");

        for (let i = 0; i < kaverit.length; i++) {

            let kohta = document.createElement("li");

            kohta.textContent = kaverit[i];

            lista.appendChild(kohta);
        }

        nimet.appendChild(lista);
    }
});