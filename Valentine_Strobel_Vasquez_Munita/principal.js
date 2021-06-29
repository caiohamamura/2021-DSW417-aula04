function calcularMedia() {
    let nota1 = document.querySelector("#nota1").valueAsNumber;
    let nota2 = document.querySelector("#nota2").valueAsNumber;
    let nota3 = document.querySelector("#nota3").valueAsNumber;
    let nota4 = document.querySelector("#nota4").valueAsNumber;

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(media);
    document.querySelector("#meu-div").innerHTML = "Sua média obtida é:" + media.toFixed(1);
    if (media >= 6 && media <= 10) {
        document.querySelector("#meu-div2").innerHTML = "Parabéns! Você foi aprovado(a)!";
    } else if (media >= 0 && media < 6) {
        document.querySelector("#meu-div2").innerHTML = "Lamento! Você foi reprovado(a)!";
    } else {
        document.querySelector("#meu-div2").innerHTML = "Ocorreu um erro! Tende novamente.";
    }
}