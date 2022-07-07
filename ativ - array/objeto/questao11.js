let produtos = [
    {
        codigo: 1,
        nome: 'Produto 1',
        preco: 5.00,
        quantidade: 10,
    },
    {
        codigo: 2,
        nome: 'Produto 2',
        preco: 14.99,
        quantidade: 3,
    },
    {
        codigo: 3,
        nome: 'Produto 3',
        preco: 15.00,
        quantidade: 79,
    },
    {
        codigo: 4,
        nome: 'Produto 4',
        preco: 26.00,
        quantidade: 55,
    },
    {
        codigo: 5,
        nome: 'Produto 5',
        preco: 62.00,
        quantidade: 10,
    }
]


function pedido(codigo, quantidadePedido){
    let entradaPedido = produtos.findIndex(produto => produto.codigo === codigo)

    if(entradaPedido !== -1){
        if(produtos[entradaPedido].quantidade >= quantidadePedido){
            
            console.log("quantidade de produto disponível: ", produtos[entradaPedido].quantidade -= quantidadePedido)
        }else{
            console.log('Este produto não está disponível')
        }
    }else{
        console.log('Este produto não foi encontrado')
    }
}