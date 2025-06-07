const galleryCarousel = document.querySelector('.gallery-carousel');
const prevButton = document.querySelector('.gallery-prev');
const nextButton = document.querySelector('.gallery-next');
const gallerySlides = document.querySelectorAll('.gallery-slide');
let currentIndex = 0;
let isTransitioning = false;

function updateCarousel() {
    if (isTransitioning) return;
    isTransitioning = true;
    galleryCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Listen for transition end to re-enable buttons
galleryCarousel.addEventListener('transitionend', () => {
    isTransitioning = false;
});

nextButton.addEventListener('click', () => {
    if (isTransitioning) return;
    currentIndex = (currentIndex + 1) % gallerySlides.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (isTransitioning) return;
    currentIndex = (currentIndex - 1 + gallerySlides.length) % gallerySlides.length;
    updateCarousel();
});