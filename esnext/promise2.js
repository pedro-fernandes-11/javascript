/*
setTimeout(function(){
    console.log('Executando callback...')
    
    setTimeout(function(){
        console.log('Executando callback...')
        
        setTimeout(function(){
            console.log('Executando callback...')

        }, 2000)
    }, 2000)
}, 2000)*/

function esperarPor(tempo = 2){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando promise...")
            resolve()
        }, tempo * 1000)   
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)