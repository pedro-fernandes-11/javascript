// par chave/valor
const saudacao = "Olá" // contexto léxico x

function executarTeste() {
    const saudacao = "Oi" // contexto léxico y
    return saudacao
}

// Objetos são grupos aninhados de chave/valor
const cliente = {
    nome: "Pedro",
    idade: 17,
    peso: 55,
    pais: {
        pai: {
            nome: "Márcio",
            idade: 51,
            peso: 80,
        },
        mae: {
            nome: "Rosângela",
            idade: 46,
            peso: 60,
        }
    },
    endereco: {
        logradouro: 'Rua Tijuca',
        numero: 185
    }
}

console.log(saudacao)
console.log(executarTeste())
console.log(cliente)