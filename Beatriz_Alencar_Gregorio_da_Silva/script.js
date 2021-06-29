
function calcMedia() {
// VARIÁVEIS DE ENTRADA
    let n1=document.querySelector("#n1").valueAsNumber;
    let n2=document.querySelector("#n2").valueAsNumber;
    let n3=document.querySelector("#n3").valueAsNumber;
    let n4=document.querySelector("#n4").valueAsNumber;

// VARIÁVEL QUE ARMAZENA O CÁLCULO DA MÉDIA ARITMÉTICA
    let media = (n1 + n2 + n3 + n4) / 4;
    console.log(media);

    // CONDIÇÃO PARA CASO DE NÚMEROS INVÁLIDOS (>10 OU <0) FOREM INSERIDOS
    if (n1>10 || n2>10 || n3>10 || n4>10 || n1<0 || n2<0 || n3<0 || n4<0 )
    {
      // IMPRESSÃO DA MENSAGEM COMO UM ALERTA
      document.querySelector("#meuDiv2").innerHTML+= 
      "<br>Número inválido inserido!" + " " + "Faça uma nova consulta.";

// DIV DAS MENSAGENS DE APRO/REPRO VAZIA POIS O CASO NÃO SE PODE SER CONCLUÍDO
      document.querySelector("#meu-div").innerHTML="";
    }

    // CASO NÃO FOREM INSERIDOS, SE EXECUTA A MENSAGEM INFORMANDO SE O USUÁRIO FOI APROVADO OU REPROVADO
    else

    // SE O USUÁRIO SER APROVADO
    if(media>=6)
    {
// IMPRESSÃO DA MÉDIA
       document.querySelector("#meu-div").innerHTML="<br>A média do bimestre é:" + " " + media.toFixed(1);

// MENSAGEM DE APROVAÇÃO
      document.querySelector("#meu-div").innerHTML+= 
      "<br>Situação:" + "<br>Aprovado! :)";

// DIV DOS NÚMEROS INVALIDOS VAZIA POIS O CASO NÃO SE ESTABELECEU
      document.querySelector("#meuDiv2").innerHTML="";
       
    }

// SE O USUÁRIO SER REPROVADO
    else
    if (media<6)
        {    
// IMPRESSÃO DA MÉDIA
       document.querySelector("#meu-div").innerHTML="<br>A média do bimestre é: " + " " + media.toFixed(1);

// MENSAGEM DE REPROVAÇÃO
       document.querySelector("#meu-div").innerHTML+= 
      "<br>Situação:<br>Reprovado :(";

// DIV DOS NÚMEROS INVALIDOS VAZIA POIS O CASO NÃO SE ESTABELECEU
       document.querySelector("#meuDiv2").innerHTML="";

    }

}