function criarProduto(nomeProd, precoProd, descontoProd){
    let precoTot = precoProd - (precoProd * descontoProd)
    return {
        'Nome do produto': nomeProd,
        'Preço original': precoProd,
        "Preco final aplicando o desconto": precoTot
    }
}

console.log(criarProduto('Batata', 2, 0.5))
console.log(criarProduto('Carro', 15000, 0.2))
