/* Задача 1. Калькулятор.

let operandFirst = prompt('First number');

let operandSecond = prompt('Second number');

let operationQuestion = prompt('Which operation do you want to perform?');

if(operationQuestion == 'addition' || operationQuestion == 'Addition') {
  alert(+operandFirst + +operandSecond)
}
if(operationQuestion == 'subtraction' || operationQuestion == 'Subtraction') {
  alert(+operandFirst - +operandSecond)
}
if(operationQuestion == 'multiplication' || operationQuestion == 'Multiplication') {
  alert(+operandFirst * +operandSecond)
}
if(operationQuestion == 'division' || operationQuestion == 'Division') {
  alert(+operandFirst / +operandSecond)
}
*/ 

/* Задача 2. Диапазон

let operandFirst = prompt('Please enter your variable');

let operandSecond = confirm('Is the entered variable a number?');

if(operandFirst >= 15 && operandFirst <= 53 && operandSecond == true) {
alert(`Variable ${operandFirst} is within the range of 15 and 53`)
}
if(operandFirst < 15 || operandFirst > 53 && operandSecond == true) {
alert(`Variable ${operandFirst} is not within the range of 15 and 53`)
}
if(operandSecond == false) {
  alert(`Variable ${operandFirst} is a string`)
}
*/