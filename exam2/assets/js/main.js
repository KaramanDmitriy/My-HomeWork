$(document).ready(function() {
  $('#lightSlider').lightSlider({
    item: 1,
    slideMargin: 0,
    vertical: true,
    loop: true,
    controls: false,    
    pager: true,      
    auto: true,      
    pause: 4000,      
    mode: 'fade',        
    enableTouch: true,
    enableDrag: true
  });
});

//scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > window.innerHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

//slider
$(document).ready(function() {
  const slider = $("#news-slider").lightSlider({
    item: 3,
    slideMargin: 30,
    loop: true,
    slideMove: 1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)', 
    speed: 600,
    auto: true,
    pause: 4000,
    controls: false, // Вимикаємо стандартні стрілки
    pager: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          item: 1
        }
      }
    ]
  });

  // Кастомні стрілки
  $('.news-prev').on('click', function() {
    slider.goToPrevSlide();
  });

  $('.news-next').on('click', function() {
    slider.goToNextSlide();
  });
});
//Galery
lightGallery(document.getElementById('static-thumbnails'), {
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});


const mapLink = document.getElementById('load-map-link')

mapLink.onclick = function(e) {
    e.preventDefault()
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css')
    link.setAttribute('integrity', 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=')
    link.setAttribute('crossorigin', ' ')
    document.head.append(link)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.getAttribute('integrity', 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=')
    script.setAttribute('crossorigin', ' ')
    script.onload = initMap
    document.body.append(script)
}

const initMap = () => {
    mapLink.remove()
    const map = L.map('map').setView([40.6769250758231, -73.94284449298787], 18);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
        attribution: '<a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    L.marker([40.6778364758231, -73.94284449298787]).addTo(map)
        .bindPopup('Brooklin University')
}

const form = document.getElementById('subscr')
form.onsubmit = function(e) {
    e.preventDefault()
    
}