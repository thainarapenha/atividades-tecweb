let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]
Array.prototype.push.apply(vetorPilha, vetorAdiciona);

console.log("vetorPilha: ", vetorPilha)
console.log("vetorAdiciona: ", vetorAdiciona)
console.log("Vetor completo: ", vetorPilha)