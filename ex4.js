let nota1 = parseInt(prompt ("Digite sua nota: "));
let nota2 = parseInt(prompt("Digite outra nota: "));
let nota3 = parseInt(prompt("Digite outra nota: "));
let nota4 = parseInt(prompt("Digite outra nota: "));

let media = (nota1+nota2+nota3+nota4) /4

if (media >= 7)
{
    alert ("Aprovado")
}
else if(media >7 && media <= 4) {
    alert ("Recuperção")
}
else if (media <=4)
{ 
 alert("Reprovado")
}


