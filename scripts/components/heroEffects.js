import { fadeUpAnimation } from "../utils/animations.js";

export let finalTitleBottom;

function calculateFinalTitlePosition() {
    const aboutTitle = document.querySelector('.about h2');
    if (aboutTitle) {
        // Get the absolute position relative to the document
        const rect = aboutTitle.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        finalTitleBottom = rect.bottom + scrollTop;
    }
}

export function initHeroEffects() {
    // Initial setup for hero section
    fadeUpAnimation(document.querySelector('.hero-content-title'), 200);
    fadeUpAnimation(document.querySelector('.hero-content-text'), 800);

    // Down Arrow functionality
    document.querySelector('.scroll-indicator button').addEventListener('click', () => {
        const nextSection = document.querySelector('#home + section');
        calculateFinalTitlePosition();
        if (nextSection) {
            const extra_offset = 60;
            const offsetPosition = nextSection.offsetTop - extra_offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            // Dispatch custom event
            // Pass the calculated value with the custom event
            document.dispatchEvent(new CustomEvent('scrollToAbout', {
                detail: { finalTitleBottom }
            }));

        }
    });
}