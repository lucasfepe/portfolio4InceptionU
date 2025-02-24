import { fadeUpAnimation } from "../utils/animations.js";
import { navigate } from "../utils/navigation.js";

export function initScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            navigate(e, document.querySelector(this.getAttribute('href')));
        });
    });

    // Select all sections except the home section
    const sections = document.querySelectorAll('#about');

    // Configuration for the IntersectionObserver
    // Triggers when at least 10% of the element is visible
    const observerOptions = {
        threshold: 0.1
    };

    // Track if user is actively scrolling
    let isScrolling = false;
    let scrollTimeout;

    // Create IntersectionObserver to handle scroll animations
    const observer = new IntersectionObserver(function (entries, observer) {
        // Process each element that intersects with viewport
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a slight delay if user is actively scrolling
                // This prevents choppy animations during rapid scrolling
                const delay = isScrolling ? 200 : 0;
                fadeUpAnimation(entry.target, delay);
            }
        });
    }, observerOptions);

    // Detect when user is actively scrolling
    window.addEventListener('scroll', () => {
        // Set scrolling flag when scroll starts
        isScrolling = true;

        // Clear any existing timeout
        clearTimeout(scrollTimeout);

        // Reset scrolling flag after user stops scrolling for 150ms
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 150);
    });

    // Initialize each section with starting styles and add to observer
    sections.forEach(section => {
        // Set initial state: invisible and shifted down
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';

        // Add smooth transition for opacity and transform
        section.style.transition = 'all 0.5s ease-in-out';

        // Start observing this section
        observer.observe(section);
    });
}