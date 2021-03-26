const escola = "Cod3r"
const pi = 3.141519

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(pi.toFixed(2)) // só com number
console.log(pi.toString().charAt(2)) // tranforma em string e pega o carac da pos[2]

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola '+ escola + '!')
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))