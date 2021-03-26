const soma = function (x, y) {
    return x + y
}
/*const subtracao = function (x, y) {
    return x - y
}
const multipli = function (x, y) {
    return x * y
}
const divis = function (x, y) {
    return x / y
}*/

const imprimirRestultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirRestultado(2, 4)
imprimirRestultado(2, 4, soma)
imprimirRestultado(2, 4, function (x, y){
    return x - y
})
imprimirRestultado(2, 4, (x, y) => x * y) // arrow function sempre é uma função anonima, nao temos como nomeá-la

const pessoa = {
    falar: function (){
        console.log('Olá')
    }
}

pessoa.falar()