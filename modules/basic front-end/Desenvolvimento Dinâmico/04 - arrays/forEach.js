// é usado para percorrer arrays.
var a = [10,20.30,40,50,60];

a.forEach(valor => console.log(valor));


var tot = 0;
a.forEach(valor => {
    tot += valor;
})
console.log(tot);



// outra forma usando indice
a.forEach(function(valor,indice,array) {
    console.log(array[indice])
})