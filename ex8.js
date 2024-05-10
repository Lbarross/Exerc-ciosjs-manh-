let peso = parseFloat (prompt("Insira seu peso:"))
let altura = parseFloat (prompt("Insira sua altura:"))

let imc = peso / (altura * peso);

console.log(imc);

if(imc < 18.5){
    console.log("Abaixo do peso");
}

else if (imc >= 18.5 && imc <= 24.9) {
    console.log ("Peso normal");
}

else if (imc >= 25.0 && imc <=29.9){
    console.log ("Sobrepeso");
}

else if (imc >=30.0 && imc <=34.9){
    console.log("Obesidaade grau 1");
}
else if (imc >=35.0 && imc <=39.0){
    console.log ("Obesidade grau 2");
}
else {
    console.log ("Obesidade grau 3");
}