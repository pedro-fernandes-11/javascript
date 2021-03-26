Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i<this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
function pegarSoPreco(e){
    let obj = JSON.parse(e)
    return obj.preco
}

const caixa = carrinho.map2(pegarSoPreco)
console.log(caixa)