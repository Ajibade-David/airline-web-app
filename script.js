const carousel = document.querySelector('.carousel');
const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = carouselSlides.length - 1;
    } else if (slideIndex >= carouselSlides.length) {
        slideIndex = 0;
    }
    
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentSlide = slideIndex;
}

// Auto-advance the carousel every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

showSlide(currentSlide); // Show the initial slide
