/*Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/

function contrario(x){
    return x * -1
}
function raizQuadrada(y){
    return y ** (1/2)
}

function bhaskara(a, b, c){
    let delta = (b ** 2) - (4 * a * c)
    if (delta < 0){
        console.log("Sem raíz real!")
    } else if (delta === 0){
        console.log("Raíz real dupla!")
    }else{
        console.log("Duas raízes reias distintas!")
    }

    let xLinha = (contrario(b) + raizQuadrada(delta)) / (2 * a)
    let xDuasLinha =  (contrario(b) - raizQuadrada(delta)) / (2 * a)

    console.log("Valor de x' é: " + xLinha)
    console.log("Valor de x'' é: " + xDuasLinha)
}

console.log(bhaskara(5, -3, -2))