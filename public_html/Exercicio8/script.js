/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let id = 1;
pratoPreferido(1);
async function pratoPreferido(id) {
    const response = await fetch(`json.json`);
    const data = await response.json();
    document.getElementById("name").innerHTML = data.results[id].title;
    console.log(data.results[id].thumbnail);
    criaImagem(data.results[id].thumbnail);
    document.getElementById("ingredientes").innerHTML = data.results[id].ingredients;
    document.getElementById("receita").innerHTML = data.results[id].href;
}

function criaImagem(caminho) {
    var stringImagem = document.createElement("img");
    stringImagem.src = caminho;
    stringImagem.width = 250;
    stringImagem.height = 250;
    document.getElementById("imagem").appendChild(stringImagem);
}
