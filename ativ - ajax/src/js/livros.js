$("#btnListar").click(() => {
    $("#abaListar").attr('style', '');
    $("#abaCadastro").attr('style', 'display: none');
    $("#abaDeletar").attr('style', 'display: none');
    $("#abaAtualizado").attr('style', 'display: none');
})
$("#btnCadastrar").click(() => {
    $("#abaCadastro").attr('style', '');
    $("#abaListar").attr('style', 'display: none');
    $("#abaDeletar").attr('style', 'display: none');
    $("#abaAtualizado").attr('style', 'display: none');
})
$("#btnAtualizar").click(() => {
    $("#abaAtualizado").attr('style', '');
    $("#abaCadastro").attr('style', 'display: none');
    $("#abaDeletar").attr('style', 'display: none');
    $("#abaListar").attr('style', 'display: none');
})
$("#btnDeletar").click(() => {
    $("#abaDeletar").attr('style', '');
    $("#abaAtualizado").attr('style', 'display: none');
    $("#abaCadastro").attr('style', 'display: none');
    $("#abaListar").attr('style', 'display: none');
})

let urlLivros = 'https://mockapiajax.herokuapp.com/livro'
let urlAluguel = 'https://mockapiajax.herokuapp.com/aluguel'
let urlVendas = 'https://mockapiajax.herokuapp.com/venda'
let urlClientes = 'https://mockapiajax.herokuapp.com/cliente'

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
        
		titulo.innerHTML = 'Titulo: ' + livro.titulo
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
		const livrosCad = document.querySelector('.resultadoCadastros')
		const livrosAtu = document.querySelector('.resultadoAltualizado')

        //limpa a area resposável pelo txt para que o novo possar ser adicionado
        $("#btnListar").click(function(){
            $("#abaListar").empty();
        });
        $("#btnCadastrar").click(function(){
            $("#abaCadastrados").empty();
        });
        $("#btnAtualizar").click(function(){
            $("#abaAtualizado").empty();
        });
		$("#btnDeletar").click(function(){
            $("#abaDeletar").empty();
        });
        

		livros.appendChild(newLivro)      
	})
}

function listarLivros(){
	fetch(urlLivros)
		.then(response => response.json())
		.then(response => listar(response))
		.catch(error => alert(error))
}

function cadastraLivro(){
	fetch(urlLivros, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			id: '4',
			titulo: 'Arquitetura limpa: O guia do artesão para estrutura e design de software',
			autor: 'sem autor',
			descricao: 'As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers "Código Limpo" e "O Codificador Limpo", o lendário artesão de software Robert C. Martin (“Uncle Bob”) vai revelar essas regras e ajudar o leitor a aplicá-las.A "Arquitetura Limpa" de Martin não é só mais um catálogo de opções.',
			tipo: 'Computatação'
		}),
	})
	.then(res => console.log(res))
	.catch(error => alert(error))
	
	alert('Livro cadastrado com sucesso!! Clique em listar');
}

function deletaLivro() {
	fetch(urlLivros + '/4', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	})
	.then(res => console.log(res))
	.catch(error => alert(error))
	
	alert('Livro deletado com sucesso!! Clique em listar');
}

function atualizaLivro() {
	fetch(urlLivros + '/4', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify({
			id: '4',
			titulo: 'Arquitetura limpa: O guia do artesão para estrutura e design de software',
			autor: 'Robert C. Martin',
			descricao: 'As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers "Código Limpo" e "O Codificador Limpo", o lendário artesão de software Robert C. Martin (“Uncle Bob”) vai revelar essas regras e ajudar o leitor a aplicá-las.A "Arquitetura Limpa" de Martin não é só mais um catálogo de opções.',
			tipo: 'Computatação'
		}),
	})
	.then(res => console.log(res))
	.catch(error => alert(error))
	
	alert('Livro atualizado com sucesso!! Clique em listar');
}

// ----------------------------------- AREA DO CLIENTE -------------------------------
$("#btnListarCliente").click(() => {
    $("#abaListarCliente").attr('style', '');
    $("#abaCadastradarCliente").attr('style', 'display: none');
    $("#abaDeletarCliente").attr('style', 'display: none');
    $("#abaAtualizarCliente").attr('style', 'display: none');
})
$("#btnCadastrarCliente").click(() => {
    $("#abaCadastradarCliente").attr('style', '');
	$("#abaListarCliente").attr('style', 'display: none');
    $("#abaDeletarCliente").attr('style', 'display: none');
    $("#abaAtualizarCliente").attr('style', 'display: none');
})
$("#btnAtualizarCliente").click(() => {
    $("#abaAtualizarCliente").attr('style', '');
	$("#abaCadastradarCliente").attr('style', 'display: none');
	$("#abaListarCliente").attr('style', 'display: none');
    $("#abaDeletarCliente").attr('style', 'display: none');
})
$("#btnDeletar").click(() => {
    $("#abaDeletarCliente").attr('style', '');
	$("#abaAtualizarCliente").attr('style', 'display: none');
	$("#abaCadastradarCliente").attr('style', 'display: none');
	$("#abaListarCliente").attr('style', 'display: none');
})


function clientes(response) {
	response.forEach(cliente => {
		const newCliente = newElement('div', 'clientes')

		const id = newElement('div', 'id')
		const nome = newElement('div', 'nome')
		const email = newElement('div', 'email')
		const cpf = newElement('div', 'cpf')

		id.innerHTML = 'id: ' + cliente.id
		nome.innerHTML = 'nome: ' + cliente.nome_completo
		email.innerHTML = 'email: ' + cliente.email
		cpf.innerHTML = 'cpf: ' + cliente.cpf

		newCliente.appendChild(id)
		newCliente.appendChild(nome)
		newCliente.appendChild(email)

		const clientes = document.querySelector('.clientes')

		//limpa a area resposável pelo txt para que o novo possar ser adicionado
        $("#btnListarCliente").click(function(){
            $("#abaListarCliente").empty();
        });
        $("#btnCadastrarCliente").click(function(){
            $("#abaCadastradarCliente").empty();
        });
        $("#btnAtualizarCliente").click(function(){
            $("#abaAtualizarCliente").empty();
        });
		$("#btnDeletarCliente").click(function(){
            $("#abaDeletarCliente").empty();
        });

		clientes.appendChild(newCliente)
	})
}

function listarClientes() {
	fetch(urlClientes)
		.then(response => response.json())
		.then(response => clientes(response))
		.catch(error => alert(error))
}

function cadastraCliente() {
	fetch(urlClientes, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify({
			id: '5',
			nome_completo: 'Carlos',
			email: 'carlos@gmail.com',
			cpf: '001.002.003-01',
		}),
	})
	.then(res => console.log(res))
	.catch(error => alert(error))
	
	alert('Cliente cadastrado com sucesso!! Clique em listar');
}

function deletaCliente() {
	fetch(urlClientes + '/5', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	})
	.then(res => console.log(res))
	.catch(error => alert(error))
	
	alert('Cliente deletado com sucesso!! Clique em listar');
}

function atualizaCliente() {
	fetch(urlClientes + '/5', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify({
			id: '3',
			nome_completo: 'Carlos Alberto',
			email: 'carlos@gmail.com',
			cpf: '001.002.003-03',
		}),
	})
	.then(res => console.log(res))
	.catch(error => alert(error))
	
	alert('Cliente atualizado com sucesso!! Clique em listar');
}




