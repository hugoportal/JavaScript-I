const metros = parseFloat(
  prompt("Informe um valor em metros que deseja converter: ")
);
const unidadeMedida = prompt(
  "Digite para qual unidade de medida você deseja a conversão: \nmm - Milímetro\ncm - Centímetro\ndm - Decímetro\ndam - Decâmetro\nhm - Hectômetro\nkm - Quilôetros"
);

switch (unidadeMedida.toUpperCase()) {
  case "MM":
    conversao = metros * 1000;
    alert(metros + " m são " + conversao + " mm.");
    break;
  case "CM":
    conversao = metros * 100;
    alert(metros + " m são " + conversao + " cm.");
    break;
  case "DM":
    conversao = metros * 10;
    alert(metros + " m são " + conversao + " dm");
    break;
  case "DAM":
    conversao = metros / 10;
    alert(metros + " m são " + conversao + " dam");
    break;
  case "HM":
    conversao = metros / 100;
    alert(metros + " m são " + conversao + " hm");
    break;
  case "KM":
    conversao = metros / 1000;
    alert(metros + " m são " + conversao + " km");
    break;
  default:
    alert("Opção Inválida!");
    break;
}
