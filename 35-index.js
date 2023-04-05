const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//Adicionar Elementos no Final do Array - PUSH
let tamanho = arr.push("Boromir");
//arr.push("Hugo");
console.log(arr);
console.log(tamanho);

//Adicionar Elementos no Começo do Array - UNSHIFT
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

//Remover Elementos no Final do Array - POP
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//Remover Elementos no Começo do Array - Shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por um elemento - Includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

//Pesquisar um elemento e saber o indice dele - indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

//Cortar array - SLICE
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(hobbits);
console.log(outros);
console.log(arr);

//Concatenar o array - CONCAT
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);
console.log(arr);

// Substituição dos Elementos - Splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

//Iterar sobre os elementos do Array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " Se encontra na posição: " + indice);
}
