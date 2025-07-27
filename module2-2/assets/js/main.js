function sumLesson1() {
    const num1 = parseFloat(document.querySelector('.less1-number1').value);
    const num2 = parseFloat(document.querySelector('.less1-number2').value);
    const result = (num1 + num2).toFixed(1)
    document.getElementById('lesson1-result').textContent = result;
}
function sumLesson2() {
    const num1 = parseInt(document.querySelector('.less2-number1').value);
    const num2 = parseInt(document.querySelector('.less2-number2').value);
    const result = num1 + num2;
    document.getElementById('lesson2-result').textContent = result;
}
function sumLesson3() {
    const num1 = parseInt(document.querySelector('.less3-number1').value)*1024;
    const num2 = parseInt(document.querySelector('.less3-number2').value);
    const result = Math.floor(num1 / num2);
    document.getElementById('lesson3-result').textContent = result + " файлів";
}
function sumLesson4() {
    const num1 = parseInt(document.querySelector('.less4-number1').value);
    const num2 = parseInt(document.querySelector('.less4-number2').value);
    const result1 = Math.floor(num1 / num2);
    const result2 = num1 % num2;
    document.getElementById('lesson4-result1').textContent = result1 + " шт";
    document.getElementById('lesson4-result2').textContent = result2 + " грн";
}
function sumLesson5() {
    const userNumber = parseInt(document.querySelector('.less5-number1').value);
    const num1 = userNumber % 10;
    const num2 = Math.floor((userNumber % 100) / 10); 
    const num3 = Math.floor(userNumber / 100);  
    const result = num1*100 + num2*10 + num3;
    document.getElementById('lesson5-result').textContent = result;
}
function sumLesson6() {
    const sumVkladu = parseInt(document.querySelector('.less6-number1').value);
    const procentStavka = parseInt(document.querySelector('.less6-number2').value);
    const monthDeposit = parseInt(document.querySelector('.less6-number3').value);
    result = (sumVkladu*(procentStavka/100)/12*monthDeposit).toFixed(2);
    console.log(result)
    document.getElementById('lesson6-result').textContent = result + " $";
}