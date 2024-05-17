//  contruir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executado. Faça com que o menu repita a sua execução, disponibilize as opções para o usuario, até que seja digitado "sair"


function exerciciodiasdasemana () {
    let número = prompt ("Dias da semana");

    let semana = alert;
    
    if (número == "1"){
       alert ("segunda-feira")
    }
    if (número == "2"){
       alert ("terça-feira")
    }
    if (número == "3"){
       alert ("quarta-feira")
    }
    if (número == "4"){
       alert ("quinta-feira")
    }
    if (número == "5"){
       alert ("sexta-feira")
    }
    if (número == "6"){
       alert ("sabado")
    }
    if (número == "7"){
       alert ("domingo")

}
}


function exercicionumerospares (){
    let numero = prompt ("Digite um número");

if (numero%2 == 1)
{
    alert ("imPar")
}
else {
    alert ("Par")
}

};



function exercicioordemcrescente (){


let ordem1 = parseInt (prompt ("Digite o primeiro número"))
let ordem2 = parseInt (prompt ("Digite o segundo número"))
let ordem3 = parseInt(prompt ("Digite o terceiro número"))

if (ordem1< ordem2 && ordem2 <ordem3) {
    console.log ("Ordem crescente!")
}
else {
    console.log ("Não é uma ordem crescente!")
}
};




function exerciciotabuada() {
    let numero = parseInt(prompt("Digite um número para ver na tabuada: "));


    if (!isNaN(numero)) {
        for (let cont = 1; cont <= 10; cont++) {
            console.log(numero + " X " + cont + " = " + (numero * cont));
        }
    
    }else{
        console.log("Número invalido. Por favor, digite um número válido.")
    }
    
    console.log(isNaN("Hello Word")); // retorna true 
    console.log(isNaN(123)); // retorna false 
};




function contagemregressiva() {
    let numero = parseInt(prompt("Digite um número para a contagem regressiva: "));

console.log("Contagem regressiva está começando em: " + numero)

while(numero >= 0){
    console.log(numero);
    numero--;
}

console.log("Contagem regressiva finalizada!");
};




function impares() {

    for (let num =0; num <= 50; num++){
        if(num % 2 !== 0){
            console.log(num);
        }
    }
    
}


let opcao = window.prompt("\nDigite a opção desejada:\n1- Dias da semana\n2- Numeros pares\n3- Ordem crescente\n4- Tabuada\n5- Contagem regressiva\n6- Numeros impares (0 a 50)\nDigite sair para o encerramento do programa")




switch(opcao){
    case "1":
        exerciciodiasdasemana()
        break;
    case "2":
        exercicionumerospares()
        break;
    case "3":
        exercicioordemcrescente()
        break;
    case "4":
        exerciciotabuada()
        break;
    case "5":
        contagemregressiva()
        break;
    case "6":
        impares()
        break;

    default:
        break;

}




let opcao2 = window.prompt
let resposta;

do{

    let opcao = window.prompt("\nDigite a opção desejada:\n1- Dias da semana\n2- Numeros pares\n3- Ordem crescente\n4- Tabuada\n5- Contagem regressiva\n6- Numeros impares (0 a 50)\nDigite sair para o encerramento do programa")
    
    resposta = prompt("Digite sair para encerrar: ");
    
}while(resposta !== "sair")

console.log("Você digitou sair, O programa foi encerrado!");