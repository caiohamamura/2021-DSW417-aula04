"use strict";


function calcularMediaFinal() {
    let nota1 = +document.querySelector("#nota1").valueAsNumber;
    let nota2 = +document.querySelector("#nota2").valueAsNumber;
    let nota3 = +document.querySelector("#nota3").valueAsNumber;
    let nota4 = +document.querySelector("#nota4").valueAsNumber;


    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(media);
    document.querySelector("#meu-div").innerHTML = "A média final é: ";
     document.querySelector("#meu-div").innerHTML += media.toFixed(1);
    


if (media >= 6 ) {
    
    document.querySelector("#resul").innerHTML = "Aprovado ";
}
 else {
    
    document.querySelector("#resul").innerHTML = "Reprovado";
}
 
}
