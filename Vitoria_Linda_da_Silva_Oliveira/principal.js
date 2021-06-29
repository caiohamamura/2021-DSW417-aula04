"use strict";
// solicitar as notas de dois bimestres
// calcular a média (a primeira com peso 1 e a segunda com peso 2)
// mostrar o resultado 

function calcularMedia() {
    let nota1 = +document.querySelector("#nota1").valueAsNumber ;
    let nota2 = +document.querySelector("#nota2").valueAsNumber ;
    let nota3 = +document.querySelector("#nota3").valueAsNumber ;
    let nota4 = +document.querySelector("#nota4").valueAsNumber ;

    let media =  (nota1+nota2+nota3+nota4) / 4;
    console.log(media);
    document.querySelector("#meu-div").innerHTML = "A média do ano é: ";
    document.querySelector("#meu-div").innerHTML += media.toFixed(1);

    if (media>=6)
    {
        document.querySelector("#meu-div").innerHTML += ". Você foi aprovado! uhull!!"
    }
    else 
    document.querySelector("#meu-div").innerHTML += ". Você foi reprovado :("
}