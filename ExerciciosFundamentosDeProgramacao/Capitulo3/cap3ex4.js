// INPUTS
let num1, num2, num3
num1 = 10
num2 = 4
num3 = 5


if((num1 > num2) && (num1 > num3)) {
    console.log(num1)
} else if ((num2 > num1) && (num2 > num3)) {
    console.log(num2)
} else if ((num3 > num1) && (num3 > num2)) {
    console.log(num3)
} else {
    console.log("Exitem pelo menos dois números iguais...")
}