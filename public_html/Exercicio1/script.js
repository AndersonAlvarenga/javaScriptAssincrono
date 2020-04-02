/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {
  var hora = prompt("Digite em quantos milissegundos gostaria de ser alertado");
  setTimeout(alerta,hora);
};
function alerta(){
    alert("Exercicio 1");
}
