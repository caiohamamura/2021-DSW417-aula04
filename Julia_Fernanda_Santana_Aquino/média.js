function calcularMedia() {
    let nota1 = +document.querySelector("#nota1").value;
    let nota2 = +document.querySelector("#nota2").value;
    let nota3 = +document.querySelector("#nota3").value;
    let nota4 = +document.querySelector("#nota4").value;
    

    let media = (nota1 + nota2 + nota3 + nota4)/4;

    console.log(media);

    if(media < 6)
    {
     document.querySelector("#meu-div2").innerHTML = "REPROVADO(A)";
    }
    else
    if(media>=6)
    {
        document.querySelector("#meu-div2").innerHTML = "APROVADO(A)";

    }

    document.querySelector("#meu-div").innerHTML = "Média bimestral: ";
    document.querySelector("#meu-div").innerHTML += media.toFixed(1);
}