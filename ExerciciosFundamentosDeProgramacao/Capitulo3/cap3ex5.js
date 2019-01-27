// INPUTS
let num1, num2, escolha
num1 = 10
num2 = 8
escolha = '5'


switch(escolha) {
    case '1':
        let media = (num1 + num2) / 2
        console.log(media)
        break

    case '2':
        if(num1 >= num2) {
            let diferenca = num1 - num2
            console.log(diferenca)
        } else {
            let diferenca = num2 - num1
            console.log(diferenca)
        }
        break

    case '3':
        let produto = num1 * num2
        console.log(produto)
        break

    case '4':
        if(num2 !== 0) {
            let divisao = num1 / num2
            console.log(divisao)
        } else {
            console.log('O segundo número deve ser diferente de 0')
        }
        break

    default:
        console.log('Escolha uma opção válida...')
}