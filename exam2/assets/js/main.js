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
    onSliderLoad: function (el) {
    var showActiveSlides = function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    };

    var imageWidth = el.find("li").outerWidth() + "px";

    var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px "+ imageWidth + " 0px " + imageWidth
    });

    el.find("li img").each(function () {
        observer.observe(this);
    });
},
    responsive: [
        {
        breakpoint: 1130,
        settings: {
          item: 2
        }
      },
      {
        breakpoint: 880,
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
    const API_KEY_MAP = '1061f057-970f-4466-a8d6-227b90cb2dba'

    L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png?api_key=${API_KEY_MAP}`, {
        attribution: '<a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    L.marker([40.6778364758231, -73.94284449298787]).addTo(map)
        .bindPopup('Brooklin University')
}

const form = document.getElementById('subscr')
let formInProgress = false
form.onsubmit = async function(e) {
    e.preventDefault()
    if(formInProgress) return

    formInProgress = true
    const token = '8407817457:AAHqGaeQLBrPJNM6VGC72CV16vfaZBF26yY';
    const chat = '-1003054409449'
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = `<b>Name: </b>%0a<i>${name}</i>%0a<b>Email: </b>%0a<i>${email}</i>`
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${message}`)
    const answer = await resp.json()
    if(answer.ok) {
        alert('You succesfully subscribed')
        form.reset()
    }else {
        alert('Some error occurred')
    }
    formInProgress = false
}
var myLazyLoad = new LazyLoad();
// After your content has changed...
myLazyLoad.update();

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const menuLinks = document.querySelectorAll(".menu li a");

  function getOffsetTop(elem) {
    return elem.getBoundingClientRect().top + window.scrollY;
  }

  function onScroll() {
    const scrollPos = window.scrollY + 100; // 100px запас для фіксованого хедера
    let currentSectionId = "";

    sections.forEach(section => {
      const sectionTop = getOffsetTop(section);
      if (scrollPos >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    menuLinks.forEach(link => {
      const span = link.querySelector(".circle");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        span.classList.add("menu--active");
      } else {
        span.classList.remove("menu--active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // виклик при завантаженні сторінки
});

function toogleMenu() {
    document.body.classList.toggle('open-menu')
}

