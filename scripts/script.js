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

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to user's system preference
const getCurrentTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
};

// Set theme
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

// Initialize theme
setTheme(getCurrentTheme());

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero content animation on load
const heroContent = document.querySelector('.hero-content');
heroContent.style.opacity = 0;
heroContent.style.transform = 'translateY(20px)';

// Trigger hero content animation after a short delay
setTimeout(() => {
    heroContent.style.opacity = 1;
    heroContent.style.transform = 'translateY(0)';
}, 100);

// Add animation when scrolling into view
const sections = document.querySelectorAll('section:not(#home)');
const observerOptions = {
    threshold: 0.1
};

let isScrolling = false;
let scrollTimeout;

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Clear any existing timeout for this section
            clearTimeout(entry.target.timeout);

            // Add delay if user is actively scrolling
            const delay = isScrolling ? 150 : 0;

            entry.target.timeout = setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}, observerOptions);

// Track scrolling state
window.addEventListener('scroll', () => {
    isScrolling = true;
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, 150); // Reset scrolling flag after scroll stops
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-in-out';
    observer.observe(section);
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

// Initialize EmailJS with your public key
(function () {
    emailjs.init("FA7CaRkml7_QcDlG3"); // Add your public key here
})();

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show loading state
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;

    // Prepare template parameters
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_j8owe5l', 'template_0rghbjo', templateParams)
        .then(() => {
            // Show success message

            this.reset();
        })
        .catch((error) => {
            // Show error message
            alert('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        })
        .finally(() => {
            // Reset button state
            button.textContent = originalText;
            button.disabled = false;
        });
});

// Scroll indicator functionality
document.querySelector('.scroll-indicator button').addEventListener('click', () => {
    const nextSection = document.querySelector('#home + section');

    if (nextSection) {
        const offsetPosition = nextSection.offsetTop;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
});