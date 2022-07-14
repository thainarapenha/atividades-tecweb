$("#btnListar").click(() => {
    $("#abaListar").attr('style', '');
    $("#abaCadastro").attr('style', 'display: none');
})

$("#btnCadastrar").click(() => {
    $("#abaCadastro").attr('style', '');
    $("#abaListar").attr('style', 'display: none');
})

let urlLivros = 'https://mockapiajax.herokuapp.com/livro'
let urlAluguel = 'https://mockapiajax.herokuapp.com/aluguel'
let urlVendas = 'https://mockapiajax.herokuapp.com/venda'

function newElement(tagName, className){
	const elemento = document.createElement(tagName)
	elemento.className = className
	return elemento
}

function listar(response){  
	response.forEach(livro => {
		const newLivro = newElement('div', 'resultadoLivros')

		const titulo = newElement('div', 'titulo')
		const autor = newElement('div', 'autor')
		const descricao = newElement('div', 'descricao')
		const tipo = newElement('div', 'tipo')
		const id = newElement('div', 'id')
        
		titulo.innerHTML = 'Titulo: ' + livro.nome_livro
		autor.innerHTML = 'Autor: ' + livro.autor
		descricao.innerHTML = 'Descricao: ' + livro.descricao
		tipo.innerHTML = 'Tipo: ' + livro.tipo
		id.innerHTML = 'Id: ' + livro.id
        
		newLivro.appendChild(titulo)
		newLivro.appendChild(autor)
		newLivro.appendChild(descricao)
		newLivro.appendChild(tipo)
		newLivro.appendChild(id)

		const livros = document.querySelector('.resultadoLivros')

        //limpa a area resposável pelo txt para que o novo possar ser adicionado
        $("#btnListar").click(function(){
            $("#abaListar").empty();
        });

		livros.appendChild(newLivro)       
	})
}

function getLivros(){
	fetch(urlLivros)
		.then(response => response.json())
		.then(response => listar(response))
		.catch(error => alert(error))
}




