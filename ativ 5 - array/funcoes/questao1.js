function ehDividido(){
    n = document.getElementById("num").value;
    const resto = n % 3;

    if(resto == 0){
        alert(document.getElementById("num").value + " é divisível por 3");
    }else{
        alert(document.getElementById("num").value + " não é divisível por 3");
    }
}
//evento que é executado sempre que a tecla ENTER for precionada
number = document.getElementById("num").enkeypress = function(e){
    //13 é a tecla <ENTER>
    if(e.keyCode == 13){
        ehDividido(number);
        e.preventDefault();
    }
}

//evento que é executado ao clicar no botão
document.getElementById("btn").onclick = function(e){
    ehDividido(number);
    e.preventDefault();
}