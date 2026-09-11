//Array
let kaverit = [];


//HTML-elementit
let form = document.getElementById("kaveriForm");
let nimet = document.getElementById("nimet");


// CHILD
let nimi = form.children[2];


// SIBLING
let lisaa = nimi.nextElementSibling;


//Poisto
let poista = document.getElementById("poista");

//Järjestys
let jarjesta = document.getElementById("jarjesta");


// Lisää kaveri
form.addEventListener("submit", function(event) {

    // Estetään sivun päivittyminen
    event.preventDefault();

    // Lisätään nimi Arrayhin
    kaverit.push(nimi.value);

    // Tyhjennetään input
    nimi.value = "";

    // Päivitetään lista
    naytaNimet();
});


// Poista kaveri
poista.addEventListener("click", function() {

    // Etsitään nimi Arraysta
    let paikka = kaverit.indexOf(nimi.value);

    // Jos nimi löytyy
    if (paikka != -1) {

        // Poistetaan nimi Arraysta
        kaverit.splice(paikka, 1);

        // Tyhjennetään input
        nimi.value = "";

        // Päivitetään lista
        naytaNimet();
    }
});


// Järjestä kaverit
jarjesta.addEventListener("click", function() {

    // Järjestetään nimet aakkosjärjestykseen
    kaverit.sort();

    // Päivitetään lista
    naytaNimet();
});


// Näytä kaverit
function naytaNimet() {

    // Poista vanha lista
    nimet.innerHTML = "";

    // Luo uusi lista
    let lista = document.createElement("ol");

    // Lisää lista nimien diviin
    nimet.appendChild(lista);


    // Käydään kaikki kaverit läpi
    for (let i = 0; i < kaverit.length; i++) {

        // Luo uusi lista
        let kohta = document.createElement("li");

        // Lisää kaverin nimi
        kohta.textContent = kaverit[i];

        // CHILD lisätään listakohta listan lapseksi
        lista.appendChild(kohta);


        // PARENT
        let vanhempi = kohta.parentNode;


        // SIBLING edellinen
        let edellinen = kohta.previousElementSibling;

        if (edellinen != null) {
            // Jos löytyy, tulostetaan 
            console.log(
                kohta.textContent +
                " löytyy " +
                edellinen.textContent +
                " seuraava "
            );
        }
    }
}