window.onload = letoltes()
var kérdések;

function letoltes() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letoltesBefejezodott(data));
}

function letoltesBefejezodott(d) {
    console.log("Sikeres letoltes")
    console.log(d)
    kérdések = d;
    kerdesMegjelenites(0);
}

function kerdesMegjelenites(kérdés) {
    let ide_kérdés = document.getElementById("kérdés_szöveg");

    for (var i = 0; i < kérdés; i++) {
        console.log(kérdés[i].questionText)
        let elem_kérdés = document.createElement("div")
        elem_kérdés.innerHTML = kérdés[i].questionText
        ide_kérdés.appendChild(elem_kérdés)
    }
}

function kerdesBetoltes(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kerdesMegjelenites(data));
}