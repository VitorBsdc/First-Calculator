function clean() {
    document.getElementById('resultado').innerHTML = ""; }
    /*Aspas representa null. Ou seja vai retirar tudo*/

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); }
    /*ZERO representa a posição que sera retirada -1*/

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; }
    /*Número n++*/

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
        /*Eval utilizado para calcular resultado*/
    }
    else {
        document.getElementById('resultado').innerHTML = "Error!"
        /*Mensagem caso esteja vazio resultado*/
    }
}