/* altera o array, seja adicionado ou removendo elementos dele.
Ex : */
var arr = [1,2,3,4,5,6,7];
arr.splice(2,3);

console.log(arr);



// exemplificando com nomes , fazendo um corte e substituindo
var nomes = ["Maria","Joao","Lucas","Cauan"];
var novos = nomes.splice(1,1,"Luiz");

console.log(novos);



// criando um novo elemento no inicio de um array
var pais = ["Brasil","Argentina","Colombia"];
pais.unshift("Uruguai");

console.log(pais);

