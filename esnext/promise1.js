const primeiroElemento = arrayString => arrayString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Primeiro', 'Segundo', 'Terceiro', 'Quarto'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)