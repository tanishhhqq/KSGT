// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navContainer = document.querySelector('.nav-container');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle hamburger menu
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navContainer.classList.toggle('active');
    });

    // Handle dropdowns in mobile view
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');

        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 900) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target) && !navContainer.contains(e.target)) {
            hamburgerMenu.classList.remove('active');
            navContainer.classList.remove('active');
        }
    });

    // Close menu when window is resized above 900px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            hamburgerMenu.classList.remove('active');
            navContainer.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
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

document.addEventListener('DOMContentLoaded', function() {
    // Dropdown for GROUP COMPANIES
    const groupCompaniesDropdown = document.querySelector('.navbar-links .dropdown:nth-child(4)');
    const groupCompaniesMenu = groupCompaniesDropdown ? groupCompaniesDropdown.querySelector('ul') : null;

    // Only proceed if the dropdown exists
    if (groupCompaniesDropdown && groupCompaniesMenu) {
        // Desktop: show on hover (handled by CSS)
        // Mobile: toggle on click
        groupCompaniesDropdown.addEventListener('click', function(e) {
            // Only toggle on mobile
            if (window.innerWidth <= 900) {
                e.preventDefault();
                // Close any other open dropdowns
                document.querySelectorAll('.navbar-links .dropdown ul').forEach(function(ul) {
                    if (ul !== groupCompaniesMenu) ul.style.display = 'none';
                });
                // Toggle this dropdown
                if (groupCompaniesMenu.style.display === 'block') {
                    groupCompaniesMenu.style.display = 'none';
                } else {
                    groupCompaniesMenu.style.display = 'block';
                }
            }
        });
        // Close dropdown on outside click (mobile)
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 900) {
                if (!groupCompaniesDropdown.contains(e.target)) {
                    groupCompaniesMenu.style.display = 'none';
                }
            }
        });
        // On resize, reset dropdown display
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900) {
                groupCompaniesMenu.style.display = '';
            } else {
                groupCompaniesMenu.style.display = 'none';
            }
        });
    }
});

// Get the button
const backToTopButton = document.getElementById('backToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonials-section.simple .testimonial-text');
    let current = 0;

    function showTestimonial(idx) {
        testimonials.forEach((t, i) => {
            if (i === idx) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    }

    function nextTestimonial() {
        showTestimonial((current + 1) % testimonials.length);
        current = (current + 1) % testimonials.length;
    }
    showTestimonial(0);
    setInterval(nextTestimonial, 5000);
});