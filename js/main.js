// type the value from the inputs
// store them in variables 
console.log('Hello')

document.querySelector('#add').addEventListener('click',sum)
document.querySelector('#subtract').addEventListener('click',difference)
document.querySelector('#multiply').addEventListener('click',product)
document.querySelector('#devide').addEventListener('click',divisor)
document.querySelector('#percent').addEventListener('click',remainder)

function sum(){
  let firstNumber = Number(document.querySelector('#one').value)
  let secondNumber = Number(document.querySelector('#two').value)
  let sum = firstNumber + secondNumber
  document.querySelector('h2').innerText= sum
}
function difference(){
  let firstNumber = Number(document.querySelector('#one').value)
  let secondNumber = Number(document.querySelector('#two').value)
  let difference = firstNumber - secondNumber
  document.querySelector('h2').innerText= difference
}
function product(){
  let firstNumber = Number(document.querySelector('#one').value)
  let secondNumber = Number(document.querySelector('#two').value)
  let product = firstNumber * secondNumber
  document.querySelector('h2').innerText= product
}
function divisor(){
  let firstNumber = Number(document.querySelector('#one').value)
  let secondNumber = Number(document.querySelector('#two').value)
  let divisor = firstNumber / secondNumber
  document.querySelector('h2').innerText= divisor
}
function remainder(){
  let firstNumber = Number(document.querySelector('#one').value)
  let secondNumber = Number(document.querySelector('#two').value)
  let remainder = firstNumber % secondNumber
  document.querySelector('h2').innerText= remainder
}
