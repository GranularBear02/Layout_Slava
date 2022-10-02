/* Переворот строки
function reverseString (str) {
  let splitString = str.split ("");

  let reverseString = splitString.reverse();

  let joinString = reverseString.join("");

  return joinString;
}

reverseString('Vanya in London');
*/

/* Функция сложение свойств объекта
let salaries = {
  Vanya: 250,
  Slava: 250,
  Alina: 100,
  Mohammed: 850,
};

let sum = 0;

function sumSalaries() {
  for (let key in salaries) {
  sum += salaries[key];
  }
}

sumSalaries(sum)

alert(sum)
*/