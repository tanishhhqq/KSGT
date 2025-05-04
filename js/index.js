function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}


const counters = document.querySelectorAll('.count');
const speed = 200; // lower = faster

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + '+'; // add the "+" after animation
        }
    };

    updateCount();
});

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function currentSlide(n) {
    slideIndex = n;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

// Initialize the slideshow
slides[0].classList.add("active");
dots[0].classList.add("active");
setTimeout(showSlides, 5000);