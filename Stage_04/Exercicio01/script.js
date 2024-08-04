let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)


if (restDiv == 0){
  alert('A soma dos dois numeros é par: ' + sum)
} else {
  alert('A soma dos dois numeros é impar: ' + sum)
}

if (firstNumber == secondNumber){
  alert('Os dois numeros não são diferentes.' )
} else {
  alert('Os dois numeros  são diferentes.')
}