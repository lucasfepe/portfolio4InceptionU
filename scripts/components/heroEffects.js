import { fadeUpAnimation } from "../utils/animations.js";

export function initHeroEffects() {
    // Initial setup for hero section
    fadeUpAnimation(document.querySelector('.hero-content-title'), 200);
    fadeUpAnimation(document.querySelector('.hero-content-text'), 800);

    // Down Arrow functionality
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
}