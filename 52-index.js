//Uma função que não tem nome, armazena uma função dentro de uma variável.

function somar(a, b) {
  return a + b;
}

let operacao = somar;

//console.log(operacao(4, 5));

//função anônima
operacao = function (a, b) {
  return a - b;
};

//console.log(operacao(4, 5));

olaMundo();
//oiMundo(); // erro pq a função anônima ainda não foi inicializada/declarada

function olaMundo() {
  console.log("Olá mundo");
}

const oiMundo = function () {
  console.log("Oi Mundo!!!");
};

oiMundo();
// as funções anonimas so existem e podem ser utilizadas depois da declaração.
