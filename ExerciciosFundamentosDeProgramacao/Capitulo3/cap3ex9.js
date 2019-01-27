// INPUTS
let saldoMedio, credito
saldoMedio = 500


if(saldoMedio > 400) {
    credito = saldoMedio * 0.3
    console.log(`Saldo médio = R$${saldoMedio},00 e crédito = R$${credito},00.`)
} else if(saldoMedio <= 400 && saldoMedio > 300) {
    credito = saldoMedio * 0.25
    console.log(`Saldo médio = R$${saldoMedio},00 e crédito = R$${credito},00.`)
} else if(saldoMedio <= 300 && saldoMedio > 200) {
    credito = saldoMedio * 0.2
    console.log(`Saldo médio = R$${saldoMedio},00 e crédito = R$${credito},00.`)
} else {
    credito = saldoMedio * 0.1
    console.log(`Saldo médio = R$${saldoMedio},00 e crédito = R$${credito},00.`)
}