/* Formas da manipulação de Json com alguns exemplos!! */

// Exemplo 1 :
const pessoa = {
    nome: 'João',
    idade: 25,
    profissao: "Desenvolvedor"
}

const pessoaJson = JSON.stringify(pessoa);
// console.log(pessoa);
// console.log(pessoaJson);



/* transformando o Json em um objeto em javascript
Exemplo 2 :*/
const pessoaObj = JSON.parse(pessoaJson);
console.log(pessoaObj);


