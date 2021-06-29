"use strict";

function mediaFinal() {
    let bim1 = +document.querySelector("#bim1").valueAsNumber;
    let bim2 = +document.querySelector("#bim2").valueAsNumber;
    let bim3 = +document.querySelector("#bim3").valueAsNumber;
    let bim4 = +document.querySelector("#bim4").valueAsNumber;
    let situacao;

    let media = (bim1 + bim2 + bim3 + bim4) / 4;
    console.log(media);

    if(media >= 6.0){
        situacao = "Aprovado(a)";       
    }
    else{
        situacao = "Reprovado(a)";
    }
    
    document.querySelector("#resultado").innerHTML = "A média final é: ";
    document.querySelector("#resultado").innerHTML += media.toFixed(1) + " |" + " Situação: " + situacao;

}