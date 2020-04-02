/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
    let nunIni = prompt("Insira o número inicial");
    document.getElementById("numInicial").innerHTML = nunIni;
    let numFinal = prompt("Insira o número final");
    document.getElementById("numfinal").innerHTML = numFinal;

    escrevaNumeros(nunIni, numFinal);
}
var valorini;
var valorFin;
let temp;
function escrevaNumeros(nunInicial, nunFinal) {
    valorini = nunInicial;
    valorFin = nunFinal;
    temp = setInterval(() => imprime(), 1000);
}
function imprime() {
    if (valorini <= valorFin) {
        var string = document.getElementById("resposta").innerHTML;
        if (string == null) {
            document.getElementById("resposta").innerHTML = valorini;
        } else {
            document.getElementById("resposta").innerHTML = string + " " + valorini;

        }
        valorini = parseInt(valorini) + parseInt(1);
    } else {
        clearTimeout(temp);
    }
}
