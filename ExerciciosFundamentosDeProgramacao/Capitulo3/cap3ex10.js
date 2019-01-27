// INPUTS
let custoDeFabrica = 30000


if(custoDeFabrica < 12000) {
    console.log('Custo ao consumidor = R$ ' + (custoDeFabrica + custoDeFabrica * 0.05) + ',00')
} else if(custoDeFabrica >= 12000 && custoDeFabrica <= 25000) {
    console.log('Custo ao consumidor = R$ ' + (custoDeFabrica + custoDeFabrica * 0.1 + custoDeFabrica * 0.15) + ',00')
} else {
    console.log('Custo ao consumidor = R$ ' + (custoDeFabrica + custoDeFabrica * 0.15 + custoDeFabrica * 0.20) + ',00')
}