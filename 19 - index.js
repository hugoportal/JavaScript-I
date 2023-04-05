const carroUm = prompt("Insira o nome do primeiro carro: ");
const velocidadeCarroUm = parseFloat(
  prompt("Insira o valor da velocidade do primeiro carro:")
);
const carroDois = prompt("Insira o nome do segundo carro: ");
const velocidadeCarroDois = parseFloat(
  prompt("Insira o valor da velocidade do segundo carro:")
);

if (velocidadeCarroUm > velocidadeCarroDois) {
  alert("O Carro " + carroUm + " é mais rápido que o Carro " + carroDois);
} else if (velocidadeCarroUm < velocidadeCarroDois) {
  alert("O Carro " + carroDois + " é mais rápido que o Carro " + carroUm);
} else {
  alert(
    "Os carros " + carroUm + " e " + carroDois + " possuem a mesma velocidade"
  );
}
