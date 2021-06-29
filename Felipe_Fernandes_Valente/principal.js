"use strict";

// duas avaliações
// primeira peso 1 
//segunda peso 2 
// solicitar notas
// calcular as medias
// mostrar resultado com a div

function calcularMedia() {
    let nota01 = +document.querySelector("#nota01").valueAsNumber;
    let nota02 = +document.querySelector("#nota02").valueAsNumber;;
    let nota03 = +document.querySelector("#nota03").valueAsNumber; ;
    let nota04 = +document.querySelector("#nota04").valueAsNumber;;

    let mediafinal =  (nota01+nota02+nota03+nota04) / 4;
    console.log(mediafinal);
    document.querySelector("#meu-div").innerHTML = "A média final é: ";
    document.querySelector("#meu-div").innerHTML += mediafinal .toFixed(1);

    if (mediafinal>=6)
    {
        document.querySelector("#meu-div").innerHTML += ". Aprovado :)"
    }
    else 
    document.querySelector("#meu-div").innerHTML += ". Reprovado :("
}
