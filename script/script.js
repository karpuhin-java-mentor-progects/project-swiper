
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

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
let buttonHidden = document.querySelector('.button-hidden')
let swiperItemCollection = document.querySelectorAll('.hide-items')
let swiperContainer = document.querySelector('.swiper-container')
let arrow = document.querySelector('.arrow')

let hideBlock = function () {
  buttonShow.style.display = 'block';
  buttonHidden.style.display = 'none';
  swiperContainer.style.height = 290 + 'px'
  for(let i = 0; i < swiperItemCollection.length; i++){
    swiperItemCollection[i].style.display = 'none';
  }
  arrow.classList.remove('transformArrowImage')
}

function showHide() {
  for(let i = 0; i < swiperItemCollection.length; i++){
    swiperItemCollection[i].style.display = 'flex';
  }
  swiperContainer.style.height = 375 + 'px'
  buttonShow.style.display = 'none';
  buttonHidden.style.display = 'block';
  swiperContainer.style.background = '#F2F2F2'
  arrow.classList.add('transformArrowImage')
}