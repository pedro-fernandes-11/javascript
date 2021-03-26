const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(arquivo){
    return new Promise(resolve => {
        fs.readFile(arquivo, (error, data) => {
            if(error) console.log(error)
            console.log("Arquivo sendo lido...")
            resolve(data.toString())
        })
    })
}

lerArquivo(caminho)
    .then(data => data.split('\r\n'))
    .then(dataSecond => dataSecond.join(','))
    .then(dataFinal => `O resultado final é ${dataFinal}`)
    .then(console.log)