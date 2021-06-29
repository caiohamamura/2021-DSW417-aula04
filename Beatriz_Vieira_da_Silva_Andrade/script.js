"use strict";

function calcMedia() {
    //pega a 1 nota como numero
    let n1 = +document.querySelector("#nota1").valueAsNumber ;
    //pega a 2 nota como numero
    let n2 = +document.querySelector("#nota2").valueAsNumber ;
    //pega a 3 nota como numero
    let n3 = +document.querySelector("#nota3").valueAsNumber ;
    //pega a 4 nota como numero
    let n4 = +document.querySelector("#nota4").valueAsNumber ;

    //faz a media aritmetica  
    let media =  (n1+n2+n3+n4) / 4;

    //printa no console
    console.log(media);

    //printa na div
    document.querySelector("#meu-div").innerHTML = "A média do ano é: ";
    document.querySelector("#meu-div").innerHTML += media.toFixed(1);

    //se a media for maior que 6, imprime "passou"
    if (media>=6)
    {
        document.querySelector("#meu-div").innerHTML += ". Você passou!"
    }
    //se for menor qur 6, imprime "não passou"
    else 
    document.querySelector("#meu-div").innerHTML += ". Você não passou!"
}