/* A Exceção é um objeto que representa uma condição anormal que ocorre 
durante uma execução. */

/* O objetivo é quando ocorrer um erro, ele interrompe o fluxo normal de execução e é tratado 
por um bloco de código "try-catch", uma forma melhor de tratamento de erro. */

// Exemplo 1 : 

function divisao(a, b) {
    if ( b === 0) {
        throw new Error("Divisão por zero não é permitida");
    } return a/b;
}

try {
    const resultado = divisao(10,0);
    console.log("Resultado: " + resultado);

} catch (error) {
    console.log("Ocorreu uma exceção: " + error.message);
}



// Exemplo 2 :

const numeros = [1, 2, "3", 4, 5];

try {
    const doubleNumbers = numeros.map((num) => {
        if (typeof num !== 'number') {
            throw new Error(" O array só pode ter números");
        }
        return num * 2;
    })

    console.log(doubleNumbers);

} catch(error) {
    console.log("Ocorreu uma exceção: " + error.message);
}


/* Avançando com os exemplos anteriores sobre um tratamento de erro. 
Exemplo 3 : */

function processName(nome, callback) {

    if (typeof nome !== 'string') {
        callback(new Error('O nome deve ser uma string!'));
        return;
    }

    if (nome.length === 0) {
        callback(new Error('O nome não pode está vazio!'));
        return;
    }

    callback(null, "Nome processado com sucesso!");
}

processName("Marcelo", (error, result) => {

    if(error) {
        console.log("Ocorreu um problema: ", error.message);
    } else {
        console.log(result);
    }
});