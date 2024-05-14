let numero = parseInt(prompt("Digite um número para ver na tabuada: "))



if((numero)){

    for(let num = 1; num <=10; num++){
        console.log(numero + " X " + num + " = " + (numero*num));
    }

}else{
    console.log("Número invalido. Por favor, digite um número válido.")
}

