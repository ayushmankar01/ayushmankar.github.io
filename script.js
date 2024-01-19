// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu on mobile
const mobileNavButton = document.getElementById('mobile-nav-button');
const mobileNav = document.getElementById('mobile-nav');

mobileNavButton.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Close mobile navigation when a link is clicked
document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
    });
});
