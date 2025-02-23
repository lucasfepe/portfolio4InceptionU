const THEME = {
    DARK: 'dark',
    LIGHT: 'light'
};

// Local storage key
const STORAGE_KEY = 'theme';

const THEME_ATTRIBUTE = 'data-theme';

export function initThemeToggle() {// Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or default to user's system preference
    const getCurrentTheme = () => {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme) {
            return savedTheme;
        }
        return prefersDarkScheme.matches ? THEME.DARK : THEME.LIGHT;
    };

    // Set theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
        localStorage.setItem(STORAGE_KEY, theme);
    };

    // Initialize theme
    setTheme(getCurrentTheme());

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute(THEME_ATTRIBUTE);
        const newTheme = currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        setTheme(newTheme);
    });
}