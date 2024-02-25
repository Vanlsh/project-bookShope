const sliderList = document.querySelector('.charity-list');
const slides = document.querySelectorAll('.charity-slide');
const nextBtn = document.querySelector('.charity-btn');

const visibleSlides = 6;
let currentIndex = 0;
let scrollDirection = 'up'; 

nextBtn.addEventListener('click', onNextBtn);

function showSlide(index) {
    const offset = -index * 52; 
    sliderList.style.transform = `translateY(${offset}px)`;
}

function onNextBtn() {
    if (scrollDirection === 'up') {
    currentIndex++;
    if (currentIndex >= slides.length - visibleSlides) {
        currentIndex = slides.length - visibleSlides;
        scrollDirection = 'down';
        nextBtn.style.transform = 'rotate(180deg)';
    }
  } else {
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = 0;
        scrollDirection = 'up';
        nextBtn.style.transform = 'rotate(0deg)';
    }
  }
  showSlide(currentIndex);
}
