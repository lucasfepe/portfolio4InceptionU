export function initDynamicPositioning() {
    // Core positioning functions
    function adjustAboutContentPosition(finalTitlePosition) {
        const aboutContainer = document.querySelector('.about .container');

        if (aboutContainer) {
            const remainingHeight = calculateRemainingHeight(finalTitlePosition);
            setContainerHeight(aboutContainer, remainingHeight);
        }
    }

    function calculateRemainingHeight(finalTitlePosition) {
        return window.innerHeight - (finalTitlePosition - window.pageYOffset);
    }

    function setContainerHeight(container, height) {
        container.style.height = `${height}px`;
    }

    // Event handlers
    function handleResize() {
        const aboutTitle = document.querySelector('.about h2');
        if (aboutTitle) {
            const titleBottom = aboutTitle.getBoundingClientRect().bottom;
            adjustAboutContentPosition(titleBottom + window.pageYOffset);
        }
    }

    // Event listeners
    function initializeEventListeners() {
        window.addEventListener('resize', handleResize);
    }

    // Initialize
    initializeEventListeners();
}
