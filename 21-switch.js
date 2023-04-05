const resultado = prompt("Escolha uma alternativa: \nA\nB\nC");

switch (resultado) {
  case "a":
    alert("O resultado é A");
    break;
  case "b":
    alert("O resultado é B");
    break;
  case "c":
    alert("O resultado é C");
    break;
  default:
    alert("Finalizando");
    break;
}

const resultado2 = parseFloat(prompt("Escolha uma alternativa: \n1\n2\n3"));

switch (resultado2) {
  case 1:
    alert("O resultado é 1");
    break;
  case 2:
    alert("O resultado é 2");
    break;
  case 3:
    alert("O resultado é 3");
    break;
  default:
    alert("Finalizando");
    break;
}
