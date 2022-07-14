let pessoas = [
    {
        nome: 'Júlia',
        email: 'juliaalves@gmail.com',
        endereco: {rua: 'Maria Pontes',  numero: 123, bairro: 'Marcos', cidade: 'Ipu'},
        telefone: '88 9.0000-0000',
        data_nascimento: {dia: 25, mes: 07, ano: 2000},
        favorito: true
    },
    {
        nome: 'Elis',
        email: 'elis@gmail.com',
        endereco: {rua: 'Jóse Alencar',  numero: 727, bairro: 'Monteiro', cidade: 'São Paulo'},
        telefone: '11 9.0000-0000',
        data_nascimento: {dia: 23, mes: 08, ano: 2003},
        favorito: false
    },
    {
        nome: 'Júlia',
        email: 'julia@gmail.com',
        endereco: {rua: 'Joana Pontes',  numero: 903, bairro: 'Ladeira', cidade: 'Maranguape'},
        telefone: '85 9.0000-0000',
        data_nascimento: {dia: 02, mes: 04, ano: 2000},
        favorito: false
    },
    {
        nome: 'Jacob',
        email: 'jacob@gmail.com',
        endereco: {rua: 'Presidente Kenedy',  numero: 86, bairro: 'Flores', cidade: 'Fortaleza'},
        telefone: '85 9.0000-0000',
        data_nascimento: {dia: 15, mes: 07, ano: 1993},
        favorito: true
    }
]

function imprimeDadosNome(nome){
    pessoas.forEach(pessoa =>{
        nome ? pessoa.nome === nome && console.log(pessoa) : console.log(pessoa)
    })
}

function dadosAniversario(mes){
    pessoas.forEach(pessoa => {
        pessoa.data_nascimento.mes === mes && console.log(pessoa)
    })
}

function ordemNomes(){
    let nomes = []
    pessoas.forEach(pessoa => nomes.push(pessoa.nome))
    console.log(nomes.sort())
}

function favoritos(){
     pessoas.forEach(pessoa => pessoa.favorito && console.log(pessoa))
}
    
    