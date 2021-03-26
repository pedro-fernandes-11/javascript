const letras = ['a', 'b', 'c', 'd', 'e']

for(let i in letras){
    console.log(`${Number(i) + 1}) ${letras[i]}`)
}

console.log("=================")

for(let j = 0; j < letras.length; j++){
    console.log(`${j + 1}) ${letras[j]}`)
}