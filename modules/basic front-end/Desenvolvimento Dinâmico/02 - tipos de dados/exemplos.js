// verificando o tipo dos dados
var nome = "Roberta"
console.log(typeof(nome));



// outra forma de verificar
var nome = 23;
console.log(typeof nome);

if (typeof nome == "string") {
  console.log(nome.toLocaleUpperCase());
} else {
  console.log("Você precisa usar uma string");
}