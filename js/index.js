function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}