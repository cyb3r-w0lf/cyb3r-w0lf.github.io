// menu toggle for mobile Response
let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function() {
    headerLinks.classList.add('active');
});

cancelIcon.addEventListener('click', function() {
    headerLinks.classList.remove('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.header-links a').forEach(link => {
    link.addEventListener('click', function() {
        headerLinks.classList.remove('active');
    });
});

// theme color change script
let themeInput = document.getElementById('theme');
const root = document.documentElement; // Get the root element (<html>)
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function() {
    // Get the value of the input element when it changes
    const color = themeInput.value;
    document.documentElement.style.setProperty('--primary-theme-color', color);
    
    // Update image glow effect when theme changes
    const mainImg = document.querySelector('.main-img img');
    if (mainImg) {
        mainImg.style.filter = `drop-shadow(0 0 30px ${color})`;
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// First section should be visible immediately
document.querySelector('.main-section').style.opacity = '1';
document.querySelector('.main-section').style.transform = 'translateY(0)';

// Hide/show header on scroll
// let lastScrollTop = 0;
// const header = document.querySelector('header');
// const scrollThreshold = 100; // Start hiding after 100px scroll

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
//     if (scrollTop > scrollThreshold) {
//         if (scrollTop > lastScrollTop) {
//             // Scrolling down - hide header
//             header.classList.add('hide');
//             header.classList.remove('show');
//         } else {
//             // Scrolling up - show header
//             header.classList.remove('hide');
//             header.classList.add('show');
//         }
//     } else {
//         // At top of page - always show header
//         header.classList.remove('hide');
//         header.classList.add('show');
//     }
    
//     lastScrollTop = scrollTop;
// });