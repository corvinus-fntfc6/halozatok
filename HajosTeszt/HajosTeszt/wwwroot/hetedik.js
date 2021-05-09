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

function kerdesBetoltes(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            })
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltbe a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination==0) {
                    displayedQuestion = 0;
                    kerdesMegjelenites();
                }
            }

    );
}

function elore() {
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) {
        displayedQuestion = 0;
        kerdesMegjelenites();
    }
}