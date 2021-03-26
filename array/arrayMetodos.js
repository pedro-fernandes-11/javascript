const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // delete pilotos[pilotos.length - 1] remover o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // pilotos[pilotos.length] = 'Verstappen' (adiciona um elemento)
console.log(pilotos)

pilotos.shift() // delete pilotos[0] remover o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionar no indice 2, 2 elementos
console.log(pilotos)

// remover
pilotos.splice(3, 1) // remover no indice 3, 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array partindo do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // criar um array referenciando-se em outro, começa no indice 1 e termina no 4 (4 não incluso)
console.log(algunsPilotos2)