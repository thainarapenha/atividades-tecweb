function aumento(){
    var entrada = document.getElementById("letra").value.toUpperCase();
    console.log(entrada)
    
    if(entrada == "A"){
        alert("Aumento de 10%");
        document.getElementById("letra").value='';
    }else if(entrada == "B"){
        alert("Aumento de 15%");
        document.getElementById("letra").value='';
    }else if(entrada == "C"){
        alert("Aumento de 20%");
        document.getElementById("letra").value='';
    }else{
        alert("Digite apenas A, B ou C");
        document.getElementById("letra").value='';
    }
}

//evento que é executado sempre que a tecla ENTER for precionada
let letraEntrada = document.getElementById("letra").enkeypress = function(e){
    //13 é a tecla <ENTER>
    if(e.keyCode == 13){
        aumento(letraEntrada);
        e.preventDefault();
    }
}

//evento que é executado ao clicar no botão
document.getElementById("btn").onclick = function(e){
    aumento(letraEntrada);
    e.preventDefault();
}