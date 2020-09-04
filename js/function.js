var slideIndex = 1;
const firstSlider = showSlides(slideIndex, 'slider-item', 'dots');


function plusSlide(slides, dots) {
    showSlides(slideIndex += 1, slides, dots);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide(slides, dots) {
    showSlides(slideIndex -= 1, slides, dots);  
}

/* Устанавливает текущий слайд */
function currentSlide(n, slides, dots) {
    showSlides(slideIndex = n, slides, dots);
}

function showSlides(n, slides, dots) {
    var i;
    var slides = document.getElementsByClassName(slides);
    var dots = document.getElementsByClassName(dots);
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Карусель
