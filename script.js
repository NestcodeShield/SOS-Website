let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    index = (index + 1) % slides.length; // Переключение слайдов
    slider.style.transform = `translateX(-${index * 100}vw)`;
}

setInterval(nextSlide, 10000); // Переключение каждые 5 секунд