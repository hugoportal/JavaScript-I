function ola() {
  console.log("Hello World!!!");
}

// ola();

function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(5);
//dobro(7);
//dobro(); //o dobro de indefinido é NaN

function dizendoOla(name = "Sem Nome") {
  alert("Olá, " + name + "!!!");
}

//dizendoOla("Hugo");
//dizendoOla();

function soma(x, y, w, a) {
  alert("Resultado da soma é: " + (x + y + w + a));
}

//soma(7, 13, 5, 2);

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome, // mesmo que nome: nome,
    email,
    senha: senha,
    tipo: tipo,
  };
  console.log(usuario);
}

//criarUsuario("hugoportal", "hugo@gmail.com", "123456");

function novoUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, // mesmo que nome: nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

//novoUsuario("hugoportal", "hugo@gmail.com", "123456");

function muitosparam(nome, telefone, endereco, aniversario, email, senha) {
  //...
}

function objetoComoParametros(usuario) {
  usuario.nome;
  usuario.telefone;
  usuario.endereco;
  usuario.aniversario;
  usuario.email;
  usuario.senha;

  console.log(usuario.nome);
  console.log(usuario.telefone);
  console.log(usuario.email);
}

const dadosDoUsuario = {
  nome: "hugo",
  telefone: "3222-3417",
  endereco: "Qd 203",
  aniversario: "07/01/1983",
  email: "hugo@gmail.com",
  senha: "1234",
};

objetoComoParametros(dadosDoUsuario);
