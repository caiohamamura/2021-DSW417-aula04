"use strict";


function calcularMedia() {
    let nota1 = +document.querySelector("#nota1").valueAsNumber;
    let nota2 = +document.querySelector("#nota2").valueAsNumber;
    let nota3 = +document.querySelector("#nota3").valueAsNumber;
    let nota4 = +document.querySelector("#nota4").valueAsNumber;
    let situacao="";
    
    
    let mediabim = (nota1+nota2+nota3+nota4) / 4;
    
    document.querySelector("#meu-div").innerHTML += mediabim.toFixed(1);
    console.log(mediabim);

    if(mediabim<6 )
    {situacao=" Reprovado"
    document.getElementById("meu-div").style.color="#8B0000"
    }
    else
    {situacao=" Aprovado"
    document.getElementById("meu-div").style.color="#00FF00	"}
    document.querySelector("#meu-div").innerHTML = "Você foi:" +situacao;
    document.querySelector("#media").innerHTML = mediabim;
    console.log(mediabim);

}