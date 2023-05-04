function calcularMedia(a, b) {
  const media = (a = b) / 2;
  //console.log(media);
  return media;
}

calcularMedia(2, 8);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

//const notebook = criarProduto("Samsung i3 8GB", 3500);

console.log(criarProduto("Samsung i3 8GB", 3500));

function areaRetangulo(base, altura) {
  return base * altura;
}

function areaQuadrado(lado) {
  return areaRetangulo(lado, lado);
}

console.log(areaRetangulo(5, 3));
console.log(areaQuadrado(9));

function ola() {
  let texto = "ipson....";
  return texto;
  texto = "Olá mundo";
  console.log(texto);
}

console.log(ola());

function marioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(marioridade(40));
