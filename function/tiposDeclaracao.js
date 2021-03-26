console.log(soma(3, 4)) // antes do código, ser lido, todas function declaration são percorridas...

// function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){
    return x - y
}
console.log(sub(3, 4)) // ...diferentemente de quando criamos uma function expression

// named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))