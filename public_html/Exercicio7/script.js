/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const URL = 'json.json'

console.log("usando fecth");
console.log(window.fetch);
fetch(URL).then(function (respose) {
    return respose.json();
}).then(function (data) {
    console.log(data.results[4]);
    let id = 1;
    document.getElementById("name").innerHTML=data.results[id].title;
    console.log(data.results[id].thumbnail);
    criaImagem(data.results[id].thumbnail); 
    document.getElementById("ingredientes").innerHTML=data.results[id].ingredients;
    document.getElementById("receita").innerHTML=data.results[id].href;
    
})


function criaImagem(caminho) {
    var stringImagem = document.createElement("img");
    stringImagem.src = caminho;
    stringImagem.width = 250;
    stringImagem.height = 250;
    document.getElementById("imagem").appendChild(stringImagem);  
}