// INPUTS
let salario, valor
salario = 1000


if(salario <= 350) {
    valor = (salario + 100) - (0.07 * salario)
    console.log(`Valor a receber = R$${valor},00`)
} else if(salario > 350 && salario <= 600) {
    valor = (salario + 75) - (0.07 * salario)
    console.log(`Valor a receber = R$${valor},00`)
} else if(salario > 600 && salario <= 900) {
    valor = (salario + 50) - (0.07 * salario)
    console.log(`Valor a receber = R$${valor},00`)
} else {
    valor = (salario + 35) - (0.07 * salario)
    console.log(`Valor a receber = R$${valor},00`)    
}