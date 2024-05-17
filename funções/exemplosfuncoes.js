 function saudacao() {

    let nomePessoa = prompt ("Digite seu nome: ")

     let horaAtual = new Date().getHours()
    
     if (horaAtual > 6 && horaAtual < 13){
    
         window.alert("Bom dia" + nomePessoa)
    
     } else if (horaAtual >= 13 && horaAtual < 18){
    
        window.alert("Boa tarde" + nomePessoa)
        
     }else {
        window.alert("Boa noite" + nomePessoa)
        
     }
}


// saudacao()


// function somar( num1, num2, num3) {

//          let soma = num1 + num2 + num3

//          return soma
// }

//  let resultado =  somar(5,6,7)

//  console.log("O resultado é:" + resultado)






//  exemplo objeto
let professor = {
    nome: "Thiago",
    sobrenome: "Nascimento",
    idade: 26 
}

let aluno = {
    nome:"Vanessa",
    nomeComposto:"Byork",
    idade: 24
}

let produto = {
    nome:"Controle remoto",
    marca:"Philco",
    modelo:"XRCTFG-456",
    preco: 30.0
}

let window = {
    innerWidth: 784
}


console.log("Antes do desconto" + produto.preco);

produto.preco = 20

console.log("Depois do desconto" + produto.preco)