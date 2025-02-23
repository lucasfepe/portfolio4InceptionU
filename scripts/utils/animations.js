// Animation configurations
export const fadeUpAnimation = (element, delay) => {
    if (element) {
        // Trigger animation after a short delay
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }
};

