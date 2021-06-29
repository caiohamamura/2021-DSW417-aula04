"use strict";

function calculamedia() {
    let nota1 = document.querySelector("#nota1").valueAsNumber;
    let nota2 = document.querySelector("#nota2").valueAsNumber;
    let nota3 = document.querySelector("#nota3").valueAsNumber;
    let nota4 = document.querySelector("#nota4").valueAsNumber;

    let media = (nota1 + nota2 + nota3 + nota4)/ 4;
    if(media >= 6){
        console.log(media);
       
        document.querySelector("#meu-div").innerHTML ="Você foi aprovado, sua nota foi: "+ media.toFixed(2);
        
    } else {
        console.log(media);
        document.querySelector("#meu-div").innerHTML = "Você foi reprovado, sua nota foi: " +  media.toFixed(2);
       
    }

    
}