function gerarAleatorio(min, max, tempo){
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarAleatorio(1, 60, 100),
        gerarAleatorio(1, 60, 100),
        gerarAleatorio(1, 60, 100)
    ])
}

console.time('Tempo de execução das promises')

gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('Tempo de execução das promises'))