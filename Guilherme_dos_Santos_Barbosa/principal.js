"use strict";



function calcularMedia() {
    let nota01 = +document.querySelector("#nota01").valueAsNumber;
    let nota02 = +document.querySelector("#nota02").valueAsNumber;;
    let nota03 = +document.querySelector("#nota03").valueAsNumber; ;
    let nota04 = +document.querySelector("#nota04").valueAsNumber;;

    let mediafinal =  (nota01+nota02+nota03+nota04) / 4;
    console.log(mediafinal);
    document.querySelector("#meu-div").innerHTML =  "Média final é de: ";
    document.querySelector("#meu-div").innerHTML += mediafinal .toFixed(1);

    if (mediafinal>=6)
    {
        document.querySelector("#meu-div").innerHTML += ". Parabens você foi aprovado "
    }
    else 
    document.querySelector("#meu-div").innerHTML += " Infelizmente você foi reprovado   " 

}
