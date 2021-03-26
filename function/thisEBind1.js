const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(tihs.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// o "bind" serviu para que o "this" da função falar() funcionasse sem precisar chamar o objeto