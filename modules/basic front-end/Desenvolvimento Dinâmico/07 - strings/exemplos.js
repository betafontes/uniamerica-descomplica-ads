// utilizações das strings e seus métodos
var nome = "Roberta";
var x = nome.length;
console.log(x);

resultado = x > 15 ? " Obrigado " : "Por favor preencha seu nome completo";
console.log(resultado);



// deixando em caixa alta
var res = nome.toLocaleUpperCase();
console.log(res);



// utilizando outros métodos nas strings
var jogo = "Barcelona vs Real melhor time";
var posicao = jogo.indexOf("Real");
console.log(posicao);



/* Exemplo 1 :
Cortando a frase até a posição desejada */
var cortado = jogo.slice(13,);
console.log(cortado);


/* Exemplo 2 :
Identificado se uma tal coisa existe dentro de uma String */
var val = jogo.includes("Real");
console.log(val);


/* Exemplo 3 :
Concatenando 2 ou mais strings utilizando o método concat */
var str1 = "Eu amo";
var str2 = " Programação ";

var str3 = str1.concat(str2);
console.log(str3);


/* Exemplo 4 :
Tirando o espaço tanto do inicio e do fim na string */
var frase = "      Olá, eu estou aprendendo javascript    "
console.log(frase.trim());


/*Exemplo 5 :
Transformando uma string em um array */
var num = "1,2,3,4,5,6,7,8,";
var arr = num.split(",");
console.log(arr);