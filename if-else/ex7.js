let valor = parseFloat (prompt("Valor total da compra"))

if(valor <= 100.00) {
    console.log ("Sem desconto!")
    console.log  (valor)
}
else if (valor > 100.00 && valor < 200.00 ){
    console.log ("10% de desconto!")
    let desconto = valor * (10/100)
    let final = valor - desconto 
    console.log ("Valor: R$" + final.toFixed(2))
}

else if (valor > 200.00){
    console.log("20% de desconto!")
    let desconto = valor * (20/100)
    let final = valor - desconto
    console.log ("Valor: R$" + final.toFixed(2))
}