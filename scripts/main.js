import { initScrollEffects } from './components/scrollEffects.js';
import { initNavigation } from './components/navbar.js';
import { initThemeToggle } from './components/themeToggle.js';
import { initFormHandler } from './components/formHandler.js';
import { initHeroEffects } from './components/heroEffects.js';
// import { initDisableScrolling } from './components/disableScrolling.js';
import { initDynamicPositioning } from './components/dynamicPosition.js';

// Load components when needed
document.addEventListener('DOMContentLoaded', () => {
    // initDisableScrolling();

    initHeroEffects();
    initScrollEffects();
    initNavigation();
    initThemeToggle();
    initFormHandler();
    initDynamicPositioning();
});
