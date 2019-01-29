// INPUTS
let salario = 1000


if(salario <= 300) {
    console.log(`Aumento = 15%. Novo salário = R$${salario * 1.15},00.`)
} else if(salario > 300 && salario <= 600) {
    console.log(`Aumento = 10%. Novo salário = R$${salario * 1.1},00.`)
} else if(salario > 600 && salario <= 900) {
    console.log(`Aumento = 5%. Novo salário = R$${salario * 1.05},00.`)
} else {
    console.log(`Aumento = 0%. Novo salário = R$${salario},00.`)
}