let idade = parseInt(prompt("Digite sua idade: "));

while(idade < 18){
    idade = parseInt(prompt("Você é menor de idade. Por favor, digite sua idade novamente: "))
}

console.log("Você é maior de idade. Sua idade é: " + idade);