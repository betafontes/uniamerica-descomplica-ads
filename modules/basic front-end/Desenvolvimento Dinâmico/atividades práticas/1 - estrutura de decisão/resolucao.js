var bebidas = "café";
var valor = "";

switch (bebidas) {
  case "café":
    valor = "R$5,00 reais";
    break;

  case "leite":
    valor = "R$7,00 reais";
    break;

  case "chá":
    valor = "R$3,00 reais";
    break;

  default:
    console.log("Essa bebida não existe!");
}
console.log("Sua bebida", bebidas, "está custando", valor);
