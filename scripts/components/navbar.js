export function initNavigation() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Navigation visibility control
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');

    const showNavOnScroll = () => {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroBottom - 100) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    };

    // Add scroll event listener
    window.addEventListener('scroll', showNavOnScroll);

    // Initial check in case page is refreshed mid-scroll
    showNavOnScroll();
}