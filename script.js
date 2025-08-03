document.addEventListener("DOMContentLoaded", () => {
    // Simple animation on scroll
    const elements = document.querySelectorAll('.card, .hero-content, .hero-image');
    
    function fadeIn() {
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add('fade-in');
            }
        });
    }
    window.addEventListener('scroll', fadeIn);
    fadeIn();
});
