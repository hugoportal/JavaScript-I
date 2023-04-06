let baralho = [];
let opcao = "";

do {
  let carta = "";
  for (let i = 0; i < baralho.length; i++) {
    carta += i + 1 + "º - " + baralho[i] + "\n";
  }
  console.log(carta);

  opcao = prompt(
    "Cartas no Baralho: " +
      baralho.length +
      "\nEscolha uma ação:\n1 - Adicionar Carta\n2 - Puxar Carta\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é o nome da carta?");
      baralho.unshift(novaCarta);
      break;
    case "2":
      const cartaRetirada = baralho.shift();
      if (!cartaRetirada) {
        alert("Não há cartas no baralho para retirar!");
      } else {
        alert(cartaRetirada + " foi removido do baralho.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
