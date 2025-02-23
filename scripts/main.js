import { initScrollEffects } from './components/scrollEffects.js';
import { initNavigation } from './components/navbar.js';
import { initThemeToggle } from './components/themeToggle.js';
import { initFormHandler } from './components/formHandler.js';
import { initHeroEffects } from './components/heroEffects.js';

// Load components when needed
document.addEventListener('DOMContentLoaded', () => {
    initHeroEffects();
    initScrollEffects();
    initNavigation();
    initThemeToggle();
    initFormHandler();
});
