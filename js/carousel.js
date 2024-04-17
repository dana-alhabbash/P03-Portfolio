function moveSlide(n, carouselId) {
    showSlides(slideIndex[carouselId] += n, carouselId);
}

let slideIndex = {
    'carousel1': 0,
    'carousel2': 0
};

function showSlides(n, carouselId) {
    let i;
    let carousel = document.getElementById(carouselId);
    let slides = carousel.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
    if (n >= slides.length) slideIndex[carouselId] = 0;
    if (n < 0) slideIndex[carouselId] = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[carouselId]].style.display = "block";
}

// Initialize carousels
showSlides(0, 'carousel1');
showSlides(0, 'carousel2');

