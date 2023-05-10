//Uma função que chama ela mesma e com isso se executa novamente.

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}
//dividir(256);

function dobrar(num) {
  console.log(num);
  if (num < 1000) {
    dobrar(num * 2);
  } else {
    return num;
  }
}
//dobrar(3);

function fatorial(num) {
  console.log("Número: " + num);
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + "  x !" + (num - 1));
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(6));
