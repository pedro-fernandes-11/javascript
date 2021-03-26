/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operacoes(a, b){
    return `Soma: ${a + b}, subtração: ${a - b}, multiplicação: ${a * b}, divisão: ${a / b}`
}

console.log(operacoes(10, 2))