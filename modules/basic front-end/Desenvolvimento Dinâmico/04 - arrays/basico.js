// Fazendo arrays
var valores = [8,1,7,2,9];
console.log(valores[3]);

for (var pos = 0; pos < valores.length; pos++) {
    console.log("Posição " + pos + "Valor: " + valores[pos]);
}


var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";


var motos = new Array("BMW", "Yamaha", "Honda");



// Calcular a média de todos os números de um array
var valores = [8, 4, 9, 2, 10];

var soma = 0;
for (var pos = 0; pos < valores.length; pos++) {
  soma += valores[pos];
}

var media = soma / valores.length;

console.log(media);