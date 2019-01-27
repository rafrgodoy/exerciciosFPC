// INPUTS
let nota1, nota2
nota1 = 6
nota2 = 10


let media = (nota1 + nota2) / 2
console.log(media)

if(media >= 0 && media < 4 ) {
    console.log('Reprovado')
} else if(media >= 4 && media < 7) {
    console.log('Exame')
} else if(media >= 7 && media <= 10) {
    console.log('Aprovado')
} else{
    console.log('ERRO!!!')
}