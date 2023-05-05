let opcao = "";

function calculaRetangulo(base, altura) {
  return base * altura;
}

function calculaQuadrado(lado) {
  return calculaRetangulo(lado, lado);
}

function calculaTriangulo(base, altura) {
  return calculaRetangulo(base, altura) / 2;
}

function calculaTrapezio(baseMaior, baseMenor, altura) {
  return (baseMaior + baseMenor) * (altura / 2);
}

function calculaCirculo(raio) {
  return calculaQuadrado(raio) * 3.14;
}

do {
  opcao = prompt(
    "Escolha de qual forma deseja calcular a área: " +
      "\n1 - Triângulo\n2 - Retângulo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair"
  );
  switch (opcao) {
    case "1":
      base = parseFloat(prompt("Informe o tamanho da base do Triângulo: "));
      altura = parseFloat(prompt("Informe o tamanho da altura do Triângulo: "));
      area = calculaTriangulo(base, altura);
      alert(
        `A área do Triângulo de base ${base} e altura ${altura} é: ${area}`
      );
      break;

    case "2":
      base = parseFloat(prompt("Informe o tamanho da base do Retângulo: "));
      altura = parseFloat(prompt("Informe o tamanho da altura do Retângulo: "));
      area = calculaRetangulo(base, altura);
      alert(
        `A área do Retângulo de base ${base} e altura ${altura} é: ${area}`
      );
      break;

    case "3":
      lado = parseFloat(prompt("Informe o tamanho do lado do Quadrado: "));
      area = calculaQuadrado(lado);
      alert(`A área do Quadrado de lado ${lado} é: ${area}`);
      break;

    case "4":
      baseMaior = parseFloat(
        prompt("Informe o tamanho da base maior do Trapézio: ")
      );
      baseMenor = parseFloat(
        prompt("Informe o tamanho da menor maior do Trapézio: ")
      );
      altura = parseFloat(prompt("Informe o tamanho da altura do Trapézio: "));
      area = calculaTrapezio(baseMaior, baseMenor, altura);
      alert(`A área do Trapézio é: ${area}`);
      break;

    case "5":
      raio = parseFloat(prompt("Informe o tamanho do raio do Círculo: "));
      area = calculaCirculo(raio);
      alert(`A área do Círculo de raio ${raio} é: ${area}`);
      break;

    case "6":
      alert("Encerrando..");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "6");

/*
GABARITO:
function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"))
  return lado * lado
}

function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"))
  return (3.14 * raio * raio)
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida!")
        break
    }

    if (resultado) {
      alert("Resultado: " + resultado)
    }

  } while (opcao !== "6");
}

executar()
*/
