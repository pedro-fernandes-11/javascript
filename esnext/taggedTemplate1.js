// tagged template - processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Oi gente'
}

const nome = 'Pessoa'
const situacao = 'Aprovado'

console.log(tag `${nome} está ${situacao}.`)