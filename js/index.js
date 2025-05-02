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