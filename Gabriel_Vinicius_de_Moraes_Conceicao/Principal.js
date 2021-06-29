"uses strict";

function avaliaentrada(){
    let nota1 =  document.querySelector("#nota1").valueAsNumber;
    let nota2 =  document.querySelector("#nota2").valueAsNumber;
    let nota3 =  document.querySelector("#nota3").valueAsNumber;
    let nota4 =  document.querySelector("#nota4").valueAsNumber;

    let media = (nota1+nota2+nota3+nota4)/4;

    if (media>= 6){
        document.querySelector("#meudiv").innerText = "Você passou de série sua média foi: " + media;
    
    }else{
        document.querySelector("#meudiv").innerText = "ficou de recuperação sua média é de: " + media;

    }
}

