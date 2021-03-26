// operador ... rest/spread
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12345.99}
const clone = { ativo: true, ...funcionario}
console.log(funcionario)
console.log(clone)

//usar spread com array
const grupoA = ['Elemento1', 'Elemento2', 'Elemento3']
const grupoFinal = ['Elemento0', ...grupoA, 'Elemento4']
console.log(grupoA)
console.log(grupoFinal)