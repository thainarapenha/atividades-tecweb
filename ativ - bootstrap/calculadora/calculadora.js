//recebe todos os numeros de entrada do usuário e digita no campo de entrada-resultado
function entrada(numEntrada){
    let numeros = document.getElementById('EntradaResultado').innerHTML;
    document.getElementById('EntradaResultado').innerHTML = numeros + numEntrada;
}
//limpa o campo de exibição da calculadora sempre que o C for precionado
function limpar(){
    document.getElementById('EntradaResultado').innerHTML = ' ';
}
//calcula a operação de entrada e exibe ao final da operação quando o = for precionado
function calcular(){
    let campo = document.getElementById('EntradaResultado').innerHTML;

    if(campo){
        document.getElementById('EntradaResultado').innerHTML = eval(campo);
    }else{
        document.getElementById('EntradaResultado').innerHTML = eval('vazio');
    }
}