function sumLesson1() {
    const input = document.querySelector('.less1-number1').value;
    console.log(input.split(',').map(item => item.trim()))
    const args = input
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');

    document.getElementById('lesson1-result').textContent = `Кількість чисел: ${args.length}`;
}

function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
}

function runComparison() {
    const a = parseInt(document.querySelector('.less2-number1').value);
    const b = parseInt(document.querySelector('.less2-number2').value);
    const result = compareNumbers(a, b);
    document.getElementById('lesson2-result').textContent = `Результат: ${result}`;
}

function factorial() {
    const num1 = parseInt(document.querySelector('.less3-number1').value);
    if (num1 <= 0) return "Введи число більше 0";
    let result = 1;
    for (let i = 2; i <= num1; i++) {
      result *= i;
    }
    document.getElementById('lesson3-result').textContent = `Результат: ${result}`;
}
function sumLesson4() {
    const num1 = parseInt(document.querySelector('.less4-number1').value);
    const num2 = parseInt(document.querySelector('.less4-number2').value);
    const num3 = parseInt(document.querySelector('.less4-number3').value);
    const result = `${num1}${num2}${num3}`;
    document.getElementById('lesson4-result').textContent = `Результат: ${result}`;
}


function calculateArea(length, width) {
    if (!length && width) {
      return width * width; // площа квадрата
    }
    if (length && !width) {
      return length * length; // площа квадрата
    }
    return length * width; // площа прямокутника
}
  
function lesson5() {
    const lengthInput = document.getElementsByClassName("less5-number1")[0].value;
    const widthInput = document.getElementsByClassName("less5-number2")[0].value;
  
    const length = lengthInput !== '' ? parseFloat(lengthInput) : undefined;
    const width = widthInput !== '' ? parseFloat(widthInput) : undefined;
  
    const result = calculateArea(length, width);
    document.getElementById("lesson5-result").textContent = `Площа: ${result}`;
}

function isPerfectNumber(n) {
    if (n <= 1) return false;
    let sum = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum === n;
}

function lesson6() {
    const input = document.getElementsByClassName("less6-number1")[0].value;
    const number = parseInt(input);
  
    const result = isPerfectNumber(number);
    document.getElementById("lesson6-result").textContent = result
      ? `${number} — це досконале число`
      : `${number} — не є досконалим числом`;
}

function lesson7() {
    const min = parseInt(document.getElementsByClassName("less7-number1")[0].value);
    const max = parseInt(document.getElementsByClassName("less7-number2")[0].value);
  
    let perfectNumbers = [];
  
    for (let i = min; i <= max; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers.push(i);
      }
    }
  
    const resultText = perfectNumbers.length > 0
      ? `Досконалі числа в діапазоні: ${perfectNumbers.join(', ')}`
      : "У цьому діапазоні немає досконалих чисел.";
  
    document.getElementById("lesson7-result").textContent = resultText;
  }
  
  
  
  
  
  
  
