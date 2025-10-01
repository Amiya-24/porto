// Navbar Active Link & Smooth Scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section');
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

// Toggle Hamburger Menu (Mobile)
navToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
});

// Close menu on link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
  });
});

// Active link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbar.offsetHeight - 10;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Fade-in Animation on Scroll
function revealSections() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Contact Form Validation (Basic)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const email = contactForm.querySelector('input[name="email"]');
    const nama = contactForm.querySelector('input[name="nama"]');
    const subjek = contactForm.querySelector('input[name="subjek"]');
    const pesan = contactForm.querySelector('textarea[name="pesan"]');
    let valid = true;
    if (!nama.value.trim()) valid = false;
    if (!email.value.match(/^\S+@\S+\.\S+$/)) valid = false;
    if (!subjek.value.trim()) valid = false;
    if (!pesan.value.trim()) valid = false;
    if (!valid) {
      e.preventDefault();
      alert('Mohon isi semua field dengan benar!');
    }
  });
}

// Progress Bar Animation
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar span').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 400);
  });
});
