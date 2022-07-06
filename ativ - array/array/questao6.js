// de4ixei com aspas apenas pra dar espaço entre um numero e outro
let entradaNotas = [" 0.0", " 1.5", " 7.2", " 10.0", " 4.9", " 6.9", " 8.9", " 5.0", " 5.1", " 8.8"];

function notas(entradaNotas){
	const D = entradaNotas.filter(nota => nota >= 0.0 && nota <= 4.9)
	const C = entradaNotas.filter(nota => nota >= 5.0 && nota <= 6.9)
	const B = entradaNotas.filter(nota => nota >= 7.0 && nota <= 8.9)
	const A = entradaNotas.filter(nota => nota >= 9.0 && nota <= 10.0)

	console.log(
		`Notas:\n
		conceito D: ${D}\n
		conceito C: ${C}\n
		conceito B: ${B}\n
		conceito A: ${A}`
	)
}