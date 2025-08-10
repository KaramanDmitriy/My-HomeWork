const carObject = {
  brand: 'Skoda',
  model: 'Kamiq',
  year: 2023,
  averageSpeed: 100,
  fuel: 50,
  averageFuel: 10,
  drivers: ['Dima', 'Olena'],

  showInfo() {
    return `
      <strong>Марка:</strong> ${this.brand}<br>
      <strong>Модель:</strong> ${this.model}<br>
      <strong>Рік:</strong> ${this.year}<br>
      <strong>Середня швидкість:</strong> ${this.averageSpeed} км/год<br>
      <strong>Обсяг баку:</strong> ${this.fuel} л<br>
      <strong>Витрата палива:</strong> ${this.averageFuel} л/100 км<br>
      <strong>Водії:</strong> ${this.drivers.join(', ')}
    `;
  },

  addDriver(name) {
    if (!this.drivers.includes(name)) {
      this.drivers.push(name);
      return `${name} додано до списку водіїв.`;
    } else {
      return `${name} вже є у списку водіїв.`;
    }
  },

  hasDriver(name) {
    return this.drivers.includes(name)
      ? `${name} є у списку водіїв.`
      : `${name} немає у списку водіїв.`;
  },

  calculateTrip(distance) {
    const drivingTime = distance / this.averageSpeed;
    const restTime = Math.floor(drivingTime / 4);
    const totalTime = drivingTime + restTime;

    const hours = Math.floor(totalTime);
    const minutes = Math.round((totalTime - hours) * 60);

    const fuelNeeded = (distance / 100) * this.averageFuel;

    return `
      Час у дорозі (з перервами): ${hours} год ${minutes} хв<br>
      Необхідно палива: ${fuelNeeded.toFixed(1)} л
    `;
  }
};

function less1_1() {
  document.getElementById('lesson1-result').innerHTML = carObject.showInfo();
}

function less1_2() {
  if (confirm("Бажаєте додати нового водія?")) {
    const name = prompt("Введіть ім’я водія:");
    if (name) {
      document.getElementById('lesson1-result').innerHTML = carObject.addDriver(name);
    }
  }
}

function less1_3() {
  const name = prompt("Введіть ім’я водія для перевірки:");
  if (name) {
    document.getElementById('lesson1-result').innerHTML = carObject.hasDriver(name);
  }
}

function less1_4() {
  const distance = prompt("Введіть відстань у км:");
  if (distance && !isNaN(distance)) {
    document.getElementById('lesson1-result').innerHTML = carObject.calculateTrip(parseFloat(distance));
  }
}


const timeObject = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds(),

  toSeconds() {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  },

  fromSeconds(totalSeconds) {
    totalSeconds = ((totalSeconds % 86400) + 86400) % 86400; 
    this.hours = Math.floor(totalSeconds / 3600);
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  },

  showTime() {
    return `Поточний час: ${this.hours} год ${this.minutes} хв ${this.seconds} сек`;
  },

  addSeconds(sec) {
    const total = this.toSeconds() + sec;
    this.fromSeconds(total);
  },

  addMinutes(min) {
    this.addSeconds(min * 60);
  },

  addHours(hr) {
    this.addSeconds(hr * 3600);
  }
};

function updateOutput(content) {
  const output = document.getElementById("lesson2_result");
  if (output) {
    output.innerHTML = content;
  } else {
    console.error("Елемент з id='lesson2_result' не знайдено.");
  }
}

function less2_1() {
  updateOutput(timeObject.showTime());
}

function less2_2() {
  if (confirm("Бажаєте змінити час на певну кількість секунд?")) {
    const sec = prompt("Введіть кількість секунд:");
    if (sec && !isNaN(sec)) {
      timeObject.addSeconds(parseInt(sec));
      updateOutput(timeObject.showTime());
    }
  }
}

