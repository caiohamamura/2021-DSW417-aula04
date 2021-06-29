"use strict";
function CalcAP(){
    let nota1 = document.querySelector("#nota1").valueAsNumber;
    let nota2 = document.querySelector("#nota2").valueAsNumber;
    let nota3 = document.querySelector("#nota3").valueAsNumber;
    let nota4 = document.querySelector("#nota4").valueAsNumber;

    let result = document.querySelector("#DIV_Rslt");

    let apv=document.querySelector("#DIV_APV");
    let rpv = document.querySelector("#DIV_RPV");

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    result.innerHTML = "A SUA MÉDIA FOI: ";
    result.innerHTML += media.toFixed(1); 

    if(media>=6)
    {
        result;
        apv.innerHTML = " VOCÊ FOI: APROVADISSÍMO! PARABÉNS!!!";
        rpv.innerHTML = " ";
    
    }
    else
    {
        result;
        rpv.innerHTML = " VOCÊ FOI: REPROVADO!! ";
        apv.innerHTML = "";
      
    }
    
};