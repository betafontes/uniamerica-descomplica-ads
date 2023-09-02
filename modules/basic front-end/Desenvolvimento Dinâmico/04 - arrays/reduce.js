// reduz um array de valores a um unico valor.
var total = 0;
for (var i = 0; i < numeros.length; i++) {
    total += numeros[i];
}
console.log(total);

var tot = numeros.reduce(function (total,numero) {
    return total + numero;
}, 0);