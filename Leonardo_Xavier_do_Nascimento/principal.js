function somaMedia() {
    let n1 = document.querySelector("#nota1").valueAsNumber;
    let n2 = document.querySelector("#nota2").valueAsNumber;
    let n3 = document.querySelector("#nota3").valueAsNumber;
    let n4 = document.querySelector("#nota4").valueAsNumber;

    let m = (n1 + n2 + n3 + n4) / 4;
    console.log(m);
    document.querySelector("#meu-div").innerHTML = "MÉDIA FINAL:" + media.toFixed(1);
    if (m >= 6 && m <= 10) {
        document.querySelector("#meu-div2").innerHTML = "ALUNO(A) APROVADO(A)!";
    } else if (m >= 0 && m < 6) {
        document.querySelector("#meu-div2").innerHTML = "ALUNO(A) REPROVADO(A)!";
    } else {
        document.querySelector("#meu-div2").innerHTML = "OCORREU UM ERRO INESPERADO!";
    }
} 