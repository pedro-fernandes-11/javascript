/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitalInicial, taxaDeJuros, tempo){
    let montante1 = capitalInicial + (capitalInicial * taxaDeJuros * tempo)
    return montante1
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempo){
    let montante2 = capitalInicial * ((1 + taxaDeJuros) ** tempo)
    return montante2
}

console.log(jurosSimples(1000, 0.5, 3))
console.log(jurosCompostos(1000, 0.5, 3))