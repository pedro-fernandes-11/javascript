// Closure é o escopo criado quando uma função é declrada
// Esse escopo permite a função acessar e manpular variávies externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())