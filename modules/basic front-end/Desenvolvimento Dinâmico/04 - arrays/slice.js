// copia uma parte do array e retorna como um novo array
var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);



// concatenando os arrays
var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi","Manuela"];

var pessoas1 = pessoa.slice(1, 3);
var empresa = pessoa.concat(gerente);

console.log(empresa);
