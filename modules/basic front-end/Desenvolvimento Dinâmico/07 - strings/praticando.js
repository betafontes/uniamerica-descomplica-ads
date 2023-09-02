// buscando em qual posição o python começa
var p = "Javascript e Python"
var pos1 = p.indexOf("Python");
console.log(pos1);


// pegando uma string baseado na antiga na posição que deseja
var novaString = p.substring(13,18);
console.log(novaString);


/* montando uma string acima da frase e mudando para uma nova string
e deixando em caixa alta */
var frase = "Olá Mundo"

if (frase.startsWith("Olá")) {
    let sub = frase.substring(4);
    let novaString = sub.replace("Mundo","Pessoal")
    let novaStringMaiuscula = novaString.toLocaleUpperCase();

    console.log(novaStringMaiuscula);
}
