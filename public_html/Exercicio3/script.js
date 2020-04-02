/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.getElementById("carregar").addEventListener('click',function(){
    
    document.getElementById("img").style.display="block";
    setTimeout(limpar,500);
});

function limpar(){
    document.getElementById("img").style.display="none";
    document.getElementById("paragrafo").innerHTML="Carregado com sucesso";
}