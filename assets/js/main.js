/* ── MAIN.JS ── cyb3r-w0lf portfolio ── */

// ── MOBILE MENU ──────────────────────────────────────────────────
const menuBtn    = document.getElementById('menu-btn');
const cancelBtn  = document.getElementById('cancel-btn');
const navLinks   = document.getElementById('nav-links');
const overlay    = document.createElement('div');

overlay.style.cssText = `
    position:fixed; inset:0; background:rgba(0,0,0,0.55);
    z-index:940; display:none; backdrop-filter:blur(2px);
`;
document.body.appendChild(overlay);

function openMenu() {
    navLinks.classList.add('active');
    overlay.style.display = 'block';
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    navLinks.classList.remove('active');
    overlay.style.display = 'none';
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
cancelBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// close on nav link click
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// close on Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
});


// ── THEME COLOUR PICKER ──────────────────────────────────────────
const themeInput = document.getElementById('theme');
const root = document.documentElement;

// Sync picker with current CSS var
const currentTheme = getComputedStyle(root).getPropertyValue('--primary-theme-color').trim();
if (currentTheme && currentTheme.startsWith('#')) {
    themeInput.value = currentTheme;
}

themeInput.addEventListener('input', function () {
    const color = this.value;
    root.style.setProperty('--primary-theme-color', color);

    // derive dimmed / glow variants
    root.style.setProperty('--accent-dim',  hexToRgba(color, 0.15));
    root.style.setProperty('--accent-glow', hexToRgba(color, 0.35));
    root.style.setProperty('--border',       hexToRgba(color, 0.12));
    root.style.setProperty('--border-hover', hexToRgba(color, 0.30));
});

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}


// ── SMOOTH SCROLL (works alongside CSS scroll-behavior) ──────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ── SCROLL REVEAL ────────────────────────────────────────────────
// Uses .reveal class (sections already have it in HTML)
// First hero section should be visible immediately
const heroSection = document.querySelector('#home');
if (heroSection) {
    heroSection.classList.remove('reveal'); // hero is always visible
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target); // fire once
        }
    });
}, {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ── CARD STAGGER ANIMATIONS ──────────────────────────────────────
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(
                '.service-card, .experience-card, .achievement-card, .skill-category'
            );
            cards.forEach((card, i) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(24px)';
                card.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
                // trigger
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    });
                });
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.05 });

document.querySelectorAll(
    '.service-cards-container, .experience-grid, .achievements-grid, .skills-container'
).forEach(container => staggerObserver.observe(container));


// ── ACTIVE NAV HIGHLIGHT on scroll ──────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('#nav-links ul li a[href^="#"]');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.style.color = 'var(--primary-theme-color)';
                }
            });
        }
    });
}, { threshold: 0.35 });

sections.forEach(s => navObserver.observe(s));


// ── TERMINAL TYPEWRITER on hero label ────────────────────────────
const typeEl = document.querySelector('.typewriter');
if (typeEl) {
    const text = typeEl.dataset.text || typeEl.textContent;
    typeEl.textContent = '';
    let i = 0;
    const type = () => {
        if (i < text.length) {
            typeEl.textContent += text[i++];
            setTimeout(type, 60 + Math.random() * 40);
        }
    };
    // Small delay so page is painted first
    setTimeout(type, 400);
}
