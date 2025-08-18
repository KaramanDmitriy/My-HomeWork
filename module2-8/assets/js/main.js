(function () {
  const trafficLight = document.createElement('div');
  trafficLight.className = 'traffic-light';

  const red = document.createElement('div');
  red.className = 'light red';

  const yellow = document.createElement('div');
  yellow.className = 'light yellow';

  const green = document.createElement('div');
  green.className = 'light green';

  trafficLight.appendChild(red);
  trafficLight.appendChild(yellow);
  trafficLight.appendChild(green);

  const button = document.createElement('button');
  button.textContent = 'Перемкнути';

  document.body.appendChild(trafficLight);
  document.body.appendChild(button);

  const lights = [red, yellow, green];
  let current = 0;

  function updateLight() {
    lights.forEach(light => light.classList.remove('active'));
    lights[current].classList.add('active');
    current = (current + 1) % lights.length;
  }

  button.onclick = updateLight;

  updateLight();
})();
