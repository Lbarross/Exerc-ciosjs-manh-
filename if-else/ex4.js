let nota1 = parseInt(prompt ("Digite sua nota: "));
let nota2 = parseInt(prompt("Digite outra nota: "));
let nota3 = parseInt(prompt("Digite outra nota: "));
let nota4 = parseInt(prompt("Digite outra nota: "));

let media = (nota1+nota2+nota3+nota4) /4

if (media >= 7)
{
 console.log ("Aprovado")
}
else if(media > 4 && media < 7) {
    console.log ("Recuperação")
}
else if (media < 5)
{ 
    console.log ("Reprovado")
}


