"use strict";
// função
function MediaAnualResultado() {
    // declaração de variáveis
    let bimestre1 = +document.querySelector("#bimestre1").valueAsNumber;
    let bimestre2 = +document.querySelector("#bimestre2").valueAsNumber;
    let bimestre3 = +document.querySelector("#bimestre3").valueAsNumber;
    let bimestre4 = +document.querySelector("#bimestre4").valueAsNumber;
    let media_anual = (bimestre1 + bimestre2 + bimestre3 + bimestre4)/4;

    console.log(media_anual);
   
    document.querySelector("#meu-div").innerHTML = "A média dos seus bimestres/sua média anual é: ";
    document.querySelector("#meu-div").innerHTML += media_anual.toFixed(2);
  
    let aprovacao =+document.querySelector("#resultado").value; 
    // condição para verificar se estudante foi aprovado(a) ou reprovado(a)
    if(media_anual >= 6.00)
    document.querySelector("#resultado").innerHTML = "Parabéns! Foi aprovado(a)!" ;
    else
    document.querySelector("#resultado").innerHTML ="Infelizmente você foi reprovado.";
}