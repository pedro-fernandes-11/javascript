Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: '2499', fragil: true},
    {nome: 'iPad Pro', preco: '4199', fragil: true},
    {nome: 'Copo de vidro', preco: '12.49', fragil: true},
    {nome: 'Copo de plástico', preco: '18.99', fragil: false}
]

const produtosCaros = produtos.filter2(function(p){
    if(p.preco >= 500 && p.fragil){
        return true
    }
})

console.log(produtosCaros)