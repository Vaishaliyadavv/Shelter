// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

// Function to toggle the navigation menu
function toggleNav() {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Event listener for hamburger click
hamburger.addEventListener('click', toggleNav);

// Close the menu when a navigation link is clicked (optional)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            toggleNav();
        }
    });
});
