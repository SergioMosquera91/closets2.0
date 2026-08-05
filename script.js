// ============================================
//   CLOSETS 2.0 — script.js
//   1. FAQ accordion
//   2. Navbar scroll shadow
//   3. Menú hamburguesa móvil
//   4. Cerrar menú al hacer clic en enlace
// ============================================

// ── 1. FAQ ACCORDION ──
document.querySelectorAll('.faq-pregunta').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen    = btn.getAttribute('aria-expanded') === 'true';
    const respuesta = btn.nextElementSibling;

    // Cerrar todos
    document.querySelectorAll('.faq-pregunta').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    // Abrir el actual si estaba cerrado
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      respuesta.classList.add('open');
    }
  });
});

// ── 2. NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 40
    ? '0 4px 20px rgba(61,43,26,0.08)'
    : 'none';
});

// ── 3. MENÚ HAMBURGUESA ──
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ── 4. CERRAR MENÚ AL HACER CLIC EN ENLACE ──
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});
