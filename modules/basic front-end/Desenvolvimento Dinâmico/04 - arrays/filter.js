// aplica uma instrução condicional a ele.
var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);



// fazendo uma função para determinar números maiores que 5.
var numerosFiltrados = numeros.filter (
    function(valor) {
        return valor > 5;
    }
);
console.log(numerosFiltrados);



// fazendo uma função fora do filter e depois jogar nela
function buscarValores(valor) {
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);



// fazendo uma função anônima de uma forma simples
var r1 = numeros.filter((valor) => {
    return valor > 5;
});
console.log(r1);



// utilizando objetos
var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoasListagem = funcionarios.filter (
    function(valor) {
        return valor.nome.length < 5
    }
)
console.log(pessoasListagem);