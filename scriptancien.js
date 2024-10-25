function plus(num1, num2) {
  return num1 + num2;
}

function moins(num1, num2) {
  return num1 - num2;
}

function fois(num1, num2) {
  return num1 * num2;
}

function divise(num1, num2) {
  return num2 !== 0 ? num1 / num2:  "division impossible";
}

function calculate(operation) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let affichage = document.getElementById("affichage");
  let result = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    affichage.innerHTML = "Veuillez remplir tous les champs";
    return;
  }
  let total;
  switch (operation) {
    case "plus":
      total = plus(num1, num2);
      break;
    case "moins":
      total = moins(num1, num2);
      break;
    case "fois":
      total = fois(num1, num2);
      break;
    case "divise":
      total = divise(num1, num2);
      break;
    default:
      affichage.innerHTML = "Opération inconnue";
      return;
  }
  affichage.innerHTML = `${num1} ${operation === "plus" ? " + " : operation === "moins"  ? " - " : operation === "fois" ? " * " : " / "} ${num2} `;
  result.innerHTML = `Résultat: ${total}`;
}
