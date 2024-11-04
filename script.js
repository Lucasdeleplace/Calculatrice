let total = "";
let isResultDisplayed = false;

function appendNumber(number) {
    if (isResultDisplayed) {
        total = "";
        isResultDisplayed = false;
    }
    total += number;
    document.getElementById("affichage").innerHTML = total;
}

function calculate(operation) {
    let result = document.getElementById("result");
    let affichage = document.getElementById("affichage");

    switch (operation) {
        case "plus":
            total += "+";
            isResultDisplayed = false;
            break;
        case "moins":
            total += "-";
            isResultDisplayed = false;
            break;
        case "fois":
            total += "*";
            isResultDisplayed = false;
            break;
        case "divise":
            total += "/";
            isResultDisplayed = false;
            break;
        case "egal":
            try {
                total = eval(total).toString();
                result.innerHTML = `Resultat: ${total}`;
                isResultDisplayed = true;
            } catch (e) {
                result.innerHTML = 'Erreur de calcul';
                isResultDisplayed = false;
            }
            break;
        case "reset":
            total = "";
            result.innerHTML = "";
            isResultDisplayed = false;
            break;
        default:
            affichage.innerHTML = "Opération inconnue";
    }
    affichage.innerHTML = total;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}