// INPUTS
let num1, num2, opcao
num1 = 3
num2 = 2
opcao = 1


switch(opcao) {
    case 1:
        console.log((num1 + num2) / 2)
        break
    case 2:
        if(num1 >= num2) {
            console.log(num1 - num2)
        } else {
            console.log(num2 - num1)
        }
        break
    case 3:
        console.log(num1 * num2)
        break
    default:
        console.log('Opção inválida...')
}