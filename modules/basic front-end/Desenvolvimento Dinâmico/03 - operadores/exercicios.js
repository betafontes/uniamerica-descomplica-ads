//praticando com os operadores
a = 10;
b = 5;

// verificar se A é maior que B e B é divisivel por 2
console.log(a > b && b % 2 == 0);

// verificar se B é maior igual a A ou B divido por 2 o resultado é 2
console.log(a <= b || b / 2 == 2);

// verificar se A é maior que B e B maior igual a 5
console.log(a > b && 5 <= b);

// verificar se B é par ou impar usando ternario 
resultado = b % 2 == 0 ? "Par" : "Impar";



/* Exemplo : Ano Bissexto
O ano é bissexto quando é divisível por 4 e não por é divisível por 100. Porém todos
os anos divisíveis por 400 também são bisextos!
 */

let ano = parseInt(prompt("Digite o ano:"));

var bissexto = ( (ano % 4 == 0 || ano % 400 == 0) && ano % 100 != 0 );

alert(bissexto ? "É Bissexto!" : "Não é Bissexto");