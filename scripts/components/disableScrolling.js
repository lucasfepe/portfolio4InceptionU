// // Disable scrolling
// export function initDisableScrolling() {


//     function preventDefault(e) {
//         e.preventDefault();
//     }

//     // Modern browsers
//     document.addEventListener('wheel', preventDefault, { passive: false });
//     // Older browsers
//     document.addEventListener('mousewheel', preventDefault, { passive: false });
//     document.addEventListener('DOMMouseScroll', preventDefault, { passive: false });

//     // Disable keyboard scrolling
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'ArrowDown' || e.key === 'ArrowUp' ||
//             e.key === 'PageDown' || e.key === 'PageUp' ||
//             e.key === 'Space' || e.key === 'Home' || e.key === 'End') {
//             e.preventDefault();
//         }
//     });
// }


