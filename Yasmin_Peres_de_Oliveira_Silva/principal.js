"use strict";

// Função para calcular a média
function calcularMedia() {
    let nota1 = +document.querySelector("#nota1").valueAsNumber;
    let nota2 = +document.querySelector("#nota2").valueAsNumber;
    let nota3 = +document.querySelector("#nota3").valueAsNumber;
    let nota4 = +document.querySelector("#nota4").valueAsNumber;

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if(media >= 6)
    {
    console.log(media);
    document.querySelector("#meu-div").innerHTML = "A média é: ";
    document.querySelector("#meu-div").innerHTML += media.toFixed(1) + "  | Aprovado(a)! :)";
    }
    else
    {
    console.log(media);
    document.querySelector("#meu-div").innerHTML = "A média é: ";
    document.querySelector("#meu-div").innerHTML += media.toFixed(1) + "  | Reprovado(a)... :(";
    }
   
}