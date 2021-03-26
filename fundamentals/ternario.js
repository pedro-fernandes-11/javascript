const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(Math.floor(7.1))) // ferrando o aluno (arredondando pra baixo)
console.log(resultado(Math.ceil(6.7))) // ajudando o aluno (arredonando pra cima)