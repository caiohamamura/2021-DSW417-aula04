"use script;"
 function soma(){
    let nota01 = 
    document.querySelector("#nota01").valueAsNumber;
    let nota02 = 
    document.querySelector("#nota02").valueAsNumber;
    let nota03 = 
    document.querySelector("#nota03").valueAsNumber;
    let nota04 = 
    document.querySelector("#nota04").valueAsNumber;
    let media = (nota01 + nota02 + nota03 + nota04) / 4;
    console.log (media);

    if (media >= 6){
        document.querySelector("#meuDiv").innerHTML = "Média Bimestral: ";
        document.querySelector("#meuDiv").innerHTML += media.toFixed(1);
        document.querySelector("#meuDiv2").innerHTML = "Parabéns, você está aprovado!";
    }
    else {
        document.querySelector("#meuDiv").innerHTML = "Média Bimestral: ";
        document.querySelector("#meuDiv").innerHTML += media.toFixed(1);
        document.querySelector("#meuDiv2").innerHTML = "Se esforce um pouco mais, infelizmente você está reprovado!";
    }
 }