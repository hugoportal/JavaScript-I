const arr = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  [],
];

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

// console.log(arr);
// console.log(matriz);
// console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    let elemento = matriz[i][j];
    console.log("Posição (" + i + " , " + j + ") Valor " + elemento);
    //console.log(matriz[i][j]);
  }
}
