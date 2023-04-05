const nome = window.prompt("Digite o seu Nome: ");
const sobreNome = window.prompt("Digite seu Sobrenome");
const campoEstudo = window.prompt("Digite seu Campo de Estudo");
const anoNascimento = parseFloat(window.prompt("Digite seu ano de nascimento"));

function idade(ano) {
  let calculaIdade = 2023 - ano;
  return calculaIdade;
}

window.alert(
  "Nome Completo: " +
    nome +
    " " +
    sobreNome +
    "\nCampo de Estudo: " +
    campoEstudo +
    "\nIdade: " +
    idade(anoNascimento) +
    " anos"
);

window.alert("Agora vamos para a Segunda Parte");
// Segunda Parte

const valorX = parseFloat(window.prompt("Insira um valor para X: "));
const valorY = parseFloat(window.prompt("Insira um valor para Y: "));

window.alert("O valor de X é: " + valorX + "\nO valor de Y é: " + valorY);

window.alert("A soma dos valores é: " + (valorX + valorY));
window.alert("A subtração dos valores é: " + (valorX - valorY));
window.alert("A multiplicação dos valores é: " + valorX * valorY);
window.alert("A divisão dos valores é: " + valorX / valorY);
