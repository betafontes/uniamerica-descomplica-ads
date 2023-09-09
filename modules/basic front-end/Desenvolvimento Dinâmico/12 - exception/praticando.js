/* Implementa um código para verificar se todos os elementos do array
possuem números postivos. Caso não tenha, deve ser lançado uma exceção. */

function checkPositive(numeros) {

    if (!Array.isArray(numeros)) {
        throw new Error("O argumento deve ser de um array");
    }

    const allPositive = numeros.every((num) => num > 0);

    if (!allPositive) {
        throw new Error("O array deve conter apenas números positivos!");
    }

    return true;
}

try {
    const numbers = [1, 2, 3, 4, 5, 6];
    const isPositive = checkPositive(numbers);

    console.log(isPositive);

} catch(error) {
    console.log("Ocorreu um erro: ", error.message);
}