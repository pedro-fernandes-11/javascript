/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são 
diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne
sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições 
matemáticas de existência de um triângulo).*/

function classificandoTriangulos(a, b, c){
    if(a === b && b === c){
        return 'Triângulo equilátero!'
    } else if (a === b || a === c || c === b){
        return 'Triaângulo isósceles!'
    } else{
        return 'Triângulo escaleno!'
    }
}

console.log(classificandoTriangulos(2, 0, 2))