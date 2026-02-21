/* ===============================
   Scroll Reveal
================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));


/* ===============================
   Smooth Scroll
================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});


/* ===============================
   Hero load animation
================================ */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


/* ===============================
   Parallax leve no Hero
================================ */
const heroTitle = document.querySelector('.hero-title');
const heroSub = document.querySelector('.hero-subtitle');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroTitle) heroTitle.style.transform = `translateY(${scrollY * 0.2}px)`;
  if (heroSub) heroSub.style.transform = `translateY(${scrollY * 0.3}px)`;
});


/* ===============================
   Glow animado 3D (mouse)
================================ 
document.addEventListener('mousemove', e => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  if (heroTitle) {
    heroTitle.style.transform += ` rotateY(${x}deg) rotateX(${y}deg)`;
  }
});
*/

/* ===============================
   Navbar ativa por seção
================================ */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});