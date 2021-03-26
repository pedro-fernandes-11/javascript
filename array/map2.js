const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
function pegarSoPreco(e){
    let obj = JSON.parse(e)
    return obj.preco
}
function somar(array){
    let soma = 0
    for(let i=0; i< array.length;i++){
        soma += array[i]
    }
    return soma
}

const caixa = carrinho.map(pegarSoPreco)
console.log(caixa)

const pagar = somar(caixa)
console.log(pagar)