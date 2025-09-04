//  $(document).ready(function() {
//     $('#lightSlider').lightSlider({
//       item:1,
//       vertical:true,
//       loop:true,  
//     //   thumbMargin:4,
//       slideMargin:0,
//       controls:false
//     });  
//   });

$(document).ready(function() {
  $('#lightSlider').lightSlider({
    item: 1,
    slideMargin: 0,
    vertical: true,
    loop: true,
    controls: false,     // ❌ Без стрілок
    pager: true,         // ✅ Пагінація
    auto: true,          // ✅ Автоперемикання
    pause: 4000,         // ⏱ Кожні 4 секунди
    mode: 'fade',        // 🎞 Плавний перехід
    enableTouch: true,
    enableDrag: true
  });
});


window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > window.innerHeight) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


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

lightGallery(document.getElementById('static-thumbnails'), {
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});





