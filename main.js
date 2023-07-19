// Criar array vazia
var Nome_Animatronic =[];

function enviar(){
var mostrarNome2 = [];
// Adicionar os nomes a variáveis
for (let l = 1; l <= 5; l++) {
    var Animatronic = document.getElementById("nome"+ l).value;
    Nome_Animatronic.push(Animatronic);
    console.log(Nome_Animatronic);    
}

// Inserir os nomes na array
var tamanhoArray = Nome_Animatronic.length;
for (let j = 0; j < tamanhoArray ; j++) {
mostrarNome2.push("<h4>Animatronic- "+ Nome_Animatronic[j] + "</h4>");
    
}
// Esconder o botão ENVIAR e mostrar o botão ORGANIZAR
document.getElementById("BtnEnviar").style.display = 'none';
document.getElementById("BtnOrganizar").style.display = 'inline-block'

// Mostrar os nomes na div
var removerVirgula = mostrarNome2.join("");
//document.getElementById('MostrarComVirgula').innerHTML = mostrarNome2;
document.getElementById('MostrarSemVirgula').innerHTML = removerVirgula;

}

// Organizar a ordem dos nomes com a função sort
function organizar() {
    Nome_Animatronic.sort();

    var nomeOrganizado = []; 
    for (let l = 0; l < Nome_Animatronic.length;l++) { 
        nomeOrganizado.push("Animatronic- " + Nome_Animatronic[l] + "</h4>") } 
        var removerVirgula2 = nomeOrganizado.join(""); 
        document.getElementById("MostrarSemVirgula").innerHTML = removerVirgula2;
}