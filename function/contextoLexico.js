const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() // uma função carrega o contexto léxico aonde ela foi definida
}

exec()