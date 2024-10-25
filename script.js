function calculate(operation) {
  let num = parseFloat(document.getElementById("num").value);
  let result = document.getElementById("result");

  if (isNaN(num)) {
    affichage.innerHTML = "Veuillez remplir un nombre correcte";
    return;
  }
  let totalAfter = 0;
  let totalNow = 0;
  switch (operation) {
    case "plus":
        totalNow = totalAfter + num;
        totalAfter = totalNow;
      break;
    case "moins":
            totalNow = totalAfter - num;
            totalAfter = totalNow;
            totalNow = num;
            totalAfter = totalNow;
          break;
    case "fois":
            totalNow = totalAfter * num;
            totalAfter = totalNow;
            totalNow = num;
            totalAfter = totalNow;
          break;
    case "divise":
            totalNow = totalAfter / num;
            totalAfter = totalNow;
            totalNow = num;
            totalAfter = totalNow;
          break;
    case "egal": 
        result.innerHTML = `Résultat: ${totalNow}`;
        break;
    default:
      affichage.innerHTML = "Opération inconnue";
      return;
  }
}
