/* Prática

Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção 
selecionada e atribuir o valor correspondente à variável ‘valor’. Caso o cliente escolha uma opção inválida, 
uma mensagem informativa é exibida, indicando que a escolha deve ser feita entre café, leite ou chá. 
Por fim, se uma opção válida for selecionada, exibimos uma mensagem personalizada informando o nome da bebida 
escolhida e o valor a ser pago, formatado com duas casas decimais. */


var bebidas = "chá";
var valor = ""

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
