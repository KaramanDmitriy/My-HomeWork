function sumLesson1() {
    const num1 = parseInt(document.querySelector('.less1-number1').value);
    const resultElement = document.getElementById('lesson1-result');

    if (!isNaN(num1)) {
        if (num1 >= 0 && num1 < 12) {
            resultElement.textContent = "Ви — дитина";
        } else if (num1 >= 12 && num1 < 18) {
            resultElement.textContent = "Ви — підліток";
        } else if (num1 >= 18 && num1 < 60) {
            resultElement.textContent = "Ви — дорослий";
        } else if (num1 >= 60) {
            resultElement.textContent = "Ви — пенсіонер";
        } else {
            resultElement.textContent = "Невірний вік";
        }
    } else {
        resultElement.textContent = "Будь ласка, введіть число";
    }
}
function specNumber() {
    const inputNumber = parseInt(document.querySelector('.less2-number1').value);
    const resultElement = document.getElementById('lesson2-result');
    let symbol;

    switch (inputNumber) {
        case 0:
            symbol = ")";
            break;
        case 1:
            symbol = "!";
            break;
        case 2:
            symbol = "@";
            break;
        case 3:
            symbol = "#";
            break;
        case 4:
            symbol = "$";
            break;
        case 5:
            symbol = "%";
            break;
        case 6:
            symbol = "^";
            break;
        case 7:
            symbol = "&";
            break;
        case 8:
            symbol = "*";
            break;
        case 9:
            symbol = "(";
            break;
        default:
            symbol = "Невірне значення. Введіть число від 0 до 9.";
    }

    resultElement.textContent = symbol;
}
function sumLesson3() {
    const num1 = parseInt(document.querySelector('.less3-number1').value);
    const num2 = parseInt(document.querySelector('.less3-number2').value);
    const resultElement = document.getElementById('lesson3-result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Будь ласка, введіть обидва числа.";
        return;
    }

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    resultElement.textContent = `Сума чисел від ${start} до ${end} = ${sum}`;
}
function findGCD() {
    const num1 = parseInt(document.querySelector('.less4-number1').value);
    const num2 = parseInt(document.querySelector('.less4-number2').value);
    const resultElement = document.getElementById('lesson4-result');

    let a = num1;
    let b = num2;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    resultElement.textContent = `Найбільший спільний дільник: ${a}`;
}
function findDilnik() {
    const number = parseInt(document.querySelector('.less5-number1').value);
    const resultElement = document.getElementById('lesson5-result');

    if (isNaN(number) || number <= 0) {
        resultElement.textContent = "Будь ласка, введіть додатне ціле число.";
        return;
    }

    let divisors = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    resultElement.textContent = `Дільники числа: ${divisors.join(', ')}`;
}
function palindrom() {
    const input = document.querySelector('.less6-number1').value;
    const resultElement = document.getElementById('lesson6-result');

    const reversed = input.split('').reverse().join('');

    if (input === reversed) {
        resultElement.textContent = `Число ${input} є паліндромом.`;
    } else {
        resultElement.textContent = `Число ${input} не є паліндромом.`;
    }
}
function discount() {
    const num1 = document.querySelector('.less7-number1').value;
    const resultElement = document.getElementById('lesson7-result');
    let discount = 0
    if (!isNaN(num1)) {
        if (num1 >= 200 && num1 < 300) {
            discount = 3;
        } else if (num1 >= 300 && num1 < 500) {
            discount = 5;
        } else if (num1 >= 500 ) {
            discount = 7;
        } else {
            resultElement.textContent = "Невірна сума";
        }
    }
    const resultSum = num1 - num1*(discount/100)
    resultElement.textContent =  `${resultSum} до сплати, з врахуванням знижки ${discount} %`
}



