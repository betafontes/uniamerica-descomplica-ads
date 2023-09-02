// Praticando com mais exemplos de funções

// Fazendo um carrinho de compras
const shoppingCart = [];

function addItemCart (item) {
    shoppingCart.push(item);
}

function removeItemFromCart (item) {
    const index = shoppingCart.indexOf(item);

    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}

function viewCart () {
    if (shoppingCart.length == 0) {
        console.log("Your shopping cart is empty!");
    } else {
        console.log("Itens in your shopiing cart : ");

        for (let i = 0; i < shoppingCart.length; i++) {
            console.log(`${i + 1} - ${shoppingCart[i]}`);
        }
    }
}

function clearCart () {
    shoppingCart.length = 0;
    console.log("Your shopping cart has beeb cleared");
}


addItemCart("Tennis");
addItemCart("Blusa");
addItemCart("Saia");
addItemCart("Short");
addItemCart("Pulseira");

viewCart();