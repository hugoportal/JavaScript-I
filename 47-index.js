let pokemon = "Charmander";

function evoluir() {
  pokemon = "Charmeleon";
}

console.log(pokemon);
evoluir();
console.log(pokemon);

function criarAnimal() {
  let animal = "Gato";
}

criarAnimal();
//console.log(animal);
// erro pois precisa criar primeiro a variavel animal antes da funcao;

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true;
    let situacao = "Aprovado";
  } else {
    var aprovado = false;
    let situacao = "Reprovado";
  }
  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}

//VAR fica disponivel no escopo externo se for criado dentro de blocos menores (if, else, ...)
//LET não fica disponivel no escopo externo

avaliarNota(83);
avaliarNota(49);
