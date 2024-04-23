const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnNext = document.querySelector('.slider__btn-next'),
    sliderBtnPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0,
    sliderWidth = 475;

// Кнопки слайдов
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Функция которя задает нужную ширину  sliderLine
function showSlide() {
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    rollSlider();
}
showSlide();

// Функция которя перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = sliderImages.length-1;

    blockButton();
    rollSlider();
    thisSlide(sliderCount);
}

// Функция которя перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = 0;

    blockButton();
    rollSlider();
    thisSlide(sliderCount);
}

// Функция которая задает шаг перемещения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Функция которая указывает какой слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

// Функция которая вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        blockButton();
        rollSlider();
        thisSlide(sliderCount);
    })
})

// Функция которая блокирует кнопки слайдера
function blockButton() {
    if (sliderCount > 0 || sliderCount < sliderImages.length-1) {
        sliderBtnPrev.removeAttribute("disabled");
        sliderBtnNext.removeAttribute("disabled");
    }
    if (sliderCount === sliderImages.length-1) {
        sliderBtnNext.setAttribute("disabled", "disabled");
    }
    if (sliderCount === 0) {
        sliderBtnPrev.setAttribute("disabled", "disabled");
    }
}


// Автоматическое перелистывание слайдов если потребуется
// setInterval(() => {
//     nextSlide()
// }, 3000);