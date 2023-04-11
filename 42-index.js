let opcao = "";
let imoveis = [];

do {
  let qtdImoveis = imoveis.length;

  opcao = prompt(
    "Imóveis Cadastrados: " +
      qtdImoveis +
      "\nEscolha uma opção:\n" +
      "1 - Mostrar Imóveis\n2 - Salvar Imóvel\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      let verImoveis = {};
      if (qtdImoveis !== 0) {
        for (let i = 0; i < qtdImoveis; i++) {
          for (let y = 0; y < imoveis[i].length; y++) {
            //console.log(imoveis[i].length);
            console.log(imoveis[i][y]);
            verImoveis += "Proprietário = ";
          }
        }
      } else {
        alert("Não há imóveis cadastrados.");
      }
      break;
    case "2":
      console.log("Entrou no valor Zero");
      let novosDados = [];
      let nome = prompt("Insira o nome do proprietário").toUpperCase();
      novosDados.push(nome);
      let qtdQuarto = prompt("Insira a quantidade de quarto(s)");
      novosDados.push(qtdQuarto);
      let qtdBanheiro = prompt("Insira a quantidade de banheiro(s)");
      novosDados.push(qtdBanheiro);
      let qtdGaragem = prompt("Insira a quantidade de garagem/garagens");
      novosDados.push(qtdGaragem);

      imoveis.push(novosDados);

      break;
    case "3":
      alert("Encerrando..");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
