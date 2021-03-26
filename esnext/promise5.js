function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            // se tiver algum erro dentro do try, ele vai pro catch
            if(Math.random() < chanceErro){
                reject('Erro')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Deu certo!', 0.5)
    .then(
        valor => console.log(valor),
        err => console.log(`Erro: ${err}`)
        // dentro da promise.then() também podemos tratar os erros que são passados pela reject da promise
        // o erro é reconhecido como sendo o segundo parametro
    )
    .catch(err => console.log('Deu erro mas não caiu aqui!')) // o reject não cai aqui pois já caiu anteriormente dentro do .then()