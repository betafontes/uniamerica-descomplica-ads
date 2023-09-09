fetch('https://fakestoreapi.com/products?limit=10')
.then(response => response.json())
.then(data => {
    preencherCarrinho(data);
})

.catch(error => {
    console.log("Ocorreu um error: ", error);
});

function preencherCarrinho(produtos) {
    const carrinhoContainer = document.getElementById('carrinho-container');
    
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        const imagem = document.createElement('img');
        imagem.src = produto.image;
        imagem.width = 200;
        imagem.height = 300;
        divProduto.appendChild(imagem);

        const nome = document.createElement('p');
        nome.textContent = produto.title;
        divProduto.appendChild(nome);

        const preco = document.createElement('p');
        preco.textContent = ` R$ ${produto.price} `;
        divProduto.appendChild(preco);

        carrinhoContainer.appendChild(divProduto);
    });
}