"use strict";
// No bimestre terá duas avaliações, criar dois inputs,
// solicitando as notas dos dois bimestres
// calcular a média, sendo a primeira com peso 1 e a 
// segunda com peso 2
// mostrar o resultado em um div

function calcularMedia() {
    let nota1 = document.querySelector("#nota1").valueAsNumber;
    let nota2 = document.querySelector("#nota2").valueAsNumber;
    let nota3 = document.querySelector("#nota3").valueAsNumber;
    let nota4 = document.querySelector("#nota4").valueAsNumber;

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(media);

    let mensagem;
    if (media >= 6)
        mensagem = "Aprovado";
    else
        mensagem = "Reprovado";

    document.querySelector("#meu-div").innerHTML = "A média final é: ";
    document.querySelector("#meu-div").innerHTML += media.toFixed(1);
    document.querySelector("#meu-div2").innerHTML = mensagem;

}