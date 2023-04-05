const characterOne = prompt("Insira o nome do primeiro Personagem");
const powerAttackOne = parseFloat(
  prompt("Insira o Poder de ATAQUE do Personagem " + characterOne + ":")
);
const characterTwo = prompt("Insira o nome do Segundo Personagem");
var characterTwoLife = parseFloat(
  prompt("Insira a quantidade de prontos de vida do " + characterTwo + ":")
);
const characterTwoDefense = parseFloat(
  prompt("Insira a quantidade de pontos de defesa do " + characterTwo + ":")
);
var characterTwoShield = prompt(
  "Digite 0 se o personagem " +
    characterTwo +
    " não possui Escudo ou 1 caso possua."
);

if (characterTwoShield > 1 || characterTwoShield < 0) {
  var characterTwoShield = prompt(
    "Digite 0 se o personagem " +
      characterTwo +
      " não possui Escudo ou 1 caso possua."
  );
}

var shield = characterTwoShield == 1 ? "Sim" : "Não";

console.log(
  "Personagem: " + characterOne + "\nPoder de Ataque: " + powerAttackOne
);

console.log(
  "Personagem: " +
    characterTwo +
    "\nVida: " +
    characterTwoLife +
    "\nDefesa: " +
    characterTwoDefense +
    "\nEscudo: " +
    shield
);

if (powerAttackOne > characterTwoDefense && characterTwoShield == 0) {
  let dano = powerAttackOne - characterTwoDefense;
  console.log("Dano: " + dano);
  characterTwoLife -= dano;
} else if (powerAttackOne > characterTwoDefense && characterTwoShield == 1) {
  let dano = (powerAttackOne - characterTwoDefense) / 2;
  console.log("Dano: " + dano);
  characterTwoLife -= dano;
} else {
  alert("Nenhum dano causado");
}

alert(
  "Personagem: " +
    characterOne +
    "\nPoder de Ataque: " +
    powerAttackOne +
    "\n\nPersonagem: " +
    characterTwo +
    "\nVida: " +
    characterTwoLife +
    "\nDefesa: " +
    characterTwoDefense +
    "\nEscudo: " +
    shield
);
