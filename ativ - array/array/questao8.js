let vetor = [1, 5, 3, 7, 6, 12]
let inteiro = 2;

function multiplicar(vetor, inteiro){
    console.log("valores do vetor: ", vetor, "\n","valor do número inteiro: ", inteiro)
    console.log("valores multiplicados", vetor.map(num => num * inteiro))
}

function mult_maior5(vetor, inteiro){
    console.log("valores do vetor: ", vetor, "\n","valor do número inteiro: ", inteiro)
    console.log("valores multiplicados", vetor.map(num => (num > 5 ? num * inteiro : num)))
}
