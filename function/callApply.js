function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990, 
    desc: 0.20 
}

console.log(getPreco.call(carro)) // chamando/aplicando o objeto "carro" como o "this" da função
console.log(getPreco.apply(carro))

//a diferença entre eles:
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$'])) // primeiro valor é o objeto que será usado como "this" 