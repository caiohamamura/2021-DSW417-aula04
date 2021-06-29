// Definição para criação de variáveis globais e locais.
"use strict";

// Função para calcular a média e exibir o resultado.
function calculoMedia() {
    let nota1 = document.querySelector("#nota1").valueAsNumber;
    let nota2 = document.querySelector("#nota2").valueAsNumber;
    let nota3 = document.querySelector("#nota3").valueAsNumber;
    let nota4 = document.querySelector("#nota4").valueAsNumber;

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 6) {
        document.querySelector("#mensagem2").innerHTML = "Parabéns! Você foi aprovado! A sua média foi de " + media.toFixed(2) + " pontos."
    } else {
        document.querySelector("#mensagem2").innerHTML = "Infelizmente você foi reprovado! \n A sua média foi de " + media.toFixed(2) + " pontos."
    }
}