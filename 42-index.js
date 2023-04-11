let opcao = "";
let imoveis = [];

do {
  let qtdImoveis = imoveis.length;

  opcao = prompt(
    "Imóveis Cadastrados: " +
      imoveis.length +
      "\nEscolha uma opção:\n" +
      "1 - Mostrar Imóveis\n2 - Novo Imóvel\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      for (let i = 0; i < qtdImoveis; i++) {
        alert(
          i +
            1 +
            "° " +
            "Imovél " +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQtd de Quartos: " +
            imoveis[i].quartos +
            "\nQtd de Banheiros: " +
            imoveis[i].banheiros +
            "\nQtd de Vagas de Garagem: " +
            imoveis[i].garagem
        );
      }

      break;
    case "2":
      const imovel = {};

      imovel.proprietario = prompt(
        "Insira o nome do proprietário"
      ).toUpperCase();
      imovel.quartos = prompt("Insira a quantidade de quarto(s)");
      imovel.banheiros = prompt("Insira a quantidade de banheiro(s)");
      imovel.garagem = prompt("Insira a quantidade de garagem/garagens");

      const confirmacao = confirm(
        "Salvar este imóvel?" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao Menu!");
      }

      break;
    case "3":
      alert("Encerrando..");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
