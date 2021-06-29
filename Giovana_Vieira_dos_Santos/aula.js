function aula() {

    let nota1 = document.querySelector("#nota1").valueAsNumber;
    let nota2 = document.querySelector("#nota2").valueAsNumber;
    let nota3 = document.querySelector("#nota3").valueAsNumber;
    let nota4 = document.querySelector("#nota4").valueAsNumber;

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(media);

    if (media >= 6) {

        document.querySelector("#meu-div").innerHTML = "A média do bimestre é: ";
        document.querySelector("#meu-div").innerHTML += media.toFixed(1);
        document.querySelector("#meu-div2").innerHTML = "Aprovado ";
    } else {
        document.querySelector("#meu-div").innerHTML = "A média do bimestre é: ";
        document.querySelector("#meu-div").innerHTML += media.toFixed(1);
        document.querySelector("#meu-div2").innerHTML = "Reprovado!: ";
    }
}