function less2_3() {
  if (confirm("Бажаєте змінити час на певну кількість хвилин?")) {
    const min = prompt("Введіть кількість хвилин:");
    if (min && !isNaN(min)) {
      timeObject.addMinutes(parseInt(min));
      updateOutput(timeObject.showTime());
    }
  }
}

function less2_4() {
  if (confirm("Бажаєте змінити час на певну кількість годин?")) {
    const hr = prompt("Введіть кількість годин:");
    if (hr && !isNaN(hr)) {
      timeObject.addHours(parseInt(hr));
      updateOutput(timeObject.showTime());
    }
  }
}



const fraction = {
  getValuesFromInputs() {
    const n1 = document.querySelector('.drib1-1').value;
    const d1 = document.querySelector('.drib1-2').value;
    const n2 = document.querySelector('.drib2-1').value;
    const d2 = document.querySelector('.drib2-2').value;

    if (!n1 || !d1 || !n2 || !d2 || d1 == 0 || d2 == 0) {
      alert("Будь ласка, введіть коректні значення дробів (знаменник не може бути 0)");
      return false;
    }

    this.numerator1 = parseInt(n1);
    this.denominator1 = parseInt(d1);
    this.numerator2 = parseInt(n2);
    this.denominator2 = parseInt(d2);
    return true;
  },

  gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  },

  simplify(numerator, denominator) {
    const divisor = this.gcd(numerator, denominator);
    return {
      numerator: numerator / divisor,
      denominator: denominator / divisor
    };
  },

  add() {
    const num = this.numerator1 * this.denominator2 + this.numerator2 * this.denominator1;
    const den = this.denominator1 * this.denominator2;
    return this.simplify(num, den);
  },

  subtract() {
    const num = this.numerator1 * this.denominator2 - this.numerator2 * this.denominator1;
    const den = this.denominator1 * this.denominator2;
    return this.simplify(num, den);
  },

  multiply() {
    const num = this.numerator1 * this.numerator2;
    const den = this.denominator1 * this.denominator2;
    return this.simplify(num, den);
  },

  divide() {
    const num = this.numerator1 * this.denominator2;
    const den = this.denominator1 * this.numerator2;
    return this.simplify(num, den);
  }
};

// 🔧 Візуальний формат дробу
function formatFractionVisual(numerator, denominator) {
  const width = `${Math.max(numerator.toString().length, denominator.toString().length)}ch`;
  return `
    <div style="display: inline-block; text-align: center; font-size: 1.2em;">
      <div>${numerator}</div>
      <div style="border-top: 2px solid #000; width: ${width}; margin: 2px auto;"></div>
      <div>${denominator}</div>
    </div>
  `;
}

// 🔧 Вивід результату
function updateLesson3Output(htmlContent) {
  const output = document.getElementById("lesson3_result");
  if (output) {
    output.innerHTML = htmlContent;
  }
}

// ➕ Додавання
function less3_add() {
  if (fraction.getValuesFromInputs()) {
    const result = fraction.add();
    const visual = formatFractionVisual(result.numerator, result.denominator);
    updateLesson3Output(`➕ Сума:<br>${visual}`);
  }
}

// ➖ Віднімання
function less3_subtract() {
  if (fraction.getValuesFromInputs()) {
    const result = fraction.subtract();
    const visual = formatFractionVisual(result.numerator, result.denominator);
    updateLesson3Output(`➖ Різниця:<br>${visual}`);
  }
}

// ✖️ Множення
function less3_multiply() {
  if (fraction.getValuesFromInputs()) {
    const result = fraction.multiply();
    const visual = formatFractionVisual(result.numerator, result.denominator);
    updateLesson3Output(`✖️ Добуток:<br>${visual}`);
  }
}

// ➗ Ділення
function less3_divide() {
  if (fraction.getValuesFromInputs()) {
    const result = fraction.divide();
    const visual = formatFractionVisual(result.numerator, result.denominator);
    updateLesson3Output(`➗ Частка:<br>${visual}`);
  }
}
