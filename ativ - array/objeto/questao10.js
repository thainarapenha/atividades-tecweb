class Carro{
	constructor(velocidadeAtual = 40, velocidadeMaxima = 200) {
		this.velocidadeAtual = velocidadeAtual
		this.velocidadeMaxima = velocidadeMaxima
	}

	set acelerar(velocidade){
		this.velocidadeAtual = velocidade
	}

	get statusVelocidade(){
		return this.velocidadeAtual
	}
}

const ferrari = new Carro()
ferrari.cor = 'vermelho'
ferrari.modelo = '488 SPIDER'
ferrari.acelerar = velocidade => (ferrari.velocidadeAtual = velocidade * 2)
console.log("Questão 10: ", ferrari)

const volvo = new Carro()
volvo.cilindradas = 1.498
volvo.ligarTurbo = velocidade => (this.velocidadeAtual = velocidade * 4)
console.log("Questão 10: ", volvo)