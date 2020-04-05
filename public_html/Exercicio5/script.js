/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let valorInicial;
let valorFinal;
let valorSetTmeOut;
let tempo;
window.onload = function () {
    valorInicial = prompt("Informe o valor inicial!");
    valorFinal = prompt("Informe o valor final!");
    document.getElementById("valorInicial").innerHTML = valorInicial;
    document.getElementById("valorFinal").innerHTML = valorFinal;
    valorSetInterval1 = valorInicial;
    valorSetInterval2 = valorInicial;
    tempo = setInterval(() => imprimeSetInterval(), 1000);
    let timerId = setTimeout(function imprime() {
        if (valorSetInterval2 <= valorFinal) {
        var string2 = document.getElementById("respostaB").innerHTML;
        document.getElementById("respostaB").innerHTML = string2 + " " + valorSetInterval2;
        valorSetInterval2++;
        timerId = setTimeout(imprime, 1000); // (*)
    } else {
        clearTimeout(timerId);
    }    
    }, 1000);
}
function imprimeSetInterval() {
    if (valorSetInterval1 <= valorFinal) {
        var string = document.getElementById("respostaA").innerHTML;
        document.getElementById("respostaA").innerHTML = string + " " + valorSetInterval1;
        valorSetInterval1++;
    } else {
        clearTimeout(tempo);
    }
}