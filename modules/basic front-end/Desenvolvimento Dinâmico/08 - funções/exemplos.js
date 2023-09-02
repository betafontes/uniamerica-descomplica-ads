// Treinando o uso das funções
function multiplicar (x,y) {
    return x * y
}

var a = multiplicar (4,2);

    console.log(a);



 // Praticando sobre a função anônima que não declara o nome da função
 var infoCal = function (a , b , c , d) {
    return a + b + c + d;
 }

 console.log(infoCal (4, 9 , 14 , 20));



// Fazendo uma função com o método arrow function
const soma = (num1 , num2) => {
    return num1 + num2;
}

console.log(soma (3,6));


// Iterando o método Map com arrow function
const numeros = [1,2,3,4,5];

const valores = numeros.map((num) => num * num);
console.log(valores);


// Exemplo 2 com o Map
var listaProdutos = ["geladeira","fogão","air fryer"];
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula (elemento) {
  return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}

console.log(listaEmMaiuscula);

