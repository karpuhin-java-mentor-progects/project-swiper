
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let buttonShow = document.querySelector('.button-show');
let buttonShowText = document.querySelector('.button-show span');

let mainContainer = document.querySelector('.main-wrapper')
let arrow = document.querySelector('.arrow')



buttonShow.addEventListener("click", function(event)
{
  mainContainer.classList.contains('active') ? buttonShowText.innerHTML = 'Показать все' :
    buttonShowText.innerHTML = 'Скрыть';
  mainContainer.classList.contains('active') ? arrow.classList.remove('transformArrowImage') :
    arrow.classList.add('transformArrowImage');
  mainContainer.classList.toggle('active')
});
