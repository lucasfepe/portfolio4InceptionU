// In your heroEffects.js or a new file

export function initSideScroll() {
    // Create and add the arrow button
    const arrowButtonAbout = document.createElement('button');
    arrowButtonAbout.classList.add('side-scroll-arrow');
    arrowButtonAbout.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;
    const arrowButtonProjects = document.createElement('button');
    arrowButtonProjects.classList.add('side-scroll-arrow');
    arrowButtonProjects.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

    // Add to about section
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.appendChild(arrowButtonAbout);

        arrowButtonAbout.addEventListener('click', () => {
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'  // This makes it scroll horizontally
                });
            }

        });
    }
    // Add to my projects section
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
        projectsSection.appendChild(arrowButtonProjects);

        arrowButtonProjects.addEventListener('click', () => {
            const projectsSection = document.querySelector('#contact');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'  // This makes it scroll horizontally
                });
            }

        });
    }
}
