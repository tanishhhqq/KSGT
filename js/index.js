// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    function toggleMenu() {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
    }

    // Add click event listener to hamburger
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbar.classList.contains('active') && !hamburger.contains(e.target) && !navbar.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-links1 a, .nav-links2 a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

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

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    // Activate the selected tab
    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('onclick') === `showSection('${sectionId}')`);
    activeTab.classList.add('active');
}
const images = document.querySelectorAll('.section-1 img');
let current = 0;

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextSlide() {
    current = (current + 1) % images.length;
    showSlide(current);
}

// Initial display
showSlide(current);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Scroll-triggered animations for section-2
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element comes into view
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class to trigger the animation
                entry.target.classList.add('animate-in');
                
                // Optional: Unobserve after animation to prevent re-triggering
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe the animated elements
    const animatedElements = document.querySelectorAll('.animate-from-left, .animate-from-right');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});