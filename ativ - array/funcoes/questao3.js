
function sacar(){
    console.log(valorSaque).value;

    // let cont100 = 0;
    // let cont50 = 0;
    // let cont10 = 0;
    // let cont5 = 0;
    // let cont1 = 0;

    
}


let valorSaque = document.getElementById("numSaque").enkeypress = function(e){
    if(e.keyCode == 13){
        sacar(valorSaque);
        e.preventDefault();
    }
}

document.getElementById("btnSaque").onclick = function(e){
    sacar(valorSaque);
    e.preventDefault();
}