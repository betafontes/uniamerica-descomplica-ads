function processarItem(item) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (item % 2 === 0) {
                resolve('O número ${item} é par.');

            } else {
                reject('O número ${item} é ímpar.');
            }
        }, 1000);
    });
}

function processarArray(array) {
    const promises = array.map(item => processarItem(item));
    return Promise.all(promises);
}

const arrayNumeros = [1, 2, 3, 4, 5];

processarArray(arrayNumeros)
.then(resultados => {
    resultados.forEach(resultado => console.log(resultado));
})

.catch(erro => {
    console.error(erro);
});