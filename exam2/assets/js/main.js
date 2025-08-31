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
