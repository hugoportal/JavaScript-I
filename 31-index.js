numeroInformado = prompt("Informe o número que deseja multiplicar.");
let resultado = "";
for (let i = 1; i <= 20; i++) {
  resultado +=
    numeroInformado +
    " x " +
    i +
    " = " +
    i * parseFloat(numeroInformado) +
    "\n";
}
alert(resultado);

const palavra = prompt(
  "Informe uma palavra para verificar se é palíndromo."
).toUpperCase();

let palindromo = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palindromo += palavra[i].toUpperCase();
}

if (palavra === palindromo) {
  alert(
    `A palavra informada é um palíndromo:\nInformada: ${palavra} \nInversão: ${palindromo}`
  );
} else {
  alert(
    `A palavra informada NÃO é um palíndromo:\nInformada: ${palavra} \nPalindromo: ${palindromo}`
  );
}
