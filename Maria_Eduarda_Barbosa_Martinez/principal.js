"use strict";

// Crie quatro campos tipo number (<input type="number">) com solicitando as notas de cada bimestre.
// Crie um <button> para efetuar o cálculo e ligue o evento onclick a uma função no javascript.
// Crie um <div> vazio para imprimir o resultado.
// Na função do javascript:
// Grave em uma variável cada uma das entradas: em vez de usar .value para retornar o valor do <input> como string você pode usar .valueAsNumber que já retorna o resultado como número.
// Efetue o cálculo da média aritmética e guarde em uma variável.
// Crie uma condição para saber se a mensagem será Aprovado(a) ou Reprovado(a) (você pode guardar essa parte da mensagem em uma variável).
// Modifique o conteúdo da <div> vazia criada em 3, colocando a mensagem informando a média e se o(a) usuário(a) foi reprovado(a) ou aprovado(a).

function calcularMedia() {
    let nota1 = +document.querySelector("#nota1").valueAsNumber;
    let nota2 = +document.querySelector("#nota2").valueAsNumber;;
    let nota3 = +document.querySelector("#nota3").valueAsNumber; ;
    let nota4 = +document.querySelector("#nota4").valueAsNumber;;

    let mf =  (nota1+nota2+nota3+nota4) / 4;
    console.log(mf);
    document.querySelector("#meu-div").innerHTML = "A média final do aluno é: ";
    document.querySelector("#meu-div").innerHTML += mf .toFixed(1);

    if (mf>=6)
    {
        document.querySelector("#meu-div").innerHTML += ". Aluno aprovado"
    }
    else 
    document.querySelector("#meu-div").innerHTML += ". Aluno reprovado"
}
