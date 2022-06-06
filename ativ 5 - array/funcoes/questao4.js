function verifica(){
    cod = document.getElementById("codAluno").value='';
    notaNum1 = document.getElementById("nota1").value='';
    notaNum2 = document.getElementById("nota2").value='';
    notaNum3 = document.getElementById("nota3").value='';
}

document.getElementById("btn").onclick = function(e){
    let media = 0
    let cod = document.getElementById("codAluno").value;
    let notaNum1 = document.getElementById("nota1").value;
    let notaNum2 = document.getElementById("nota2").value;
    let notaNum3 = document.getElementById("nota3").value;
    
    console.log(cod, notaNum1, notaNum2, notaNum3)

    if(cod < 0){
        alert("O código do aluno não pode ser negativo! \nTente novamente")
        verifica();
    }else{
        if(notaNum1 > notaNum2 && notaNum1 > notaNum3){
            media = ((notaNum1*4) + (notaNum2*3) + (notaNum3*3))/10
        }else if(notaNum2 > notaNum1 && notaNum2 > notaNum3){
            media = ((notaNum2*4) + (notaNum1*3) + (notaNum3*3))/10
        }else if(notaNum3 > notaNum1 && notaNum3 > notaNum2){
            media = ((notaNum1*4) + (notaNum2*3) + (notaNum3*3))/10
        }
    
        if(media >= 5){
            alert(`APROVADO \n` + `Código do Aluno: ${cod} \n` + `Nota 1: ${notaNum1} \n` + `Nota 2: ${notaNum2} \n` + `Nota 3: ${notaNum3} \n` + `Média: ${media}`)
        }else if(media < 5){
            alert(`REPROVADO \n` + `Código do Aluno: ${cod} \n` + `Nota 1: ${notaNum1} \n` + `Nota 2: ${notaNum2} \n` + `Nota 3: ${notaNum3} \n` + `Média: ${media}`)
        }
    }

    verifica();
    e.preventDefault();
}