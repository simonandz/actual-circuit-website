let lastScrollTop = 0;
const header = document.getElementById('header');
const hero = document.getElementById('hero');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('scrolled');
    } else {
        // Scroll up
        header.classList.remove('scrolled');
        header.classList.add('show');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    
    // Check if the header is over the hero section
    const heroHeight = hero.offsetHeight;
    if (scrollTop > heroHeight) {
        header.classList.add('background');
    } else {
        header.classList.remove('background');
    }
});
