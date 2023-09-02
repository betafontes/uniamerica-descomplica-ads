/* o loop é controlado por entrada no qual a condição no teste é verificada antes
de ir para o corpo do programa */

var carro = {modelo: 'Audio A3', marca: 'Audi', ano: 2020}

for (let caracterisitica in carro) {
    console.log(carro[caracterisitica]);
}



// outra pequena forma de fazer usando um array
var carro = [{ modelo: "Audio A3", marca: "Audi", ano: 2020},
{modelo: 'Compras', marca: 'Jeep', ano: 2021}]

for (let caracterisitica in carro) {
  console.log(carro[caracterisitica].marca);
}

// usando o for..of
for (let c of carro) {
  console.log(c.ano);
}


