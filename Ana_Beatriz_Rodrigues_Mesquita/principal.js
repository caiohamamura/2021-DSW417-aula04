"use strict";
// Cálculo da média aritmetica aritmética das notas dos quatro bimestres. 

/* cria function */
function calcularMedia() {
    /* pega os valores digitados pelo usuário*/
    let nota1 = +document.querySelector("#n_1bim").value;
    let nota2 = +document.querySelector("#n_2bim").value;
    let nota3 = +document.querySelector("#n_3bim").value;
    let nota4 = +document.querySelector("#n_4bim").value;

    /* Cálculo da média: soma das 4 notas digitadas e
    divisão por 4*/
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    /*IF, onde se o cálculo da média for maior ou igual a 6
    mostra a média do aluno e que ele foi aprovado*/
    if(media >= 6)
    {
    console.log(media);
    document.querySelector("#meu-div").innerHTML = "Média final: ";
    document.querySelector("#meu-div").innerHTML += media.toFixed(1);
    document.querySelector("#meu-div2").innerHTML = "Aluno(a) aprovado(a)";
    } 
    /*ELSE, onde se o cálculo da média for menor que 6
    mostra a média do aluno e que ele foi reprovado provado*/
    else
    {
        console.log(media);
        document.querySelector("#meu-div").innerHTML = "A média do bimestre é: ";
        document.querySelector("#meu-div").innerHTML += media.toFixed(1);
        document.querySelector("#meu-div2").innerHTML = "Aluno(a) reprovado(a)";
    } 
    
}